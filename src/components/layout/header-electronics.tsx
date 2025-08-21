'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Badge from 'react-bootstrap/Badge'

const HeaderElectronics = () => {
  const [cookieConsent, setCookieConsent] = useState(true)
  
  // Simplified categories for now
  const joomCategories = ['All categories', 'Electronics', 'Headphones', 'Desktop', 'With Bluetooth', 'Microscope', 'Best Sellers']

  return (
    <>
      {/* Cookie Consent Banner */}
      {!cookieConsent && (
        <div className="bg-dark text-white py-2">
          <Container>
            <Row className="align-items-center">
              <Col>
                <small>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</small>
              </Col>
              <Col xs="auto">
                <Button 
                  variant="outline-light" 
                  size="sm"
                  onClick={() => setCookieConsent(true)}
                >
                  OK
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {/* Main Header Section */}
      <div className="bg-white border-bottom">
        <Container>
          {/* Top Row */}
          <Row className="py-2 align-items-center">
            <Col className="d-none d-lg-block">
              <div className="d-flex gap-4 align-items-center">
                <div className="dropdown">
                  <Button variant="link" className="text-dark text-decoration-none p-0">
                    <i className="fi fi-gb me-1"></i>
                    English
                  </Button>
                </div>
                <div className="dropdown">
                  <Button variant="link" className="text-dark text-decoration-none p-0">
                    USD
                  </Button>
                </div>
              </div>
            </Col>
            <Col className="text-center text-lg-end">
              <div className="d-flex gap-3 align-items-center justify-content-center justify-content-lg-end">
                <Link href="/help" className="text-dark text-decoration-none small">Help centre</Link>
                <Link href="/delivery" className="text-dark text-decoration-none small">Delivery</Link>
                <Link href="/warranty" className="text-dark text-decoration-none small">Warranty</Link>
                <Button variant="dark" size="sm">Cartzilla Geek</Button>
              </div>
            </Col>
          </Row>

          {/* Main Navigation Row */}
          <Row className="py-3 align-items-center">
            <Col xs={12} lg={3}>
              <Link href="/" className="text-decoration-none">
                <span className="h3 text-danger mb-0">C</span>
                <span className="h3 text-dark mb-0">ARTZILLA</span>
              </Link>
            </Col>
            <Col xs={12} lg={6}>
              <div className="d-flex">
                <FormControl 
                  type="text" 
                  placeholder="Search for products..." 
                  className="rounded-start"
                />
                <Button variant="danger" className="rounded-end">
                  Search
                </Button>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className="d-flex gap-4 align-items-center justify-content-center justify-content-lg-end">
                <div className="text-center">
                  <i className="ci-bell fs-4 text-dark"></i>
                  <div className="small">Notifications</div>
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">3</Badge>
                </div>
                <div className="text-center">
                  <i className="ci-user fs-4 text-dark"></i>
                  <div className="small">Log in</div>
                </div>
                <div className="text-center">
                  <i className="ci-cart fs-4 text-dark"></i>
                  <div className="small">My orders</div>
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">2</Badge>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Category Navigation Bar */}
      <div className="bg-white border-bottom">
        <Container>
          <Row className="py-2">
            <Col>
              <div className="d-flex gap-3 align-items-center overflow-auto">
                <Button variant="outline-dark" className="text-nowrap">
                  All categories
                </Button>
                {joomCategories.slice(1).map((category, index) => (
                  <Link 
                    key={index}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-dark text-decoration-none small text-nowrap"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HeaderElectronics
