import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/write' element={<CreatePost />} />
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/posts/post/:id' element={<PostDetails />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
