import './App.css';
import React from 'react';
import MusicAlbum from './MusicAlbum';
class App extends React.Component {
  render() {
    return [
      <div className="container">
        <MusicAlbum
          AlbumTitle="mimaamakim"
          ArtistName="Idan Reichel"
          NumberOfSongs="9"
          Length="1:32:23"
          linkToSong="https://www.youtube.com/watch?v=kmW2yAYhMmM"
        />
      </div>,
      <div className="container">
        <MusicAlbum
          AlbumTitle="Folklore"
          ArtistName="Taylor Swift"
          NumberOfSongs="4"
          Length="63:29"
          linkToSong="https://www.youtube.com/watch?v=K-a8s8OLBSE"
        />
      </div>,
      <div className="container">
        <MusicAlbum
          AlbumTitle="random best"
          NumberOfSongs="10"
          linkToSong="https://www.youtube.com/watch?v=LSj_Ko8DjPc"
        />
      </div>,
      <div className="container">
        <MusicAlbum />
      </div>,
    ];
  }
}
export default App;
