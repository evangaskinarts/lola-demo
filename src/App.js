import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ArtistPage } from './ArtistPage';
import { CurArtistKey } from './Data';

export class App extends Component {
  render() {
    return (
        <ArtistPage curArtistKey={CurArtistKey}/>
    );
  }
}


