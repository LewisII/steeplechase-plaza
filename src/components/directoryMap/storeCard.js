import React from 'react'
class StoreCard extends React.Component {
  render() {
    return (
      <div className="storeCard" width="50px">
        <p>
          <h2>
            {" "}
            <a href={this.props.website}>{this.props.name}</a>
          </h2>
          <a href={this.props.googleMapsLink}>{this.props.location}</a>
          <br />
          Phone number:{" "}
          <a href={"tel:" + this.props.telephone}>{this.props.telephone}</a>
          <br />
          {this.props.info}
          <br />
          <img
            src={this.props.image_storeFront}
            alt={"Store Front of " + this.props.name}
          />
        </p>
      </div>
    )
  }
}

export default StoreCard