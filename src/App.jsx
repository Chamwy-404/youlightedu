import { useAuthViewModel } from "./viewmodels/authViewModel";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import "./App.css";

function App() {
  const vm = useAuthViewModel();

  return (
    <div className="container">
      {vm.isLogin ? <LoginView vm={vm} /> : <RegisterView vm={vm} />}
    </div>
  );
}

export default App;
