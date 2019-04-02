const _ = require('lodash');

export function getArrayOfAllArticles(state) {
  const ids = state.bubbles.articleIds
  const articles = state.bubbles.articles
  return _.map(ids, (id) => articles[id])
}

export function getTopicColors(state) {
  return state.bubbles.topicColors
}

export function getHovering(state) {
  return state.bubbles.hovering
}

export function getArticle(state, id) {
  return state.bubbles.articles[id]
}

export function getHoveredArticle(state) {
  const id = getHovering(state)
  return id && getArticle(state, id);
}