import { useAuth } from '../hooks/useAuth';

export default function AuthButton() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  if (loading) {
    return <span style={{ fontSize: 12, color: '#555' }}>…</span>;
  }

  if (user) {
    const avatar = user.user_metadata?.avatar_url;
    const name = user.user_metadata?.full_name || user.email;
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {avatar && (
          <img
            src={avatar}
            alt=""
            style={{ width: 22, height: 22, borderRadius: '50%', border: '1px solid #333' }}
          />
        )}
        <span style={{ fontSize: 12, color: '#aaa', maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {name}
        </span>
        <button
          onClick={signOut}
          style={{
            fontSize: 11,
            padding: '4px 8px',
            borderRadius: 6,
            border: '1px solid #333',
            background: '#1a1a1a',
            color: '#888',
            cursor: 'pointer',
          }}
        >
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signInWithGoogle().catch((e) => alert(e.message))}
      style={{
        fontSize: 12,
        padding: '6px 12px',
        borderRadius: 6,
        border: '1px solid #cc785c44',
        background: '#cc785c22',
        color: '#e8906f',
        fontWeight: 600,
        cursor: 'pointer',
      }}
    >
      Google 로그인
    </button>
  );
}
