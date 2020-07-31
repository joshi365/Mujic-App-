import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../store/actions/auth";
import {
  userData,
  addMusic,
  showAllMusic,
  deleteSong,
} from "../store/actions/userPages";
import Loader from "../Components/Loader";
import isEmpty from "../store/validation/isEmpty";
import MainPage from "../Components/profileScreenComponent/MainPage";
import IfNoProfile from "../Components/profileScreenComponent/IfNoProfile";
import MusicList from "../Components/MusicList";
import EditPopup from "./EditPopup";
import Navbar from "../Components/Navbar";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      modalShow: false,
      editModalShow: false,
      song: "",
      artist: "",
      album: "",
      scale: "",
      chords: "",
      chordPattern: "",
      allMusic: {},
      editModalData: {},
      serach: "",
      profileShow: false,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (
      nextProps.data !== nextState.allData &&
      nextProps.allMusicData !== nextState.allMusic
    ) {
      return {
        allData: nextProps.data,
        allMusic: nextProps.allMusicData,
      };
    }
    return null;
  }

  componentDidMount() {
    this.props.showAllMusic(this.props.history);
    this.props.userData();
  }

  onChnangeHnadler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSearchChange = (e) => {
    this.setState({ serach: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { song, artist, album, scale, chords, chordPattern } = this.state;
    const data = {
      song: song,
      artist: artist,
      album: album,
      scale: scale,
      chords: chords,
      chordPattern: chordPattern,
    };
    this.props.addMusic(data);
    this.modalToggler();
  };

  modalToggler = (e) => {
    this.setState({
      modalShow: !this.state.modalShow,
    });
  };

  editModalToggler = (e) => {
    this.setState({
      editModalShow: !this.state.editModalShow,
    });
  };

  // Set the selected modal data to state and then open the modal with previous value for edit

  editModal = (data) => {
    this.setState({
      editModalData: data,
    });

    setTimeout(() => {
      this.editModalToggler();
    }, 200);
  };

  deleteMusic = (id) => {
    this.props.deleteSong(id);
  };

  logout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  profileFormShow = (e) => {
    e.preventDefault();
    this.setState({
      profileShow: !this.state.profileShow,
    });
    console.log("hihihii");
  };
  render() {
    const {
      song,
      artist,
      album,
      scale,
      chords,
      chordPattern,
      allMusic,
      serach,
    } = this.state;
    let dashboardContent;

    var filterMusic;

    if (!isEmpty(allMusic)) {
      filterMusic = allMusic.filter((music) => {
        return music.song.toLowerCase().includes(serach.toLocaleLowerCase());
      });
    }

    if (isEmpty(this.props.data) && this.props.loading) {
      dashboardContent = <Loader message="Logging In Please Wait ......" />;

      /*******************************************************************************
       *                             If profile Found
       *******************************************************************************/
    } else if (this.props.data !== null) {
      let content = "";

      if (isEmpty(filterMusic)) {
        content = <h1>Loading .......</h1>;
      }

      if (!isEmpty(filterMusic)) {
        content = filterMusic.map((data, index) => (
          <React.Fragment key={data._id}>
            <MusicList
              data={data}
              index={index + 1}
              //MODAl
              editModal={this.editModal}
              deleteMusic={this.deleteMusic}
            />
          </React.Fragment>
        ));
      }
      dashboardContent = (
        <React.Fragment>
          <MainPage
            modalToggler={this.modalToggler}
            onChnangeHnadler={this.onChnangeHnadler}
            onSubmitHandler={this.onSubmitHandler}
            song={song}
            artist={artist}
            album={album}
            scale={scale}
            chords={chords}
            chordPattern={chordPattern}
            modalShow={this.state.modalShow}
          />
          {/*MUSIC EDIT POPUP */}
          <EditPopup
            editModalData={this.state.editModalData}
            editModalToggler={this.editModalToggler}
            editModalShow={this.state.editModalShow}
            onChnangeHnadler={this.onChnangeHnadler}
          />
          {content}
        </React.Fragment>
      );

      /*************************************************************************************
       *                NO profile
       * *********************************************************************************/
    } else if (this.props.data === null) {
      dashboardContent = <IfNoProfile />;
    }

    var nav;

    if (!isEmpty(this.state.allMusic)) {
      nav = (
        <Navbar onSearchChange={this.onSearchChange} logout={this.logout} />
      );
    } else {
      nav = null;
    }

    return (
      <React.Fragment>
        {console.log(this.state.allMusic)}
        <div className="profile_page_all">
          {nav}
          {this.props.loading ? <Loader /> : dashboardContent}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.profileReducer.profileData,
  loading: state.loader.loading,
  allMusicData: state.music.allMusic,
});

export default connect(mapStateToProps, {
  userData,
  logoutUser,
  addMusic,
  showAllMusic,
  deleteSong,
})(withRouter(ProfileScreen));
