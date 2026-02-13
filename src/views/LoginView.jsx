function LoginView({ vm }) {
  return (
    <div className="card">
      <input
        placeholder="Email Address"
        value={vm.email}
        onChange={(e) => vm.setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={vm.password}
        onChange={(e) => vm.setPassword(e.target.value)}
      />

      <div className="row">
        <span className="link">Forgot Password?</span>
        <button onClick={vm.login}>LOG IN</button>
      </div>

      <button onClick={() => vm.setIsLogin(false)}>
        CREATE NEW ACCOUNT
      </button>

      <button>GUEST LOGIN</button>

      <p>{vm.message}</p>
    </div>
  );
}

export default LoginView;
