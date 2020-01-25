import React, { Component } from 'react';
import { getHomeData as getData} from '../api'

const HomeContext = React.createContext()
export const HomeConsumer = HomeContext.Consumer

class HomeProvider extends Component {
  state = { 
    homeData : null,
    firstTime: true
  }

  componentDidMount() {
    if(this.state.firstTime){
      this.getHomeData()
      this.setState({
        ...this.state,
        firstTime: false
      })
    }
  }

  getHomeData = () => {
    getData()
    .then(res => {
      this.setState({
        homeData : res.data
      })
    })
  }

  render() { 
    return ( 
      <HomeContext.Provider
        value={{
          homeData: this.state.homeData
        }}
      >
        {this.props.children}
      </HomeContext.Provider>
    );
  }
}
 
export default HomeProvider;