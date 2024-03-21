import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Landlord from './pages/landlordPages/Landlord';
import Login from './pages/Login';
import Register from './pages/Register';
import Editdashboard from "./pages/landlordPages/Editdashboard";
import Article from "./pages/landlordPages/Article";
import Art from "./pages/landlordPages/Art";



function App() {
  return(
    <>
    {/* <NavBar /> add like this */}

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/landlord" element={<Landlord />} />
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
