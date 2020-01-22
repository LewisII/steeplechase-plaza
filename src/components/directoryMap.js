import React from "react"

const DirectoryMap = (data) => {
    return (
      <div>
        <ul>
          {data.store.map(store => {
            return (
              <li>
                {store.name} <br /> {store.location}
                <br />
                Phone number: {store.telephone}
                <br />
                {store.info} <br />
                <img src={store.name.image_storeFront} alt={store.name.image_storeFrontAltText}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
}
 export default DirectoryMap