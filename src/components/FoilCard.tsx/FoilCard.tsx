import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import fire from "../../environments/environments";
import next from "../../assets/next.png";


function FoilCard(): JSX.Element {
  return (
    <div className="CardContainer">
      <span id="name">Gustavo Nuñez Duque</span>
      <span id="foil">No.Folio</span>
      <img
        alt=""
        src={next}
        width="20px"
        height="20px"
      />
    </div>
  );
}

export default FoilCard;
