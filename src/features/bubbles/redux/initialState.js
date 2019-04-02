// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
const _ = require('lodash');

const articles_array = [
  {
      id: "75000-johor-affected-water-treatment-plant-closure-due-river-pollution",
      title: "75,000 in Johor affected by water treatment plant closure due to river pollution",
      importance: 22, 
      thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/ahr0chm6ly9tzwrpys5tywxhew1hawwuy29tl3vwbg9hzhmvyxj0awnszxmvmjaxoc8ymde4lta0l1npbxbhbmdfumvuz2dhbv8zmda0xyg0ks5kuec_.jpg?itok=SZhZdtvG",
      article_url: "https://www.todayonline.com/world/75000-johor-affected-water-treatment-plant-closure-due-river-pollution",
      topic: "Environment"
    },
    {
      id: "dr-mahathir-no-dictator-says-pas-president",
      title: "Dr Mahathir is no dictator, says PAS president",
      importance: 87, 
      thumbnail_url: "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/hadi26.jpg?itok=QHn-dtMw",
      article_url: "https://www.todayonline.com/world/dr-mahathir-no-dictator-says-pas-president",
      topic: "World"
    }
]

const articles = _.keyBy(articles_array, 'id')
const articleIds = _.map(
    articles_array,
    (article) => article.id
  )

const topicColors = {
  Environment: "#106f71",
  World: "#d53028",
}

const initialState = {
  topicColors,
  articles,
  articleIds,
};

export default initialState;
