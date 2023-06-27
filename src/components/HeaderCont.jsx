import React from "react";
import { Link } from "react-router-dom";
import { PiYoutubeLogoFill } from "react-icons/pi";

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <PiYoutubeLogoFill className="icon" />
        <Link to="/">beens Youtube</Link>
      </h1>
      <div className="search">
        <label className="glass" htmlFor=""></label>
        <input
          type="text"
          id="searchInput"
          className="input__search"
          placeholder="유튜버를 검색하세요."
          title="검색"
        />
      </div>
    </header>
  );
};

export default HeaderCont;
