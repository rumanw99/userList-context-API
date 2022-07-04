import './App.css';
import {  Routes , Route} from "react-router-dom";
import { Home } from './componensts/Home';
import { AddUser } from './componensts/AddUser';
import { EditUser } from './componensts/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/GlobalState';
import { Navbar } from './componensts/Navbar';


function App() {
  return (
     <div className='app'>
      <GlobalProvider>
         <Navbar />
       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='add' element={<AddUser />} />
           <Route path='edit/:id' element={<EditUser />} />
       </Routes>
      </GlobalProvider>
     </div>

  );
}

export default App;
