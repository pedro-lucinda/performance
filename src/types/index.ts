export type SearchResultsProps = {
  results : Product[]
  addToFavoriteList: (id: number) => void
}

export type Product = {
  id: number;
  price: number;
  title: string;
}

export type ProductItemProps = {
  product: Product;
  addToFavoriteList: (id: number) => void;
}