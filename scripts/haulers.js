import { getHaulers, getShips } from "./database.js"

const haulers = getHaulers()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "hauler") {

            const haulerId = itemClicked.dataset.id

            let shipCounter = 0

            
            const shippingShips = getShips()

            for (const ship of shippingShips) {
                if (parseInt(haulerId) === ship.haulerId) {
                    shipCounter++
                
            }
            
        }
        window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
     }
    }
)

export const HaulerList = () => {
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-type="hauler"
                            data-id="${hauler.id}"
                            data-dockId="${hauler.dockId}">
                            ${hauler.name}
                        </li>`               
    }

    haulersHTML += "</ul>"

    return haulersHTML
}


    
