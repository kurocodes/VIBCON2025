import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Travel from "./pages/Travel";
import Registration from "./pages/Registration";
import Events from "./pages/Events";
import Abstract from "./pages/Abstract";
import ScrollToTop from "./components/layout/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
import Organizers from "./pages/Organizers";
import Feedback from "./pages/Feedback";
import Speakers from "./pages/Speakers";
import Sponsers from "./pages/Sponsers";

export default function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/sponsers" element={<Sponsers />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </MainLayout>
  );
}
