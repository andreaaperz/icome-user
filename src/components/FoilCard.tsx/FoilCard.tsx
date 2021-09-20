import React, { useState, useEffect } from "react";
import { db } from "../../environments/environments";
import next from "../../assets/next.png";

interface FoilCardStats {
  foil: string;
  email: string;
  onClick: () => void;
}

function FoilCard(props: FoilCardStats): JSX.Element {
  const [name, setName] = useState("");
  
  const getName = async () => {
    let name = "";
    await db
      .collection("folios")
      .where("folio", "==", props.foil)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          name = doc.data().nombre;
        });
      });
    setName(name);
  };

  useEffect(() => {
    console.log(getName());
  });

  return (
    <div className="CardContainer" onClick={props.onClick}>
      <span id="name">{name}</span>
      <span id="foil">Folio No.{props.foil}</span>
      <img alt="" src={next} width="20px" height="20px" />
    </div>
  );
}

export default FoilCard;
