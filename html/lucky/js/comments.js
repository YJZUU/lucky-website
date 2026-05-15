import { 
    initializeApp 
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  
  import { 
    getFirestore, collection, addDoc, serverTimestamp 
  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  
  // Firebase 설정
  const firebaseConfig = {
    "***"
  };
  
  // Firebase 초기화
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); // Firestore 인스턴스 생성
  
  // 댓글 폼 제출 이벤트 리스너
  document.getElementById('commentForm').addEventListener('submit', async function(event) {
      event.preventDefault(); // 새로고침 방지
  
      const textarea = document.querySelector('.bubble textarea');
      const comment = textarea.value.trim();
  
      if (comment === '') {
          alert('댓글을 입력해 주세요.');
          return;
      }
  
      try {
          // Firestore에 댓글 저장
          await addDoc(collection(db, "comments"), {
              text: comment,
              timestamp: serverTimestamp()
          });
  
          alert("댓글이 성공적으로 등록되었습니다!");
  
          // 입력 필드 비우기
          textarea.value = '';
      } catch (error) {
          console.error("Error saving comment to Firestore: ", error);
          alert("댓글 등록 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
  });
  
  // 페이지 로드 시 텍스트 영역 초기화
    window.onload = function() {
        const textarea = document.querySelector('.bubble textarea');
        textarea.value = ''; // 페이지 로드 시 텍스트 영역 비우기
    };
  