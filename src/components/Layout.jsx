import { Outlet, Link, useLocation } from "react-router-dom";
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
              <Link to="/" className="link" onClick={handleHomeClick}>
                Головна
              </Link>
              <Link to="/gallery" className="link">
                Галерея костюмів
              </Link>
              <Link to="/about" className="link">
                Про нас
              </Link>
              <Link to="/contacts" className="link">
                Контакти
              </Link>
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

      {/* <footer>
        <section className="footer-container">
          <div className="footer-logo">
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
          </div>
          <div className="footer-costumes">
            <a href="">
              <TbShirt size="23" />
              Для хлопчиків
            </a>
            <a href="">
              <TbShirt size="23" />
              Для дівчаток
            </a>
            <a href="">
              <TbShirt size="23" />
              Для дорослих
            </a>
          </div>
          <div className="footer-contacts">
            <div className="footer-phones">
              <a href="">
                <FiPhone size="18" /> 050-551-4125
              </a>
              <a href="">
                <FiPhone size="18" /> 050-956-5080
              </a>
            </div>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/groups/575339462985732/?locale=uk_UA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={images["facebook.svg"]} alt="" />
              </a>
              <a
                href="https://www.instagram.com/maskarad_house_uz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={images["instagram.svg"]} alt="" />
              </a>
            </div>
          </div>
          <div className="footer-address">
            <p>
              <FiMapPin size="23" /> м. Ужгород, Закарпатська область
              <br />
              вулиця Заньковецької, 89
              <br />
              <button onClick={props.onOpenModal}>
                показати на карті
              </button>
            </p>
          </div>
        </section>
        <div className="footer-dev">
          <a
            href="https://t.me/sherman_hach"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Розробка сайту: <img src={images["telegram.svg"]} alt="" />
            </p>
          </a>
        </div>
      </footer> */}
    </>
  );
}
