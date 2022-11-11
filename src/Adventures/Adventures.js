import React from 'react';
import AdventuresForm from './AdventuresForm';
import AdventuresResume from './AdventuresResume';

export default class Adventures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adventureName: '',
      adventureDate: '',
      adventureBullet: '',
      adventureBullets: [],
      adventures: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBulletClick = this.handleAddBulletClick.bind(this);
    this.handleNewAdventureClick = this.handleNewAdventureClick.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleAddBulletClick(e) {
    e.preventDefault();
    const bullet = this.state.adventureBullet;
    const bullets = this.state.adventureBullets;
    const updatedBullets = bullets.concat(bullet);
    this.setState({
      adventureBullet: '',
      adventureBullets: updatedBullets
    });
  }

  handleNewAdventureClick() {
    const adventureName = this.state.adventureName;
    const adventureDate = this.state.adventureDate;
    const adventureBullets = this.state.adventureBullets;
    const adventure = {
      adventureName,
      adventureDate,
      adventureBullets
    };
    const adventures = this.state.adventures;
    const updatedAdventures = adventures.concat(adventure);
    this.setState({
      adventureName: '',
      adventureDate: '',
      adventureBullets: [],
      adventures: updatedAdventures
    });
  }

  render() {
    const isAdventuresFormOn = this.props.isAdventuresFormOn;
    const isResumeOn = this.props.isResumeOn;
    const adventureName = this.state.adventureName;
    const adventureDate = this.state.adventureDate;
    const adventureBullet = this.state.adventureBullet;
    const adventures = this.state.adventures;

    if (isAdventuresFormOn) {
      return (
        <AdventuresForm
          adventureName={adventureName}
          adventureDate={adventureDate}
          adventureBullet={adventureBullet}
          adventures={adventures}
          handleInputChange={this.handleInputChange}
          handleAddBulletClick={this.handleAddBulletClick}
          handleNewAdventureClick={this.handleNewAdventureClick}
          handlePrevClick={this.props.handleAdventuresPrevClick} />)
    } else if (isResumeOn) {
      return <AdventuresResume adventures={adventures} />
    } return;
  }
}
