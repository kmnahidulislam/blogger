export default function SignUpModal() {
  return (
    <div className="modal sign-up-modal">
      <ul>
        <li>
          <button>
            <i className="fa-brands fa-google"></i> sign up with gogle
          </button>
        </li>
        <li>
          <button>
            <i className="fa-regular fa-envelope"></i>sign up with email
          </button>
        </li>
      </ul>
    </div>
  );
}
