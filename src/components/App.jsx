import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Contacts from "./Contacts";
import Layout from "./Layout";
import Gallery from "./Gallery";
import Modal from "./Modal";
import Boys from "./Boys";
import React from "react";
import "../css/header.css";
import "../css/main.css";
import "../css/footer.css";
import images from "../imageLoader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { TbShirt } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

class Home extends React.Component {
  render() {
    return (
      <>
        <section className="main-container">
          <div className="main-button">
            <Link to="boys">
              <button>Для хлопчиків</button>
            </Link>
            <button>Для дівчаток</button>
            <button>Для дорослих</button>
          </div>
          <div className="slider-boys">
            <div className="main-costumes">
              <h2>Костюми для хлопчиків</h2>
            </div>
            <br />
            <Splide
              options={{
                perPage: 1,
                rewind: true,
              }}
              aria-label="Costumes for boys"
            >
              <SplideSlide>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "60px",
                  }}
                >
                  <img
                    src={images["main-boy.jpg"]}
                    alt="main boy"
                    className="main-img"
                  />
                  <img
                    src={images["main-boy2.jpg"]}
                    alt="main boy2"
                    className="main-img"
                  />
                  <img
                    src={images["main-boy3.jpg"]}
                    alt="main boy3"
                    className="main-img"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "60px",
                  }}
                >
                  <img
                    src={images["main-boy4.jpg"]}
                    alt="main boy4"
                    className="main-img"
                  />
                  <img
                    src={images["main-boy5.jpg"]}
                    alt="main boy5"
                    className="main-img"
                  />
                  <div className="see-more-slider">
                    <Link to="/gallery">
                      <button>
                        Натисніть,
                        <br />
                        щоб побачити усі костюми
                        <MdOutlineAddToPhotos size="25" />
                      </button>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            <div className="see-more">
              <Link to="/gallery">
                <button>Побачити все</button>
              </Link>
            </div>
          </div>
          <div className="slider-girls">
            <div className="main-costumes">
              <h2>Костюми для дівчаток</h2>
            </div>
            <br />
            <Splide
              options={{
                perPage: 1,
                rewind: true,
              }}
              aria-label="Costumes for girls"
            >
              <SplideSlide>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "60px",
                  }}
                >
                  <img
                    src={images["main-girl.jpg"]}
                    alt=""
                    className="main-img"
                  />
                  <img
                    src={images["main-girl2.jpg"]}
                    alt=""
                    className="main-img"
                  />
                  <img
                    src={images["main-girl3.jpg"]}
                    alt=""
                    className="main-img"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "60px",
                  }}
                >
                  <img
                    src={images["main-girl4.jpg"]}
                    alt=""
                    className="main-img"
                  />
                  <img
                    src={images["main-girl5.jpg"]}
                    alt=""
                    className="main-img"
                  />
                  <div className="see-more-slider">
                    <Link to="/gallery">
                      <button>
                        Натисніть,
                        <br />
                        щоб побачити усі костюми
                        <MdOutlineAddToPhotos size="25" />
                      </button>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            <div className="see-more">
              <Link to="/gallery">
                <button>Побачити все</button>
              </Link>
            </div>
          </div>
          <div className="slider-adults">
            <div className="main-costumes">
              <h2>Костюми для дорослих</h2>
            </div>
            <br />
            <Splide
              options={{
                perPage: 1,
                rewind: true,
              }}
              aria-label="Costumes for adults"
            >
              <SplideSlide>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "60px",
                  }}
                >
                  <img
                    src={images["main-boy.jpg"]}
                    alt="main boy"
                    className="main-img"
                  />
                  <img
                    src={images["main-boy2.jpg"]}
                    alt="main boy2"
                    className="main-img"
                  />
                  <img
                    src={images["main-boy3.jpg"]}
                    alt="main boy3"
                    className="main-img"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "60px",
                  }}
                >
                  <img
                    src={images["main-boy4.jpg"]}
                    alt="main boy4"
                    className="main-img"
                  />
                  <img
                    src={images["main-boy5.jpg"]}
                    alt="main boy5"
                    className="main-img"
                  />
                  <div className="see-more-slider">
                    <Link to="/gallery">
                      <button>
                        Натисніть,
                        <br />
                        щоб побачити усі костюми
                        <MdOutlineAddToPhotos size="25" />
                      </button>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            <div className="see-more">
              <Link to="/gallery">
                <button>Побачити все</button>
              </Link>
            </div>
          </div>
          <div className="main-text">
            <p>
              🎭<span>Маскарад Хаус</span> — світ, де кожен може стати ким
              завгодно! Відкрийте двері до чарівної казки разом з нами!
              <br />
              У нас ви знайдете все — від милих зайчиків і принцес до відьом,
              піратів, супергероїв та образів на будь-який смак.
              <br />
              І не лише для дітей — ми подбали і про дорослих!
              <br />
              🎉 Свята в садочку, шкільні ранки, 🎃 Хелловін, 🎄 Новий рік, 🍁
              Свято осені, 🥼 День вишиванки — ми завжди готові допомогти обрати
              ідеальний образ для кожної події.
              <br />
              Заходьте, обирайте, приміряйте — і нехай ваша дитина (чи ви самі)
              сяє на святі, мов ⭐ зірка!
              <br />"<span>Маскарад Хаус</span>" — для тих, хто любить
              чарівність і святкову атмосферу! "<span>Маскарад Хаус</span>" —
              тут починається ваше свято!🎉
            </p>
          </div>
          <div className="main-prince"></div>
        </section>

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
                <button onClick={this.props.onOpenModal}>
                  переглянути на карті
                </button>
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
      </>
    );
  }
}

class App extends React.Component {
  state = {
    isModalOpen: false,
  };

  handleOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout onOpenModal={this.handleOpen} />}>
              <Route index element={<Home onOpenModal={this.handleOpen} />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="boys" element={<Boys onOpenModal={this.handleOpen} />} />
            </Route>
          </Routes>

          <Modal open={this.state.isModalOpen} handleClose={this.handleClose} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
