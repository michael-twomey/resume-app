import React from 'react';
import Input from '../Util/Input'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target)
  }

  handleClick(e) {
    this.props.handleFormClick()
  }

  render() {
    return (
      <form>
        <Input 
          htmlFor="name"
          id="name"
          labelText="Name: "
          type="text"
          value={this.props.name}
          varName="name"
          handleInputChange={this.handleInputChange} />
          
        <button type="submit" onClick={this.handleClick}>Preview</button>
      </form>
    )
  }
}
