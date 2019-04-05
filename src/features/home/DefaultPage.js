import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { actionToggleDrawer } from '../bubbles/redux/actionToggleDrawer'

import { ConnectedAutoSizedBubbles, ArchiveDrawer } from '../bubbles';
import { ConnectedAngus } from '../angus';

import { Button, Layout } from 'antd';

const {
  Header, Content
} = Layout;

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-default-page">
        <div className="home-default-page-header">Discover a NEW TODAY</div>
        <ConnectedAngus />
        <ConnectedAutoSizedBubbles />
        <Button className="drawer-button" onClick={this.props.actions.actionToggleDrawer} type="primary" shape="circle" icon="database"/>
        <ArchiveDrawer />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions, actionToggleDrawer }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
