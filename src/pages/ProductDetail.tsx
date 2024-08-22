import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService';
import { Product } from '../models/IProducts';
import { useDispatch } from 'react-redux';
import { ILikeAction } from '../useRedux/ILikesAction';
import { LikesEnum } from '../useRedux/LikesEnum';

function ProductDetail() {

    const params = useParams()

    const [productDetails, setProductDetails] = useState<Product>();
    const [bigImage, setBigImage] = useState('');
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        const id = params.id
        if(id){
            getProductById(id).then(res => {
                setProductDetails(res.data)
                setBigImage(res.data.images[0])
            }).finally(() => {
                setIsLoad(false)
            })
        }
    }, []);

    const dispatch = useDispatch();

    const addLike = () => {
      if (productDetails) {
        const sendItem: ILikeAction = {
            type: LikesEnum.LIKE_ADD,
            payload: '' + productDetails.id
        }
        dispatch(sendItem)
      }
    }

  return (
    <>
      {isLoad && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {productDetails && (
        <div className="row">
          <div className="col-sm-6">
            <h2>{productDetails.title}</h2>
            <h3>{productDetails.price}₺</h3>
            <p>{productDetails.description}</p>
            <i onClick={addLike} className="bi bi-heart" style={{fontSize: 40}}></i>
          </div>
          <div className="col-sm-6">
            <img
              className="img-fluid"
              style={{ maxHeight: 300 }}
              src={bigImage}
              alt={productDetails.title}
            />
            <hr />
            {productDetails.images.map((url, index) => (
              <img
                role="button"
                onClick={() => setBigImage(url)}
                key={index}
                src={url}
                className="img-thumbnail"
                style={{ width: 100 }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail
