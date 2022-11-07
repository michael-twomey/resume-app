import React from 'react';

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
        <label>Name: </label>
        <input
          name="name"
          value={this.props.name}
          onChange={this.handleInputChange} />
        <button type="submit" onClick={this.handleClick}>Preview</button>
      </form>
    )
  }
}
