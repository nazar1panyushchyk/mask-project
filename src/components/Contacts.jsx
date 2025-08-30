import React from "react";
import "../css/contacts.css";
import images from "../imageLoader";
import { FiPhone, FiMapPin } from "react-icons/fi";

export default class Contacts extends React.Component {
  render() {
    return (
      <section className="contacts-container">
        <div className="girl-image"></div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2218.3756090306733!2d22.264307739856825!3d48.607774836936585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47391951bb12c57d%3A0x1ffd1d42d128288f!2sMaskarad%20House!5e0!3m2!1suk!2sua!4v1754513820623!5m2!1suk!2sua"
            width="600"
            height="555"
            style={{ border: "0", borderRadius: "20px 0 0 20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="info">
          <div className="phones">
            <p>
              <span>Зв'язатися з нами:</span>
            </p>
            <a href="">
              <FiPhone size="18" /> 050-551-4125 - Неллі
            </a>
            <a className="second-phone" href="">
              <FiPhone size="18" /> 050-956-5080 - Наташа
            </a>
          </div>
          <div className="address">
            <p>
              <span>Місцерозташування:</span>
            </p>
            <FiMapPin size="23" />
            м. Ужгород, Закарпатська область
            <br />
            вулиця Заньковецької, 89
            <br />
            (приміщення УжНУ)
          </div>
          <div className="socials">
            <p>
              <span>Соцмережі:</span>
            </p>
            <a
              href="https://www.facebook.com/groups/575339462985732/?locale=uk_UA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images["facebook.svg"]} alt="" /> <p>Facebook</p>
            </a>
            <a
              href="https://www.instagram.com/maskarad_house_uz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="instagram" src={images["instagram.svg"]} alt="" />{" "}
              <p>Instagram</p>
            </a>
          </div>
          <div className="schedule">
            <p>
              <span>Графік роботи:</span>
            </p>
            <p>Понеділок-Субота - 13:00-19:00</p>
            <p>Неділя - вихідний</p>
          </div>
        </div>
        <div className="girl-image2"></div>
      </section>
    );
  }
}
