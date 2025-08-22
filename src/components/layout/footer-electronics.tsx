'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FooterElectronics = ({ className, logoHref }: { className?: string; logoHref?: string }) => (
  <footer className={`footer position-relative bg-dark text-white${className ? ` ${className}` : ''}`}>
    {/* Main Footer Content */}
    <div className="py-5">
      <Container>
        <Row>
          {/* Brand & App Section */}
          <Col lg={4} md={6} className="mb-4">
            <div className="mb-4">
              {/* Premium Logo */}
              <div className="d-flex align-items-center mb-3">
                <span className="h3 mb-0 fw-bold text-danger me-2">C</span>
                <span className="h3 mb-0 fw-bold text-white">ARTZILLA</span>
                <div className="bg-danger rounded-circle ms-2" style={{ width: '8px', height: '8px' }}></div>
              </div>
              <p className="text-white-75 mb-4" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                Your premier destination for quality products, exceptional service, and unbeatable deals. 
                Join millions of satisfied customers worldwide.
              </p>
              
              {/* App Download Section */}
              <div className="bg-gradient-primary rounded-4 p-4 mb-4" style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)' }}>
                <h6 className="text-white fw-bold mb-3">Get the Cartzilla App</h6>
                <p className="text-white-75 small mb-3">Exclusive app-only deals and faster checkout</p>
                <div className="d-flex gap-2">
                  <div className="bg-white rounded-3 p-2">
                    <i className="ci-apple fs-4 text-dark"></i>
                  </div>
                  <div className="bg-white rounded-3 p-2">
                    <i className="ci-android fs-4 text-dark"></i>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="d-flex gap-3">
                <Link href="#" className="bg-white bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none" style={{ width: '40px', height: '40px' }}>
                  <i className="ci-facebook"></i>
                </Link>
                <Link href="#" className="bg-white bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none" style={{ width: '40px', height: '40px' }}>
                  <i className="ci-twitter"></i>
                </Link>
                <Link href="#" className="bg-white bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none" style={{ width: '40px', height: '40px' }}>
                  <i className="ci-instagram"></i>
                </Link>
                <Link href="#" className="bg-white bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none" style={{ width: '40px', height: '40px' }}>
                  <i className="ci-youtube"></i>
                </Link>
              </div>
            </div>
          </Col>

          {/* Shopping & Support */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-4 text-uppercase" style={{ letterSpacing: '1px', fontSize: '14px' }}>Shopping</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/shop" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  All Categories
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/deals" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Today's Deals
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/new-arrivals" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  New Arrivals
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/trending" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Trending Now
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/brands" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Top Brands
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/outlet" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Outlet Store
                </Link>
              </li>
            </ul>
          </Col>

          {/* Customer Service */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-4 text-uppercase" style={{ letterSpacing: '1px', fontSize: '14px' }}>Customer Service</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/help" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Help Center
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/contact" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Contact Us
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/delivery" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Shipping Info
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/returns" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Returns & Exchanges
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/warranty" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Warranty
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/size-guide" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Size Guide
                </Link>
              </li>
            </ul>
          </Col>

          {/* Business Solutions */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-4 text-uppercase" style={{ letterSpacing: '1px', fontSize: '14px' }}>Business</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/sell" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Sell on Cartzilla
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/affiliate" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Affiliate Program
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/business" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Business Solutions
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/api" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Developer API
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/partners" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Partnership
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/wholesale" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Wholesale
                </Link>
              </li>
            </ul>
          </Col>

          {/* Company & Legal */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-4 text-uppercase" style={{ letterSpacing: '1px', fontSize: '14px' }}>Company</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/about" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  About Cartzilla
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/careers" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Careers
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/press" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Press Room
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/investors" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Investors
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/privacy" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/terms" className="text-white-75 text-decoration-none footer-link" style={{ fontSize: '14px' }}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>

    {/* Premium Bottom Section */}
    <div className="border-top border-secondary border-opacity-25">
      <Container>
        <Row className="py-4 align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-4">
              <p className="text-white-75 mb-0" style={{ fontSize: '14px' }}>
                © 2025 Cartzilla. All Rights Reserved.
              </p>
              <div className="d-flex gap-3">
                <Link href="/privacy" className="text-white-75 text-decoration-none" style={{ fontSize: '13px' }}>Privacy</Link>
                <Link href="/terms" className="text-white-75 text-decoration-none" style={{ fontSize: '13px' }}>Terms</Link>
                <Link href="/cookies" className="text-white-75 text-decoration-none" style={{ fontSize: '13px' }}>Cookies</Link>
              </div>
            </div>
          </Col>
          
          <Col md={6} className="text-md-end">
            <div className="d-flex gap-4 justify-content-center justify-content-md-end align-items-center">
              {/* Security Badges */}
              <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center">
                  <i className="ci-shield-check text-success me-2"></i>
                  <span className="text-white-75 small">SSL Secure</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="ci-credit-card text-info me-2"></i>
                  <span className="text-white-75 small">PCI DSS</span>
                </div>
              </div>
              
              {/* Payment Methods */}
              <div className="d-flex gap-2">
                <div className="bg-white rounded p-1">
                  <i className="ci-visa text-primary"></i>
                </div>
                <div className="bg-white rounded p-1">
                  <i className="ci-mastercard text-warning"></i>
                </div>
                <div className="bg-white rounded p-1">
                  <i className="ci-paypal text-primary"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
)

export default FooterElectronics
