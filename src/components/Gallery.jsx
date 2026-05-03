import images from "../imageLoader";
import galleryData from "../galleryData.json";
import { useState } from "react";
import "../css/gallery.css";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const categories = [...new Set(galleryData.map((item) => item.category))];
  return (
    <div className="gallery">
      <div className="dropdown btn-primary">
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
              onClick={() => handleCategory("Овочі, фрукти, гриби")}
            >
              Овочі, фрукти, гриби
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Звірята")}
            >
              Звірята
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Новий рік")}
            >
              Новий рік
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Квіти, природні явища")}
            >
              Квіти, природні явища
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Свято осені")}
            >
              Свято осені
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Хелловін")}
            >
              Хелловін
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Казкові, мульт, супергерої")}
            >
              Казкові, мульт, супергерої
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Ляльки, цукерки")}
            >
              Ляльки, цукерки
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Пірати, моряки, солдати")}
            >
              Пірати, моряки, солдати
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Принци, королі, мушкетери")}
            >
              Принци, королі, мушкетери
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Ангели")}
            >
              Ангели
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Народні костюми")}
            >
              Народні костюми
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Сукні")}
            >
              Сукні
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => handleCategory("Східні, китайські костюми")}
            >
              Східні, китайські костюми
            </a>
          </li>
        </ul>
      </div>
      {selectedCategory === null ? (
        categories.map((category) => (
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
      ) : (
        <div>
          <h2>{selectedCategory}</h2>
          <div className="gallery-image">
            {galleryData
              .filter((item) => item.category === selectedCategory)
              .map(({ image }, idx) => (
                <img key={idx} src={images[image]} alt={selectedCategory} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
