import React, { useEffect, useMemo, useRef } from "react";


const NewsPage = ({ location, news, hasError, isLoading, fetchNews }) => {
  const { apiFilter, value } = location.state;

  console.log(hasError);

  useEffect(() => {

  }, [news]);

  if (hasError) {
    return (
      <div className="container">
        <h6>Error al cargar las noticias</h6>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container">
        <h6>Cargando noticias…</h6>
      </div>
    );
  }

  return <div className="container"></div>;
};

export default NewsPage;
