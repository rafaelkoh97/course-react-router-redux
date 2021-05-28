import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from './../actions';
import './../assets/styles/components/Player.scss';
import NotFound from './../containers/NotFound';

const Player = props => {

  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div>
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4"/>
      </video>
      <div className="Player-back" onClick={() => props.history.goBack()}>
        <button type="button">
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
}

const mapStateToProps = state => {
  return {
    playing: state.playing
  }
}

const mapDispatchToProps = {
  getVideoSource
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);