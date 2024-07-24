// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {changeMode: false}

  buttonFunc = () => {
    this.setState(prevState => {
      console.log('Previous State:', prevState.changeMode)
      return {changeMode: !prevState.changeMode}
    })
  }

  render() {
    const {changeMode} = this.state
    const bgModeClassName = changeMode
      ? 'bg-dark-mode-card'
      : 'bg-light-mode-card'
    const buttonText = changeMode ? 'Dark Mode' : 'Light Mode'
    const headingColor = changeMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="bg-container">
        <div className={`container ${bgModeClassName}`}>
          <h1 className={`heading ${headingColor}`}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.buttonFunc}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
