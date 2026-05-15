function showTulipResult() {
    // 랜덤 숫자 생성 (1 ~ 100)
    const randomNum = Math.floor(Math.random() * 100) + 1;

    // 운세 데이터
    const friendship = {
        veryGood: [
            "당신의 인생에 새로운 친구들이 찾아올 것입니다. 이들과의 만남은 당신의 삶을 더욱 풍요롭게 만들 것입니다.",
            "오랜 친구와의 관계가 더욱 돈독해질 시기입니다. 서로에 대한 이해와 신뢰가 깊어질 것입니다.",
            "주변 사람들과의 소통이 원활해지며, 당신의 매력이 빛을 발할 것입니다. 새로운 인연을 만날 좋은 기회입니다.",
            "친구들과의 특별한 추억을 만들 수 있는 시기입니다. 함께하는 시간을 통해 더 강한 유대감을 형성하세요."
        ],
        good: [
            "기존 친구 관계가 안정적으로 유지되며, 서로에 대한 이해가 깊어질 것입니다.",
            "새로운 사람들과의 만남을 통해 당신의 사회적 네트워크가 확장될 수 있습니다.",
            "친구들과의 소소한 갈등이 있더라도 쉽게 해결될 수 있는 시기입니다. 열린 마음으로 소통하세요.",
            "공통 관심사를 가진 사람들과 만날 기회가 생길 수 있습니다. 새로운 모임에 참여해 보는 것은 어떨까요?"
        ],
        average: [
            "현재의 친구 관계를 유지하는 데 집중하세요. 안정적인 관계를 위해 노력이 필요할 수 있습니다.",
            "친구들과의 소통에 약간의 어려움이 있을 수 있습니다. 서로의 입장을 이해하려 노력하세요.",
            "새로운 인연을 만나기 어려울 수 있지만, 기존 친구들과의 관계를 돈독히 하는 좋은 기회입니다.",
            "친구와의 약속이나 모임에 변동이 있을 수 있습니다. 유연한 태도로 대처하세요."
        ],
        bad: [
            "친구 관계에서 오해나 갈등이 생길 수 있습니다. 감정적으로 대응하지 말고 차분히 대화로 풀어나가세요.",
            "일시적으로 고립감을 느낄 수 있습니다. 이는 자기 성찰의 기회로 삼아 내적 성장에 집중해 보세요.",
            "친구들과의 의견 차이로 거리감이 생길 수 있습니다. 서로의 차이를 인정하고 존중하는 자세가 필요합니다.",
            "새로운 인연을 만나기 어려운 시기입니다. 현재의 관계를 돌아보고 개선할 점을 찾아보세요."
        ]
    };

    // 운세 문장 및 추천 문구
    let friendshipPercentage = 0;
    let friendshipText = '';
    let friendshipAdvice = '';

    if (randomNum >= 91) {
        // 매우 좋음
        friendshipPercentage = Math.floor(Math.random() * 10) + 91; // 91~100%
        friendshipText = '우정운 매우 좋음';
        friendshipAdvice = friendship.veryGood[Math.floor(Math.random() * friendship.veryGood.length)];
    } else if (randomNum >= 71) {
        // 좋음
        friendshipPercentage = Math.floor(Math.random() * 20) + 71; // 71~90%
        friendshipText = '우정운 좋음';
        friendshipAdvice = friendship.good[Math.floor(Math.random() * friendship.good.length)];
    } else if (randomNum >= 41) {
        // 보통
        friendshipPercentage = Math.floor(Math.random() * 30) + 41; // 41~70%
        friendshipText = '우정운 보통';
        friendshipAdvice = friendship.average[Math.floor(Math.random() * friendship.average.length)];
    } else {
        // 나쁨
        friendshipPercentage = Math.floor(Math.random() * 40) + 1; // 1~40%
        friendshipText = '우정운 나쁨';
        friendshipAdvice = friendship.bad[Math.floor(Math.random() * friendship.bad.length)];
    }

    // 운세 결과 출력
    const resultDiv = document.getElementById('tulip-result');
    resultDiv.innerHTML = `
        오늘의 우정 운세: ${friendshipPercentage}%<br>
        ${friendshipText}<br>
        <p style="margin-top: 20px; font-size: 18px; color: gray; white-space: pre-line;">${friendshipAdvice}</p>
    `;
    
    resultDiv.style.opacity = 1; // 결과를 보이게 설정
    resultDiv.style.position = 'absolute';
    resultDiv.style.top = '50%'; // 이미지와 동일한 위치
    resultDiv.style.left = '50%';
    resultDiv.style.transform = 'translate(-50%, -50%)'; // 가운데 정렬
}

// 애니메이션 종료 후 운세 결과를 표시
setTimeout(showTulipResult, 1500);
