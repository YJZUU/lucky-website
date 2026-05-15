// 운세 결과를 출력하는 함수
function showFortuneResult() {
    // 랜덤 숫자 생성 (1 ~ 100)
    const randomNum = Math.floor(Math.random() * 100) + 1;

    // 운세 데이터
    const fortunes = {
        veryGood: [
            "당신의 모든 노력이 빛을 발할 시기입니다. 큰 성과와 인정이 기다리고 있으니 자신감을 가지세요.",
            "황금기를 맞이했습니다. 도전적인 목표를 세우고 과감히 추진하세요. 성공이 눈앞에 있습니다.",
            "당신의 재능과 능력이 최고조에 달했습니다. 중요한 프로젝트나 결정을 내리기에 최적의 시기입니다.",
            "행운의 여신이 당신과 함께합니다. 평소 꿈꾸던 일을 시작하기에 더없이 좋은 때입니다."
        ],
        good: [
            "성공의 기회가 당신을 향해 다가오고 있습니다. 준비된 자세로 기회를 잡으세요.",
            "꾸준한 노력이 결실을 맺을 때입니다. 긍정적인 마인드로 목표를 향해 나아가세요.",
            "당신의 능력을 인정받을 좋은 기회가 올 것입니다. 자신감을 가지고 실력을 발휘하세요.",
            "성공으로 가는 길이 열리고 있습니다. 주변의 조언을 귀담아 들으며 전진하세요."
        ],
        average: [
            "현재는 안정적인 시기입니다. 꾸준히 노력하며 더 큰 성공을 위한 기반을 다지세요.",
            "성공으로 가는 길에 작은 장애물이 있을 수 있습니다. 인내심을 가지고 극복해 나가세요.",
            "지금은 큰 변화보다는 현재의 위치를 공고히 하는 데 집중하세요. 차근차근 앞으로 나아갈 때입니다.",
            "평범해 보이는 일상 속에서도 기회는 있습니다. 작은 성공들을 모아 큰 성취로 만들어가세요."
        ],
        bad: [
            "일시적인 어려움이 있을 수 있습니다. 이를 극복할 수 있는 내적 힘을 키우는 데 집중하세요.",
            "지금은 성급한 판단을 피하고 신중하게 행동해야 할 때입니다. 차분히 상황을 분석하세요.",
            "예상치 못한 장애물로 좌절할 수 있습니다. 하지만 이는 더 큰 성공을 위한 배움의 기회입니다.",
            "현재의 어려움은 일시적입니다. 긍정적인 마인드로 이 시기를 슬기롭게 극복하세요."
        ]
    };


    // 운세 문장 및 추천 문구
    let fortunePercentage = 0;
    let fortuneText = '';
    let fortuneAdvice = '';

    if (randomNum >= 91) {
        // 매우 좋음
        fortunePercentage = Math.floor(Math.random() * 10) + 91; // 91~100%
        fortuneText = '성공운 매우 좋음';
        fortuneAdvice = fortunes.veryGood[Math.floor(Math.random() * fortunes.veryGood.length)];
    } else if (randomNum >= 71) {
        // 좋음
        fortunePercentage = Math.floor(Math.random() * 20) + 71; // 71~90%
        fortuneText = '성공운 좋음';
        fortuneAdvice = fortunes.good[Math.floor(Math.random() * fortunes.good.length)];
    } else if (randomNum >= 41) {
        // 보통
        fortunePercentage = Math.floor(Math.random() * 30) + 41; // 41~70%
        fortuneText = '성공운 보통';
        fortuneAdvice = fortunes.average[Math.floor(Math.random() * fortunes.average.length)];
    } else {
        // 나쁨
        fortunePercentage = Math.floor(Math.random() * 40) + 1; // 1~40%
        fortuneText = '성공운 나쁨';
        fortuneAdvice = fortunes.bad[Math.floor(Math.random() * fortunes.bad.length)];
    }

    // 운세 결과 출력
    const resultDiv = document.getElementById('fortune-result');
    resultDiv.innerHTML = `
        오늘의 성공 운세: ${fortunePercentage}%<br>
        ${fortuneText}<br>
        <p style="margin-top: 20px; font-size: 18px; color: gray; white-space: pre-line;">${fortuneAdvice}</p>
    `;
    
    resultDiv.style.opacity = 1; // 결과를 보이게 설정
    resultDiv.style.position = 'absolute';
    resultDiv.style.top = '50%'; // 클로버와 동일한 위치
    resultDiv.style.left = '50%';
    resultDiv.style.transform = 'translate(-50%, -50%)'; // 가운데 정렬
}

// 클로버 애니메이션 종료 후 운세 결과를 표시
setTimeout(showFortuneResult, 1500);
