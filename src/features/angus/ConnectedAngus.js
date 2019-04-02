import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Angus from './Angus';

import { getHoveredArticle } from '../bubbles/redux/selectors'

export class ConnectedAngus extends Component {
  static propTypes = {
    hoveredArticle: PropTypes.object,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return <Angus hoveredArticle={this.props.hoveredArticle}/>;
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    hoveredArticle: getHoveredArticle(state),
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
)(ConnectedAngus);
