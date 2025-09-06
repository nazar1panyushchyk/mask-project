import { Link } from "react-router-dom";
import images from "../imageLoader";
import "../css/footer.css";
import { TbShirt } from "react-icons/tb";
import { FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer({ onOpenModal }) {
  return (
    <footer>
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
          <Link to="boys">
            <TbShirt size="23" />
            Для хлопчиків
          </Link>
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
            <button onClick={onOpenModal}>переглянути на карті</button>
          </p>
        </div>
      </section>
      <div className="footer-dev">
        <div className="footer-rights">
          <p>© 2025 Maskarad House. Всі права захищені.</p>
        </div>
        <div className="site-dev">
          <a
            href="https://t.me/sherman_99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Розробка сайту: <img src={images["telegram.svg"]} alt="" />
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
