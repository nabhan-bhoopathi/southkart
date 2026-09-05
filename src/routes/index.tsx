import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  CircleUserRound,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import products from '@/data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/')({
  component: ProductsIndex,
})

function ProductsIndex() {
  const featuredProduct = products[0]
  const [bagCount, setBagCount] = useState(0)

  useEffect(() => {
    const addItem = () => setBagCount((count) => count + 1)
    window.addEventListener('redline:add-to-bag', addItem)
    return () => window.removeEventListener('redline:add-to-bag', addItem)
  }, [])

  return (
    <main>
      <div className="announcement">
        <span>Free express shipping on orders over $120</span>
        <span className="announcement-code">Use code: REDLINE</span>
      </div>

      <header className="site-header">
        <Link to="/" className="brand" aria-label="Redline home">
          RED<span>LINE</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#new">New drops</a>
          <a href="#collection">Men</a>
          <a href="#collection">Women</a>
          <a href="#story">Our story</a>
        </nav>
        <div className="header-actions">
          <button type="button" aria-label="Search"><Search size={19} /></button>
          <button type="button" aria-label="Account"><CircleUserRound size={19} /></button>
          <button type="button" aria-label="Shopping bag" className="bag-button">
            <ShoppingBag size={19} />
            <span>{bagCount}</span>
          </button>
          <button type="button" aria-label="Open menu" className="menu-button"><Menu size={21} /></button>
        </div>
      </header>

      <section className="hero" id="new">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> Drop 09 / limited release</p>
          <h1>Shoes built<br />to <em>move.</em></h1>
          <p className="hero-description">
            Street-tested silhouettes. Track-grade comfort. Made for people who never stand still.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#collection">Shop the drop <ArrowRight size={17} /></a>
            <Link
              to="/products/$productId"
              params={{ productId: featuredProduct.id.toString() }}
              className="text-link"
            >
              Explore the R/01 <ChevronRight size={16} />
            </Link>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>JM</span><span>AK</span><span>TS</span>
            </div>
            <div><strong>4.92 / 5</strong><small>from 1,284 runners</small></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-word" aria-hidden="true">RUN</div>
          <div className="hero-circle" aria-hidden="true" />
          <img src={featuredProduct.image} alt={`${featuredProduct.name} in velocity red`} />
          <div className="hero-product-tag">
            <span>Just landed</span>
            <strong>{featuredProduct.name}</strong>
            <small>${featuredProduct.price}</small>
          </div>
          <a className="scroll-cue" href="#collection" aria-label="Scroll to collection">
            <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section className="ticker" aria-label="Brand values">
        <div>
          <span>Move different</span><i aria-hidden="true" /><span>Designed in motion</span><i aria-hidden="true" />
          <span>Move different</span><i aria-hidden="true" /><span>Designed in motion</span><i aria-hidden="true" />
        </div>
      </section>

      <section className="collection section-shell" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow red">Fresh rotation</p>
            <h2>Pick your pace.</h2>
          </div>
          <div className="category-tabs" aria-label="Product categories">
            <button className="active" type="button">All shoes</button>
            <button type="button">Running</button>
            <button type="button">Street</button>
            <button type="button">Training</button>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card product-card-${index + 1}`} key={product.id}>
              <Link
                to="/products/$productId"
                params={{ productId: product.id.toString() }}
                className="product-image-wrap"
              >
                <span className="product-badge">{product.badge}</span>
                <span className="heart-button" aria-hidden="true">
                  <Heart size={18} />
                </span>
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="view-product">View pair <ArrowRight size={15} /></span>
              </Link>
              <div className="product-info">
                <div>
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                </div>
                <strong>${product.price}</strong>
              </div>
              <div className="product-colors" aria-label={`${product.name} available colors`}>
                {product.colors.map((color) => <span key={color} style={{ background: color }} />)}
                <small>+{product.colors.length}</small>
              </div>
              <BuyButton productId={product.id} className="product-buy" />
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto section-shell" id="story">
        <div className="manifesto-card red-card">
          <span className="outline-number">01</span>
          <p className="eyebrow light">Why Redline</p>
          <h2>We don't make shoes for standing still.</h2>
          <p>Every curve, stitch, and layer is tuned for momentum—without sacrificing the style you bring to the street.</p>
          <a href="#collection">Meet the collection <ArrowRight size={17} /></a>
        </div>
        <div className="manifesto-card image-card">
          <img src="/redline-motion.svg" alt="Runner wearing Redline shoes in motion" loading="lazy" />
          <div className="floating-stat">
            <strong>43%</strong>
            <span>recycled upper<br />materials</span>
          </div>
        </div>
      </section>

      <section className="reviews section-shell">
        <div className="review-score">
          <p className="eyebrow red">The word on the street</p>
          <strong>4.9</strong>
          <div className="stars" aria-label="4.9 out of 5 stars">
            {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" />)}
          </div>
          <small>1,284 verified reviews</small>
        </div>
        <blockquote>
          “The rare shoe that feels fast and looks even faster. I wore the R/01 through a full day in Chicago and forgot I had new shoes on.”
          <footer>— MARCUS V., CHICAGO</footer>
        </blockquote>
      </section>

      <section className="newsletter">
        <div>
          <p className="eyebrow light">First access</p>
          <h2>Stay ahead of the drop.</h2>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="YOUR EMAIL ADDRESS" required />
          <button type="submit" aria-label="Join the Redline newsletter"><ArrowRight /></button>
        </form>
      </section>

      <footer className="site-footer">
        <Link to="/" className="brand footer-brand">RED<span>LINE</span></Link>
        <p>Built for motion. Designed for the city.</p>
        <div>
          <a href="#collection">Shop</a><a href="#story">Story</a><a href="#new">Instagram</a><a href="#new">Support</a>
        </div>
        <small>© 2026 REDLINE FOOTWORK. ALL RIGHTS RESERVED.</small>
      </footer>
    </main>
  )
}
