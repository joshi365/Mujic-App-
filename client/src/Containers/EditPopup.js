import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { editSong } from "../store/actions/userPages";

class EditPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: "",
      artist: "",
      album: "",
      scale: "",
      chords: "",
      chordPattern: "",
      id: "",
    };
  }

  componentWillReceiveProps(props) {
    const allData = this.props.editModalData;

    this.setState({
      song: allData.song,
      artist: allData.artist,
      album: allData.album,
      scale: allData.scale,
      chords: allData.chords,
      chordPattern: allData.chordPattern,
      id: allData._id,
    });
  }

  onChnangeHnadler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { song, artist, album, scale, chords, chordPattern, id } = this.state;
    const data = {
      song: song,
      artist: artist,
      album: album,
      scale: scale,
      chords: chords,
      chordPattern: chordPattern,
      id: id,
    };

    this.props.editSong(data);
    this.props.editModalToggler();
  };

  render() {
    const { song, artist, album, scale, chords, chordPattern } = this.state;
    return (
      <React.Fragment>
        <Modal
          show={this.props.editModalShow}
          size="md"
          onHide={this.props.editModalToggler}
          centered
        >
          <Modal.Body>
            <div className="modal-body text-center">
              <div className="col-12 mb-3">
                <h1 style={{ color: "black" }} className="mid-text">
                  Edit Song
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
                    onChange={this.onChnangeHnadler}
                  />
                </div>
                <div className="col-sm-6 mb-4">
                  <input
                    className="input-login popup_input_width"
                    type="text"
                    placeholder="Artist"
                    name="artist"
                    value={artist}
                    onChange={this.onChnangeHnadler}
                  />
                </div>
                <div className="col-sm-6 mb-4">
                  <input
                    className="input-login popup_input_width"
                    type="text"
                    placeholder="Movie/Album"
                    name="album"
                    value={album}
                    onChange={this.onChnangeHnadler}
                  />
                </div>
                <div className="col-sm-6 mb-4">
                  <input
                    className="input-login popup_input_width"
                    type="text"
                    placeholder="Scale"
                    name="scale"
                    value={scale}
                    onChange={this.onChnangeHnadler}
                  />
                </div>
                <div className="col-sm-6 mb-4">
                  <input
                    className="input-login popup_input_width"
                    type="text"
                    placeholder="Chords"
                    name="chords"
                    value={chords}
                    onChange={this.onChnangeHnadler}
                  />
                </div>
                <div className="col-sm-6 mb-4">
                  <input
                    className="input-login popup_input_width"
                    type="text"
                    placeholder="Chord Pattern"
                    name="chordPattern"
                    value={chordPattern}
                    onChange={this.onChnangeHnadler}
                  />
                </div>
                <div className="col-12">
                  <button
                    onClick={this.onSubmitHandler}
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
}

const mapStateToProps = (State) => ({});

export default connect(mapStateToProps, { editSong })(EditPopup);
