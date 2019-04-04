import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import AutoSizedBubbles from './AutoSizedBubbles';

import { getArrayOfAllArticles, getTopicColors, getHovering } from './redux/selectors';


export class ConnectedAutoSizedBubbles extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    topicColors: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    moveToArchive: PropTypes.func.isRequired,
  };

  render() {
    return (
      <AutoSizedBubbles 
        data={this.props.articles}
        topicColors={this.props.topicColors}
        setHovering={this.props.actions.actionSetHover}
        moveToArchive={this.props.actions.actionMoveArticleToArchive}
        hovering={this.props.hovering}/>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    articles: getArrayOfAllArticles(state),
    topicColors: getTopicColors(state),
    hovering: getHovering(state)
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
)(ConnectedAutoSizedBubbles);
