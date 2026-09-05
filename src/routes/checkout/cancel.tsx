import { Link, createFileRoute } from '@tanstack/react-router'
import { X } from 'lucide-react'

export const Route = createFileRoute('/checkout/cancel')({ component: CheckoutCancel })

function CheckoutCancel() {
  return (
    <main className="checkout-page">
      <section className="checkout-card">
        <div className="checkout-icon"><X size={30} /></div>
        <p className="eyebrow red">Checkout paused</p>
        <h1>Your pair is still waiting.</h1>
        <p>No charge was made. Head back to the collection whenever you are ready to move.</p>
        <Link to="/" className="button button-dark">Return to shoes</Link>
      </section>
    </main>
  )
}
