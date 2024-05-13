import { DockList } from "./docks.js"
import { HaulerList } from "./haulers.js"
import { ShipList } from "./cargoships.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Shipping Ship Tracker</h1>
    <article class="details">
        <section class="detail--column list details__haulers">
            <h2>Hauling Ships</h2>
            ${HaulerList()}
        </section>
        <section class="detail--column list details-docks">
            <h2>Major Docks</h2>
            ${DockList()}
        </section>
        <section class="detail--column list details__ships">
            <h2>Cargo Ships</h2>
            ${ShipList()}
        </section>
    </article>
`

mainContainer.innerHTML = applicationHTML