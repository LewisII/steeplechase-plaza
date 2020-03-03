import React from "react"
import StoreCard from "src/components/storeCard/storeCard"
import "src/components/storeCard/storeCard.css"

class DirectoryMap extends React.Component {
  render() {
    return (
      <div id="directoryMap">
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
export default DirectoryMap
