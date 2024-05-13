import { getDocks, getHaulers, getShips } from "./database.js"
const docks = getDocks()
const haulers = getHaulers()
const ships = getShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {

            // Get the dockId value of the dock list item clicked
            const dockId = itemClicked.dataset.id       
            
            // Define a default object for the found hauler
            let shipNames = []

            // Iterate the array of hauler objects
            for (const hauler of haulers) {

                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(hauler.dockId) === dockId) {

                    // For each matching hauler, find the corresponding ship
                for (const ship of ships) {
                    if (ship.id === hauler.shipId) {
                        shipNames.push(ship.name);
                    }
                }
            }

           // Show an alert to the user with this format...
            // The Shanghai, China dock is currently unloading Boaty McBoatface
            window.alert(`${itemClicked.innerText} is currently unloading ${shipNames}`)
        }    
            
    }
}
)

export const DockList = () => {
    

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-location="${dock.location}"
                          data-volume="${dock.volume}"
                          data-type="dock"
                          data-id="${dock.id}">
                          ${dock.location}
                      </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}
