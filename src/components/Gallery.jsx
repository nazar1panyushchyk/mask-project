import React from "react";
import images from "../imageLoader";
import galleryData from "../galleryData.json";
import "../css/gallery.css";

export default class Gallery extends React.Component {
  state = {
    selectedCategory: null,
  };

  handleCategory = (categoryName) => {
    this.setState({ selectedCategory: categoryName });
  };

  render() { 
    const { selectedCategory } = this.state;
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
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory("Овочі, фрукти, гриби")}
              >
                Овочі, фрукти, гриби
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory("Звірята")}
              >
                Звірята
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Новий рік
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Квіти, природні явища
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Свято осені
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Хелловін
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Казкові, мультгерої
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Ляльки, цукерки
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Пірати, моряки, солдати
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Принци, королі, мушкетери
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Ангели
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Народні костюми
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Сукні
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.handleCategory(categoryName)}
              >
                Східні, китайські костюми
              </a>
            </li>
          </ul>
        </div>
        {selectedCategory === null
          ? categories.map((category) => (
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
            ))
          : ( 
             <div>
                <h2>{selectedCategory}</h2>
                <div className="gallery-image">
                  {galleryData
                    .filter((item) => item.category === selectedCategory)
                    .map(({ image }, idx) => (
                      <img
                        key={idx}
                        src={images[image]}
                        alt={selectedCategory}
                      />
                    ))}
                </div>
              </div>
            )}
      </div>
    );
  }
}
