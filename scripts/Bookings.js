import { getBookings, getBands, getVenues } from "./database.js"
const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

export const Bookings = () => {
    let bookingHTML = `<ul>`
    for (const booking of bookings) {
        for (const band of bands) {
            for (const venue of venues) {
                if (booking.bandId === band.id && booking.venueId === venue.id){
                    bookingHTML += `<li id="booking--${booking.id}">${band.name} will be playing at ${venue.name} on ${booking.dateBooked}</li>`
                }
            }
        }
    }
    bookingHTML += `</ul>`

    return bookingHTML
}

const filterBandsByBookings = (booking) => {
    let bookedBand = null
    for (const band of bands) {
        if (booking.bandId === band.id){
            bookedBand = band
        }
    }
    return bookedBand
}

document.addEventListener(
    "click",  
    (clickEvent) => {
     
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {

       
            const [,bookingId] = itemClicked.id.split("--")

        
            for (const booking of bookings) {
                if (booking.id === parseInt(bookingId)){
                    const bookedBand = filterBandsByBookings(booking)

                    window.alert(`${bookedBand.name}, ${bookedBand.genreType}, formed in ${bookedBand.yearFormed}, ${bookedBand.numOfMembers} band member(s)`)
                }
            }
        }
    }
)

