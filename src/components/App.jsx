import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Contacts from "./Contacts";
import AboutUs from "./AboutUs";
import Layout from "./Layout";
import Gallery from "./Gallery";
import Modal from "./Modal";
import Boys from "./Boys";
import Girls from "./Girls";
import Adults from "./Adults";
import Footer from "./Footer";
import "../css/header.css";
import "../css/main.css";
import "../css/footer.css";
import images from "../imageLoader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { useState } from "react";

function Home({ onOpenModal }) {
  return (
    <>
      <section className="main-container">
        <div className="main-button btn-primary">
          <Link to="boys">
            <button>Для хлопчиків</button>
          </Link>
          <Link to="girls">
            <button>Для дівчаток</button>
          </Link>
          <Link to="adults">
            <button>Для дорослих</button>
          </Link>
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
                <div className="see-more-slider btn-primary">
                  <Link to="/gallery">
                    <button>
                      Усі костюми
                      <MdOutlineAddToPhotos size="25" />
                    </button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
          <div className="see-more btn-primary">
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
                <div className="see-more-slider btn-primary">
                  <Link to="/gallery">
                    <button>
                      Усі костюми
                      <MdOutlineAddToPhotos size="25" />
                    </button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
          <div className="see-more btn-primary">
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
                  src={
                    images[
                      "486962400_2456634304701437_8987871432419796634_n.jpg"
                    ]
                  }
                  alt="main adult"
                  className="main-img"
                />
                <img
                  src={
                    images[
                      "474625269_3900588213538098_5518154689704963857_n.jpg"
                    ]
                  }
                  alt="main adult"
                  className="main-img"
                />
                <img
                  src={
                    images[
                      "473994028_3893687740894812_4410140334531494740_n.jpg"
                    ]
                  }
                  alt="main adult"
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
                  src={
                    images[
                      "482026052_2443385886007826_4018589056247490160_n.jpg"
                    ]
                  }
                  alt="main adult"
                  className="main-img"
                />
                <img
                  src={
                    images[
                      "495375937_9858223057598941_4653009698611466589_n.jpg"
                    ]
                  }
                  alt="main adult"
                  className="main-img"
                />
                <div className="see-more-slider btn-primary">
                  <Link to="/gallery">
                    <button>
                      Усі костюми
                      <MdOutlineAddToPhotos size="25" />
                    </button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
          <div className="see-more btn-primary">
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
            <br />"<span>Маскарад Хаус</span>" — для тих, хто любить чарівність
            і святкову атмосферу! "<span>Маскарад Хаус</span>" — тут починається
            ваше свято!🎉
          </p>
        </div>
        <div className="main-prince"></div>
      </section>

      <Footer onOpenModal={onOpenModal} />
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout onOpenModal={handleOpen} />}>
            <Route index element={<Home onOpenModal={handleOpen} />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="boys" element={<Boys onOpenModal={handleOpen} />} />
            <Route path="girls" element={<Girls onOpenModal={handleOpen} />} />
            <Route
              path="adults"
              element={<Adults onOpenModal={handleOpen} />}
            />
          </Route>
        </Routes>

        <Modal open={isModalOpen} handleClose={handleClose} />
      </BrowserRouter>
    </>
  );
}

export default App;
