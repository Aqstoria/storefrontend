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

        {/* Weekly Promotion Section - 3 Cards */}
        <Container as="section" className="py-4">
          <h4 className="mb-4">Weekly promotion</h4>
          <Row className="g-3">
            {featuredProducts.slice(0, 3).map((product, index) => {
              const titles = ['Accessories for less', 'Hot deals', 'All sale items here']
              const subtitles = ['Summer Sale', 'Summer Sale', 'Summer Sale']
              const colors = ['success', 'warning', 'info']
              
              return (
                <Col lg={4} md={6} key={product.id}>
                  <div className={`bg-${colors[index]} bg-opacity-10 rounded-3 p-4 h-100 position-relative`}>
                    <h5 className="mb-2">{titles[index]}</h5>
                    <p className="text-muted small mb-3">{subtitles[index]}</p>
                    <div className="d-flex justify-content-between align-items-end">
                      <div>
                        <p className="mb-0 fw-bold text-danger">${ProductService.getProductPrice(product).toFixed(2)}</p>
                        <small className="text-muted">{product.name}</small>
                      </div>
                      {product.images && product.images.length > 0 && (
                        <div className="position-absolute end-0 bottom-0 me-3">
                          <Image 
                            src={ProductService.getProductImage(product)} 
                            width={60} 
                            height={60} 
                            alt={product.name}
                            className="rounded"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
              )
            })}
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
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="text-warning me-1">★★★★★</div>
                      <small className="text-muted">(120)</small>
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
                      <div className="bg-white border rounded-3 p-3 h-100 text-center product-card">
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
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="text-warning me-1" style={{ fontSize: '12px' }}>★★★★</div>
                          <small className="text-muted">(85)</small>
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
                      <div className="bg-white border rounded-3 p-3 text-center">
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
                        <small className="text-muted d-block">From USA</small>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        {/* Across Borders Section */}
        <Container as="section" className="py-4">
          <h5 className="mb-4">Across borders</h5>
          <Row className="g-3">
            {[
              { country: 'Korea', flag: '🇰🇷', desc: 'Discover fresh finds from around the world' },
              { country: 'India', flag: '🇮🇳', desc: 'Discover fresh finds from around the world' },
              { country: 'France', flag: '🇫🇷', desc: 'Discover fresh finds from around the world' },
            ].map((item, index) => (
              <Col lg={4} key={index}>
                <div className="bg-light rounded-3 p-4 text-center">
                  <h6 className="mb-3">Products from {item.country}</h6>
                  <div className="mb-3">
                    <span className="fs-1">{item.flag}</span>
                  </div>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
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
                    <div className="bg-white border rounded-3 p-3 text-center h-100">
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
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="text-warning me-1">★★★★</div>
                        <small className="text-muted">(42)</small>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          ))}
        </Container>

        {/* Newsletter Signup Section */}
        <Container as="section" className="pt-5 mt-5">
          <div className="bg-primary bg-opacity-10 rounded-4 p-5 text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <h2 className="h3 mb-3 fw-bold">Stay Updated with Cartzilla</h2>
                <p className="text-muted mb-4 fs-5">
                  Subscribe to our newsletter and get the latest deals, product updates, and exclusive offers delivered to your inbox.
                </p>
                <form className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <div className="flex-grow-1" style={{ maxWidth: '400px' }}>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg px-4">
                    Subscribe Now
                  </button>
                </form>
                <p className="text-muted small mt-3 mb-0">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* Footer */}
        <FooterElectronics />
      </main>
    </CategoriesProvider>
  )
}
