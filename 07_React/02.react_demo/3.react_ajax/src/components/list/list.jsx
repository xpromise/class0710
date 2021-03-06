import React, {Component} from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

class List extends Component {
  
  state = {
    firstView: true,
    loading: false,
    resData: null,
    errData: false
  }
  
  componentDidMount () {
    //订阅消息
    PubSub.subscribe('SEARCH_NAME', (msg, data) => {
      console.log(data);
      //将要发送请求, 更新状态， 显示loading
      this.setState({
        firstView: false,
        loading: true
      })
      //发送请求
      axios.get(`https://api.github.com/search/users?q=${data}`)
        .then(res => {
          //加工处理数据
          const data = res.data.items.map(item => ({name: item.login, image: item.avatar_url, url: item.html_url}));
          //请求成功，修改状态
          this.setState({
            loading: false,
            resData: data
          })
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            errData: true
          })
        })
    })
  }
  
  render () {
    //获取四种状态值
    const {firstView, loading, resData, errData} = this.state;
    
    let content;
    
    if (firstView) {
      content =  <h2>enter name to search</h2>
    } else if (loading) {
      content = <h2>loading</h2>
    } else if (resData) {
      content = (<div className="row">
        {
          resData.map((item, index) => (<div className="card" key={index}>
            <a href={item.url} target="_blank">
              <img src={item.image} style={{width: '100px'}}/>
            </a>
            <p className="card-text">{item.name}</p>
          </div>))
        }
      </div>)
    } else {
      content = <h2>网络请求失败，请稍后再试！</h2>
    }
    
    return <div className="row">{content}</div>
  }
}

export default List;