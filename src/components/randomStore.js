import React from "react"
import StoreCard from "src/components/storeCard/storeCard"

class RandomStore extends React.Component {
  render() {
    return (
      <div>
        {this.props.store.map(data => {
          if (data.status) {
            return <StoreCard store={data} />
          } else {
            return null
          }
        })}
      </div>
    )
  }
}
export default RandomStore
