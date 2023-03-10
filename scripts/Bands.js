import { getBands } from "./database.js"

const bandsArray = getBands()

export const Bands = () => {
    let bandsHTML = "<ul>"

    for (const bandObject of bandsArray) {
        bandsHTML += `<li id="band--${bandObject.id}">${bandObject.name}</li>`
    }

    bandsHTML += "</ul>"

    return bandsHTML
}

