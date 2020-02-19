import React from "react"

class StoreCard extends React.Component {
  render() {
    var data = this.props.store
    var imagestr = "../../images/" + data.storeFrontImage.split("/")[2]
    return (
      <div className="storeTile">
        <h2>{data.store}</h2>
        <hr />
        <div className="storeData">
          <a href={data.googleMapsLink}>{data.location}</a>
          <br />
          Phone number: <a href={"tel:" + data.telephone}>{data.telephone}</a>
          <br />
          <a href={data.website}>{data.website}</a>
          <br />
          {data.info}
          <br />
          <img
            src={imagestr}
            alt={"Store Front of " + data.store}
            className="storeFrontImage"
          />
        </div>
      </div>
    )
  }
}

export default StoreCard
