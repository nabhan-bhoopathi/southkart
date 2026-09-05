import { useEffect, useState } from 'react'
import { createCheckoutSession, getStripeEnabled } from '@/lib/stripe'

export function BuyButton({
  productId,
  className = '',
}: {
  productId: number
  className?: string
}) {
  const [loading, setLoading] = useState(false)
  const [stripeEnabled, setStripeEnabled] = useState<boolean | null>(null)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled)
  }, [])

  const handleClick = async () => {
    if (stripeEnabled === false) {
      window.dispatchEvent(new CustomEvent('redline:add-to-bag'))
      setAdded(true)
      window.setTimeout(() => setAdded(false), 1800)
      return
    }

    setLoading(true)
    try {
      const url = await createCheckoutSession({ data: productId })
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading || stripeEnabled === null}
      className={`buy-button ${className}`}
    >
      {loading ? 'Opening checkout…' : added ? 'Added' : 'Add to bag'}
    </button>
  )
}
