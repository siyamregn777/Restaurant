import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/AboutUs"
import Available from "./pages/Available"
import Contact from "./pages/Contact";
import './App.css'
import './index.css'
import Auth from'./pages/Auth'
import AboveFoot from'./pages/AboveFoot'
import BookManagement from'./pages/BookManagement'
import Books from './pages/Books'
import Cooking from './pages/Cooking'
import Description from './pages/Description'
import Hero from'./pages/Hero'
// import OurStories from'./pages/OurStories'
// import Services from'./pages/Services'
// import OurMenu from './pages/OurMenu'
// import OurTeam from './pages/OurTeam'
// import VideoManagement from './pages/VideoManagement'
// import Videos from './pages/Videos'
import AdminDashboard from './pages/AdminDashboard'
import Course from './pages/Course'
// import About from "./pages/About";





// import Course from "./pages/Course";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/available" element={<Available />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/books" element={<Books />} />
        <Route path="/bookmanagement" element={<BookManagement />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/description" element={<Description />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/abovefoot" element={<AboveFoot />} />
        {/* <Route path="/ourstories" element={<OurStories />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourmenu" element={<OurMenu />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/videomanagement" element={<VideoManagement />} />
        <Route path="/videos" element={<Videos />} /> */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        
        {/* <Route path="*" element={<NotFound />} /> */}


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
