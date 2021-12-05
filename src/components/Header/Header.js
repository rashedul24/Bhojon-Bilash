import React from "react";
import "./Header.css";
import cover from "../../image/cover.jpg";

const Header = () => {
  return (
    //website header
    <div className="header d-flex justify-content-between">
      <div className="header-text">
        <h1>Bhojon Bilash </h1>
        <h2>( ভোজন বিলাস )</h2>
        <p className="text-primary">Touch of mother's hand </p>
        <h4> Good Food, Good Life</h4>
        <h2 className="text-danger">
          Enjoy 20% discount, order over 1000 BDT.
        </h2>
      </div>
      <div>
        <img className="cover-image" src={cover} alt="" />
      </div>
    </div>
  );
};

export default Header;
