import "../css/about.css";
import images from "../imageLoader";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <section className="about-section">
        <div className="about-hero">
          <div className="collage">
            <img
              src={
                images["473766208_3893690644227855_7770502001914094620_n.jpg"]
              }
              alt=""
            />
            <img
              src={images["496125917_9839749512779629_2335618788061982_n.jpg"]}
              alt=""
            />
            <img
              src={
                images["474624603_3900599976870255_2375205643071822177_n.jpg"]
              }
              alt=""
            />
            {/* <img
              src={
                images["473618251_3893690484227871_1454239613886884190_n.jpg"]
              }
              alt=""
            />
            <img
              src={images["481457178_3933576616905924_67936287609754331_n.jpg"]}
              alt=""
            />
            <img
              src={
                images["475090718_3900609363535983_2086219732750375062_n.jpg"]
              }
              alt=""
            />
            <img
              src={
                images["475090718_3900609363535983_2086219732750375062_n.jpg"]
              }
              alt=""
            /> */}
          </div>
          <div className="about-hero-text about-us-color">
            <span>Про нас</span>
            <h1>Святкові образи для дітей і дорослих</h1>
            <p>
              «Маскарад хаус» вже понад 13 років допомагає обирати карнавальні,
              тематичні та святкові костюми для різних подій.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <strong>13+</strong>
                <span>років досвіду</span>
              </div>
              <div className="about-stat">
                <strong>3000+</strong>
                <span>костюмів в асортименті</span>
              </div>
            </div>
          </div>
        </div>

        <div className="offer-container about-us-color">
          <p>Ми пропонуємо:</p>
          <div className="offer-cards">
            <div className="offer about-us-color">
              <h3>🎭Прокат костюмів</h3>
              <p>Для свят, виступів, ранків і тематичних подій.</p>
            </div>
            <div className="offer about-us-color">
              <h3>👗Святкові сукні</h3>
              <p>Бальні, вечірні та сукні для Першого Причастя.</p>
            </div>
            <div className="offer about-us-color">
              <h3>🪡Пошиття костюмів</h3>
              <p>Індивідуальні образи під конкретну ідею чи подію.</p>
            </div>
            <div className="offer about-us-color">
              <h3>📸Фотосесії та майстер-класи</h3>
              <p>Фотозона, творчі заняття та святкова атмосфера.</p>
            </div>
          </div>
        </div>
        <div className="assortment about-us-color">
          <h2 style={{ fontSize: "20px" }}>Асортимент костюмів</h2>
          <p className="section-description">
            У нашому асортименті понад 3000 костюмів (!) для різних свят,
            виступів і тематичних подій.
          </p>
          <div className="assortment-cards">
            <article className="assortment-card">
              <h3>🍁Свято Осені</h3>
              <p>Овочі, фрукти, гриби та осінні образи для садочка й школи.</p>
            </article>
            <article className="assortment-card">
              <h3>⛄Новий рік</h3>
              <p>Сніжинки, ельфи, Миколай, ялинки та казкові персонажі.</p>
            </article>
            <article className="assortment-card">
              <h3>🪄Казкові персонажі</h3>
              <p>
                Принцеси, пірати, лицарі, хелловін, супергерої та улюблені
                герої.
              </p>
            </article>
            <article className="assortment-card">
              <h3>🦊Тварини та птахи</h3>
              <p>
                Популярні образи для дитячих свят, вистав і тематичних подій.
              </p>
            </article>
            <article className="assortment-card">
              <h3>🥋Національні костюми</h3>
              <p>Вишиванки, угорські, східні та інші тематичні образи.</p>
            </article>
            <article className="assortment-card">
              <h3>👔Професії та стилі</h3>
              <p>
                Лікарі, моряки, поліцейські, ретро, rock&roll та інші образи.
              </p>
            </article>
          </div>
          <div className="about-gallery-link link-primary">
            <Link to="/gallery">
              Переглянути всі костюми
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
