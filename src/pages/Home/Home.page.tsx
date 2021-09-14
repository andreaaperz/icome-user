import { useEffect } from "react";
import fire from "../../environments/environments";
import Cookies from "universal-cookie";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logoutImg from "../../assets/logout.png";


const cookies = new Cookies();

function Home(): JSX.Element {
  
  const logout = (e: any) => {
    e.preventDefault();

    fire
      .auth()
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
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <img
              alt=""
              src= {logoutImg}
              width="27px"
              height="27px"
              className="d-inline-block align-top "
              onClick={logout}
            />
          <Navbar.Brand  className="mx-auto">
           Mis Folios
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;
