import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard'
import Header from './component/Header/Header'
import Form from './component/Form/Form'
import {BrowserRouter} from 'react-router-dom'
import routes from './routes'


class App extends Component {

  render() {
    return (
      
        
        <BrowserRouter>
        <div>
          <Header />
          {routes}
        </div>
        {/* <Header />
        <Dashboard inventory={this.state.inventory} getData={this.getData} />
        // <Form getData={this.getData} current={this.state.current}/> */}
        </BrowserRouter>


    );
  }
}

export default App;
