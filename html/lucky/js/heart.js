function showHeartResult() {
    // 랜덤 숫자 생성 (1 ~ 100)
    const randomNum = Math.floor(Math.random() * 100) + 1;

    // 운세 데이터
    const love = {
        veryGood: [
            "당신의 매력이 최고조에 달하는 시기입니다. 새로운 로맨스의 문이 활짝 열릴 것입니다.",
            "현재 관계라면 더욱 깊은 애정과 이해로 발전할 것입니다. 서로에 대한 사랑이 더욱 깊어지기에 좋은 시기입니다.",
            "운명적인 만남이 기다리고 있습니다. 주변을 유심히 살펴보세요. 당신의 인생을 바꿀 사람이 나타날 수 있습니다.",
            "사랑의 기쁨과 행복이 넘치는 시기입니다. 마음을 열고 사랑의 에너지를 마음껏 누리세요.",
            "당신의 매력은 모든 사람의 시선을 끌 것입니다. 새로운 인연이 곧 다가옵니다."
        ],
        good: [
            "사랑의 기운이 당신을 감싸고 있습니다. 긍정적인 마음가짐으로 새로운 인연을 맞이할 준비를 하세요.",
            "현재 파트너와의 관계가 더욱 안정되고 성숙해질 것입니다. 서로에 대한 신뢰가 깊어지는 시기입니다.",
            "소소한 로맨스가 일상에 활력을 불어넣을 것입니다. 작은 행복을 놓치지 말고 즐기세요.",
            "사랑에 대한 당신의 기대가 현실이 될 수 있습니다. 자신감을 가지고 마음을 표현해 보세요.",
            "관계에서의 작은 갈등이 오히려 당신들의 관계를 더욱 단단하게 만들어 줄 것입니다. 서로의 입장을 이해하려 노력하세요."
        ],
        average: [
            "사랑의 기운이 평온한 상태입니다. 현재 관계를 돌아보고 개선할 점을 찾아보는 것이 좋겠습니다.",
            "새로운 만남보다는 자기 개발에 집중하는 것이 도움이 될 수 있습니다. 내적 성장이 미래의 사랑을 이끌 것입니다.",
            "관계에서 작은 갈등이 있을 수 있지만, 대화로 충분히 해결할 수 있습니다. 서로의 입장을 이해하려 노력하세요.",
            "사랑에 대한 기대와 현실 사이에서 균형을 찾는 시기입니다. 너무 조급해하지 말고 천천히 나아가세요.",
            "현재 관계에서 소홀함이 느껴질 수 있습니다. 서로의 감정을 더욱 신경 써 주세요."
        ],
        bad: [
            "일시적으로 사랑의 기운이 주춤할 수 있습니다. 이 시기를 자기 성찰의 기회로 삼아보세요.",
            "관계에서 오해나 갈등이 생길 수 있습니다. 감정적으로 대응하지 말고 차분히 대화로 풀어나가세요.",
            "과거의 상처가 현재의 관계에 영향을 줄 수 있습니다. 마음의 치유에 집중하는 것이 도움이 될 것입니다.",
            "사랑에 대한 기대가 현실과 맞지 않아 실망할 수 있습니다. 현실을 있는 그대로 받아들이고 천천히 나아가세요.",
            "감정의 기복이 있을 수 있습니다. 서로의 입장을 이해하고 존중하는 것이 중요합니다."
        ]
    };

    // 운세 문장 및 추천 문구
    let lovePercentage = 0;
    let loveText = '';
    let loveAdvice = '';

    if (randomNum >= 91) {
        // 매우 좋음
        lovePercentage = Math.floor(Math.random() * 10) + 91; // 91~100%
        loveText = '사랑운 매우 좋음';
        loveAdvice = love.veryGood[Math.floor(Math.random() * love.veryGood.length)];
    } else if (randomNum >= 71) {
        // 좋음
        lovePercentage = Math.floor(Math.random() * 20) + 71; // 71~90%
        loveText = '사랑운 좋음';
        loveAdvice = love.good[Math.floor(Math.random() * love.good.length)];
    } else if (randomNum >= 41) {
        // 보통
        lovePercentage = Math.floor(Math.random() * 30) + 41; // 41~70%
        loveText = '사랑운 보통';
        loveAdvice = love.average[Math.floor(Math.random() * love.average.length)];
    } else {
        // 나쁨
        lovePercentage = Math.floor(Math.random() * 40) + 1; // 1~40%
        loveText = '사랑운 나쁨';
        loveAdvice = love.bad[Math.floor(Math.random() * love.bad.length)];
    }

    // 운세 결과 출력
    const resultDiv = document.getElementById('heart-result');
    resultDiv.innerHTML = `
        오늘의 사랑 운세: ${lovePercentage}%<br>
        ${loveText}<br>
        <p style="margin-top: 20px; font-size: 18px; color: gray; white-space: pre-line;">${loveAdvice}</p>
    `;
    
    resultDiv.style.opacity = 1; // 결과를 보이게 설정
    resultDiv.style.position = 'absolute';
    resultDiv.style.top = '50%'; // 이미지와 동일한 위치
    resultDiv.style.left = '50%';
    resultDiv.style.transform = 'translate(-50%, -50%)'; // 가운데 정렬
}

// 애니메이션 종료 후 운세 결과를 표시
setTimeout(showHeartResult, 1500);
