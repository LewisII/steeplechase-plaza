import React from "react"
import "./directoryMap.css"

const DirectoryMap = data => {
  return (
    <div id="directoryMap">
      {data.store.map(store => {
        return (
          <div className="storeCard" width="50px">
            <p>
              <h2> {store.name} </h2>
              {store.location}
              <br />
              Phone number: {store.telephone}
              <br />
              {store.info}
              <br />
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default DirectoryMap
