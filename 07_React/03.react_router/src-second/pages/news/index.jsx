import React, {Component} from 'react';

class News extends Component {
  news = ['news001', 'news003', 'news005']
  
  render () {
    return (
      <ul>
        {
          this.news.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    )
  }
}

export default News;