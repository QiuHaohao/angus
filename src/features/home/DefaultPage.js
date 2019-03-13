import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { Bubbles } from '../bubbles';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const mockup_data = [
      {
        headline: "us-will-not-ground-boeing-737-max-planes-after-ethiopia-crash", 
        importance: 133, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/20190313_us_plane_reuters.jpg?itok=lB-Fpoj5"
      },
      {
        headline: "sungei-kadut-murder-23-year-old-man-charged-murder",
        importance: 53, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/20190313_murder_raj.jpg?itok=YAoIIUP7"
      },
      {
        headline: "12-years-preventive-detention-recalcitrant-sex-offender-who-assaulted-friends-son",
        importance: 73, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/2017_judgementreuters_22.jpg?itok=o28_LHb_"
      },
      {
        headline: "gojek-drivers-enjoy-20-rebate-when-buying-fuel-esso-stations-islandwide",
        importance: 30, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/20190110_gojek_mf_0.jpeg?itok=hsjVSrrI"}
    ]
    return (
      <div className="home-default-page">
        <Bubbles data={mockup_data}/>
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
