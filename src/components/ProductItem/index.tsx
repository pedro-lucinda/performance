import React, {memo} from 'react'
import { ProductItemProps } from '../../types'

const ProductItemComponent = ({ product, addToFavoriteList }: ProductItemProps) => {
  return (
    <div>
      <h3> {product.title} </h3>
      <strong> {Math.floor(product.price)} </strong>
      <button onClick={() => addToFavoriteList(product.id)}>*</button>
    </div>
  )
}

// MEMO =>  shallow compare 
/* 
  1. Pure functional components / just to divide the interface
  2. If the results are always the same
  3. Renders too often
  4. Re-ender with the same props
  5. The size is medium or big
*/
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return prevProps.product === nextProps.product
})