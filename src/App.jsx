import { useAuthViewModel } from "./viewmodels/authViewModel";
import LoginView from "./views/Login/LoginView";
import RegisterView from "./views/Register/RegisterView";
import './styles/variables.css'
import './styles/base.css'
import './styles/shared.css'

function App() {
  const vm = useAuthViewModel();

  return (
    <div className="container">
      {vm.isLogin ? <LoginView vm={vm} /> : <RegisterView vm={vm} />}
    </div>
  );
}

export default App;
