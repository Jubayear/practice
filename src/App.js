import { Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import ViewCourse from "./components/ViewCourse/ViewCourse";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/courses" element={<Courses></Courses>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/course/:courseId" element={<ViewCourse></ViewCourse>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
