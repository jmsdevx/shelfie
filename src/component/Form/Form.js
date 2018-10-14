import React, {Component} from 'react'
import axios from 'axios'


class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
           data_name: "",
           data_price: 0,
           data_img: "",
           data_id: {}
        }
        this.addData = this.addData.bind(this)
        this.getOne = this.getOne.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    componentDidMount(){
        if (this.props.location.state.tf){
        this.getOne()}
    }

    handleName(e){
        this.setState({data_name: e})

    }

    handlePrice(e){
        this.setState({data_price: e})

    }

    handleImg(e){
        this.setState({data_img: e})

    }

    addData(){
        const {data_name, data_price, data_img} = this.state
        axios.post('http://localhost:3001/api/product', {"data_name": data_name, "data_price": data_price, "data_img": data_img})
    }

    getOne(){
        axios.get(`http://localhost:3001/api/inventory/${this.props.location.state.id}`)
        .then(response => {
            console.log(response.data[0])
            this.setState({data_id: response.data[0].id, data_name: response.data[0].data_name, data_price: response.data[0].data_price, data_img: response.data[0].data_img, tf: true})
            console.log(this.state)
            })
        .catch(error => console.log(error))
    }

    updateData(){
        const {data_name, data_price, data_img, data_id} = this.state
        axios.put(`http://localhost:3001/api/inventory/41`,{"data_name": data_name, "data_price": data_price, "data_img": data_img} )
    }
    

 

    render(){

        const name = this.state.data_name
        const price = this.state.data_price
        const image = this.state.data_img

        return(
            <div>
                <h1>Form</h1>

                <div><h2>{name}</h2><h2>{price}</h2><h2>{image}</h2></div>
            
                <div className="input">

                <input onChange={(e)=>this.handleName(e.target.value)} />
                <input placeholder="0" onChange={(e)=>this.handlePrice(e.target.value)} />
                <input onChange={(e)=>this.handleImg(e.target.value)} />

                <div className="handlebuttons">
                    
                    <button onClick={this.addData}>Add</button>
                    <button onClick={this.updateData}>Update</button>
                </div>

                </div>
            </div>
        )
    }
}

export default Form