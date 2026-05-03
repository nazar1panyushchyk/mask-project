import "../css/about.css";
import images from "../imageLoader";

export default function AboutUs() {
  return (
    <>
      <section className="about-us-section">
        <div className="about-us-container">
          <div className="collage">
            <img
              src={
                images["473766208_3893690644227855_7770502001914094620_n.jpg"]
              }
              alt=""
            />
            <img
              src={
                images["475090718_3900609363535983_2086219732750375062_n.jpg"]
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
            <img
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
            />
          </div>
          <div className="about-us-info about-us-color">
            <h4 style={{ fontSize: "20px" }}>
              «Маскарад хаус» уже понад 10 років здійснює продаж, прокат й
              пошиття карнавальних і тематичних костюмів для дітей та дорослих.
            </h4>
          </div>
        </div>
        
        <div className="offer-container about-us-color">
          <p>Ми пропонуємо:</p>
          <div className="offer-cards">
            <div className="offer about-us-color">
              <p>Костюми для відеозйомок</p>
              <p>Костюми для конкурсів</p>
              <p>Тематичні костюми для свят</p>
              <p>Святкові сукні (бальні, вечірні)</p>
              <p>Сукні для Першого Причастя</p>
            </div>
            <div className="offer about-us-color">
              <p>Дитячі костюми</p>
              <p>Дорослі костюми</p>
              <p>
                Можливість проведення
                <br />
                фотосесії + фотозона
              </p>
              <p>Майстер-класи (у власному приміщенні)</p>
            </div>
          </div>
        </div>
        <div className="assortment about-us-color">
          <h4 style={{ fontSize: "20px" }}>
            У нашому асортименті понад 3000 (!) різноманітних костюмів для
            різного роду свят та подій, а саме:
          </h4>
          <div className="assortment-cards">
            <div className="assortment-card">
              <p>
                Свято Осені
                <br />
                Королева Осені, овочі, фрукти, гриби, осінні місяці
              </p>
            </div>
            <div className="assortment-card">
              <p>
                Новий рік
                <br />
                Сніжинки, ельфи, Миколай, ялинки, сніговики, казкові персонажі
              </p>
            </div>
            <div className="assortment-card">
              <p>
                Національні костюми
                <br />
                вишиванки, угорські, азійські, східні костюми, кімоно
              </p>
            </div>
            <div className="assortment-card">
              <p>
                Тварини та птахи
                <br />
                ведмеді, зайчики, лисички, котики, пташки та інші
              </p>
            </div>
            <div className="assortment-card">
              <p>
                Квіти та комахи: троянди, ромашки, нарциси, павуки, бджілки,
                метелики та інші
              </p>
            </div>
            <div className="assortment-card">
              <p>
                Персонажі з мультфільмів
                <br />
                Принцеси, лицарі, феї, пірати, супергерої тощо
              </p>
            </div>
            <div className="assortment-card">
              <p>
                Професії
                <br />
                моряки, лікарі, поліцейські, космонавти тощо
              </p>
            </div>
            <div className="assortment-card">
              <p>
                Казкові персонажі
                <br />
                Аліса в країні чудес, Кіндер, Кіт в чоботях, баба Яга, клоуни,
                Червона шапочка, Попелюшка, Білосніжка
              </p>
            </div>
            <div className="assortment-card">
              <p>Костюми в ретро стилі, хіп хоп, rock&roll, стиляги.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
