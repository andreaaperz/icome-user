import next from "../../assets/next.png";

interface FoilCardStatsProps {
  foil?: string;
  name?: string;
  onClick?: () => void;
}

function FoilCard(props: FoilCardStatsProps): JSX.Element {
  return (
    <div className="CardContainer" onClick={props.onClick}>
      <span id="name">{props.name}</span>
      <span id="foil">Folio {props.foil}</span>
      <img alt="" src={next} width="20px" height="20px" />
    </div>
  );
}

export default FoilCard;
