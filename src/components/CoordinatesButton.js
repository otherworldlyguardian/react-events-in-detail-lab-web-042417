import React from 'react'

class CoordinatesButton extends React.Component {
  clicker = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render () {
    return (
      <button onClick={this.clicker}>Coordinates</button>
    )
  }
}

export default CoordinatesButton
