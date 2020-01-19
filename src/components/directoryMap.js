import React from "react"

const DirectoryMap = () => {

    const businessesArray = [
        { name: "Church Street Bar", location: "435 S Church St, St Peters, MO 63376"},
        { name: "Merry Maids", location: "433 S Church St, St Peters, MO 63376" },
        { name: "Zak's Barber Shop", location: "431 S Church St, St Peters, MO 63376" },
        { name: "Restraunt(need Name)", location: "429 S Church St, St Peters, MO 63376" },
        { name: "Moving Company(need Name)", location: "427 S Church St, St Peters, MO 63376" },
        { name: "Eye Candy Rentals", location: "425 S Church St, St Peters, MO 63376" },
        { name: "Convenant Garage Door", location: "423 S Church St, St Peters, MO 63376" },
        { name: "Cosmic Liquor", location: "421 S Church St, St Peters, MO 63376" },
        { name: "The Ink Spot", location: "419 S Church St, St Peters, MO 63376" }];

    const namesList = businessesArray.map(name => {
        return (
            <li>{name.name}</li>
        )
    })

    return (
    <ul>
        {namesList}
    </ul>
    );
}
 export default DirectoryMap