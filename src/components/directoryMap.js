import React from "react"

const DirectoryMap = data => {
  return (
    <div className="bussinessCard" width="250px">
      {data.store.map(store => {
        return (
          <p>
            {store.name} <br /> {store.location}
            <br />
            Phone number: {store.telephone}
            <br />
            {store.info}
            <br />
          </p>
        )
      })}
    </div>
  )
}
export default DirectoryMap
