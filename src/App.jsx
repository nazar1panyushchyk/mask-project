import "./css/header.css";
import "./css/main.css";
import logo from "./img/logo.png";
import search from "./img/search-input.svg";
import mainBoy from "./img/main-boy.jpg";
import mainBoy2 from "./img/main-boy2.jpg";
import mainBoy3 from "./img/main-boy3.jpg";
import mainBoy4 from "./img/main-boy4.jpg";
import mainBoy5 from "./img/main-boy5.jpg";
import mainGirl from "./img/main-girl.jpg";
import mainGirl2 from "./img/main-girl2.jpg";
import mainGirl3 from "./img/main-girl3.jpg";
import mainGirl4 from "./img/main-girl4.jpg";
import mainGirl5 from "./img/main-girl5.jpg";
// import mainAdult from "./img/main-adult.jpg";
// import mainAdult2 from "./img/main-adult2.jpg";
// import mainAdult3 from "./img/main-adult3.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdOutlineAddToPhotos } from "react-icons/md";

function App() {
  return (
    <>
      <header>
        <section className="header-container">
          <div className="header-links">
            <a className="logo-company" href="">
              <img className="logo" src={logo} alt="" />
              <div className="logo-text">
                Прокат
                <br />
                карнавальних
                <br />
                костюмів
              </div>
            </a>
            <nav>
              <a className="link" href="">
                Головна
              </a>
              <a className="link" href="">
                Галерея костюмів
              </a>
              <a className="link" href="">
                Про нас
              </a>
              <a className="link" href="">
                Контакти
              </a>
            </nav>
            <div className="search-wrapper">
              <input
                className="input-search"
                type="text"
                placeholder="Пошук костюмів"
              />
              <img className="search" src={search} alt="" />
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
        <section className="main-container">
          <div className="main-button">
            <button>Для хлопчиків</button>
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
                  <img src={mainBoy} alt="Image 1" className="main-img" />
                  <img src={mainBoy2} alt="Image 2" className="main-img" />
                  <img src={mainBoy3} alt="Image 3" className="main-img" />
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
                  <img src={mainBoy4} alt="Image 4" className="main-img" />
                  <img src={mainBoy5} alt="Image 5" className="main-img" />
                  <div className="see-more-slider">
                    <button>
                      Натисніть,
                      <br />
                      щоб побачити усі костюми{" "}
                      <MdOutlineAddToPhotos size="25" />
                    </button>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            <div className="see-more">
              <button>Побачити все</button>
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
                  <img src={mainGirl} alt="Image 1" className="main-img" />
                  <img src={mainGirl2} alt="Image 2" className="main-img" />
                  <img src={mainGirl3} alt="Image 3" className="main-img" />
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
                  <img src={mainGirl4} alt="Image 4" className="main-img" />
                  <img src={mainGirl5} alt="Image 5" className="main-img" />
                  <div className="see-more-slider">
                    <button>
                      Натисніть,
                      <br />
                      щоб побачити усі костюми{" "}
                      <MdOutlineAddToPhotos size="25" />
                    </button>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            <div className="see-more">
              <button>Побачити все</button>
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
                  <img src={mainBoy} alt="Image 1" className="main-img" />
                  <img src={mainBoy2} alt="Image 2" className="main-img" />
                  <img src={mainBoy3} alt="Image 3" className="main-img" />
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
                  <img src={mainBoy4} alt="Image 4" className="main-img" />
                  <img src={mainBoy5} alt="Image 5" className="main-img" />
                  <div className="see-more-slider">
                    <button>
                      Натисніть,
                      <br />
                      щоб побачити усі костюми{" "}
                      <MdOutlineAddToPhotos size="25" />
                    </button>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
            <div className="see-more">
              <button>Побачити все</button>
            </div>
          </div>
          <div className="main-text">
            <p>
              Маскарад Хаус — світ, де кожен може стати ким завгодно! Відкрийте
              двері до чарівної казки разом з нами! 
              <br />
              У нас ви знайдете все — від
              милих зайчиків і принцес до відьом, піратів, супергероїв та
              образів на будь-який смак. 
              <br />
              І не лише для дітей — ми подбали і про
              дорослих! 
              <br />
              Свята в садочку, шкільні ранки, Хелловін, Новий рік, Свято
              осені, День вишиванки — ми завжди готові допомогти обрати
              ідеальний образ для кожної події. 
              <br />
              Заходьте, обирайте, приміряйте —
              і нехай ваша дитина (чи ви самі) сяє на святі, мов зірка!
              <br />
              "Маскарад Хаус" — для тих, хто любить чарівність і святкову
              атмосферу! "Маскарад Хаус" — тут починається ваше свято!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
