
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Landlord from './pages/landlordPages/Landlord';
import Login from './pages/Login';
import Register from './pages/Register';
import Hostels from './pages/Hostels';
import ViewProperty from './pages/ViewProperty';
import Editdashboard from "./pages/landlordPages/Editdashboard";
import Article from "./pages/landlordPages/Article";
import Art from "./pages/landlordPages/Art";

function App() {
  return(
    <>
    {/* <NavBar /> add like this */}

          <BrowserRouter>
            <Routes>
              <Route path = '/logedin' element = {<Hostels/>}/>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/landlord" element={<Landlord />} />
              <Route path="/property" element={<ViewProperty />} />
              <Route path="/editdashboard" element={<Editdashboard/>} />
              <Route path="/ArticleView" element={<Article/>} />
              <Route path="Art" element={<Art/>} />
              {/* Add New routes here */}

            </Routes>
          </BrowserRouter>

      {/* <Footer/> add like this*/}
    </>

  )
}

export default App;
