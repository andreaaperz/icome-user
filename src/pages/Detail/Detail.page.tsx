import { useEffect } from "react";
import Cookies from "universal-cookie";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logoutImg from "../../assets/logout.png";
import FoilCard from "../../components/FoilCard.tsx/FoilCard";

const cookies = new Cookies();

function Detail(): JSX.Element {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img
            alt=""
            src={logoutImg}
            width="27px"
            height="27px"
            className="d-inline-block align-top "
          />
          <Navbar.Brand className="mx-auto">Folio No. 123</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Detail;
