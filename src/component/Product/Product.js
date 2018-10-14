import React from 'react'
import {Link} from 'react-router-dom'



function Product(props){
    return <div className="listing"><h2>{props.name}</h2><h2>{props.price}</h2><img src={props.img}/>
    <button onClick={()=>props.deleteData(props.id)}>delete</button>
    <Link to={{pathname: `/edit/${props.id}`, state: {id: props.id, tf: true}}}>Edit</Link>
   </div>

 
}

export default Product