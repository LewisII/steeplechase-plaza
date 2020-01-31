import React from 'react'
import './storeCard.css'


class StoreCard extends React.Component {
  render() {
    return (
      <div className="storeTile">
        <p>
          <h2>{this.props.store.name}</h2>
          <hr />
          <a href={this.props.store.googleMapsLink}>
            {this.props.store.location}
          </a>
          <br />
          Phone number:{" "}
          <a href={"tel:" + this.props.store.telephone}>
            {this.props.store.telephone}
          </a>
          <br />
          <a href={this.props.store.website}>{this.props.store.website}</a>
          <br />
          {this.props.store.info}
          <br />
          <img
            src={this.props.store.image_storeFront}
            alt={"Store Front of " + this.props.store.name}
            className="cardImage"
          />
        </p>
      </div>
    )
  }
}

export default StoreCard