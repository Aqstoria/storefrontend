'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Badge from 'react-bootstrap/Badge'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'

interface HeaderElectronicsProps {
  logoHref?: string
  isLoggedIn?: {
    name: string
    href: string
  }
  expandedCategories?: boolean
  categories?: any[]
}

const HeaderElectronics = ({ logoHref = '/', isLoggedIn, expandedCategories, categories }: HeaderElectronicsProps = {}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  // Use provided categories or fallback to simplified ones
  const joomCategories = categories && categories.length > 0 
    ? categories.map((cat: any) => cat.name).slice(0, 20)
    : ['Outlet', 'Free gift with purchase', 'Xiaomi', 'Men\'s Fashion', 'Pet Supplies', 'Shoes', 'Home Improvement', 'Electronics', 'Smartphone Cases', 'Home Appliances', 'Home & Kitchen', 'Kids', 'Parties & Events', 'Beauty', 'Health', 'Bags & Suitcases', 'Women\'s Fashion', 'Office & School', 'Watches & Clocks']

  return (
    <>
      {/* Mobile Header - Joom Style */}
      <div className="bg-white border-bottom d-lg-none">
        <Container fluid className="px-3">
          <Row className="py-2 align-items-center">
            {/* Left: Hamburger Menu + Logo */}
            <Col xs={6} className="d-flex align-items-center">
              <Button 
                variant="link" 
                className="text-dark text-decoration-none p-0 me-3"
                onClick={() => setShowMobileMenu(true)}
              >
                <i className="ci-menu fs-4"></i>
              </Button>
              <Link href={logoHref} className="text-decoration-none d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <span className="h5 mb-0 fw-bold bg-danger text-white px-1 py-1 rounded me-1">C</span>
                  <span className="h5 mb-0 fw-bold text-dark">ARTZILLA</span>
                </div>
              </Link>
            </Col>
            
            {/* Right: Icons */}
            <Col xs={6} className="d-flex align-items-center justify-content-end gap-3">
              {/* Notifications */}
              <Link href="/notifications" className="text-decoration-none position-relative">
                <i className="ci-bell fs-5 text-dark"></i>
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ 
                  fontSize: '8px', 
                  padding: '1px 3px',
                  minWidth: '14px',
                  height: '14px'
                }}>1</Badge>
              </Link>
              
              {/* Profile */}
              <Link href="/account" className="text-decoration-none">
                <i className="ci-user fs-5 text-dark"></i>
              </Link>
              
              {/* Orders */}
              <Link href="/account/orders" className="text-decoration-none">
                <i className="ci-package fs-5 text-dark"></i>
              </Link>
              
              {/* Cart */}
              <Link href="/cart" className="text-decoration-none position-relative">
                <i className="ci-shopping-cart fs-5 text-dark"></i>
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ 
                  fontSize: '8px', 
                  padding: '1px 3px',
                  minWidth: '14px',
                  height: '14px'
                }}>3</Badge>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Desktop Header - Hidden on Mobile */}
      <div className="bg-white border-bottom d-none d-lg-block">
        <Container>
          <Row className="py-2 align-items-center">
            <Col className="d-flex gap-4 align-items-center">
              {/* Language Dropdown */}
              <div className="dropdown">
                <Button variant="link" className="text-dark text-decoration-none p-0 d-flex align-items-center">
                  <i className="fi fi-gb me-1"></i>
                  English
                  <i className="ci-chevron-down ms-1 small"></i>
                </Button>
              </div>
              {/* Currency Dropdown */}
              <div className="dropdown">
                <Button variant="link" className="text-dark text-decoration-none p-0 d-flex align-items-center">
                  USD
                  <i className="ci-chevron-down ms-1 small"></i>
                </Button>
              </div>
            </Col>
            <Col className="text-center text-end">
              <div className="d-flex gap-3 align-items-center justify-content-center justify-content-lg-end">
                <Link href="/help" className="text-dark text-decoration-none small">Help centre</Link>
                <Link href="/delivery" className="text-dark text-decoration-none small">Delivery</Link>
                <Link href="/warranty" className="text-dark text-decoration-none small">Warranty</Link>
                <Button variant="dark" size="sm" className="px-3 py-1">Cartzilla Geek</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Search Bar - Full Width on Mobile */}
      <div className="bg-white border-bottom">
        <Container fluid className="px-3">
          <Row className="py-3">
            <Col>
              <div className="d-flex align-items-center search-container">
                <div className="position-relative d-flex flex-grow-1">
                  <FormControl 
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="border-0 rounded-start-pill ps-4 pe-5 py-3 search-input"
                    style={{ 
                      fontSize: '16px', 
                      minHeight: '48px',
                      backgroundColor: '#F8F9FA',
                      border: 'none',
                      boxShadow: 'none',
                      outline: 'none'
                    }}
                  />
                  {/* Camera Icon inside search bar */}
                  <i className="ci-camera position-absolute" style={{ 
                    right: '60px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    color: '#6c757d', 
                    fontSize: '18px',
                    zIndex: 5
                  }}></i>
                </div>
                {/* Search Button - Connected to input */}
                <Button
                  variant="danger" 
                  className="rounded-end-pill px-4 py-3 border-0 search-button"
                  style={{ 
                    backgroundColor: '#dc3545', 
                    borderColor: '#dc3545',
                    minHeight: '48px',
                    fontSize: '15px',
                    fontWeight: '600',
                    border: 'none',
                    boxShadow: 'none',
                    marginLeft: '-1px'
                  }}
                >
                  Search
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Desktop Main Header - Hidden on Mobile */}
      <div className="bg-white d-none d-lg-block">
        <Container>
          <Row className="py-4 align-items-center">
            {/* Logo - LEFT SIDE */}
            <Col lg={3}>
              <Link href={logoHref} className="text-decoration-none d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <span className="h2 mb-0 fw-bold bg-danger text-white px-2 py-1 rounded me-2">C</span>
                  <span className="h2 mb-0 fw-bold text-dark">ARTZILLA</span>
                </div>
              </Link>
            </Col>

            {/* Right Icons - RIGHT SIDE */}
            <Col lg={9}>
              <div className="d-flex gap-4 align-items-center justify-content-end">
                {/* Notifications */}
                <Link href="/notifications" className="text-decoration-none">
                  <div className="text-center position-relative">
                    <i className="ci-bell fs-4 text-dark" style={{ fontSize: '20px', color: '#333' }}></i>
                    <div className="small text-dark" style={{ fontSize: '13px', marginTop: '4px', color: '#333' }}>Notifications</div>
                    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ 
                      fontSize: '10px', 
                      padding: '2px 4px',
                      minWidth: '18px',
                      height: '18px',
                      backgroundColor: '#dc3545'
                    }}>1</Badge>
                  </div>
                </Link>

                {/* Log in */}
                <Link href="/account" className="text-decoration-none">
                  <div className="text-center">
                    <i className="ci-user fs-4 text-dark" style={{ fontSize: '20px', color: '#333' }}></i>
                    <div className="small text-dark" style={{ fontSize: '13px', marginTop: '4px', color: '#333' }}>Log in</div>
                  </div>
                </Link>

                {/* My orders */}
                <Link href="/account/orders" className="text-decoration-none">
                  <div className="text-center">
                    <i className="ci-package fs-4 text-dark" style={{ fontSize: '20px', color: '#333' }}></i>
                    <div className="small text-dark" style={{ fontSize: '13px', marginTop: '4px', color: '#333' }}>My orders</div>
                  </div>
                </Link>

                {/* Shopping cart with button and count */}
                <Link href="/cart" className="text-decoration-none">
                  <div className="text-center position-relative">
                    <div className="position-relative">
                      <i className="ci-shopping-cart fs-4 text-dark" style={{ fontSize: '20px', color: '#333' }}></i>
                      {/* Cart count badge */}
                      <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ 
                        fontSize: '10px', 
                        padding: '2px 4px',
                        minWidth: '18px',
                        height: '18px',
                        backgroundColor: '#dc3545'
                      }}>3</Badge>
                    </div>
                    <div className="small text-dark" style={{ fontSize: '13px', marginTop: '4px', color: '#333' }}>Shopping cart</div>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Category Navigation Bar - Perfect Spacing */}
      <div className="bg-white border-top border-bottom">
        <Container>
          <Row className="py-2">
            <Col>
              <div className="d-flex gap-3 align-items-center overflow-auto category-nav" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {/* All Categories Button */}
                <Button variant="outline-dark" size="sm" className="text-nowrap border me-3">
                  <i className="ci-menu me-1"></i>
                  All categories
                          </Button>

                {/* Special Links with Icons */}
                <Link href="/outlet" className="text-dark text-decoration-none small text-nowrap d-flex align-items-center me-4">
                  <i className="ci-tag text-danger me-1"></i>
                  Outlet
                                </Link>
                <Link href="/free-gift" className="text-dark text-decoration-none small text-nowrap d-flex align-items-center me-4">
                  <i className="ci-gift text-danger me-1"></i>
                  Free gift with purchase
                                  </Link>

                {/* Category Links */}
                {joomCategories.slice(2).map((category, index) => (
                  <Link 
                                key={index}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted text-decoration-none text-nowrap small me-4"
                    style={{ fontSize: '13px' }}
                  >
                    {category}
                  </Link>
                ))}
                                  </div>
                    </Col>
                  </Row>
                </Container>
      </div>
      
      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={showMobileMenu} onHide={() => setShowMobileMenu(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column gap-3">
            {/* Categories */}
            <div>
              <h6 className="fw-bold mb-3">Categories</h6>
              <div className="d-flex flex-column gap-2">
                {joomCategories.map((category, index) => (
                  <Link 
                    key={index}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-dark text-decoration-none py-2 border-bottom"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Account Links */}
            <div>
              <h6 className="fw-bold mb-3">Account</h6>
              <div className="d-flex flex-column gap-2">
                <Link href="/account" className="text-dark text-decoration-none py-2 border-bottom">
                  <i className="ci-user me-2"></i>
                  My Account
                </Link>
                <Link href="/account/orders" className="text-dark text-decoration-none py-2 border-bottom">
                  <i className="ci-package me-2"></i>
                  My Orders
                </Link>
                <Link href="/notifications" className="text-dark text-decoration-none py-2 border-bottom">
                  <i className="ci-bell me-2"></i>
                  Notifications
                </Link>
              </div>
            </div>
            
            {/* Help Links */}
            <div>
              <h6 className="fw-bold mb-3">Help</h6>
              <div className="d-flex flex-column gap-2">
                <Link href="/help" className="text-dark text-decoration-none py-2 border-bottom">
                  Help Centre
                </Link>
                <Link href="/delivery" className="text-dark text-decoration-none py-2 border-bottom">
                  Delivery
                </Link>
                <Link href="/warranty" className="text-dark text-decoration-none py-2 border-bottom">
                  Warranty
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      
      <style jsx>{`
        .search-container {
          display: flex;
          align-items: center;
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .search-input {
          background-color: #F8F9FA !important;
          border: none !important;
          box-shadow: none !important;
          outline: none !important;
        }
        
        .search-button {
          border: none !important;
          box-shadow: none !important;
          margin-left: -1px !important;
        }
        
        .category-nav::-webkit-scrollbar {
          display: none;
        }
        
        /* Mobile specific styles */
        @media (max-width: 991px) {
          .search-container {
            box-shadow: 0 1px 4px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </>
  )
}

export default HeaderElectronics
