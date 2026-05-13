import type { Product } from '../types/Product'

type Props = {
  product: Product
}

function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow">
      <img src={product.image} alt={product.title} className="rounded mb-3" />
      <h3 className="font-bold">{product.title}</h3>
      <p>S/ {product.price}</p>
    </div>
  )
}

export default ProductCard