import { Link, createFileRoute } from '@tanstack/react-router'
import { Check } from 'lucide-react'

export const Route = createFileRoute('/checkout/success')({ component: CheckoutSuccess })

function CheckoutSuccess() {
  return (
    <main className="checkout-page">
      <section className="checkout-card">
        <div className="checkout-icon"><Check size={30} /></div>
        <p className="eyebrow red">Order confirmed</p>
        <h1>You crossed the line.</h1>
        <p>Your Redline pair is officially in motion. Order details are heading to your inbox.</p>
        <Link to="/" className="button button-dark">Keep shopping</Link>
      </section>
    </main>
  )
}
