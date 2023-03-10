/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    venues: [{
        id: 1,
        name: "Krusty Krab",
        address: "831 Bottom Feeder Lane",
        sqFootage: 4500,
        maxOccupancy: 300
    },
    {
        id: 2,
        name: "Ohio Stadium",
        address: "411 Woody Hayes Dr, Columbus, OH 43210",
        sqFootage: 536850,
        maxOccupancy: 102780
    },
    {
        id: 3,
        name: "The Moon",
        address: "0.67416 degrees N, 23.47314 E",
        sqFootage: 27878400,
        maxOccupancy: 1000000
    }],

    bands: [{
        id: 1,
        name: "Goofy Goobers",
        numOfMembers: 3,
        genreType: "Rock",
        yearFormed: 2004
    }, 
    {
        id: 2,
        name: "James Brown & The Famous Flames",
        numOfMembers: 17,
        genreType: "Soul",
        yearFormed: 1953
    }, 
    {
        id: 3,
        name: "YG",
        numOfMembers: 1,
        genreType: "Rap",
        yearFormed: 2008
    }],
    bookings: [
        { id: 1, bandId: 1, venueId: 2, dateBooked:"4/1/2023" },
        { id: 2, bandId: 2, venueId: 1, dateBooked:"4/2/2023" },
        { id: 3, bandId: 3, venueId: 3, dateBooked:"4/3/2023" }
    ],
   
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

