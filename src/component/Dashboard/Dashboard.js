import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
              inventory: [],}

        this.getData = this.getData.bind(this)
        this.deleteData = this.deleteData.bind(this)
    }

    


componentDidMount(){
    this.getData()
  }

    deleteData(id){
        axios.delete(`http://localhost:3001/api/inventory/${id}`).then( this.props.getData)
    }

    
  getData(){
    axios.get('http://localhost:3001/api/inventory')
      .then(response => {
          console.log(response.data)
          this.setState({inventory: response.data})
      })
      .catch(error => console.log(error))
  }

    // updateData(id, {value}){
    //     axios.put(`http://localhost:3001/api/inventory/${id}`)
    // }



    render(){

        const display = this.state.inventory.map((e, i)=>
        <div>

        

        <Product key={i} name={e.data_name} id={e.id} price={e.data_price} img={e.data_img} deleteData={this.deleteData} getData={this.getData} edit={this.linkEdit} />
        </div>)
        
        return(
            <div>
                <h1>Dashboard</h1>
                <Link to={{pathname: `/add`, state: {tf: false}}}>Add Inventory</Link>
                {display}
                

            </div>
        )
    }
}

export default Dashboard