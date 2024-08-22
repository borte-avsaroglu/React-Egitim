import React from 'react'
import { Product } from '../models/IProducts'
import { NavLink } from 'react-router-dom'

function ProductItem(props: {item: Product}) {
  return (
    <div className='col-sm-4'>
        <div className="card">
            <img src={props.item.thumbnail} className="card-img-top" alt={props.item.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">{props.item.price}₺</p>
                <NavLink className="btn btn-primary" to={'/productDetail/'+props.item.id}>Detail</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProductItem
