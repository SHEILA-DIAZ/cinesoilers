import type { Product } from '../types/Product'
import { useCart } from '../context/CartContext'

type Props = {
  product: Product
}

function ProductCard({ product }: Props) {
  const { addToCart } = useCart()

  return (
    <div className="border rounded-xl p-4 shadow">
      <img src={product.image} alt={product.title} className="rounded mb-3" />
      <h3 className="font-bold">{product.title}</h3>
      <p className="mb-3">S/ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Agregar
      </button>
    </div>
  )
}

export default ProductCard