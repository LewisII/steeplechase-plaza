import React from "react"
import "./directoryMap.css"


const placeholder = "https://via.placeholder.com/1000"


const DirectoryMap = data => {
  return (
    <div id="directoryMap">
      {data.store.map(store => {
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
                src={placeholder}
                alt="placeholder"
              ></img>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default DirectoryMap
