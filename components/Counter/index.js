import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count-title">Count {count}</h1>
        <button
          type="button"
          className="counter-button"
          onClick={this.onIncrement}
        >
          Increase
        </button>
        <button
          type="button"
          className="counter-button"
          onClick={this.onDecrement}
        >
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
