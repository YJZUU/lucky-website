document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        "가장 행복한 순간은 언제인가요?",
        "어떤 환경에서 더 집중할 수 있나요?",
        "이상적인 휴식 방법은 무엇인가요?",
        "새로운 도전을 직면했을 때 어떻게 반응하나요?",
        "주변 사람들은 당신을 어떻게 묘사하나요?",
        "가장 좋아하는 계절은 무엇인가요?",
        "어려운 상황에 처했을 때 어떤 전략을 사용하나요?",
        "다른 사람들과 함께 있을 때, 당신은 어떤 역할을 하나요?"
    ];

    const options = [
        [
            { text: "사람들과 함께 활기차게 놀 때", score: { dolphin: 3 } },
            { text: "혼자서 조용히 시간을 보낼 때", score: { owl: 3 } },
            { text: "목표를 달성하며 성취감을 느낄 때", score: { lion: 3 } },
            { text: "팀워크를 통해 협력할 때", score: { wolf: 3 } }
        ],
        [
            { text: "조용한 자연 속에서", score: { owl: 3 } },
            { text: "도시의 활기찬 환경에서", score: { tiger: 3 } },
            { text: "함께하는 공간에서", score: { rabbit: 3 } },
            { text: "계획된 업무 환경에서", score: { fox: 3 } }
        ],
        [
            { text: "혼자서 독서를 하며 힐링할 때", score: { owl: 3 } },
            { text: "자연 속에서 산책하며 생각할 때", score: { wolf: 3 } },
            { text: "친구들과 즐겁게 대화할 때", score: { rabbit: 3 } },
            { text: "액티비티 활동을 하며 에너지를 얻을 때", score: { tiger: 3 } }
        ],
        [
            { text: "열정적으로 도전을 받아들인다", score: { lion: 3 } },
            { text: "위험을 분석하고 차분히 접근한다", score: { fox: 3 } },
            { text: "조직을 이끌며 협력한다", score: { wolf: 3 } },
            { text: "즉흥적으로 상황에 적응한다", score: { dolphin: 3 } }
        ],
        [
            { text: "신중하고 분석적이다", score: { owl: 3 } },
            { text: "활발하고 에너지가 넘친다", score: { tiger: 3 } },
            { text: "믿음직스럽고 협력적이다", score: { wolf: 3 } },
            { text: "재미있고 사교적이다", score: { rabbit: 3 } }
        ],
        [
            { text: "봄: 새로운 시작이 설레는 계절", score: { rabbit: 3 } },
            { text: "여름: 뜨거운 에너지가 넘치는 계절", score: { tiger: 3 } },
            { text: "가을: 차분하고 사색하기 좋은 계절", score: { owl: 3 } },
            { text: "겨울: 안정감이 느껴지는 계절", score: { wolf: 3 } }
        ],
        [
            { text: "상황을 냉정하게 분석한다", score: { fox: 3 } },
            { text: "빠르게 행동하며 해결한다", score: { tiger: 3 } },
            { text: "팀과 협력하여 해결책을 찾는다", score: { wolf: 3 } },
            { text: "자연스럽게 문제를 받아들인다", score: { dolphin: 3 } }
        ],
        [
            { text: "리더십을 발휘하며 이끈다", score: { lion: 3 } },
            { text: "다른 사람들을 연결하며 돕는다", score: { rabbit: 3 } },
            { text: "조용히 상황을 관찰하며 서포트한다", score: { owl: 3 } },
            { text: "자유롭게 분위기를 조성한다", score: { dolphin: 3 } }
        ]
    ];

    const animalResults = {
        lion: { 
            emoji: "🦁", 
            description: "자신감 넘치고 리더적인 성격을 가진 당신!<br>도전적이고 열정적으로 새로운 모험을 즐깁니다.", 
            condition: "당신에게 어울리는 동물은: 사자" 
        },
        owl: { 
            emoji: "🦉", 
            description: "차분하고 신중한 성격을 가진 당신!<br>어려운 상황에서도 침착하게 해결책을 찾아냅니다.", 
            condition: "당신에게 어울리는 동물은: 올빼미" 
        },
        dolphin: { 
            emoji: "🐬", 
            description: "자유롭고 활기찬 성격을 가진 당신!<br>사람들과의 교류에서 큰 에너지를 얻습니다.", 
            condition: "당신에게 어울리는 동물은: 돌고래" 
        },
        wolf: { 
            emoji: "🐺", 
            description: "충성스럽고 협력적인 성격을 가진 당신!<br>그룹 내에서 중요한 역할을 하며 문제를 해결하려 합니다.", 
            condition: "당신에게 어울리는 동물은: 늑대" 
        },
        rabbit: { 
            emoji: "🐇", 
            description: "친근하고 사회적인 성격을 가진 당신!<br>사람들과의 소통을 통해 활기를 얻습니다.", 
            condition: "당신에게 어울리는 동물은: 토끼" 
        },
        tiger: { 
            emoji: "🐯", 
            description: "강하고 용감한 성격을 가진 당신!<br>도전과 모험을 즐기며 목표를 향해 나아갑니다.", 
            condition: "당신에게 어울리는 동물은: 호랑이" 
        },
        fox: { 
            emoji: "🦊", 
            description: "영리하고 기민한 성격을 가진 당신!<br>문제를 분석하고 해결하는 능력이 뛰어납니다.", 
            condition: "당신에게 어울리는 동물은: 여우" 
        }
    };

    let currentQuestion = 0;
    let scores = { lion: 0, owl: 0, dolphin: 0, fox: 0, wolf: 0, rabbit: 0, tiger: 0 };

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
        const result = animalResults[maxScoreColor];

        progress.style.display = "none";
        question.style.display = "none";

        optionsContainer.innerHTML = "";

        // 결과 화면 요소들 생성
        const completeMessage = document.createElement("div");
        completeMessage.textContent = "완료!";
        completeMessage.style.fontSize = "35px";
        completeMessage.style.fontWeight = "bold";
        completeMessage.style.color = "rgb(39, 108, 63)";
        completeMessage.style.marginBottom = "15px";
        completeMessage.style.marginTop = "-55px";

        const endMessage = document.createElement("div");
        endMessage.textContent = "테스트가 끝났습니다. 당신에게 어울리는 동물은?";
        endMessage.style.fontSize = "18px";
        endMessage.style.color = "rgb(39, 108, 63)";
        endMessage.style.marginBottom = "20px";

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
