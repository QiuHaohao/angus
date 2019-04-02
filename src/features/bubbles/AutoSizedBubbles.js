import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AutoSizer } from 'react-virtualized';

import Bubbles from './Bubbles';


export default class AutoSizedBubbles extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    topicColors: PropTypes.object.isRequired,
    setHovering: PropTypes.func.isRequired,
    hovering: PropTypes.string.isRequired,
    space: PropTypes.number,
  };

  render() {
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Bubbles
            { ...this.props }
            height={height}
            width={width}
          />
        )}
      </AutoSizer>
    );
  }
}
