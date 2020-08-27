import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import search_icon from "../assets/search_icon.png";

const SearchBar = ({history}) => {
  const inputRef = useRef();
  const getNews = () => {
    history.push(`/search/${inputRef.current.value}`);
    inputRef.current.value = "";
  };
  return (
    <div className="search-bar">
      <input type="text" placeholder="Búsqueda por palabra" ref={inputRef} />
      <button
        style={{ backgroundImage: `url("${search_icon}")` }}
        type="button"
        onClick={() => getNews()}
      ></button>
    </div>
  );
};

export default withRouter(SearchBar);
