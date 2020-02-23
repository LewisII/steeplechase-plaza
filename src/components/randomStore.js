import React from "react"
import StoreCard from "src/components/storeCard/storeCard"

class RandomStore extends React.Component {
  render() {
    var state = this.props.store;
    return (
      <div>
        {state.map(data => {
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
