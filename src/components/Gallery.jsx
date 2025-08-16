import React from "react";
import images from "../imageLoader";
import galleryData from "../galleryData.json";
import "../css/gallery.css";

export default class Gallery extends React.Component {
    render() {
        const categories = [...new Set(galleryData.map((item) => item.category))];
        return (
          <div className="gallery">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Обрати категорію
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Овочі, фрукти, гриби
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Звірята
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Новий рік
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Квіти, природні явища
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Свято осені
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Хелловін
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Казкові, мультгерої
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ляльки, цукерки
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Пірати, моряки, солдати
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Принци, королі, мушкетери
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ангели
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Народні костюми
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Сукні
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Східні, китайські костюми
                  </a>
                </li>
              </ul>
            </div>
            {categories.map((category) => (
              <div key={category}>
                <h2>{category}</h2>

                <div className="gallery-image">
                  {galleryData
                    .filter((item) => item.category === category)
                    .map(({ image }, idx) => (
                      <img key={idx} src={images[image]} alt={category} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        );
    }
};