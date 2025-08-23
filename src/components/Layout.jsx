import { Outlet, NavLink, useLocation } from "react-router-dom";
import images from "../imageLoader";
import "../css/header.css";
import "../css/footer.css";
import { TbShirt } from "react-icons/tb";
import { FiPhone, FiMapPin } from "react-icons/fi";

export default function Layout(props) {
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <section className="header-container">
          <div className="header-links">
            <a className="logo-company" href="">
              <img src={images["logo.png"]} alt="" className="logo" />
              <div className="logo-text">
                Прокат
                <br />
                карнавальних
                <br />
                костюмів
              </div>
            </a>
            <nav>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                onClick={handleHomeClick}
              >
                Головна
              </NavLink>
              <NavLink to="/gallery" className="link">
                Галерея костюмів
              </NavLink>
              <NavLink to="/about" className="link">
                Про нас
              </NavLink>
              <NavLink to="/contacts" className="link">
                Контакти
              </NavLink>
            </nav>
            <div className="search-wrapper">
              <input
                className="input-search"
                type="text"
                placeholder="Пошук костюмів"
              />
              <img src={images["search-input.svg"]} alt="" className="search" />
            </div>
            <div className="switcher flex">
              <a href="#">UA</a>
              <a href="#">
                <div className="switch">
                  <span className="slider round"></span>
                </div>
              </a>
              <a href="#">ENG</a>
            </div>
          </div>
        </section>
      </header>

      <main>
        <Outlet />
      </main>

    </>
  );
}
