


export var IconURLs = {
    searchWhite: "icons/search-white.svg",
    searchBlack: "icons/search-black.svg",
    personWhite: "icons/person-white.svg",
    menuWhite: "icons/menu-white.svg",
    xWhite: "icons/x-white.svg",
    xBlack: "icons/x-black.svg",
    calendarBlack: "icons/calendar-black.svg",
    heartOutlineWhite: "icons/heart-outline-white.svg",
    heartOutlineBlack: "icons/heart-outline-black.svg",
    heartFillRed: "icons/heart-fill-red.svg",
    heartFillOutlineRed: "icons/heart-fill-outline-red.svg",
    filterWhite: "icons/filter-white.svg"
}





export var ArtistTabs = [
    {
        name: "Shows",
        tabIconURL: "icons/vocalist-white.svg",
        curTab: true
    },
    {
        name: "Updates",
        tabIconURL: "icons/updates-white.svg",
        curTab: false
    },
    {
        name: "Music",
        tabIconURL: "icons/album-white.svg",
        curTab: false
    },
    {
        name: "Bio",
        tabIconURL: "icons/person-fill-white.svg",
        curTab: false
    }
]


export var Shows = [
    {
        venue: "The Fillmore",
        location: "Silver Spring, MD",
        lineUp: ["SZA", "Smino", "Rayvn Lenae"],
        date: {
            year: "2018",
            month: "February",
            day: "4",
            time: "6:30p"
        },
        soldOut: false
    },
    {
        venue: "The Anthem",
        location: "Washington DC",
        lineUp: ["SZA", "Smino", "Rayvn Lenae"],
        date: {
            year: "2018",
            month: "February",
            day: "6",
            time: "6:30p"
        },
        soldOut: false
    },
    {
        venue: "House of Blues",
        location: "Philadelphia, PA",
        lineUp: ["SZA"],
        date: {
            year: "2018",
            month: "February",
            day: "7",
            time: "6:30p"
        },
        soldOut: true
    },
    {
        venue: "The Krusty Krab",
        location: "Manhattan, NY",
        lineUp: ["SZA", "Smino", "Rayvn Lenae"],
        date: {
            year: "2018",
            month: "February",
            day: "9",
            time: "6:30p"
        },
        soldOut: false
    },
    {
        venue: "The Fillmore",
        location: "Silver Spring, MD",
        lineUp: ["SZA", "Smino", "Rayvn Lenae"],
        date: {
            year: "2018",
            month: "February",
            day: "14",
            time: "6:30p"
        },
        soldOut: true
    },
    {
        venue: "The Anthem",
        location: "Washington DC",
        lineUp: ["SZA", "Smino", "Rayvn Lenae"],
        date: {
            year: "2018",
            month: "February",
            day: "15",
            time: "6:30p"
        },
        soldOut: false
    },
    {
        venue: "House of Blues",
        location: "Philadelphia, PA",
        lineUp: ["SZA"],
        date: {
            year: "2018",
            month: "February",
            day: "17",
            time: "6:30p"
        },
        soldOut: true
    },
    {
        venue: "The Krusty Krab",
        location: "Manhattan, NY",
        lineUp: ["SZA", "Smino", "Rayvn Lenae"],
        date: {
            year: "2018",
            month: "February",
            day: "18",
            time: "6:30p"
        },
        soldOut: false
    }
    
    
]


export var Artists = [
    {
        name: "SZA",
        onTour: true,
        shows: Shows.length,
        imgURL: "images/sza.jpeg",
        favorited: true
    },
    {
        name: "Grimes",
        onTour: true,
        shows: 10,
        imgURL: "images/grimes.jpg",
        favorited: false
    },
    {
        name: "TOKiMONSTA",
        onTour: true,
        shows: 5,
        imgURL: "images/toki.jpeg",
        favorited: false
    },
    {
        name: "My Bloody Valentine",
        onTour: false,
        shows: 0,
        imgURL: "images/mbv.jpeg",
        favorited: true
    },
    {
        name: "SZA",
        onTour: true,
        shows: Shows.length,
        imgURL: "images/sza.jpeg",
        favorited: false
    },
    {
        name: "Grimes",
        onTour: true,
        shows: 10,
        imgURL: "images/grimes.jpg",
        favorited: true
    },
    {
        name: "TOKiMONSTA",
        onTour: true,
        shows: 5,
        imgURL: "images/toki.jpeg",
        favorited: true
    },
    {
        name: "My Bloody Valentine",
        onTour: false,
        shows: 0,
        imgURL: "images/mbv.jpeg",
        favorited: false
    }

]

export let CurArtistKey = 0;