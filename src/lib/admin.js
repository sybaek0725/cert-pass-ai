// 관리자(공유 풀에 INSERT 가능) 식별.
// 클라이언트에서는 UI 토글 노출 여부에만 사용, 실제 권한은 서버 함수에서 다시 검증.

const RAW = import.meta.env.VITE_ADMIN_EMAILS || '';
const ADMIN_EMAILS = RAW.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);

export function isAdminEmail(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}
