const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Barely Afloat", dockId: 4 },
        { id: 2, name: "Glacier Racer", dockId: 3},
        { id: 3, name: "Wilson", dockId: 2},
        { id: 4, name: "Barely Afloat", dockId: 2 },
        { id: 5, name: "Bon Voyage", dockId: 3}
    ],
    shippingShips: [
        { id: 1, name: "Ocean Whisper", haulerId: 1},
        { id: 2, name: "Starlight Voyager", haulerId: 3},
        { id: 3, name: "Mystic Wave", haulerId: 2},
        { id: 4, name: "Arctic Pioneer", haulerId: 4},
        { id: 5, name: "Celestial Navigator", haulerId: 5}
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShips = () => {
    return database.shippingShips.map(ship => ({...ship}))
}