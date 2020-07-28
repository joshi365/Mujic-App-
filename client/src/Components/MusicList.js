import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MusicList({ data, editModal, deleteMusic, index }) {
  return (
    <React.Fragment>
      {console.log(index)}
      <div className="container ">
        <div className="p-2 music_main_div mt-3">
          <div className="row">
            <div className="col-4 p-0 normal-text">
              <p className="normal-text">
                <b className="fontColor">Song</b>
              </p>
              <div className="col-12 p-0 normal-text">{data.song}</div>
            </div>
            <div className="col-4 p-0">
              <p className="normal-text">
                <b className="fontColor"> Artist</b>
              </p>
              <div className="col-12 p-0 normal-text">{data.artist}</div>
            </div>
            <div className="col-4 p-0">
              <p className="normal-text">
                <b className="fontColor">Movie/Album</b>
              </p>
              <div className="col-12 p-0 normal-text">{data.album}</div>
            </div>
          </div>
          <div className="col-12 mt-2 p-0">
            <Accordion>
              <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                  <p style={{ color: "#fa2f20 " }} className="normal-text">
                    More Info
                  </p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <div className="row">
                      <div className="col-4 p-0 normal-text">
                        <p className="normal-text">
                          <b className="fontColor">Chords</b>
                        </p>
                        <div className="col-12 p-0 normal-text">
                          {data.chords}
                        </div>
                      </div>
                      <div className="col-4 p-0">
                        <p className="normal-text">
                          <b className="fontColor"> Scale</b>
                        </p>
                        <div className="col-12 p-0 normal-text">
                          {data.scale}
                        </div>
                      </div>
                      <div className="col-4 p-0">
                        <p className="normal-text">
                          <b className="fontColor">Chord Pattern</b>
                        </p>
                        <div className="col-12 p-0 normal-text">
                          {data.chordPattern}
                        </div>
                      </div>
                    </div>
                    <img
                      className="delete_img mt-3 ml-4"
                      src={require("../Assets/images/delete.svg")}
                      onClick={() => deleteMusic(data._id)}
                    />
                    <img
                      className="edit_img mt-3 ml-4"
                      src={require("../Assets/images/pencil.svg")}
                      onClick={() => editModal(data)}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MusicList;
