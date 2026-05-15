import { 
  initializeApp 
} from "***";
import { 
  getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp 
} from "***";

// Firebase 설정
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
}

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 관리자 닉네임 설정
const ADMIN_NICKNAME = "***";

// 댓글 등록 이벤트 리스너
document.getElementById("commentFrm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const content = document.querySelector("[name='content']").value;
  const nickname = document.querySelector("[name='nickname']").value;
  const password = document.querySelector("[name='password']").value;
  const isSecret = document.getElementById("isSecret").checked;

  if (!content || !nickname || !password) {
    alert("내용, 닉네임, 비밀번호는 필수입니다.");
    return;
  }

  try {
    await addDoc(collection(db, "guests"), {
      content: content,
      nickname: nickname,
      password: password,
      secret: isSecret,
      created_at: serverTimestamp(),
    });

    alert("댓글이 성공적으로 등록되었습니다!");
    document.getElementById("commentFrm").reset();
    loadComments();
  } catch (error) {
    console.error("댓글 등록 실패: ", error);
    alert("댓글 등록에 실패했습니다.");
  }
});



// 댓글 불러오기 함수
async function loadComments() {
  const guestbookEntries = document.getElementById("guestbook-entries");
  guestbookEntries.innerHTML = ""; // 기존 내용 초기화

  try {
    const q = query(collection(db, "guests"), orderBy("created_at", "desc"));
    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {
      const comment = doc.data();
      const createdAt = comment.created_at
        ? comment.created_at.toDate().toLocaleString()
        : "날짜 없음";

      let contentText = "비밀글입니다.";
      let showPasswordButton = "";

      // 비밀글 확인 처리
      if (!comment.secret) {
        contentText = comment.content; // 비밀글이 아니면 내용 표시
      } else if (comment.nickname === ADMIN_NICKNAME) {
        contentText = comment.content; // 관리자는 비밀글 내용 확인 가능
      } else {
        showPasswordButton = `
          <button onclick="showSecretContent('${comment.content}', '${comment.password}')">
            비밀번호 입력
          </button>
        `;
      }

      const listItem = document.createElement("li");
      listItem.classList.add("comment-item");
      listItem.innerHTML = `
        <div class="comment-header">
          <span class="nickname">${comment.nickname}</span>
          <span class="date">${createdAt}</span>
        </div>
        <div class="content">
          ${contentText}
          ${showPasswordButton}
        </div>
      `;
      guestbookEntries.appendChild(listItem);
    });
  } catch (error) {
    console.error("댓글 불러오기 실패: ", error);
  }
}

// 비밀번호 확인 및 마스터키 기능
window.showSecretContent = (content, correctPassword) => {
  const enteredPassword = prompt("비밀번호를 입력하세요");
  if (enteredPassword === correctPassword || enteredPassword === ADMIN_NICKNAME) {
    alert(`비밀글 내용: ${content}`);
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
};

// 페이지 로드 시 댓글 불러오기
loadComments();