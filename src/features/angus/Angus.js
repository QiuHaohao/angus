import React, { Component } from 'react';
import PropTypes from 'prop-types';

import angusRead from "./angusRead.png";
import angusCoffee from "./angusCoffee.png";

import TopicTagList from "./TopicTagList";

export default class Angus extends Component {
  static propTypes = {
    hoveredArticle: PropTypes.object
  };

  state = {
    thinking: false,
  }

  componentDidUpdate(prevProps) {
    // enter hover
    if (prevProps.hoveredArticle === undefined
        && this.props.hoveredArticle) {
          this.setThinking(true)
          setTimeout(() => {
            this.setThinking(false)
        }, 500)
    }
    if (this.props.hoveredArticle === undefined
        && prevProps.hoveredArticle) {
          this.setThinking(false)
    }
  }

  setThinking(thinking) {
    this.setState({
      ...this.state,
      thinking
    })
  }

  renderContent = () => {
    if (!this.props.hoveredArticle || this.state.thinking){
     return <TopicTagList />
    } else {
      return (
        <div>
          <p className="bot-message">
            {this.props.hoveredArticle.angus_bot_message}
          </p>
        </div>
      )
    }
  }
  
  renderImage = () => {
    if(!this.props.hoveredArticle){
      return <img className="img-fluid" src={angusCoffee} alt="Angus drinks coffee"/>
    }else {
      return <img className="img-fluid" src={angusRead} alt="Angus reads newspaper"/>
    }
  }
  render() {
    return (
      <div className="angus">
        <div className="angus-card">
          <div className="angus-image">
            {this.renderImage()}
          </div>
          <div className="angus-content">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}