document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        "당신이 가장 자주 느끼는 감정은?",
        "중요한 결정을 내릴 때 주로 무엇을 믿나요?",
        "평소 어떤 색을 선호하나요?",
        "힘들 때 당신을 가장 위로해 주는 것은?",
        "당신이 가고 싶은 여행지는?",
        "하루의 시작을 어떻게 보내는 것이 이상적이라고 생각하나요?",
        "당신에게 행운이란 어떤 의미인가요?"
    ];const options = [
        [
            { text: "기쁨", score: { joy: 3, water: 1 } },      // 기쁨 - joy: 3, 물병 - water: 1
            { text: "불안", score: { calm: 1, candles: 2 } },   // 불안 - calm: 1, 향초 - candles: 2
            { text: "열정", score: { passion: 3, plant: 1 } },  // 열정 - passion: 3, 식물 - plant: 1
            { text: "평온", score: { calm: 2, blanket: 2 } }     // 평온 - calm: 2, 담요 - blanket: 2
        ],
        [
            { text: "직감", score: { passion: 3, plant: 1 } },      // 직감 - passion: 3, 식물 - plant: 1
            { text: "논리", score: { logic: 3, candles: 1 } },      // 논리 - logic: 3, 향초 - candles: 1
            { text: "주변 사람의 조언", score: { joy: 2, water: 1 } }, // 주변 사람의 조언 - joy: 2, 물병 - water: 1
            { text: "운", score: { calm: 1, blanket: 1 } }          // 운 - calm: 1, 담요 - blanket: 1
        ],
        [
            { text: "빨강", score: { passion: 3, water: 1 } },    // 빨강 - passion: 3, 물병 - water: 1
            { text: "파랑", score: { calm: 3, blanket: 2 } },     // 파랑 - calm: 3, 담요 - blanket: 2
            { text: "초록", score: { joy: 2, plant: 3 } },        // 초록 - joy: 2, 식물 - plant: 3
            { text: "노랑", score: { joy: 3, candles: 1 } }       // 노랑 - joy: 3, 향초 - candles: 1
        ],
        [
            { text: "음악", score: { joy: 3, water: 1 } },         // 음악 - joy: 3, 물병 - water: 1
            { text: "자연", score: { calm: 3, plant: 3 } },        // 자연 - calm: 3, 식물 - plant: 3
            { text: "사람", score: { joy: 2, candles: 1 } },       // 사람 - joy: 2, 향초 - candles: 1
            { text: "휴식", score: { calm: 3, blanket: 2 } }        // 휴식 - calm: 3, 담요 - blanket: 2
        ],
        [
            { text: "조용한 산", score: { calm: 3, plant: 2 } },      // 조용한 산 - calm: 3, 식물 - plant: 2
            { text: "푸른 바다", score: { joy: 2, water: 3 } },      // 푸른 바다 - joy: 2, 물병 - water: 3
            { text: "화려한 도시", score: { passion: 3, candles: 1 } }, // 화려한 도시 - passion: 3, 향초 - candles: 1
            { text: "고풍스러운 마을", score: { logic: 2, blanket: 1 } }  // 고풍스러운 마을 - logic: 2, 담요 - blanket: 1
        ],
        [
            { text: "명상", score: { calm: 3, plant: 2 } },        // 명상 - calm: 3, 식물 - plant: 2
            { text: "커피 한 잔", score: { joy: 2, candles: 3 } }, // 커피 한 잔 - joy: 2, 향초 - candles: 3
            { text: "운동", score: { passion: 3, water: 2 } },     // 운동 - passion: 3, 물병 - water: 2
            { text: "아무 생각 없이 쉬기", score: { calm: 2, blanket: 3 } } // 아무 생각 없이 쉬기 - calm: 2, 담요 - blanket: 3
        ],
        [
            { text: "기회", score: { passion: 3, candles: 1 } },   // 기회 - passion: 3, 향초 - candles: 1
            { text: "안식", score: { calm: 3, blanket: 2 } },      // 안식 - calm: 3, 담요 - blanket: 2
            { text: "즐거움", score: { joy: 3, water: 1 } },       // 즐거움 - joy: 3, 물병 - water: 1
            { text: "성취", score: { logic: 3, plant: 1 } }        // 성취 - logic: 3, 식물 - plant: 1
        ],
        [
            { text: "모험", score: { passion: 3, water: 2 } },      // 모험 - passion: 3, 물병 - water: 2
            { text: "친구와의 시간", score: { joy: 3, candles: 2 } }, // 친구와의 시간 - joy: 3, 향초 - candles: 2
            { text: "독서", score: { logic: 3, plant: 1 } },         // 독서 - logic: 3, 식물 - plant: 1
            { text: "휴식", score: { calm: 2, blanket: 3 } }         // 휴식 - calm: 2, 담요 - blanket: 3
        ]
    ];
    
    const itemResults = {
        passion: { emoji: "🌟", item: "별 목걸이", description: "당신의 열정을 반짝이는 아이템으로 표현하세요.", condition: "열정을 많이 선택한 당신!" },
        logic: { emoji: "📘", item: "책", description: "책 속에서 새로운 영감을 얻을 수 있어요.", condition: "논리를 많이 선택한 당신!" },
        calm: { emoji: "🍃", item: "아로마 디퓨저", description: "마음의 평화를 위한 기분 좋은 향기로 기분을 전환하세요.", condition: "평온을 많이 선택한 당신!" },
        joy: { emoji: "🎵", item: "음악 플레이리스트", description: "좋아하는 음악으로 기쁨을 채워보세요.", condition: "기쁨을 많이 선택한 당신!" },
        water: { emoji: "🥤", item: "물병", description: "운동과 에너지를 채워주는 스포츠용 물병을 챙기세요.", condition: "활동적인 선택을 많이 한 당신!" },
        candles: { emoji: "🕯️", item: "향초 세트", description: "편안하고 독창적인 분위기를 위한 향초 세트로 휴식을 취하세요.", condition: "창의적인 선택을 많이 한 당신!" },
        plant: { emoji: "🌿", item: "식물", description: "자연과 함께하는 식물로 편안함을 더하세요.", condition: "자연을 많이 선택한 당신!" },
        blanket: { emoji: "🛋️", item: "따뜻한 담요", description: "편안함을 위한 따뜻한 담요로 휴식을 취하세요.", condition: "차분함을 많이 선택한 당신!" }
    };
    
    let currentQuestion = 0;
    let scores = { passion: 0, logic: 0, calm: 0, joy: 0, water: 0, candles: 0, plant: 0, blanket: 0 };
    
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
        Object.keys(selectedScore).forEach((key) => {
            scores[key] += selectedScore[key];
        });

        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        const maxScoreKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const result = itemResults[maxScoreKey];

        progress.style.display = "none";
        question.style.display = "none";

        optionsContainer.innerHTML = "";

        // 완료 메시지
        const completeMessage = document.createElement("div");
        completeMessage.textContent = "완료!!";
        completeMessage.style.fontSize = "25px";
        completeMessage.style.fontWeight = "bold";
        completeMessage.style.color = "rgb(39, 108, 63)";
        completeMessage.style.marginBottom = "15px";
        completeMessage.style.marginTop = "-55px";

        // 테스트 종료 메시지
        const endMessage = document.createElement("div");
        endMessage.textContent = "테스트가 끝났습니다. 당신에게 어울리는 행운의 아이템은?";
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
