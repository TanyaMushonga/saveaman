import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { GetInvolved } from "./pages/GetInvolved";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
