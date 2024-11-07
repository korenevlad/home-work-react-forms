import 'bootswatch/dist/litera/bootstrap.css';
import {Signin} from './Components/Signs/Signin';
import {Signup} from './Components/Signs/Signup';

function App() {
  return (
    <div className="container">
      <div className="row justify-content-around">
        <Signin />  
        <Signup />
        <Signup />
      </div>
    </div>
  );
}

export default App;
