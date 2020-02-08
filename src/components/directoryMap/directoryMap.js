import React from "react"
import "./directoryMap.css"
import StoreCard from "./storeCard"

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
