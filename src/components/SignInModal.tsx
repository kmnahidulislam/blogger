export default function SignInModal() {
  return (
    <div className="modal sign-in-modal">
      <ul>
        <li>
          <button>
            <i className="fa-brands fa-google"></i> sign in with gogle
          </button>
        </li>
        <li>
          <button>
            <i className="fa-regular fa-envelope"></i>sign in with email
          </button>
        </li>
      </ul>
    </div>
  );
}
