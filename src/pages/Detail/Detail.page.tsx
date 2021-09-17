import { useEffect } from "react";
import Cookies from "universal-cookie";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const cookies = new Cookies();

function Detail(): JSX.Element {
  let querystring = window.location.search;
  let params = new URLSearchParams(querystring);
  let id = params.get("id");

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mx-auto">Folio No. {id}</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Detail;
