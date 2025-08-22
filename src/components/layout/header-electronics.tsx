'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Badge from 'react-bootstrap/Badge'

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
  // Use provided categories or fallback to simplified ones
  const joomCategories = categories && categories.length > 0 
    ? categories.map((cat: any) => cat.name).slice(0, 20)
    : ['Outlet', 'Free gift with purchase', 'Xiaomi', 'Men\'s Fashion', 'Pet Supplies', 'Shoes', 'Home Improvement', 'Electronics', 'Smartphone Cases', 'Home Appliances', 'Home & Kitchen', 'Kids', 'Parties & Events', 'Beauty', 'Health', 'Bags & Suitcases', 'Women\'s Fashion', 'Office & School', 'Watches & Clocks']

  return (
    <>
      {/* Top Utility Bar - Exact Joom Style */}
      <div className="bg-white border-bottom">
        <Container>
          <Row className="py-2 align-items-center">
            <Col className="d-none d-lg-block">
              <div className="d-flex gap-4 align-items-center">
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
              </div>
            </Col>
            <Col className="text-center text-lg-end">
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

      {/* Main Navigation Bar - Exact Joom Style */}
      <div className="bg-white">
        <Container>
          <Row className="py-3 align-items-center">
            {/* Logo - Cartzilla with red C - Fixed Positioning */}
            <Col xs={12} lg={2}>
              <Link href={logoHref} className="text-decoration-none d-flex align-items-center">
                <div className="position-relative">
                  <span className="h2 mb-0 fw-bold" style={{ color: '#dc3545' }}>C</span>
                  <div className="bg-danger rounded-circle position-absolute" style={{ 
                    width: '8px', 
                    height: '8px', 
                    left: '-12px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}></div>
                </div>
                <span className="h2 mb-0 fw-bold text-dark ms-2">ARTZILLA</span>
              </Link>
            </Col>

            {/* Search Bar - Perfect Center Balance */}
            <Col xs={12} lg={7}>
              <div className="position-relative d-flex align-items-center">
                <FormControl 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="border-0 bg-light rounded-pill ps-4 pe-5 py-3 flex-grow-1"
                  style={{ 
                    fontSize: '16px', 
                    minHeight: '52px',
                    backgroundColor: '#f8f9fa',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                />
                {/* Camera Icon inside search bar - Perfect Positioning */}
                <i className="ci-camera position-absolute" style={{ 
                  right: '90px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: '#6c757d', 
                  fontSize: '16px' 
                }}></i>
                {/* Search Button - Perfect Size */}
                <Button 
                  variant="danger" 
                  className="position-absolute end-0 top-50 translate-middle-y rounded-pill px-4 py-2"
                  style={{ 
                    backgroundColor: '#dc3545', 
                    borderColor: '#dc3545',
                    minHeight: '52px',
                    fontSize: '15px',
                    fontWeight: '600',
                    boxShadow: '0 2px 8px rgba(220, 53, 69, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Search
                </Button>
              </div>
            </Col>

            {/* Right Icons - Perfect Symmetry */}
            <Col xs={12} lg={3}>
              <div className="d-flex gap-4 align-items-center justify-content-center justify-content-lg-end">
                {/* Notifications */}
                <div className="text-center position-relative">
                  <i className="ci-bell fs-4 text-dark"></i>
                  <div className="small text-dark" style={{ fontSize: '12px', marginTop: '2px' }}>Notifications</div>
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ 
                    fontSize: '9px', 
                    padding: '1px 3px',
                    minWidth: '16px',
                    height: '16px'
                  }}>1</Badge>
                </div>

                {/* Log in */}
                <div className="text-center">
                  <i className="ci-user fs-4 text-dark"></i>
                  <div className="small text-dark" style={{ fontSize: '12px', marginTop: '2px' }}>Log in</div>
                </div>

                {/* My orders */}
                <div className="text-center">
                  <i className="ci-package fs-4 text-dark"></i>
                  <div className="small text-dark" style={{ fontSize: '12px', marginTop: '2px' }}>My orders</div>
                </div>

                {/* Shopping cart */}
                <div className="text-center">
                  <i className="ci-cart fs-4 text-dark"></i>
                  <div className="small text-dark" style={{ fontSize: '12px', marginTop: '2px' }}>Shopping cart</div>
                </div>
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
    </>
  )
}

export default HeaderElectronics
