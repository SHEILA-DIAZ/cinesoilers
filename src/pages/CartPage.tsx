import { useCart } from '../context/CartContext'

function CartPage() {
  const { cart } = useCart()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Carrito</h2>

      {cart.map((item, index) => (
        <p key={index}>
          {item.title} - S/ {item.price}
        </p>
      ))}
    </div>
  )
}

export default CartPage