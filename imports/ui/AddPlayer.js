import React from 'react';
import {Players} from './../api/players';


export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    // e.target is the form
    let playerName = e.target.playerName.value;
    // this event is used to prevent the whole page to be refreshed
    // the default behaviour of a form when it gets submitted is to refresh the whole page
    e.preventDefault();

    if (playerName) { // check if playerName != ''
      // clear the value in the text box after the form gets submitted
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
          <button className="button">Add Player </button>
        </form>
      </div>
    );
  }
}
