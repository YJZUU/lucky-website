// 운세 결과를 출력하는 함수
function showMoneyResult() {
    // 랜덤 숫자 생성 (1 ~ 100)
    const randomNum = Math.floor(Math.random() * 100) + 1;

    // 운세 데이터
    const money = {
        veryGood: [
            "황금빛 행운이 당신을 감싸고 있습니다. 재물의 문이 활짝 열려 풍요로운 시기를 맞이할 것입니다.",
            "당신의 노력이 결실을 맺을 때입니다. 큰 재물이 들어올 징조가 보이니 기회를 놓치지 마세요.",
            "재물운이 절정에 달했습니다. 투자나 사업 확장을 고려해보는 것도 좋겠습니다.",
            "금전적 행운이 당신을 따라다닙니다. 평소 꿈꾸던 큰 목표를 향해 과감히 도전해보세요."
        ],
        good: [
            "재물운이 상승세입니다. 꾸준한 노력으로 안정적인 수입 증가가 예상됩니다.",
            "재정적으로 여유로운 시기가 찾아올 것입니다. 현명한 투자로 더 큰 이익을 얻을 수 있겠습니다.",
            "당신의 재능이 빛을 발하여 금전적 보상으로 이어질 것입니다. 자신감을 가지고 앞으로 나아가세요.",
            "재물운이 좋아 예기치 않은 수입이 생길 수 있습니다. 주변을 잘 살펴보세요."
        ],
        average: [
            "재물운이 평이한 상태입니다. 무리한 지출을 자제하고 안정적인 재정 관리에 집중하세요.",
            "큰 변화 없이 현상유지가 될 것입니다. 꾸준한 저축과 절약으로 미래를 준비하세요.",
            "재물운이 잠시 주춤한 시기입니다. 불필요한 지출을 줄이고 재테크에 관심을 가져보는 것은 어떨까요?",
            "금전적으로 특별한 이벤트는 없지만, 안정적인 흐름을 유지할 수 있습니다. 장기적인 재무 계획을 세워보세요."
        ],
        bad: [
            "재물운이 다소 침체기에 접어들었습니다. 불필요한 지출을 줄이고 긴축 재정을 펼치는 것이 좋겠습니다.",
            "예상치 못한 지출이 발생할 수 있으니 비상금을 준비해두세요. 신중한 금전 관리가 필요한 시기입니다.",
            "재물운이 좋지 않아 금전적 손실의 위험이 있습니다. 투자나 큰 결정은 신중히 고려하세요.",
            "일시적인 재정 압박이 있을 수 있습니다. 긍정적인 마인드로 이 시기를 슬기롭게 극복하세요."
        ]
    };

    // 운세 문장 및 추천 문구
    let moneyPercentage = 0;
    let moneyText = '';
    let moneyAdvice = '';

    if (randomNum >= 91) {
        // 매우 좋음
        moneyPercentage = Math.floor(Math.random() * 10) + 91; // 91~100%
        moneyText = '재물운 매우 좋음';
        moneyAdvice = money.veryGood[Math.floor(Math.random() * money.veryGood.length)];
    } else if (randomNum >= 71) {
        // 좋음
        moneyPercentage = Math.floor(Math.random() * 20) + 71; // 71~90%
        moneyText = '재물운 좋음';
        moneyAdvice = money.good[Math.floor(Math.random() * money.good.length)];
    } else if (randomNum >= 41) {
        // 보통
        moneyPercentage = Math.floor(Math.random() * 30) + 41; // 41~70%
        moneyText = '재물운 보통';
        moneyAdvice = money.average[Math.floor(Math.random() * money.average.length)];
    } else {
        // 나쁨
        moneyPercentage = Math.floor(Math.random() * 40) + 1; // 1~40%
        moneyText = '재물운 나쁨';
        moneyAdvice = money.bad[Math.floor(Math.random() * money.bad.length)];
    }

    // 운세 결과 출력
    const resultDiv = document.getElementById('money-result');
    resultDiv.innerHTML = `
        오늘의 재물 운세: ${moneyPercentage}%<br>
        ${moneyText}<br>
        <p style="margin-top: 20px; font-size: 18px; color: gray; white-space: pre-line;">${moneyAdvice}</p>
    `;
    
    resultDiv.style.opacity = 1; // 결과를 보이게 설정
    resultDiv.style.position = 'absolute';
    resultDiv.style.top = '50%'; // 이미지와 동일한 위치
    resultDiv.style.left = '50%';
    resultDiv.style.transform = 'translate(-50%, -50%)'; // 가운데 정렬
}

// 애니메이션 종료 후 운세 결과를 표시// 애니메이션 종료 후 운세 결과를 표시
setTimeout(showMoneyResult, 1500);  // 2.5초 후에 `showMoneyResult` 함수 호출

