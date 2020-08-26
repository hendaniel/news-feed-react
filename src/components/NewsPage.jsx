import React, { useEffect } from "react";
import NewItem from "./NewItem";

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

  if (hasError) {
    return (
      <div className="page-message">
        <h6>Error al cargar las noticias</h6>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="page-message" >
        <h6>Cargando noticias…</h6>
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
