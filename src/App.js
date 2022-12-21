import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactRouter from './react-router';
import './login.css';
import './admin.css';
import './header.css';
import './header2.css';
import './addproduct.css';
import './main.css';
import './tshirt.css';
import './shoes.css';
import './cart.css';
import './sneaker.css'
import './order.css'
import './view.css'
import './new.css'

import { UserProvider } from './cartcontext';
import {data} from './cartcontext';


function App() {
  return (
    <div className="App">
      <UserProvider value={[data]}>
        <ReactRouter />
      </UserProvider>
    </div>
  );
}

export default App;
