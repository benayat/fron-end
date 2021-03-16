import React from 'react';

class MusicAlbum extends React.Component {
  constructor(props) {
    super();
    this.AlbumTitle = props.AlbumTitle;
    this.ArtistName = props.ArtistName;
    this.NumberOfSongs = props.NumberOfSongs;
    this.Length = props.Length;
    this.linkToSong = props.linkToSong;
  }

  render() {
    return [
      <div className="container">
        <div>Album title: {this.AlbumTitle || 'Fetch the Bolt Cutters'}</div>
        <div>Artist Name: {this.ArtistName || 'Fiona Apple'}</div>
        <div>Number Of Songs: {this.NumberOfSongs || '1'}</div>
        <div>Length: {this.Length || '51:49'}</div>
      </div>,
    ];
  }
}
export default MusicAlbum;
