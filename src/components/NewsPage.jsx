import React, { useEffect } from "react";
import NewItem from "./NewItem";
import loader from "../assets/loader.gif";
import * as moment from "moment";
import { getNews } from "../actions";

const NewsPage = ({
  news,
  hasError,
  isLoading,
  newsByCategory,
  newsBySearch,
  newsByDate,
  match,
}) => {
  const getNews = () => {
    if (match.params.hasOwnProperty("filter")) {
      if (match.params.filter === "home") {
        const today = moment().format("YYYY-MM-DD");
        newsByDate(today);
      }
    }
    if (match.params.hasOwnProperty("id")) {
      newsByCategory(match.params.id);
    }
  };

  useEffect(() => {
    getNews();
  }, [match.params]);

  if (hasError) {
    return (
      <div className="page-content">
        <div className="page-message">
          <h2>Error al cargar las noticas</h2>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="page-content">
        <div className="page-message">
          <img alt="loading" src={loader}></img>
        </div>
      </div>
    );
  }
  return (
    <div className="page-content">
      {news.map((item) => {
        return <NewItem item={item} />;
      })}
    </div>
  );
};

export default NewsPage;
