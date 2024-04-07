import { BrowserRouter, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Landlord from "./pages/landlordPages/Landlord";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hostels from "./pages/Hostels";
import ViewProperty from "./pages/ViewProperty";
import Editdashboard from "./pages/landlordPages/Editdashboard";
import Article from "./pages/landlordPages/Article";
import Art from "./pages/landlordPages/Art";
import ViewGoogleMap from "./pages/wardenPages/ViewGoogleMap";
import ViewAllProperties from "./pages/wardenPages/ViewAllProperties";
import Header from "./components/Header";
import Footer from "./components/footer";
import Admin from "./pages/adminPages/Admin";
import UserRegistration from "./pages/adminPages/UserRegistration";
import ArticleForm from "./pages/adminPages/ArticleForm";

function App() {
  return (
    <>
      {/* <NavBar /> add like this */}
      <BrowserRouter>
        <Header />

        <Routes>
          {/* <Route path = '/home' element = {<Header/>}/> */}
          <Route path="/logedin" element={<Hostels />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landlord" element={<Landlord />} />
          <Route path="/viewMap" element={<ViewGoogleMap />} />
          <Route path="/viewAllProperties" element={<ViewAllProperties />} />
          <Route path="/property/:propertyId" element={<ViewProperty />} />
          <Route path="/editdashboard" element={<Editdashboard />} />
          <Route path="/ArticleView" element={<Article />} />
          <Route path="/Art" element={<Art />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/userRegistration" element={<UserRegistration />} />
          <Route path="/userRegistration" element={<UserRegistration />} />
          <Route path="/ArticleForm" element={<ArticleForm />} />
          {/* Add New routes here */}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Footer/> add like this*/}
    </>
  );
}

export default App;
