document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetPage = urlParams.get("page");

    if (targetPage) {
        setTimeout(function() {
            window.location.href = targetPage;
        }, 1100);                                                // 1.1초 후 이동
    } else {
        console.error("페이지 파라미터가 설정되지 않았습니다.");
    }
});
