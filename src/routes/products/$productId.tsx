import { ArrowLeft, ShoppingBag } from 'lucide-react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import products from '../../data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find((item) => item.id === +params.productId)
    if (!product) throw new Error('Product not found')
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()
  const [bagCount, setBagCount] = useState(0)

  useEffect(() => {
    const addItem = () => setBagCount((count) => count + 1)
    window.addEventListener('redline:add-to-bag', addItem)
    return () => window.removeEventListener('redline:add-to-bag', addItem)
  }, [])

  return (
    <main className="detail-shell">
      <header className="detail-header">
        <Link to="/" className="brand">RED<span>LINE</span></Link>
        <Link to="/" className="back-link"><ArrowLeft size={15} /> All shoes</Link>
        <span className="detail-bag"><ShoppingBag size={19} />{bagCount}</span>
      </header>
      <div className="detail-grid">
        <div className="detail-image" data-mark={`0${product.id}`}>
          <img src={product.image} alt={product.name} />
        </div>
        <section className="detail-copy">
          <p className="eyebrow red">{product.badge}</p>
          <h1>{product.name}</h1>
          <p className="detail-category">{product.category}</p>
          <p className="detail-price">${product.price}</p>
          <p className="detail-description">{product.description}</p>
          <div className="detail-specs">
            <div><small>Weight</small><strong>{product.weight}</strong></div>
            <div><small>Heel-to-toe drop</small><strong>{product.drop}</strong></div>
          </div>
          <div className="product-colors">
            {product.colors.map((color) => <span key={color} style={{ background: color }} />)}
            <small>{product.colors.length} colorways</small>
          </div>
          <BuyButton productId={product.id} className="detail-buy" />
        </section>
      </div>
    </main>
  )
}
