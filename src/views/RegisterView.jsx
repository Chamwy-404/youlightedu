function RegisterView({ vm }) {
  return (
    <div className="card">
      <h2>CREATE NEW ACCOUNT</h2>

      <input
        placeholder="Full Name"
        value={vm.fullName}
        onChange={(e) => vm.setFullName(e.target.value)}
      />

      <input
        placeholder="Email Address"
        value={vm.email}
        onChange={(e) => vm.setEmail(e.target.value)}
      />

      <input
        placeholder="Age"
        value={vm.age}
        onChange={(e) => vm.setAge(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={vm.password}
        onChange={(e) => vm.setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={vm.confirmPassword}
        onChange={(e) => vm.setConfirmPassword(e.target.value)}
      />

      <button onClick={vm.register}>SIGN UP NOW</button>

      <p onClick={() => vm.setIsLogin(true)} className="link">
        Already have account? Log in
      </p>

      <p>{vm.message}</p>
    </div>
  );
}

export default RegisterView;
