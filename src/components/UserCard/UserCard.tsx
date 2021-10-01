import next from "../../assets/next.png";
import user from "../../assets/usuario.png"

interface UserCardProps {
  name?: string;
  onClick?: () => void;
}

function UserCard(props: UserCardProps): JSX.Element {
  return (
    <div className="User-CardContainer" onClick={props.onClick}>
      <img alt="user icon" src={user} width="27px" height="27px" className="user-icon"/>
      <span id="name">{props.name}</span>
      <img alt="arrow icon" src={next} width="20px" height="20px" className="user-icon-arrow" />
    </div>
  );
}

export default UserCard;
