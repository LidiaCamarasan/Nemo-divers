import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import BookNow from "./pages/book-now";
import PadiCourses from "./pages/padi-courses";
import Navbar from "./components/Navbar/Navbar";
import CourseSchedulePage from "./pages/course-schedule";
import TravelPage from "./pages/travel";
import PriceListPage from "./pages/price-list";
import ContactPage from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="book-now" element={<BookNow />} />
          <Route path="padi-courses" element={<PadiCourses />} />
          <Route path="course-schedule" element={<CourseSchedulePage />} />
          <Route path="travel" element={<TravelPage />} />
          <Route path="price-list" element={<PriceListPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
