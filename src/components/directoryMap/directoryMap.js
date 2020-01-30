import React from "react"
import "./directoryMap.css"
import StoreCard from "./storeCard"

class DirectoryMap extends React.Component {
  render(){
  return (
    <div id="directoryMap">
      {this.props.store.map(data => {
        if (data.status === "open") {
          return ( 
            <div className="storeCard" width="50px">
              <p>
                <h2>
                  {" "}
                  <a href={data.website}>{data.name}</a>
                </h2> <hr />
                <a href={data.googleMapsLink}>{data.location}</a>
                <br />
                Phone number:{" "}
                <a href={"tel:" + data.telephone}>{data.telephone}</a>
                <br />
                {data.info}
                <br />
                <img
                  src={data.image_storeFront}
                  alt={"Store Front of " + data.name}
                />
              </p>
            </div>
          )
        } else {
          return <StoreCard store  = {data} />
        }
      })}
    </div>
  )
}
}
export default DirectoryMap
