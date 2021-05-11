import { useMemo } from "react"
import { SearchResultsProps } from "../../types"
import { ProductItem } from "../ProductItem"

export const SearchResults = ({results, addToFavoriteList}: SearchResultsProps) => {
  /**
   * 1. Big calculations
   * 2. When passes the info as props to child (so the child doesn't re-renders')
   */
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total = product.price
    }, 0)
  }, [results])

  return (
    <div>
      <h2> {totalPrice} </h2>
      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} addToFavoriteList={addToFavoriteList} />
        )
      })}
    </div>
  )
}
