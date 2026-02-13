import './Register.css'

function RegisterView({ vm }) {
  return (
    <div className="auth-card">
      <h2 className="register-title">
        CREATE NEW ACCOUNT
      </h2>

      <div className="register-grid">
        <input
          className="auth-input full-width"
          placeholder="Full Name"
          value={vm.fullName}
          onChange={(e) => vm.setFullName(e.target.value)}
        />

        <input
          className="auth-input"
          placeholder="Email Address"
          value={vm.email}
          onChange={(e) => vm.setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          placeholder="Age"
          value={vm.age}
          onChange={(e) => vm.setAge(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={vm.password}
          onChange={(e) => vm.setPassword(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Confirm Password"
          value={vm.confirmPassword}
          onChange={(e) => vm.setConfirmPassword(e.target.value)}
        />
      </div>

      <button
        className="outline-btn register-submit"
        onClick={vm.register}
      >
        SIGN UP NOW
      </button>

      <p
        className="auth-link"
        onClick={vm.switchToLogin}
        style={{ cursor: 'pointer' }}
      >
        Already have account? Log in
      </p>
    </div>
  )
}

export default RegisterView
