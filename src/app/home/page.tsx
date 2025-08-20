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
        {/* Hero banner */}
        <HeroBannerJoom />

        {/* Weekly Promotion Section */}
        <WeeklyPromotionSection products={featuredProducts} />

        {/* Low Prices on Trending Items + The Populars Section */}
        <Container as="section" className="pt-5">
          <Row className="g-4">
            {/* Low Prices on Trending Items */}
            <Col lg={4}>
              <div className="bg-warning bg-opacity-10 rounded-4 p-4 h-100">
                <h3 className="h4 mb-3">Low prices on trending items</h3>
                <p className="text-muted mb-3">Summer Sale</p>
                
                {/* Product Images from Backend */}
                <div className="d-flex justify-content-center align-items-center mb-3">
                  {trendingProducts.slice(0, 2).map((product, index) => (
                    <Link key={product.id} href={ProductService.getProductUrl(product)} className="text-decoration-none">
                      <div className="bg-white rounded p-3 me-2">
                        {product.images && product.images.length > 0 ? (
                          <Image 
                            src={ProductService.getProductImage(product)} 
                            width={80} 
                            height={80} 
                            alt={product.name}
                            className="img-fluid"
                          />
                        ) : (
                          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                            <span className="text-muted small">{product.name}</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>

            {/* The Populars Section */}
            <Col lg={8}>
              <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                <h3 className="h4 mb-0">The Populars</h3>
                <Link href="/shop/all-products" className="text-decoration-none">
                  All products
                </Link>
              </div>
              
              <Row xs={2} sm={3} md={4} className="g-3">
                {trendingProducts.slice(0, 8).map((product) => (
                  <Col key={product.id}>
                    <Link href={ProductService.getProductUrl(product)} className="text-decoration-none">
                      <div className="text-center">
                        <div className="bg-white rounded p-2 mb-2">
                          {product.images && product.images.length > 0 ? (
                            <Image 
                              src={ProductService.getProductImage(product)} 
                              width={80} 
                              height={80} 
                              alt={product.name}
                              className="img-fluid"
                            />
                          ) : (
                            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                              <span className="text-muted small">{product.name}</span>
                            </div>
                          )}
                        </div>
                        <h6 className="small mb-1 text-dark">{product.name}</h6>
                        <p className="text-primary mb-1 fw-bold">${ProductService.getProductPrice(product).toFixed(2)}</p>
                        <div className="d-flex align-items-center justify-content-center">
                          <i className="ci-star-filled text-warning me-1"></i>
                          <span className="small text-muted">4.5 (120)</span>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>

        {/* New Arrivals Section */}
        <Container as="section" className="pt-5">
          <h3 className="h4 mb-4">New Arrivals</h3>
          <div className="overflow-auto">
            <Row className="flex-nowrap g-3" style={{ minWidth: 'max-content' }}>
              {featuredProducts.slice(0, 6).map((product) => (
                <Col xs={6} sm={4} md={3} lg={2} key={product.id} style={{ minWidth: '200px' }}>
                  <Link href={ProductService.getProductUrl(product)} className="text-decoration-none">
                    <div className="text-center">
                      <div className="bg-white rounded p-3 mb-2">
                        {product.images && product.images.length > 0 ? (
                          <Image 
                            src={ProductService.getProductImage(product)} 
                            width={80} 
                            height={80} 
                            alt={product.name}
                            className="img-fluid"
                          />
                        ) : (
                          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                            <span className="text-muted small">{product.name}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-primary mb-1 fw-bold">${ProductService.getProductPrice(product).toFixed(2)}</p>
                      <small className="text-muted">From Japan</small>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Container>

        {/* Across Borders Section */}
        <Container as="section" className="pt-5">
          <h3 className="h4 mb-4">Across Borders</h3>
          <Row className="g-4">
            {[
              { country: 'Korea', flag: '🇰🇷', element: '❤️' },
              { country: 'India', flag: '🇮🇳', element: '💍' },
              { country: 'France', flag: '🇫🇷', element: '🗼' },
            ].map((item, index) => (
              <Col lg={4} key={index}>
                <div className="bg-light rounded-4 p-4 text-center h-100">
                  <h4 className="h5 mb-3">Products from {item.country}</h4>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className="bg-white rounded-circle p-4 me-3">
                      <span className="fs-1">{item.flag}</span>
                    </div>
                    <div className="bg-white rounded-circle p-4">
                      <span className="fs-1">{item.element}</span>
                    </div>
                  </div>
                  <Link href={`/shop/country/${item.country.toLowerCase()}`} className="btn btn-outline-primary">
                    Explore {item.country}
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Our Top Picks Section */}
        <Container as="section" className="pt-5">
          <h3 className="h4 mb-4">Our Top Picks Just For You</h3>
          <Row xs={2} sm={3} md={4} lg={6} className="g-3">
            {featuredProducts.slice(0, 24).map((product) => (
              <Col key={product.id}>
                <Link href={ProductService.getProductUrl(product)} className="text-decoration-none">
                  <div className="text-center">
                    <div className="bg-white rounded p-2 mb-2">
                      {product.images && product.images.length > 0 ? (
                        <Image 
                          src={ProductService.getProductImage(product)} 
                          width={80} 
                          height={80} 
                          alt={product.name}
                          className="img-fluid"
                        />
                      ) : (
                        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                          <span className="text-muted small">{product.name}</span>
                        </div>
                      )}
                    </div>
                    <h6 className="small mb-1 text-dark">{product.name}</h6>
                    <p className="text-primary mb-1 fw-bold">${ProductService.getProductPrice(product).toFixed(2)}</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="ci-star-filled text-warning me-1"></i>
                      <span className="small text-muted">4.2 (85)</span>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
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
