const _ = require('lodash');

export function getArrayOfAllArticles(state) {
  const ids = state.bubbles.articleIds
  const articles = state.bubbles.articles
  return _.map(ids, (id) => articles[id])
}

export function getTopicColors(state) {
  return state.bubbles.topicColors
}