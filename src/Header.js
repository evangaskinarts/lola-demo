import React, { Component } from 'react';
import './App.css';
import { IconURLs, Artists, CurArtistKey } from './Data';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
        headerType: ` ${this.props.headerType}`,
        ifScrolled: "",
        icon1: this.props.icon1,
        icon2: this.props.icon2,
        searchBoxClasses: "nav-search-box",
        inputBlockClasses: "input-block"
    }
  }

  dropDown = () => {
      this.state.searchBoxClasses !== "nav-search-box drop-down" ? (
      this.setState({
          searchBoxClasses: "nav-search-box drop-down",
          inputBlockClasses: "input-block input-focused"
      })
    ) : (
      this.setState({
          searchBoxClasses: "nav-search-box un-drop",
          inputBlockClasses: "input-block"
      })
    );
  }


  render() {

    var headerClasses = "header" + this.state.headerType + this.state.ifScrolled;

    return (
      <div className={headerClasses} style={{backgroundImage: `url(${Artists[this.props.curArtistKey].imgURL})`}}>
        <div className="header-icon hdr-icon-1" style={{backgroundImage: `url(${IconURLs[this.state.icon1]})`}}></div>
            <div className={this.state.inputBlockClasses}>
                <div className="search-icon" style={{backgroundImage: `url(${IconURLs.searchWhite})`}}></div>
                <input placeholder="search" type="text" className="input-header" onClick={this.dropDown}/>
                <div className="search-x" style={{backgroundImage: `url(${IconURLs.xWhite})`}} onClick={this.dropDown}></div>
            </div>
        <div className="header-icon hdr-icon-2" style={{backgroundImage: `url(${IconURLs[this.state.icon2]})`}}></div>

        <div className="artist-nav-fader"></div>

        <div className={this.state.searchBoxClasses}>
            <div className="topbar">
            <h4>Search Results</h4>
            <div className="search-filter" style={{backgroundImage: `url(${IconURLs.filterWhite})`}}></div>
            </div>
        <div className="search-results-list">
        {
            Artists.map((artist) => {
                return (
                    <div className="search-node" key={Artists.indexOf[artist]}>
                        <div className="search-node-img" style={{backgroundImage: `url(${artist.imgURL})`}}></div>

                        <div className="search-node-info-box">
                        <h3 className="search-node-name">{artist.name}</h3>

                        <div>
                        {
                            artist.onTour ? (
                                <div>
                                <h4 className="artist-onTour">On Tour</h4>
                                <h3 className="artist-shows">{`${artist.shows} Upcoming Shows`}</h3>
                                </div>
                            ) : (
                                <div>
                                <h3 className="artist-onTour">Not On Tour</h3>
                                <h3 className="artist-shows">No Upcoming Shows</h3>
                                </div>
                            )
                        }
                        </div>

                        
                        </div>
                        <div className="favorite-icon" style={{backgroundImage: `url(${IconURLs.heartOutlineWhite})`}}></div>
                    </div>
                )
            })
        }
        </div>

        </div>



      </div>
    );
  }

}

