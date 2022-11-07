import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e.target)
  }

  render() {
    return (
      <form>
        <label>Name: </label>
        <input
          name="name"
          onChange={this.handleInputChange} />
      </form>
    )
  }
}