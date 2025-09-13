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

export default class Girls extends React.Component {
  render() {
    return (
      <>
        <section className="main-container">
          <div className="main-button">
            <Link to="/boys">
              <button>Для хлопчиків</button>
            </Link>
            <Link to="#">
              <button>Для дівчаток</button>
            </Link>
            <Link to="/adults">
              <button>Для дорослих</button>
            </Link>
          </div>
          <div className="main-content">
            <div className="main-costumes">
              <h2>Костюми для дівчаток</h2>
            </div>
            <div className="costumes-image">
              <img
                src={images["main-girl.jpg"]}
                alt="main girl"
                className="main-img"
              />
              <img
                src={images["main-girl2.jpg"]}
                alt="main girl"
                className="main-img"
              />
              <img
                src={images["main-girl3.jpg"]}
                alt="main girl"
                className="main-img"
              />
              <img
                src={images["main-girl4.jpg"]}
                alt="main girl"
                className="main-img"
              />
              <img
                src={images["main-girl5.jpg"]}
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["495492822_9845204275567486_5773343491750058019_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["474036436_3893689004228019_8895715307477073398_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["473617550_3893688554228064_6261245066937513647_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["496269641_9852526141501966_3030392816529609132_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["495364696_9844482015639712_2148664567038944843_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["493055108_9707967232624525_4671263241762530494_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["495443555_2094188457759685_1987882694410701337_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["73313389_2405327879730813_2340684801826095104_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["473619567_3893684220895164_8154815585232359898_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["495584819_9840616936026220_58914296813680645_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["473616237_3893688037561449_4658915723955774220_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images[
                    "514584993_24005286035799406_2754936590086818921_n.jpg"
                  ]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["490147753_9632896953464887_5159082657967231404_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["473618652_3893688857561367_6861235231221469954_n.jpg"]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images[
                    "515675535_24009714248689918_7192348704650212544_n.jpg"
                  ]
                }
                alt="main girl"
                className="main-img"
              />
              <img
                src={
                  images["497491667_3623533114618607_3054534229602128598_n.jpg"]
                }
                alt="main girl"
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
