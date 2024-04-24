import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import "./index.css";
import "preline/preline";
import Homepage from "./pages/Homepage";
import Services from './pages/Services'
import Notfound from "./pages/Notfound";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.add('show_2');
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.remove('show_2');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hide');
    const hiddenElements2 = document.querySelectorAll('.hide_2');
    const hiddenElements3 = document.querySelectorAll('.hide_3');
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer.observe(el));
    hiddenElements3.forEach((el) => observer.observe(el));
    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); 
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/*' element={<Notfound/>} />
    </Routes>
    </>
  );
}

export default App;
