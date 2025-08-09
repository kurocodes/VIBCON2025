import { useGeneralContext } from "../../context/genrealContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ToastContainer, Bounce } from "react-toastify";

export default function MainLayout({ children }) {
  const { showSidebar } = useGeneralContext();

  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      {showSidebar && <Sidebar />}
    </div>
  );
}
