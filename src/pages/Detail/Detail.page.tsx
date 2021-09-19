import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { db } from "../../environments/environments";
import DetailCard from "../../components/DetailCard/DetailCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

interface arrayI {
  card: any;
  imagen1: any;
  imagen2: any;
  imagen3: any;
  imagen4: any;
  imagen5: any;
  imagen6: any;
  imagen7: any;
  imagen8: any;
  imagen9: any;
  imagen10: any;
  imagen11: any;
  imagen12: any;
}

function Detail(): JSX.Element {
  const [list, setList] = useState<arrayI[]>();
  let url = window.location.href;
  var id = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    const itemsArray: {
      card: any;
      imagen1: any;
      imagen2: any;
      imagen3: any;
      imagen4: any;
      imagen5: any;
      imagen6: any;
      imagen7: any;
      imagen8: any;
      imagen9: any;
      imagen10: any;
      imagen11: any;
      imagen12: any;
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
              imagen3: change.doc.data().img3,
              imagen4: change.doc.data().img4,
              imagen5: change.doc.data().img5,
              imagen6: change.doc.data().img6,
              imagen7: change.doc.data().img7,
              imagen8: change.doc.data().img8,
              imagen9: change.doc.data().img9,
              imagen10: change.doc.data().img10,
              imagen11: change.doc.data().img11,
              imagen12: change.doc.data().img12,
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
              <DetailCard image={list![0].imagen1} title="Evidencia 1" />
              <DetailCard image={list![0].imagen2} title="Evidencia 2" />
              <DetailCard image={list![0].imagen3} title="Evidencia 3" />
              <DetailCard image={list![0].imagen4} title="Evidencia 4" />
              <DetailCard image={list![0].imagen5} title="Evidencia 5" />
              <DetailCard image={list![0].imagen6} title="Evidencia 6" />
              <DetailCard image={list![0].imagen7} title="Evidencia 7" />
              <DetailCard image={list![0].imagen8} title="Evidencia 8" />
              <DetailCard image={list![0].imagen9} title="Evidencia 9" />
              <DetailCard image={list![0].imagen10} title="Evidencia 10" />
              <DetailCard image={list![0].imagen11} title="Evidencia 11" />
              <DetailCard image={list![0].imagen12} title="Evidencia 12" />
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
