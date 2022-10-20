import ReactDOM from 'react-dom';
import { SignUp } from './components/signup';

ReactDOM.hydrate(
  <div>
    <h1>Hello, welcome to adiBookClub</h1>
    <SignUp />
  </div>,
  document.getElementById('root')
);
