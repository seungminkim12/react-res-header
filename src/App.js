import { useEffect, useState, useRef } from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  const menuRef = useRef(null);
  const iconsRef = useRef(null);

  const isPc = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    if (isToggle || isPc) {
      menuRef.current.style.display = "flex";
      iconsRef.current.style.display = "flex";
    } else {
      menuRef.current.style.display = "none";
      iconsRef.current.style.display = "none";
    }
  }, [isToggle, isPc]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <i className="fab fa-accusoft"></i>
        <a href="">testTitle</a>
      </div>

      <ul className="navbar__menu" ref={menuRef}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Gallery</a>
        </li>
        <li>
          <a href="">Weddings</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Bookings</a>
        </li>
      </ul>

      <ul className="navbar__icons" ref={iconsRef}>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
        <li>
          <i className="fab fa-facebook"></i>
        </li>
      </ul>

      <a
        href="#"
        className="navbar__toggleBtn"
        onClick={() => setIsToggle(!isToggle)}
      >
        <i className="fas fa-bars"></i>
      </a>
    </nav>
  );
}

export default App;
