import { useEffect, useState } from "react";
import { auth, db } from "../../environments/environments";
import Cookies from "universal-cookie";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logoutImg from "../../assets/logout.png";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import UserCard from "../../components/UserCard/UserCard";

const cookies = new Cookies();

interface arrayI {
  name: string;
  email: string;
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
      name: string;
      email: string;
    }[] = [];

    db.collection("empleados").onSnapshot((snapshot) => {
      var changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          itemsArray.push({
            name: change.doc.data().nombre,
            email: change.doc.data().correo,
          });
        }
      });
      setList(itemsArray);
      console.log(list);
    });
  }, []);

  let goFoils = (name: any) => {
    window.location.href = `./foils/${name}`;
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
          <Navbar.Brand className="mx-auto">Empleados</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="grid">
        <div className="foils">
          {list ? (
            list.map((item, index) => (
              <UserCard
                key={index}
                name={item.name}
                onClick={() => goFoils(item.name)}
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
