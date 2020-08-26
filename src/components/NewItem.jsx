import React from "react";
import no_image from "../assets/blank_image.jpg";

const NewItem = ({ item }) => {
  const { img_url, source_name, url } = item;

  const date = new Date(item.date * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div
      className="news-card"
      style={{ backgroundImage: `url("${img_url || no_image}")` }}
    >
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
        <div className="more-information">{source_name}</div>
      </div>
    </div>
  );
};

export default NewItem;
