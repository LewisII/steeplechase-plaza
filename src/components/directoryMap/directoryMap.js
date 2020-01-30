import React from "react"
import "./directoryMap.css"

const DirectoryMap = data => {
  return (
    <div id="directoryMap">
      {data.store.map(store => {
        if (store.status === "open") {
          return (
            <div className="storeCard" width="50px">
              <p>
                <h2>
                  {" "}
                  <a href={store.website}>{store.name}</a>
                </h2>
                <a href={store.googleMapsLink}>{store.location}</a>
                <br />
                Phone number:{" "}
                <a href={"tel:" + store.telephone}>{store.telephone}</a>
                <br />
                {store.info}
                <br />
                <img
                  src={store.image_storeFront}
                  alt={store.image_storeFrontAlt}
                  class="rotateimg180"
                />
              </p>
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default DirectoryMap
