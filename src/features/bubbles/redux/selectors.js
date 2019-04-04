const _ = require('lodash');

export function getArrayOfAllArticles(state) {
  const ids = state.bubbles.articleIds
  return getArticlesFromIds(state, ids)
}

export function getArrayOfAllArchivedArticles(state) {
  const ids = getArchivedArticleIds(state)
  return getArticlesFromIds(state, ids)
}

export function getTopicColors(state) {
  return state.bubbles.topicColors
}

export function getArchivedArticleIds(state) {
  return state.bubbles.archivedArticleIds
}

export function getTopicColor(state, topic) {
  return getTopicColors(state)[topic]
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

export function getArticlesFromIds(state, ids) {
  const articles = state.bubbles.articles
  return _.map(ids, (id) => articles[id])
}