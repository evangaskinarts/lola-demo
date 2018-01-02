import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './lola-sass/lola-sass.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();




window.onscroll = () => {

    if (window.innerWidth < 600) {

        var blurSet = (window.pageYOffset / 50);
        var blurSetTwo = (window.pageYOffset / 20);
        
        window.pageYOffset > 80 && window.pageYOffset < 400 ? (
            document.querySelector('.artist-img-box').style.filter = `blur(${blurSet}px)`
        ) : (
            document.querySelector('.artist-img-box').style.filter = ""
        )
    }
}

// var contentMasker = document.querySelector('.artist-page-content');

// contentMasker.onscroll = () => {
//     var blurSet = (contentMasker.offsetTop() / 50);
//     var blurSetTwo = (contentMasker.offsetTop() / 20);
    
//     contentMasker.offsetTop() > 80 ? (
//         document.querySelector('.artist-img-box').style.filter = `blur(${blurSet}px)`
//     ) : (
//         document.querySelector('.artist-img-box').style.filter = ""
//     )
// }






// style={{backgroundImage: `url(${Artists[this.props.curArtistKey].imgURL})`}}