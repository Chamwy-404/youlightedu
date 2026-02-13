import './Login.css'

function LoginView({ vm }) {
  return (
    <div className="auth-card">
      <input
        className="auth-input"
        placeholder="Email Address"
        value={vm.email}
        onChange={(e) => vm.setEmail(e.target.value)}
      />

      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        value={vm.password}
        onChange={(e) => vm.setPassword(e.target.value)}
      />

      <div className="login-row">
        <span className="auth-link">Forgot Password?</span>

        <button
          className="primary-btn"
          onClick={vm.login}
        >
          LOG IN
        </button>
      </div>

      <button
        className="outline-btn"
        onClick={vm.switchToRegister}
      >
        CREATE NEW ACCOUNT
      </button>

      <button
        className="outline-btn"
        onClick={vm.guestLogin}
      >
        GUEST LOGIN
      </button>
    </div>
  )
}

export default LoginView
