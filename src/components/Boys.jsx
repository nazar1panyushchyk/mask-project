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

export default class Boys extends React.Component {
  render() {
    return (
      <>
        <section className="main-container">
          <div className="main-button">
            <Link to="#">
              <button>Для хлопчиків</button>
            </Link>
            <button>Для дівчаток</button>
            <button>Для дорослих</button>
          </div>
          <div className="main-content">
            <div className="main-costumes">
              <h2>Костюми для хлопчиків</h2>
            </div>
            <div className="costumes-image">
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
              <img
                src={
                  images[
                    "514028628_23986557917672218_6519482903421694482_n.jpg"
                  ]
                }
                alt="main boy"
                className="main-img"
              />
              <img
                src={
                  images["131923146_3645000545587921_1025429878307161822_n.jpg"]
                }
                alt="main boy"
                className="main-img"
              />
              <img
                src={
                  images["489431037_9614327898655126_4522561375937856262_n.jpg"]
                }
                alt="main boy"
                className="main-img"
              />
              <img
                src={
                  images["473619411_3893691500894436_5044462791315566976_n.jpg"]
                }
                alt="main boy"
                className="main-img"
              />
              <img
                src={
                  images["497598622_9852526134835300_5207891267889081940_n.jpg"]
                }
                alt="main boy"
                className="main-img"
              />
              <img
                src={
                  images["481983992_2401667190182897_5195417686428714161_n.jpg"]
                }
                alt="main boy"
                className="main-img"
              />
              <img
                src={
                  images["475233769_3903250043271915_1747979611002738327_n.jpg"]
                }
                alt="main boy"
                className="main-img"
              />
              <img
                src={
                  images["481080961_8048921371899498_148741910745775509_n.jpg"]
                }
                alt="main boy"
                className="main-img"
              />
              <img
                src={
                  images["486306579_3950517685211817_2922505453447509460_n.jpg"]
                }
                alt="main boy"
                className="main-img"
              />
              <img
                src={
                  images[
                    "497521227_9885948238159756_6906962024370149816_n.jpg"
                  ]
                }
                alt="main boy"
                className="main-img"
              />
            </div>
          </div>
        </section>

        <Footer onOpenModal={this.props.onOpenModal} />
      </>
    );
  }
}
