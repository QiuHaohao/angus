import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from 'react-svg-text';

const cls = require('classnames');

export default class Bubble extends Component {
  static propTypes = {
    r: PropTypes.number.isRequired,
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,    
    onClick: PropTypes.func,
    hover: PropTypes.bool,
  };

  static defaultProps = {
    onClick: ()=>{},
    hover: false,
  }

  getEstimatedNumLines() {
    return Math.ceil(this.props.title.length / 19);
  }

  getEstimatedTextHeight() {
    return Math.ceil(24 * this.getEstimatedNumLines())
  }

  getText() {
    return this.props.hover
      ? (
        <Text
          className={cls("title", {show: this.props.hover})}
          x={this.props.cx - 0.8 * this.props.r}
          y={this.props.cy + (this.getEstimatedTextHeight() / 2)}
          width={this.props.r}
          fontSize={24}
          fontFamily='Playfair Display'
          >
          {this.props.title}
        </Text>
      ) : null;
  }


  render() {
    console.log(this.props.onClick)
    return (
        <g onClick={this.props.onClick}>
          <circle 
            className={cls("bubbles-bubble", {hover: this.props.hover})}
            {...this.props}
            />
          
          <circle 
            className={cls("shadow", {show: this.props.hover})}
            {...this.props}
            fill={"black"}
            />
          { this.getText() }
        </g>
      )
  }
}
