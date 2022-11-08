import React from 'react';

export default class ContactResume extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleResumeClick();
  }

  render() {
    return (
      <div>
        <div>
          <p>Name: </p>
          <p>{this.props.name}</p>
        </div>
        <button onClick={this.handleClick}>Contact</button>
      </div>
    )
  }
}
