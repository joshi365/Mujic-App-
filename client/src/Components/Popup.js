import React from "react";
import Modal from "react-bootstrap/Modal";

function Popup({
  modalShow,
  modalToggler,
  song,
  artist,
  album,
  scale,
  chords,
  chordPattern,
  onChnangeHnadler,
  onSubmitHandler,
}) {
  return (
    <React.Fragment>
      <Modal show={modalShow} size="md" onHide={modalToggler} centered>
        <Modal.Body>
          <div className="modal-body text-center">
            <div className="col-12 mb-3">
              <h1 style={{ color: "black" }} className="mid-text">
                Add Your Song
              </h1>
            </div>
            <div className="row">
              <div className="col-sm-6 mb-4">
                <input
                  className="input-login popup_input_width"
                  type="text"
                  placeholder="Song"
                  name="song"
                  value={song}
                  onChange={onChnangeHnadler}
                />
              </div>
              <div className="col-sm-6 mb-4">
                <input
                  className="input-login popup_input_width"
                  type="text"
                  placeholder="Artist"
                  name="artist"
                  value={artist}
                  onChange={onChnangeHnadler}
                />
              </div>
              <div className="col-sm-6 mb-4">
                <input
                  className="input-login popup_input_width"
                  type="text"
                  placeholder="Movie/Album"
                  name="album"
                  value={album}
                  onChange={onChnangeHnadler}
                />
              </div>
              <div className="col-sm-6 mb-4">
                <input
                  className="input-login popup_input_width"
                  type="text"
                  placeholder="Scale"
                  name="scale"
                  value={scale}
                  onChange={onChnangeHnadler}
                />
              </div>
              <div className="col-sm-6 mb-4">
                <input
                  className="input-login popup_input_width"
                  type="text"
                  placeholder="Chords"
                  name="chords"
                  value={chords}
                  onChange={onChnangeHnadler}
                />
              </div>
              <div className="col-sm-6 mb-4">
                <input
                  className="input-login popup_input_width"
                  type="text"
                  placeholder="Chord Pattern"
                  name="chordPattern"
                  value={chordPattern}
                  onChange={onChnangeHnadler}
                />
              </div>
              <div className="col-12">
                <button
                  onClick={onSubmitHandler}
                  style={{ width: "40%" }}
                  className="login-button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default Popup;
