import { Bands } from "./Bands.js"
import { Venues } from "./Venues.js"
import { Bookings } from "./Bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>ToUr SoMe SugAr oN mE</h1>
<article class="assignments">
    <h2>Current Bookings</h2>
    ${Bookings()}
</article>

<article class="details">
    <section class="detail--column list details__cities">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

