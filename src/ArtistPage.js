import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { IconURLs, Artists, ArtistTabs, Shows } from './Data';

export class ArtistPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        curArtistKey: this.props.curArtistKey,
        ifTouring: null
    }
  }

  checkTour () {
      if (Artists[this.state.curArtistKey].onTour == true) {
          this.setState({
            ifTouring: true,
          })
      }
        
  }

  render() {

    var { curArtistKey } = this.state;
    var artistShows = `${Artists[curArtistKey].shows} Upcoming Shows`;

    return (
    <div>
      <Header headerType="artist-page" icon1="menuWhite" icon2="personWhite" curArtistKey={this.props.curArtistKey}/>
      
      <div className="artist-img-box">
        <div className="artist-header-fader"></div>
        <div className="artist-img" style={{backgroundImage: `url(${Artists[curArtistKey].imgURL})`}}></div>
      </div>

      <div className="artist-page-content">
      <div className="artist-header-info">
        <h1 className="artist-name">{Artists[curArtistKey].name}</h1>
        <div>
        {
        
            Artists[curArtistKey].onTour ? (
                <div>
                <h4 className="artist-onTour">On Tour</h4>
                <h3 className="artist-shows">{artistShows}</h3>
                </div>
            ) : (
                <h3 className="artist-onTour">Not On Tour</h3>
            )
        
        }
        </div>
      </div>

      <div className="tab-box">
      {
          ArtistTabs.map((tab) => {
              return (
                <div className={tab.curTab ? "artist-tab cur-tab" : "artist-tab"}>
                <div className="artist-tab-icon" style={{backgroundImage: `url(${tab.tabIconURL})`}}></div>
                <div className="artist-tab-name">{tab.name}</div>
                </div>
              )
          })
      }
      </div>

      <div className="artist-page-fill">

        <div className="artist-fill-header">
            <h2>February 2018</h2>
            <div className="artist-fill-header-calOp">
            <div className="calOp-icon" style={{backgroundImage: `url(${IconURLs.calendarBlack})`}}></div>
            <h5>View Calendar</h5>
            </div>
        </div>

        <div className="artist-show-list">
        {
            Shows.map((show) => {
               return ( <div className="show-node">
                    <div className="show-date-box">
                        <h5 className="month">{show.date.month.slice(0,3)}</h5>
                        <h1 className="day">{show.date.day}</h1>
                        <h5 className="time">{show.date.time}</h5>
                    </div>
                    <div className="show-info-box">
                        <h3 className="venue">{show.venue}</h3>
                        <h4 className="location">{show.location}</h4>
                        <h4 className="lineUp">{
                            show.lineUp.map((performer) => {
                                return `${performer}, `
                            })
                        }</h4>
                        <h5 className="ticketStatus">{show.soldOut ? <span className="soldOut">sold out</span> : "tickets available"}</h5>
                        
                    </div>

                    <div className="favorite-icon" style={{backgroundImage: `url(${IconURLs.heartOutlineBlack})`}}></div>
                </div>
               )
            })
        }
        </div>

      </div>





    </div>
    </div>
    );
  }
}


