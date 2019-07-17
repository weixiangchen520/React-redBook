import React, { Component } from 'react';
import './found.styl';
import CardList from '../cardList/cardList'
import Loading from '../../common/loading/loading'
import { fetchGet } from '../../api/axios'
// 0.4320
class Found extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      type: 'star',
      listData: {},
    }
  };
  componentDidMount() {
    fetchGet('/found').then((res) => {
      this.setState({
        listData: res.data.listData,
        show: false
      })
    })
  }
  render() {
    const { type, listData = {}, show } = this.state
    return (
      show ? <Loading title="正在加载中..." show={this.state.show}></Loading> :
      <div className="Found-container">
        <CardList list={listData} type={type} />
      </div>
    );
  }
}

export default Found