document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        "아침에 눈을 떴을 때 가장 먼저 떠오르는 생각은?",
        "당신의 성격을 가장 잘 설명하는 단어는?",
        "가장 좋아하는 계절은?",
        "스트레스 받을 때 어떻게 해소하나요?",
        "사람들에게 어떤 이미지를 주고 싶나요?",
        "지금 가장 갖고 싶은 것은?"
    ];

    const options = [
        [
            { text: "오늘 해야 할 일", score: { red: 3 } },
            { text: "날씨", score: { blue: 3 } },
            { text: "사람들", score: { green: 3 } },
            { text: "내가 가장 좋아하는 것", score: { yellow: 3 } }
        ],
        [
            { text: "활발함", score: { orange: 3 } },
            { text: "차분함", score: { blue: 3 } },
            { text: "열정", score: { red: 3 } },
            { text: "상상력", score: { purple: 3 } }
        ],
        [
            { text: "봄", score: { green: 3 } },
            { text: "여름", score: { yellow: 3 } },
            { text: "가을", score: { orange: 3 } },
            { text: "겨울", score: { blue: 3 } }
        ],
        [
            { text: "친구와 대화", score: { red: 3 } },
            { text: "맛있는 음식", score: { yellow: 3 } },
            { text: "산책", score: { green: 3 } },
            { text: "혼자만의 시간", score: { purple: 3 } }
        ],
        [
            { text: "강렬함", score: { red: 3 } },
            { text: "신뢰감", score: { blue: 3 } },
            { text: "편안함", score: { green: 3 } },
            { text: "신비로움", score: { purple: 3 } }
        ],
        [
            { text: "에너지", score: { red: 3 } },
            { text: "안정감", score: { blue: 3 } },
            { text: "행복", score: { yellow: 3 } },
            { text: "새로움", score: { orange: 3 } }
        ]
    ];

    const colorResults = {
        red: { 
            emoji: "❤️", 
            description: "당신은 에너지와 열정이 넘칩니다.\n빨강은 당신에게 추진력을 더해줄 것입니다.",
            condition: "에너지를 많이 선택한 당신!" 
        },
        blue: { 
            emoji: "💙", 
            description: "차분하고 신뢰받는 당신에게 어울리는 색입니다.\n파랑은 안정과 성취를 가져다줄 거예요.",
            condition: "차분함을 많이 선택한 당신!" 
        },
        green: { 
            emoji: "💚", 
            description: "자연과 조화를 중요시하는 당신,\n초록은 당신의 내면을 더욱 풍요롭게 해 줍니다.",
            condition: "자연을 많이 선택한 당신!" 
        },
        yellow: { 
            emoji: "💛", 
            description: "유쾌하고 창의적인 당신!\n노랑은 더 많은 즐거움을 선사해 줄 거예요.",
            condition: "기쁨을 많이 선택한 당신!" 
        },
        orange: { 
            emoji: "🧡", 
            description: "따뜻하고 활기찬 당신에게 주황색이 잘 어울려요.\n주황색은 새로운 에너지를 가져다줄 거예요.",
            condition: "활력을 많이 선택한 당신!" 
        },
        purple: { 
            emoji: "💜", 
            description: "독창적이고 신비로운 당신,\n보라색은 특별함을 더해줄 것입니다.",
            condition: "상상력을 많이 선택한 당신!" 
        }
    };
    

    let currentQuestion = 0;
    let scores = { red: 0, blue: 0, green: 0, yellow: 0, orange: 0, purple: 0 };

    const progress = document.getElementById("progress");
    const question = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    function renderQuestion() {
        progress.textContent = `${currentQuestion + 1}/${questions.length}`;
        question.textContent = questions[currentQuestion];

        optionsContainer.innerHTML = "";
        options[currentQuestion].forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option.text;
            button.addEventListener("click", () => handleOptionClick(option.score));
            optionsContainer.appendChild(button);
        });
    }

    function handleOptionClick(selectedScore) {
        Object.keys(selectedScore).forEach((color) => {
            scores[color] += selectedScore[color];
        });

        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        const maxScoreColor = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const result = colorResults[maxScoreColor];
    
        progress.style.display = "none";
        question.style.display = "none";
    
        optionsContainer.innerHTML = "";
    
        // 완료 메시지
        const completeMessage = document.createElement("div");
        completeMessage.textContent = "완료!";
        completeMessage.style.fontSize = "35px";
        completeMessage.style.fontWeight = "bold";
        completeMessage.style.color = "rgb(39, 108, 63)";
        completeMessage.style.marginBottom = "15px";
        completeMessage.style.marginTop = "-55px";
    
        // 테스트 종료 메시지
        const endMessage = document.createElement("div");
        endMessage.textContent = "테스트가 끝났습니다. 당신에게 어울리는 색상은?";
        endMessage.style.fontSize = "20px";
        endMessage.style.marginBottom = "20px";
        completeMessage.style.marginTop = "-50px";
    
        // 결과 컨테이너 추가 (배경과 둥근 테두리 적용)
        const resultContainer = document.createElement("div");
        resultContainer.style.backgroundColor = "MintCream";
        resultContainer.style.borderRadius = "15px"; // 둥근 테두리
        resultContainer.style.padding = "20px"; // 내부 여백
        resultContainer.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"; // 부드러운 그림자
        resultContainer.style.textAlign = "center"; // 텍스트 가운데 정렬
        resultContainer.style.marginTop = "70px"; // 결과와 위쪽 요소 간 간격

        const conditionMessage = document.createElement("div");
        conditionMessage.textContent = result.condition;
        conditionMessage.style.fontSize = "24px";
        conditionMessage.style.fontWeight = "bold";
        conditionMessage.style.color = "#2d6a4f";
        conditionMessage.style.marginBottom = "15px";

        const emojiMessage = document.createElement("div");
        emojiMessage.textContent = result.emoji;
        emojiMessage.style.fontSize = "70px";
        emojiMessage.style.marginBottom = "20px";

        const descriptionMessage = document.createElement("div");
        descriptionMessage.innerHTML = result.description.replace(/\n/g, "<br>");
        descriptionMessage.style.fontSize = "20px";
        descriptionMessage.style.lineHeight = "1.5";

        // 기존 구조 유지: 옵션 컨테이너에 페이드인 효과 추가
        resultContainer.appendChild(conditionMessage);
        resultContainer.appendChild(emojiMessage);
        resultContainer.appendChild(descriptionMessage);

        optionsContainer.classList.add("fade-in"); // 페이드인 클래스 추가
        optionsContainer.appendChild(completeMessage);
        optionsContainer.appendChild(endMessage);
        optionsContainer.appendChild(resultContainer);
    }
    

    renderQuestion();
});
