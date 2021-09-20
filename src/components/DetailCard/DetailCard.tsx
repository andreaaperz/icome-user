import React, { useEffect } from "react";
import NoImg from "../../assets/noImg.png";

interface DetailCard {
  image?: string;
  title: string;
}

function DetailCard(props: DetailCard): JSX.Element {
  if (props.image) {
    return (
      <div className="CardDetailContainer">
        <div className="DetailTitle">{props.title}</div>
        {props.image != "null" ? (
          <div>
            <img
              alt=""
              className="base64Image"
              src={"data:image/png;base64, " + props.image}
            />{" "}
            <div className="Download">
              <a
                href={"data:image/png;base64, " + props.image}
                download={`${props.title}`}
              >
                Descargar
              </a>
            </div>
          </div>
        ) : (
          <img alt="" className="NoImage" src={NoImg} />
        )}
      </div>
    );
  } else {
    return (
      <div className="CardDetailContainer">
        <div className="DetailTitle">{props.title}</div>
        <img alt="" className="NoImage" src={NoImg} />
      </div>
    );
  }
}

export default DetailCard;
