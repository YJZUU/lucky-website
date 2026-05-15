const words = [
    "일취월장", "희희낙락", "소원성취", "안분지족", "고진감래",
    "행운유수", "일편단심", "금상첨화", "순풍만범", "자강불식",
    "득의만면", "형설지공", "유비무환", "명실상부", "마부작침",
    "진인사대천명", "천고마비", "동고동락", "화룡점정", "시종일관",
    "일희일비", "적토성산", "만사형통", "권토중래", "심기일전",
    "자중지란", "정정당당", "부귀영화", "수구초심", "각고면려",
    "일석이조", "좌정관천", "백년해로", "백전백승", "명경지수",
    "인내천명", "심사숙고", "행복만발", "희로애락", "화합무애",
    "도전", "열정", "희망", "성공", "꿈", "용기", "배움", "행복", "성장", "인내",
    "노력", "긍정", "기회", "믿음", "목표", "사랑", "자신감", "즐거움", "소통", "자유",
    "열심", "변화", "행운", "빛", "열망", "미래", "지혜", "성취", "보람", "환희",
    "용서", "평화", "도약", "의지", "동기", "희열", "도움", "성공적", "긍지", "창의",
    "신뢰", "자립", "노력가", "인정", "탐구", "존경", "성실", "확신", "조화", "책임",
    "용의", "결단", "발전", "즐김", "여유", "환영", "훈훈", "포근", "효율", "경험",
    "지식", "호기", "활력", "비전", "전진", "감사", "응원", "공감", "집중", "결실",
    "여행", "풍요", "부유", "번영", "희망찬", "활기", "빛남", "칭찬", "성숙", "배려",
    "단결", "결의", "긍정적", "존재", "친절", "이해", "정직", "도전적", "창의적", "자기",
    "설렘", "활발", "자기계발", "승리", "화합", "목적", "평정", "강인", "쾌활", "행운의",
    "기대", "감동", "빛나는", "행복한", "완성", "희망적", "격려", "다정", "설명", "응원가",
    "감명", "따스", "찬란", "자부심", "추진", "결심", "기운", "위로",
    "기쁨", "미소", "온기", "치유", "소망", "극복", "선물", "향상", "안정", "영감",
    "충만", "영광", "순수", "의미", "진심", "따뜻", "선의", "기적",

    // hard words
    "긍정에너지", "마음돌봄", "노블리스오블리주", "아이덴티티", "퍼포먼스", "감정쉼표",
    "온기회복", "프로페셔널", "성장중", "감사일기", "위로한줌", "희망저장", "시너지", 
    "꿈저금통", "행복충전", "기쁨채우기", "내면평화", "성공회로", "빛나는나", "행복회로",
    "취향저격", "자존감", "소확행", "힐링템", "카르페 디엠", "하모니", "오너십",
    "모멘텀", "비전", "프라이드", "리더십", "커리어", "임팩트", "패션", 
    "시그니처", "유니크", "정체성", "스피릿", "컬처",  "시너지"

];

let time = 30;
let score = 0;
let isPlaying = false;
let fallingWords = [];
let gameLoop, wordGenerator, timer;
let difficulty = 'easy';
let wordSpeed = 1;
let wordInterval = 2000;

const gameArea = document.getElementById("game-area");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const input = document.getElementById("input");
const startButton = document.getElementById("start-button");
const difficultySelect = document.getElementById("difficulty-select");

function updateScore() {
    scoreDisplay.textContent = score;
    console.log("Score updated to:", score);
}

function startGame() {
    if (isPlaying) return;
    isPlaying = true;
    time = 30;
    score = 0;
    input.value = "";
    input.focus();
    updateScore(0);
    updateTime();
    difficulty = difficultySelect.value;
    setDifficultyParams();
    gameLoop = setInterval(gameUpdate, 20);
    wordGenerator = setInterval(addWord, wordInterval);
    timer = setInterval(() => {
        time--;
        updateTime();
        if (time === 0) {
            endGame();
        }
    }, 1000);
}

function setDifficultyParams() {
    if (difficulty === 'easy') {
        wordSpeed = 1.3;
        wordInterval = 2000;
    } else {
        wordSpeed = 1.5;
        wordInterval = 1000;
    }
}

function calculateScore(word) {
    const length = word.length;
    if (length === 2) return 1;
    if (length === 3) return 2;
    if (length === 4) return 3;
    return 4; // 5글자 이상
}

function addWord() {
    let word;
    if (difficulty === 'easy') {
        word = words.filter(w => w.length <= 3)[Math.floor(Math.random() * words.filter(w => w.length <= 3).length)];
    } else {
        word = words[Math.floor(Math.random() * words.length)];
    }

    // Create word element
    const wordElement = document.createElement("div");
    wordElement.textContent = word;

    // Randomly assign a shape (heart or cloud)
    const shapeClass = Math.random() < 0.5 ? "heart" : "cloud";
    wordElement.classList.add("word", shapeClass);

    // Set position and rotation
    wordElement.style.left = `${Math.random() * (gameArea.offsetWidth - 100)}px`;
    wordElement.style.transform = difficulty === 'hard' ? `rotate(${Math.random() * 360}deg)` : 'none';

    gameArea.appendChild(wordElement);
    fallingWords.push({ element: wordElement, word: word, top: -30 });
}


function gameUpdate() {
    fallingWords.forEach((wordObj, index) => {
        wordObj.top += wordSpeed;
        wordObj.element.style.top = `${wordObj.top}px`;
        if (wordObj.top > gameArea.offsetHeight) {
            gameArea.removeChild(wordObj.element);
            fallingWords.splice(index, 1);
            if (difficulty === 'hard') {
                score = Math.max(0, score - 1);
                updateScore();
            }
        }
    });
    if (difficulty === 'hard') {
        gameArea.style.transform = `translateX(${Math.sin(Date.now() / 1000) * 5}px)`;
    }
}


function updateTime() {
    timeDisplay.textContent = time;
}

function endGame() {
    isPlaying = false;
    clearInterval(gameLoop);
    clearInterval(wordGenerator);
    clearInterval(timer);
    fallingWords.forEach(wordObj => gameArea.removeChild(wordObj.element));
    fallingWords = [];
    gameArea.style.transform = 'none';
    alert(`게임 끝! 당신의 점수는... ${score}🥳`);
}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const typedWord = input.value.toLowerCase().trim();
        let wordRemoved = false;

        fallingWords.forEach((wordObj, index) => {
            if (typedWord === wordObj.word.toLowerCase()) {
                gameArea.removeChild(wordObj.element);
                fallingWords.splice(index, 1);
                score += calculateScore(wordObj.word);
                updateScore();
                wordRemoved = true;
            }
        });

        if (wordRemoved) {
            input.value = "";
        }
        event.preventDefault();
    }
});



startButton.addEventListener("click", startGame);