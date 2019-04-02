import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { getTopicColors } from '../bubbles/redux/selectors'

import TopicTag from "./TopicTag";

const _ = require('lodash');

export class TopicTagList extends Component {
  static propTypes = {
    angus: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="angus-topic-tag-list">
        {
          _.map(
            Object.keys(this.props.topicColors),
            topic => <TopicTag key={topic} topic={topic} color={this.props.topicColors[topic]}/>
          )
        }
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    topicColors: getTopicColors(state),
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicTagList);
