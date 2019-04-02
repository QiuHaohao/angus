import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TopicTag extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div class="angus-topic-tag">
        <div class="angus-topic-tag-color" style={{backgroundColor: this.props.color}}></div>
        <span class="angus-topic-tag-topic">
          { this.props.topic }
        </span>
      </div>
    );
  }
}
