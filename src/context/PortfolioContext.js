import React, {Component } from 'react';
import { getPortfolioData } from '../api'

const PortfolioContext = React.createContext()
export const PortfolioConsumer = PortfolioContext.Consumer

class PortfolioProvider extends Component {
  state = { 
    portfolioData: null,
    firstTime: true
  }

  componentDidMount() {
    if(this.state.firstTime){
      this.getData()
      this.setState({
        ...this.state,
        firstTime: false
      })
    }
  }

  getData = () => {
    getPortfolioData()
    .then(res => {
      this.setState({
        portfolioData: res.data
      })
    })
  }
  

  render() { 
    return (
      <PortfolioContext.Provider
        value={{
          portfolioData: this.state.portfolioData
        }}
      >
        {this.props.children}
      </PortfolioContext.Provider>
    );
  }
}
 
export default PortfolioProvider;