import "./App.css";
import DashBoard from "./components/dashboard/DashBoard";
import Footer from "./components/footer/Footer";
import Navbars from "./components/navbars/Navbars";

function App() {
  return (
    <div className="vh-100">
      <Navbars />
      <DashBoard />
      <Footer />
    </div>
  );
}

export default App;
