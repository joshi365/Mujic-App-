import React from "react";
import Popup from "../Popup";

function MainPage({
  modalToggler,
  onChnangeHnadler,
  onSubmitHandler,
  modalShow,
  song,
  artist,
  album,
  scale,
  chords,
  chordPattern,
}) {
  return (
    <React.Fragment>
      <div className="profile_main_page mt-4 pt-5">
        <h1 className="mid-text">Add your own song</h1>
        <img
          className="image_add"
          src={require("../../Assets/images/plus.svg")}
          onClick={modalToggler}
        />

        {/************************ * Modal ****************************/}

        <Popup
          modalToggler={modalToggler}
          onChnangeHnadler={onChnangeHnadler}
          onSubmitHandler={onSubmitHandler}
          modalShow={modalShow}
          song={song}
          artist={artist}
          album={album}
          scale={scale}
          chords={chords}
          chordPattern={chordPattern}
        />
      </div>
    </React.Fragment>
  );
}

export default MainPage;
