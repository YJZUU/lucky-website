document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        "아침에 일어나 가장 먼저 하는 일은?",
        "하루 중 가장 활력이 넘치는 시간은 언제인가요?",
        "일주일에 몇 번 운동을 하나요?",
        "하루 중 얼마나 물을 마시나요?",
        "어떤 종류의 음식을 가장 자주 먹나요?",
        "잠들기 전 가장 많이 하는 일은?",
        "주말에는 주로 어떤 활동을 하나요?",
        "스트레스를 받을 때 어떻게 대처하나요?"
    ];

    const options = [
        [
            { text: "스트레칭", score: { exercise: 2, betterSleep: 1 } },
            { text: "핸드폰 확인", score: { leisure: 2, betterSleep: 1 } },
            { text: "커피 마시기", score: { planning: 2, hydration: 1 } },
            { text: "창밖 보기", score: { meditation: 2, leisure: 1 } }
        ],
        [
            { text: "아침", score: { exercise: 2, healthyEating: 1 } },
            { text: "점심", score: { hydration: 2, planning: 1 } },
            { text: "저녁", score: { meditation: 2, leisure: 1 } },
            { text: "밤", score: { betterSleep: 3 } }
        ],
        [
            { text: "0~1회", score: { betterSleep: 2, leisure: 1 } },
            { text: "2~3회", score: { planning: 2, exercise: 1 } },
            { text: "4~5회", score: { exercise: 2, healthyEating: 1 } },
            { text: "매일", score: { healthyEating: 2, meditation: 1 } }
        ],
        [
            { text: "거의 안 마심", score: { betterSleep: 2, leisure: 1 } },
            { text: "2컵 이하", score: { planning: 2, hydration: 1 } },
            { text: "3~5컵", score: { hydration: 2, exercise: 1 } },
            { text: "6컵 이상", score: { hydration: 3 } }
        ],
        [
            { text: "신선한 과일과 채소", score: { healthyEating: 3 } },
            { text: "패스트푸드", score: { leisure: 2, betterSleep: 1 } },
            { text: "밥과 반찬", score: { planning: 2, healthyEating: 1 } },
            { text: "달콤한 간식", score: { betterSleep: 2, leisure: 1 } }
        ],
        [
            { text: "핸드폰 보기", score: { leisure: 2, betterSleep: 1 } },
            { text: "책 읽기", score: { planning: 2, meditation: 1 } },
            { text: "스트레칭", score: { exercise: 2, betterSleep: 1, healthyEating: 2 } },
            { text: "그냥 누워있기", score: { meditation: 2, betterSleep: 1 } }
        ],
        [
            { text: "산책이나 자연 속에서 보내기", score: { exercise: 2, meditation: 1 } },
            { text: "조용히 명상하며 시간 보내기", score: { meditation: 2, betterSleep: 1 } },
            { text: "계획 세우기 또는 새로운 기술 배우기", score: { planning: 3} },
            { text: "가벼운 취미 활동 즐기기", score: { leisure: 3, hydration: 2, healthyEating: 1 } }
        ],
        [
            { text: "운동으로 에너지를 풀어낸다", score: { exercise: 3, hydration: 2, healthyEating: 1 } },
            { text: "조용히 숨을 고른다", score: { meditation: 3 } },
            { text: "문제를 분석하고 해결책을 찾는다", score: { planning: 3 } },
            { text: "쉬면서 기분 전환한다", score: { leisure: 2, betterSleep: 1 } }
        ]
    ];
    
    
    const routineResults = {
        exercise: { 
            emoji: "💪", 
            description: "활력을 되찾고 싶은 당신에게 운동 루틴을 추천합니다.<br>매일 꾸준히 실천하면 행운이 따라올 거예요!", 
            condition: "운동 루틴" 
        },
        meditation: { 
            emoji: "🧘", 
            description: "내면의 평화를 찾고 싶다면 명상 루틴이 적합합니다.<br>하루 10분 명상으로 마음을 다잡아보세요.", 
            condition: "명상 루틴" 
        },
        planning: { 
            emoji: "📅", 
            description: "체계적인 삶을 원하는 당신에게 계획 루틴이 어울립니다.<br>목표를 세우고 실천하세요!", 
            condition: "계획 루틴" 
        },
        leisure: { 
            emoji: "🎨", 
            description: "여유롭고 즐거운 하루를 위해 가벼운 취미 활동을 추천합니다.<br>소소한 행복이 행운을 가져다줄 거예요.", 
            condition: "여유 루틴" 
        },
        hydration: { 
            emoji: "💧", 
            description: "물을 더 많이 마시는 루틴을 추천합니다.<br>건강과 행운이 함께할 거예요!", 
            condition: "수분 섭취 루틴" 
        },
        healthyEating: { 
            emoji: "🍎", 
            description: "신선한 과일과 채소를 섭취하는 루틴이 당신에게 맞습니다.<br>건강한 식습관이 행운을 가져다줄 겁니다.", 
            condition: "건강한 식사 루틴" 
        },
        betterSleep: { 
            emoji: "😴", 
            description: "더 나은 수면 습관을 가져보세요.<br>잠이야말로 최고의 에너지원입니다!", 
            condition: "수면 루틴" 
        }
    };

    let currentQuestion = 0;
    let scores = { exercise: 0, meditation: 0, planning: 0, leisure: 0, hydration:0, healthyEating: 0, betterSleep: 0 };

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
        const maxScoreRoutine = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const result = routineResults[maxScoreRoutine];
    
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
