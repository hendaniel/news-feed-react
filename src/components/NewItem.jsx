import React from "react";
import no_new_image from "../assets/blank_image.jpg";

const NewItem = ({ item }) => {
  const { date, img_url, url } = item;
  console.log(img_url);
  return (
    <div className="news-card" style={{ backgroundImage: `url("${img_url || no_new_image}")` }}>
      <div className="new-container">
        <div className="content">
          <button class="btn" onClick={() => window.open(url, "_blank")}>
            Ir a noticia
          </button>
        </div>
      </div>
      <div className="informations-container">
        <h2 className="title">{item.title}</h2>
        <p className="sub-title">{date}</p>
        <div className="more-information">Hola</div>
      </div>
    </div>
  );
};

export default NewItem;
