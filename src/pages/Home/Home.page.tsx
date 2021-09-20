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
  folio: any;
  email: any;
}

function Home(): JSX.Element {
  const [list, setList] = useState<arrayI[]>();

  const logout = (e: any) => {
    e.preventDefault();

    auth
      .signOut()
      .then(() => {
        cookies.remove("email", { path: "/" });
        cookies.remove("password", { path: "/" });
        window.location.href = "./";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!cookies.get("email")) {
      window.location.href = "./";
    }

    setList([]);
    const itemsArray: {
      folio: string;
      email: string;
    }[] = [];

    db.collection("folios")
      //.where("correo", "==", cookies.get("email"))
      .onSnapshot((snapshot) => {
        var changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type == "added") {
            itemsArray.push({
              folio: change.doc.data().folio,
              email: change.doc.data().correo,
            });
          }
        });
        setList(itemsArray);
      });
  }, []);

  let goDetail = (foil: any) => {
    window.location.href = `./detail/${foil}`;
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img
            alt=""
            id="logout"
            src={logoutImg}
            width="27px"
            height="27px"
            className="d-inline-block align-top "
            onClick={logout}
          />
          <Navbar.Brand className="mx-auto">Mis Folios</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="grid">
        <div className="foils">
          {list ? (
            list.map((item, index) => (
              <FoilCard
                key={index}
                foil={item.folio}
                email={item.email}
                onClick={() => goDetail(item.folio)}
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

export default Home;
