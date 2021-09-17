import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import next from "../../assets/next.png";

interface FoilCardStats {
  foil: string;
  email: string;
  onClick: () => void;
}

function FoilCard(props: FoilCardStats): JSX.Element {
  return (
    <div className="CardContainer" onClick={props.onClick}>
      <span id="name">Gustavo Nuñez Duque</span>
      <span id="foil">Folio No.{props.foil}</span>
      <img alt="" src={next} width="20px" height="20px" />
    </div>
  );
}

export default FoilCard;
