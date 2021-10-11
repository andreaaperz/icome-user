import { useEffect, useState } from "react";
import { auth, db } from "../../environments/environments";
import Cookies from "universal-cookie";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logoutImg from "../../assets/logout.png";
import FoilCard from "../../components/FoilCard.tsx/FoilCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const cookies = new Cookies();

interface arrayI {
  foil: string;
}

function Foils(): JSX.Element {
  const [list, setList] = useState<arrayI[]>();
  const [error, setError] = useState("");
  let url = window.location.href;
  var id = url.substring(url.lastIndexOf("/") + 1);

  const getName = async () => {
    const itemsArray: {
      foil: string;
    }[] = [];
    await db
      .collection("folios")
      .where("email", "==", id)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          itemsArray.push({
            foil: doc.data().folio,
          });
        });
        setList(itemsArray);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    if (!cookies.get("email")) {
      window.location.href = "/";
    }

    console.log(getName());
  }, []);

  let goDetail = (foil: any) => {
    window.location.href = `/detail/${foil}`;
  };

  if (error) {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="mx-auto">Mis Folios</Navbar.Brand>
          </Container>
        </Navbar>
        <div className="grid">Ha ocurrido un error. Intentalo más tarde.</div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="mx-auto">Mis Folios</Navbar.Brand>
          </Container>
        </Navbar>
        <div className="grid">
          <div className="foils">
            {list ? (
              list.map((item, index) => (
                <FoilCard
                  key={index}
                  foil={item.foil}
                  name={id}
                  onClick={() => goDetail(item.foil)}
                />
              ))
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Foils;
