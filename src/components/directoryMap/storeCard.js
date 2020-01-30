import React from 'react'
class StoreCard extends React.Component {
  render() {
    return (
      <div className="storeCard" width="50px">
        <p>
          <h2>
            {" "}
            <a /*href={this.props.store.website}*/>{this.props.store.name}</a>
          </h2>
          <a href={this.props.store.googleMapsLink}>{this.props.store.location}</a>
          <br />
          Phone number:{" "}
          <a href={"tel:" + this.props.store.telephone}>{this.props.store.telephone}</a>
          <br />
          {this.props.store.info}
          <br />
          <img
            src={this.props.store.image_storeFront}
            alt={"Store Front of " + this.props.store.name}
          />
        </p>
      </div>
    )
  }
}

export default StoreCard