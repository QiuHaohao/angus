import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { ConnectedAutoSizedBubbles } from '../bubbles';

export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const mockup_data = [
      {
        id: "us-will-not-ground-boeing-737-max-planes-after-ethiopia-crash",
        title: "US will not ground Boeing 737 Max planes after Ethiopia crash",
        importance: 100, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/20190313_us_plane_reuters.jpg?itok=lB-Fpoj5",
        article_url: "https://www.todayonline.com/world/us-will-not-ground-boeing-737-max-planes-after-ethiopia-crash",
      },
      {
        id: "sungei-kadut-murder-23-year-old-man-charged-murder",
        title: "Sungei Kadut murder: 22-year-old man charged",
        importance: 53, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/20190313_murder_raj.jpg?itok=YAoIIUP7",
        article_url: "https://www.todayonline.com/singapore/sungei-kadut-murder-22-year-old-man-charged-murder",        
      },
      {
        id: "12-years-preventive-detention-recalcitrant-sex-offender-who-assaulted-friends-son",
        title: "10 years’ preventive detention for recalcitrant sex offender who assaulted friend’s son",        
        importance: 73, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/2017_judgementreuters_22.jpg?itok=o28_LHb_",
        article_url: "https://www.todayonline.com/singapore/10-years-preventive-detention-recalcitrant-sex-offender-who-assaulted-friends-son",        
      },
      {
        id: "gojek-drivers-enjoy-20-rebate-when-buying-fuel-esso-stations-islandwide",
        title: "Gojek drivers to enjoy 20% rebate when buying fuel at Esso stations islandwide",        
        importance: 30, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/20190110_gojek_mf_0.jpeg?itok=hsjVSrrI",
        article_url: "https://www.todayonline.com/singapore/gojek-drivers-enjoy-20-rebate-when-buying-fuel-esso-stations-islandwide",
      },
      {
        id: "probation-poly-student-who-took-obscene-photos-videos-11-year-old-girl",
        title: "Probation for poly student who took obscene photos, videos of 11-year-old girl",
        importance: 62, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/chandler-cruttenden-1085099-unsplash.jpg?itok=iCTNGQGD",
        article_url: "https://www.todayonline.com/singapore/probation-poly-student-who-took-obscene-photos-videos-11-year-old-girl",
      },
      {
        id: "75000-johor-affected-water-treatment-plant-closure-due-river-pollution",
        title: "75,000 in Johor affected by water treatment plant closure due to river pollution",
        importance: 22, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/ahr0chm6ly9tzwrpys5tywxhew1hawwuy29tl3vwbg9hzhmvyxj0awnszxmvmjaxoc8ymde4lta0l1npbxbhbmdfumvuz2dhbv8zmda0xyg0ks5kuec_.jpg?itok=SZhZdtvG",
        article_url: "https://www.todayonline.com/world/75000-johor-affected-water-treatment-plant-closure-due-river-pollution",
      },
      {
        id: "dr-mahathir-no-dictator-says-pas-president",
        title: "Dr Mahathir is no dictator, says PAS president",
        importance: 87, 
        thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/hadi26.jpg?itok=QHn-dtMw",
        article_url: "https://www.todayonline.com/world/dr-mahathir-no-dictator-says-pas-president",
      }
    ]
    return (
      <div className="home-default-page">
        <ConnectedAutoSizedBubbles />
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
