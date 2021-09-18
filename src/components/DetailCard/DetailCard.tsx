import React, { useState } from "react";
import NoImg from "../../assets/noImg.png";

interface DetailCard {
  image?: string;
  title: string;
}

function DetailCard(props: DetailCard): JSX.Element {
  return (
    <div className="CardDetailContainer">
      <div className="DetailTitle">{props.title}</div>
      {props.image ? (
        <img
          alt=""
          className="base64Image"
          src={"data:image/png;base64, " + props.image}
        />
      ) : (
        <img alt="" className="NoImage" src={NoImg} />
      )}
      <div className="Download">
        <a href={"data:image/png;base64, " + props.image} download>
          Descargar
        </a>
      </div>
    </div>
  );
}

export default DetailCard;
