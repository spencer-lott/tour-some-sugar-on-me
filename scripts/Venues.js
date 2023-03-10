import { getVenues } from "./database.js"

const venuesArray = getVenues()

export const Venues = () => {
    let venuesHTML = "<ul>"

    for (const venueObject of venuesArray) {
        venuesHTML += `<li id="venue--${venueObject.id}">${venueObject.name}</li>`
    }

    venuesHTML += "</ul>"

    return venuesHTML
}
