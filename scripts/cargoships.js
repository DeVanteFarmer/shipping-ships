import { getShips, getHaulers } from "./database.js"

const ships = getShips()
const haulers = getHaulers()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "cargoShip") {

            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.id       
            
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
            for (const hauler of haulers) {

                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(haulerId) === hauler.id) {
                
                // Reassign the value of `haulingShip` to the current hauler
                                    haulingShip = hauler
                                }
                            }

           // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${itemClicked.innerText} is being hauled by ${haulingShip.name}`)
        }    
            
    }
)


export const ShipList = () => {
    
    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li data-type="cargoShip"
                          data-id="${ship.id}"
                          data-haulerId="${ship.haulerId}"
                          data-name="${ship.name}">
                          ${ship.name}
                      </li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}