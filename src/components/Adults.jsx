import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import images from "../imageLoader";
import "../css/header.css";
import "../css/main.css";
import "../css/footer.css";
import "../css/costumes.css";
import { TbShirt } from "react-icons/tb";
import { FiPhone, FiMapPin } from "react-icons/fi";

export default class Adults extends React.Component {
  render() {
    return (
      <>
        <section className="main-container">
          <div className="main-button">
            <Link to="/boys">
              <button>Для хлопчиків</button>
            </Link>
            <Link to="/girls">
              <button>Для дівчаток</button>
            </Link>
            <Link to="#">
              <button>Для дорослих</button>
            </Link>
          </div>
          <div className="main-content">
            <div className="main-costumes">
              <h2>Костюми для дорослих</h2>
            </div>
            <div className="costumes-image">
              <img
                src={
                  images["486962400_2456634304701437_8987871432419796634_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["474625269_3900588213538098_5518154689704963857_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["473994028_3893687740894812_4410140334531494740_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["482026052_2443385886007826_4018589056247490160_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["495375937_9858223057598941_4653009698611466589_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images[
                    "514277018_23993052487022761_7832565373468687738_n.jpg"
                  ]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images[
                    "514277854_24004988872495789_4353467111188391412_n.jpg"
                  ]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["257379137_3022787721318156_6091193901633390303_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["473997773_3893688077561445_1985978697867744262_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["474061135_3893687737561479_4901661581263276251_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["474014329_3893688040894782_1328244302431919067_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["473615356_3893687944228125_2250382546587199688_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["473616687_3893688060894780_1975288589734303008_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["475742149_9203727333048520_3311363075579697231_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["475810568_9203727339715186_1684892097687938683_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images[
                    "515074334_24003734919287851_7337668467363067280_n.jpg"
                  ]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["482072919_3939435856320000_8016707450508592612_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["475173832_3900588500204736_8357979720771977298_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["473599726_3893687027561550_2119981210410852564_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["473617231_3893687034228216_8647008083291763591_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
              <img
                src={
                  images["257715359_3022759421320986_6135878157635833979_n.jpg"]
                }
                alt="main adult"
                className="main-img"
              />
            </div>
            <div className="go-to-gallery">
              <Link to="/gallery">
                <button>Перейти до галереї</button>
              </Link>
            </div>
          </div>
        </section>

        <Footer onOpenModal={this.props.onOpenModal} />
      </>
    );
  }
}
