import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { db } from "../../environments/environments";
import DetailCard from "../../components/DetailCard/DetailCard";

interface arrayI {
  card: any;
  imagen1: any;
  imagen2: any;
  imagen3: any;
}

function Detail(): JSX.Element {
  const [list, setList] = useState<arrayI[]>();
  let queryany = window.location.search;
  let params = new URLSearchParams(queryany);
  let id = params.get("id");

  useEffect(() => {
    const itemsArray: {
      card: any;
      imagen1: any;
      imagen2: any;
      imagen3: any;
    }[] = [];

    db.collection("folios")
      .where("folio", "==", id)
      .onSnapshot((snapshot) => {
        var changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type == "added" && change.doc.data().folio == id) {
            itemsArray.push({
              card: change.doc.data().carta,
              imagen1: change.doc.data().img1,
              imagen2: change.doc.data().img2,
              imagen3: change.doc.data().img2,
            });
          }
          setList(itemsArray);
        });
      });
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mx-auto">Folio No. {id}</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="gridDetail">
        <div className="foils">
          {list ? (
            <div>
              <DetailCard image={list![0].card} title="Carta" />
              <DetailCard title="Evidencia 1" />
              <DetailCard title="Evidencia 2" />
              <DetailCard title="Evidencia 3" />
              <DetailCard title="Evidencia 4" />
              <DetailCard title="Evidencia 5" />
              <DetailCard title="Evidencia 6" />
              <DetailCard title="Evidencia 7" />
              <DetailCard title="Evidencia 8" />
              <DetailCard title="Evidencia 9" />
              <DetailCard title="Evidencia 10" />
              <DetailCard title="Evidencia 11" />
              <DetailCard title="Evidencia 12" />
            </div>
          ) : (
            "...cargando"
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
