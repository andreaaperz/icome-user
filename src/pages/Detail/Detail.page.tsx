import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { db } from "../../environments/environments";
import DetailCard from "../../components/DetailCard/DetailCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

interface arrayI {
  card1: any;
  card2: any;
  croquis: any;
  materiales: any;
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
  imagen13: any;
  imagen14: any;
  imagen15: any;
}

function Detail(): JSX.Element {
  const [list, setList] = useState<arrayI[]>();
  let url = window.location.href;
  var id = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    const itemsArray: {
      card1: any;
      card2: any;
      croquis: any;
      materiales: any;
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
      imagen13: any;
      imagen14: any;
      imagen15: any;
    }[] = [];

    db.collection("folios")
      .where("folio", "==", id)
      .onSnapshot((snapshot) => {
        var changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type == "added" && change.doc.data().folio == id) {
            itemsArray.push({
              card1: change.doc.data().carta,
              card2: change.doc.data().carta2,
              croquis: change.doc.data().croquis,
              materiales: change.doc.data().materiales,
              imagen1: change.doc.data().img1,
              imagen2: change.doc.data().img2,
              imagen3: change.doc.data().img3,
              imagen4: change.doc.data().img4,
              imagen5: change.doc.data().img5,
              imagen6: change.doc.data().img6,
              imagen7: change.doc.data().img7,
              imagen8: change.doc.data().img8,
              imagen9: change.doc.data().img9,
              imagen10: change.doc.data().img010,
              imagen11: change.doc.data().img011,
              imagen12: change.doc.data().img012,
              imagen13: change.doc.data().img013,
              imagen14: change.doc.data().img014,
              imagen15: change.doc.data().img015,
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
          <Navbar.Brand className="mx-auto">Folio {id}</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="gridDetail">
        <div className="foils">
          {list ? (
            <div>
              <DetailCard
                image={list[0].card1}
                title="Carta 1"
                color="#7dcea0"
              />
              <DetailCard
                image={list[0].card2}
                title="Carta 2"
                color="#7dcea0"
              />
              <DetailCard
                image={list[0].croquis}
                title="Croquis"
                color="#f1948a"
              />
              <DetailCard
                image={list[0].materiales}
                title="Materiales"
                color="#85c1e9"
              />
              <DetailCard
                image={list[0].imagen1}
                title="Evidencia 1"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen2}
                title="Evidencia 2"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen3}
                title="Evidencia 3"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen4}
                title="Evidencia 4"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen5}
                title="Evidencia 5"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen6}
                title="Evidencia 6"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen7}
                title="Evidencia 7"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen8}
                title="Evidencia 8"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen9}
                title="Evidencia 9"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen10}
                title="Evidencia 10"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen11}
                title="Evidencia 11"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen12}
                title="Evidencia 12"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen13}
                title="Evidencia 13"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen14}
                title="Evidencia 14"
                color="#f9e79f"
              />
              <DetailCard
                image={list[0].imagen15}
                title="Evidencia 15"
                color="#f9e79f"
              />
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
