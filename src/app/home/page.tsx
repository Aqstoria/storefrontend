import Link from 'next/link'
import Image from 'next/image'
import HeaderElectronics from '@/components/layout/header-electronics'
import HeroBannerJoom from './hero-slider'
import WeeklyPromotionSection from './special-offers'
import SubscriptionVlogElectronics from '@/components/shop/subscription-vlog-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import BrandsSection from '../brands/BrandsSection'
import { ProductService } from '@/services/products'
import { Product, Category, Brand } from '@/services/products'
import { CategoriesProvider } from '@/contexts/categories-context'
import Button from 'react-bootstrap/Button'
import React from 'react'
import AcrossBordersSection from '@/components/sections/across-borders-section'

export const revalidate = 60 // ISR: Regenerate every 60 seconds

async function fetchHomeData() {
  try {
    // Fetch all data on the server
    const [featured, trending, categoriesData, brandsData] = await Promise.all([
      ProductService.getProducts({ page: 1, per_page: 8 }),
      ProductService.getProducts({ page: 2, per_page: 8 }),
      ProductService.getCategories(),
      ProductService.getBrands(),
    ])
    return {
      featuredProducts: featured.data || [],
      trendingProducts: trending.data || [],
      categories: categoriesData.data || [],
      brands: brandsData.data || [],
    }
  } catch (error) {
    console.warn('Failed to fetch home data:', error)
    // Return empty arrays as fallback
    return {
      featuredProducts: [],
      trendingProducts: [],
      categories: [],
      brands: [],
    }
  }
}

export default async function ElectronicsHomePage() {
  const data = await fetchHomeData()
  const featuredProducts = data.featuredProducts
  const trendingProducts = data.trendingProducts
  const categories = data.categories
  const brands = data.brands

  // Transform categories for header component
  const transformedCategories = categories.map(category => ({
    ...category,
    href: `/shop/${category.slug}`,
    subcategories: [], // Add subcategories if needed
    parent_id: category.parent_id || 0, // Ensure parent_id is always a number
  }))

  return (
    <CategoriesProvider>
      {/* Navigation bar (Page header) */}
      <HeaderElectronics logoHref="/" expandedCategories categories={transformedCategories} />

      {/* Page content */}
      <main className="content-wrapper">
        {/* Hero banner - Joom Style Outlet */}
        <HeroBannerJoom />

        {/* Weekly Promotion Section - EXACT Joom Layout: 1 small left + 3 large right */}
        <Container as="section" className="py-4">
          <h4 className="mb-4">Weekly promotion</h4>
          <Row className="g-3">
            {/* Small card on the left */}
            <Col lg={3}>
              <div className="bg-warning bg-opacity-20 rounded-3 p-4 h-100">
                <h5 className="mb-2">Bestsellers for less</h5>
                <p className="text-muted small mb-3">Summer Sale</p>
                
                <div className="text-center">
                  {/* TODO: Replace with your frying pan image */}
                  <div 
                    className="bg-light rounded mb-3 d-flex align-items-center justify-content-center mx-auto"
                    style={{ 
                      width: '120px', 
                      height: '120px',
                      background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)'
                    }}
                  >
                    <span className="text-muted">🍳</span>
                  </div>
                  
                  {/* TODO: Uncomment and use your actual images:
                  <Image 
                    src="/images/weekly-promotion/frying-pan.png" 
                    width={120} 
                    height={120} 
                    alt="Frying pan with egg"
                    className="mb-3 rounded"
                    style={{ objectFit: 'cover' }}
                  />
                  */}
                  
                  <p className="text-danger fw-bold mb-0">$12.99</p>
                </div>
              </div>
            </Col>
            
            {/* 3 large cards on the right */}
            <Col lg={9}>
              <Row className="g-3">
                {/* Card 1: Hot deals */}
                <Col lg={4}>
                  <div className="bg-warning bg-opacity-20 rounded-3 p-4 h-100 position-relative">
                    <h5 className="mb-2">Hot deals</h5>
                    <p className="text-muted small mb-3">Summer Sale</p>
                    
                    {/* Multiple images for this card */}
                    <div className="d-flex gap-2 mb-3">
                      {/* TODO: Replace with your gold earrings image */}
                      <div 
                        className="bg-light rounded d-flex align-items-center justify-content-center"
                        style={{ 
                          width: '60px', 
                          height: '60px',
                          background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)'
                        }}
                      >
                        <span className="text-muted">💍</span>
                      </div>
                      
                      {/* TODO: Replace with your pink ballet flats image */}
                      <div 
                        className="bg-light rounded d-flex align-items-center justify-content-center"
                        style={{ 
                          width: '60px', 
                          height: '60px',
                          background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)'
                        }}
                      >
                        <span className="text-muted">👠</span>
                      </div>
                    </div>
                    
                    {/* TODO: Uncomment and use your actual images:
                    <div className="d-flex gap-2 mb-3">
                      <Image 
                        src="/images/weekly-promotion/gold-earrings.png" 
                        width={60} 
                        height={60} 
                        alt="Gold earrings"
                        className="rounded"
                        style={{ objectFit: 'cover' }}
                      />
                      <Image 
                        src="/images/weekly-promotion/pink-ballet-flats.png" 
                        width={60} 
                        height={60} 
                        alt="Pink ballet flats"
                        className="rounded"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    */}
                    
                    <div className="d-flex justify-content-between align-items-end">
                      <div>
                        <p className="mb-0 fw-bold text-danger">$24.99</p>
                        <small className="text-muted">Elegant accessories</small>
                      </div>
                    </div>
                  </div>
                </Col>
                
                {/* Card 2: All sale items here */}
                <Col lg={4}>
                  <div className="bg-warning bg-opacity-20 rounded-3 p-4 h-100 position-relative">
                    <h5 className="mb-2">All sale items here</h5>
                    <p className="text-muted small mb-3">Summer Sale</p>
                    
                    {/* Multiple images for this card */}
                    <div className="d-flex gap-2 mb-3">
                      {/* TODO: Replace with your beige jacket image */}
                      <div 
                        className="bg-light rounded d-flex align-items-center justify-content-center"
                        style={{ 
                          width: '60px', 
                          height: '60px',
                          background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)'
                        }}
                      >
                        <span className="text-muted">🧥</span>
                      </div>
                      
                      {/* TODO: Replace with your pink gua sha tool image */}
                      <div 
                        className="bg-light rounded d-flex align-items-center justify-content-center"
                        style={{ 
                          width: '60px', 
                          height: '60px',
                          background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)'
                        }}
                      >
                        <span className="text-muted">💆</span>
                      </div>
                    </div>
                    
                    {/* TODO: Uncomment and use your actual images:
                    <div className="d-flex gap-2 mb-3">
                      <Image 
                        src="/images/weekly-promotion/beige-jacket.png" 
                        width={60} 
                        height={60} 
                        alt="Beige jacket"
                        className="rounded"
                        style={{ objectFit: 'cover' }}
                      />
                      <Image 
                        src="/images/weekly-promotion/pink-gua-sha.png" 
                        width={60} 
                        height={60} 
                        alt="Pink gua sha tool"
                        className="rounded"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    */}
                    
                    <div className="d-flex justify-content-between align-items-end">
                      <div>
                        <p className="mb-0 fw-bold text-danger">$18.99</p>
                        <small className="text-muted">Fashion & beauty</small>
                      </div>
                    </div>
                  </div>
                </Col>
                
                {/* Card 3: Additional sale item */}
                <Col lg={4}>
                  <div className="bg-warning bg-opacity-20 rounded-3 p-4 h-100 position-relative">
                    <h5 className="mb-2">Premium deals</h5>
                    <p className="text-muted small mb-3">Summer Sale</p>
                    
                    {/* TODO: Replace with your GOLD bottle image */}
                    <div 
                      className="bg-light rounded mb-3 d-flex align-items-center justify-content-center mx-auto"
                      style={{ 
                        width: '80px', 
                        height: '80px',
                        background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)'
                      }}
                    >
                      <span className="text-muted">🧴</span>
                    </div>
                    
                    {/* TODO: Uncomment and use your actual image:
                    <Image 
                      src="/images/weekly-promotion/gold-bottle.png" 
                      width={80} 
                      height={80} 
                      alt="GOLD bottle with dropper"
                      className="mb-3 rounded mx-auto d-block"
                      style={{ objectFit: 'cover' }}
                    />
                    */}
                    
                    <div className="d-flex justify-content-between align-items-end">
                      <div>
                        <p className="mb-0 fw-bold text-danger">$32.99</p>
                        <small className="text-muted">GOLD serum</small>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        {/* The Populars Section - 2x3 Grid */}
        <Container as="section" className="py-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="mb-0">The populars</h4>
            <Link href="/shop" className="text-decoration-none small">All products</Link>
          </div>
          
          <Row className="g-3">
            <Col lg={4}>
              {/* Large featured item */}
              {featuredProducts[0] && (
                <div className="bg-light rounded-3 p-4 h-100 position-relative">
                  {/* Heart icon - top right */}
                  <div className="position-absolute top-0 end-0 m-3">
                    <i className="ci-heart text-muted" style={{ fontSize: '18px', cursor: 'pointer' }}></i>
                  </div>
                  
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-warning">Top buy today</span>
                  </div>
                  <div className="text-center pt-4">
                    {featuredProducts[0].images && featuredProducts[0].images.length > 0 && (
                      <Image 
                        src={ProductService.getProductImage(featuredProducts[0])} 
                        width={120} 
                        height={120} 
                        alt={featuredProducts[0].name}
                        className="mb-3"
                      />
                    )}
                    <h6 className="mb-2">{featuredProducts[0].name}</h6>
                    <p className="text-danger fw-bold mb-2">${ProductService.getProductPrice(featuredProducts[0]).toFixed(2)}</p>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <div className="text-warning me-1">★★★★★</div>
                      <small className="text-muted">(120)</small>
                    </div>
                    {/* Shopping cart icon - bottom */}
                    <div className="text-center">
                      <i className="ci-cart text-muted" style={{ fontSize: '18px', cursor: 'pointer' }}></i>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            
            <Col lg={8}>
              <Row className="g-3 h-100">
                {trendingProducts.slice(0, 6).map((product, index) => (
                  <Col lg={4} md={6} sm={6} xs={6} key={product.id}>
                    <Link href={ProductService.getProductUrl(product)} className="text-decoration-none">
                      <div className="bg-white border rounded-3 p-3 h-100 text-center product-card position-relative">
                        {/* Heart icon - top right */}
                        <div className="position-absolute top-0 end-0 m-2">
                          <i className="ci-heart text-muted" style={{ fontSize: '16px', cursor: 'pointer' }}></i>
                        </div>
                        
                        {product.images && product.images.length > 0 ? (
                          <Image 
                            src={ProductService.getProductImage(product)} 
                            width={80} 
                            height={80} 
                            alt={product.name}
                            className="mb-2 img-fluid"
                            style={{ objectFit: 'cover' }}
                          />
                        ) : (
                          <div className="bg-light rounded mb-2 d-flex align-items-center justify-content-center" style={{ height: '80px' }}>
                            <span className="text-muted small">No Image</span>
                          </div>
                        )}
                        <h6 className="small mb-1 text-dark text-truncate" style={{ fontSize: '12px' }}>{product.name}</h6>
                        <p className="text-danger fw-bold mb-1">${ProductService.getProductPrice(product).toFixed(2)}</p>
                        <div className="d-flex align-items-center justify-content-center mb-2">
                          <div className="text-warning me-1" style={{ fontSize: '12px' }}>★★★★</div>
                          <small className="text-muted">(85)</small>
                        </div>
                        {/* Shopping cart icon - bottom */}
                        <div className="text-center">
                          <i className="ci-cart text-muted" style={{ fontSize: '16px', cursor: 'pointer' }}></i>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>

        {/* Low Prices on Trending Items */}
        <Container as="section" className="py-4">
          <Row className="g-4">
            <Col lg={4}>
              <div className="bg-warning bg-opacity-20 rounded-3 p-4 h-100">
                <h5 className="mb-2">Low prices on trending items</h5>
                <p className="text-muted small mb-4">Summer Sale</p>
                
                <div className="text-center">
                  {trendingProducts[0] && trendingProducts[0].images && trendingProducts[0].images.length > 0 && (
                    <Image 
                      src={ProductService.getProductImage(trendingProducts[0])} 
                      width={150} 
                      height={150} 
                      alt={trendingProducts[0].name}
                      className="mb-3"
                    />
                  )}
                </div>
              </div>
            </Col>
            
            <Col lg={8}>
              <h5 className="mb-4">New arrivals</h5>
              <div className="d-flex gap-3 overflow-auto pb-2">
                {featuredProducts.slice(3, 9).map((product) => (
                  <div key={product.id} className="flex-shrink-0" style={{ minWidth: '150px' }}>
                    <Link href={ProductService.getProductUrl(product)} className="text-decoration-none">
                      <div className="bg-white border rounded-3 p-3 text-center position-relative">
                        {/* Heart icon - top right */}
                        <div className="position-absolute top-0 end-0 m-2">
                          <i className="ci-heart text-muted" style={{ fontSize: '14px', cursor: 'pointer' }}></i>
                        </div>
                        
                        {product.images && product.images.length > 0 ? (
                          <Image 
                            src={ProductService.getProductImage(product)} 
                            width={80} 
                            height={80} 
                            alt={product.name}
                            className="mb-2"
                          />
                        ) : (
                          <div className="bg-light rounded mb-2 d-flex align-items-center justify-content-center" style={{ height: '80px' }}>
                            <span className="text-muted small">No Image</span>
                          </div>
                        )}
                        <p className="text-danger fw-bold mb-1 small">${ProductService.getProductPrice(product).toFixed(2)}</p>
                        <small className="text-muted d-block mb-2">From USA</small>
                        {/* Shopping cart icon - bottom */}
                        <div className="text-center">
                          <i className="ci-cart text-muted" style={{ fontSize: '14px', cursor: 'pointer' }}></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        {/* Across Borders Section - With Pagination */}
        <Container as="section" className="py-4">
          <h5 className="mb-4">Across borders</h5>
          
          {/* Countries Data - Add your 6 country images here */}
          <AcrossBordersSection />
        </Container>

        {/* Our Top Picks Section - Multiple Rows */}
        <Container as="section" className="py-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h5 className="mb-0">Our top picks just for you</h5>
            <Link href="/shop" className="text-decoration-none small">All products</Link>
          </div>
          
          {/* Multiple rows of products */}
          {[0, 6, 12, 18].map((startIndex) => (
            <Row className="g-3 mb-4" key={startIndex}>
              {featuredProducts.slice(startIndex, startIndex + 6).map((product) => (
                <Col xl={2} lg={3} md={4} sm={6} xs={6} key={product.id}>
                  <Link href={ProductService.getProductUrl(product)} className="text-decoration-none">
                    <div className="bg-white border rounded-3 p-3 text-center h-100 position-relative">
                      {/* Heart icon - top right */}
                      <div className="position-absolute top-0 end-0 m-2">
                        <i className="ci-heart text-muted" style={{ fontSize: '14px', cursor: 'pointer' }}></i>
                      </div>
                      
                      {product.images && product.images.length > 0 ? (
                        <Image 
                          src={ProductService.getProductImage(product)} 
                          width={80} 
                          height={80} 
                          alt={product.name}
                          className="mb-2"
                        />
                      ) : (
                        <div className="bg-light rounded mb-2 d-flex align-items-center justify-content-center" style={{ height: '80px' }}>
                          <span className="text-muted small">No Image</span>
                        </div>
                      )}
                      <h6 className="small mb-1 text-dark text-truncate">{product.name}</h6>
                      <p className="text-danger fw-bold mb-1">${ProductService.getProductPrice(product).toFixed(2)}</p>
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <div className="text-warning me-1">★★★★</div>
                        <small className="text-muted">(42)</small>
                      </div>
                      {/* Shopping cart icon - bottom */}
                      <div className="text-center">
                        <i className="ci-cart text-muted" style={{ fontSize: '14px', cursor: 'pointer' }}></i>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          ))}
          
          {/* Show more button - exactly like Joom.com */}
          <div className="text-center mt-4">
            <Button variant="dark" size="lg" className="px-5 py-3">
              Show more
            </Button>
          </div>
        </Container>

        {/* Newsletter Signup Section - Full Width with Theme Colors */}
        <section className="py-4" style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)' }}>
          <Container>
            <div className="text-center">
              <h3 className="h4 mb-2 fw-bold text-white">Stay Updated with Cartzilla</h3>
              <p className="text-white mb-3" style={{ fontSize: '14px' }}>
                Subscribe to our newsletter and get the latest deals, product updates, and exclusive offers delivered to your inbox.
              </p>
              <form className="d-flex flex-column flex-sm-row gap-2 justify-content-center align-items-center">
                <div className="flex-grow-1" style={{ maxWidth: '350px' }}>
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Enter your email address"
                    style={{ 
                      height: '48px',
                      fontSize: '14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)'
                    }}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn border-0 px-4"
                  style={{ 
                    height: '48px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-white small mt-2 mb-0" style={{ fontSize: '12px' }}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </Container>
        </section>

        {/* Footer */}
        <FooterElectronics />
      </main>
    </CategoriesProvider>
  )
}
