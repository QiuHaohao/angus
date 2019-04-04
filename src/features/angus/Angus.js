import React, { Component } from 'react';
import PropTypes from 'prop-types';

import angusRead from "./angusRead.png";
import angusBubbleTea from "./angusBubbleTea.png";
import angusWorking from "./angusWorking.png";

import TopicTagList from "./TopicTagList";

export default class Angus extends Component {
  static propTypes = {
    hoveredArticle: PropTypes.object
  };

  state = {
    working: false,
  }

  componentDidUpdate(prevProps) {
    // enter hover
    if (prevProps.hoveredArticle === undefined
        && this.props.hoveredArticle) {
          this.setWorking(true)
          setTimeout(() => {
            this.setWorking(false)
        }, 500)
    }
    if (this.props.hoveredArticle === undefined
        && prevProps.hoveredArticle) {
          this.setWorking(false)
    }
  }

  setWorking(working) {
    this.setState({
      ...this.state,
      working
    })
  }

  renderContent = () => {
    if (!this.props.hoveredArticle || this.state.working){
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
    if(this.state.working){
      return <img className="img-fluid" src={angusWorking} alt="Angus works"/>
    } else if(!this.props.hoveredArticle){
      return <img className="img-fluid" src={angusBubbleTea} alt="Angus drinks bubble tea"/>
    } else {
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