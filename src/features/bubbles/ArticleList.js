import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { List, Avatar } from 'antd';


export default class ArticleList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="bubbles-article-list">
        <List
          itemLayout="horizontal"
          dataSource={this.props.data}
          renderItem={article => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={article.thumbnail_url} onClick={(e)=> {e.preventDefault(); window.open(article.article_url)}}/>}
                title={
                  <a onClick={(e)=> {e.preventDefault(); window.open(article.article_url)}}>
                    {article.title}
                  </a>}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
