import { IProducts, Product } from "../models/IProducts"
import { config } from "./config"

export const allProduct = () => {
    return config.get<IProducts>('products')
}

export const getProductById = (id:string) => {
    return config.get<Product>('products/'+id)
}