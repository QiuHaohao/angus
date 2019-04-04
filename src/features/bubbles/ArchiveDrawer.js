import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { Drawer } from 'antd';


import { getArrayOfAllArchivedArticles } from './redux/selectors'

import ArticleList from './ArticleList'

export class ArchiveDrawer extends Component {
  static propTypes = {
    visible: PropTypes.boolean,
    archivedArticles: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Drawer
          title="Archive"
          placement="right"
          closable={true}
          onClose={this.props.actions.actionToggleDrawer}
          visible={this.props.visible}
          width={500}
        >
          <ArticleList data={this.props.archivedArticles}/>
        </Drawer>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    visible: state.bubbles.drawerVisible,
    archivedArticles: getArrayOfAllArchivedArticles(state),
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
)(ArchiveDrawer);
