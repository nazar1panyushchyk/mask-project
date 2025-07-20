import "./css/header.css";
import "./css/main.css";
import logo from "./img/logo.png";
import search from "./img/search-input.svg";

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
                Костюми
              </a>
              <a className="link" href="">
                Про нас
              </a>
              <a className="link" href="">
                Контакти
              </a>
            </nav>
            <div className="search-wrapper">
              <input className="input-search" type="text" placeholder="Пошук костюмів" />
              <img className="search" src={search} alt="" />
            </div>
            <div class="switcher flex">
                <a href="#">UA</a>
                <a href="#">
                    <div class="switch">
                        <span class="slider round"></span>
                    </div>
                </a>
                <a href="#">ENG</a>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default App;
