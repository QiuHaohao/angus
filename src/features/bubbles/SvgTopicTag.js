import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getTextWidth } from "../../utils"

export default class SvgTopicTag extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
  };

  get font() {
    return 'Playfair Display'
  }

  get fontSize() {
    return "10pt";
  }

  get textLength() {
    return getTextWidth(this.props.topic, this.fontSize + " " + this.font)
  }

  get length() {
    return 20 + this.textLength
  }

  get XPosition() {
    return this.props.x - this.length / 2;
  }

  get YPosition() {
    return this.props.y + this.props.r + 6;
  }

  render() {
    return (
      <g className="bubbles-svg-topic-tag" transform={`translate(${this.XPosition},${this.YPosition})`}>
        <rect id="r" width="16" height="16" rx="2" ry="2" style={{fill:this.props.color}}/>
        <text x="20" y="13" fontSize={this.fontSize} fontFamily={this.font}>{ this.props.topic }</text>
      </g>
    );
  }
}
