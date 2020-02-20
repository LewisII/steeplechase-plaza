import React from "react"
import StoreCard from "src/components/storeCard/storeCard"

class RandomStore extends React.Component {
  render() {
    return <StoreCard store={this.props.store} />
  }
}
export default RandomStore
