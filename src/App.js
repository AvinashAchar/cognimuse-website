import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Offerings from "./components/Offerings/Offerings";
import Process from "./components/Process/Process";
import Founders from "./components/Founders/Founders";
import Blog from "./components/Blog/Blog";
import Careers from "./components/Careers/Careers";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  return (
    <>
     <Navbar />
     <Home />
     <Offerings />
     <Process />
     <Founders />
     <Blog />
      <Careers />
      <Footer />
     </>
  );
}

export default App;
