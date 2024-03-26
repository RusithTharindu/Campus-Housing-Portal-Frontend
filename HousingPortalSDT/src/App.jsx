import { BrowserRouter,Routes,Route} from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Hostels from './pages/Hostels';

function App() {
  return(
    <div className='App'>
    <BrowserRouter>
    <Header/>
    <div className='pages'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path = '/logedin' element = {<Hostels/>}>
          
        </Route>

        


      </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App
