import React, { useEffect } from "react";
import NewItem from "./NewItem";
import loader from "../assets/loader.gif";

const NewsPage = ({
  api: { apiFilter, value },
  news,
  hasError,
  isLoading,
  fetchNews,
}) => {
  useEffect(() => {
    fetchNews(apiFilter, value);
  }, []);

  if (!hasError) {
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
          <img src={loader}></img>
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
