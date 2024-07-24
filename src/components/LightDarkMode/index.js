// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {changeMode: true}

  buttonFunc = () => {
    this.setState(prevState => {
      console.log('Previous State:', prevState.changeMode)
      return {changeMode: !prevState.changeMode}
    })
  }

  render() {
    const {changeMode} = this.state
    let response
    if (changeMode === true) {
      response = (
        <div className="container bg-light-mode-card">
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.buttonFunc}>
            Dark Mode
          </button>
        </div>
      )
    } else {
      response = (
        <div className="container bg-dark-mode-card">
          <h1 className="heading dark-mode">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.buttonFunc}>
            Light Mode
          </button>
        </div>
      )
    }

    return <div className="bg-container">{response}</div>
  }
}

export default LightDarkMode
