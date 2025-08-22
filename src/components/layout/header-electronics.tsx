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
            {/* Logo - Cartzilla with red C */}
            <Col xs={12} lg={2}>
              <Link href={logoHref} className="text-decoration-none d-flex align-items-center">
                <span className="h2 mb-0 fw-bold" style={{ color: '#dc3545' }}>C</span>
                <span className="h2 mb-0 fw-bold text-dark">ARTZILLA</span>
                <div className="bg-danger rounded-circle ms-1" style={{ width: '6px', height: '6px' }}></div>
              </Link>
            </Col>

            {/* Search Bar - Exact Joom Style */}
            <Col xs={12} lg={7}>
              <div className="position-relative">
                <FormControl 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="border-0 bg-light rounded-pill ps-4 pe-5 py-3"
                  style={{ fontSize: '16px' }}
                />
                {/* Camera Icon inside search bar */}
                <i className="ci-camera position-absolute" style={{ right: '80px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}></i>
                {/* Search Button */}
                <Button 
                  variant="danger" 
                  className="position-absolute end-0 top-50 translate-middle-y rounded-pill px-4 py-2"
                  style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                >
                  Search
                </Button>
              </div>
            </Col>

            {/* Right Icons - Exact Joom Style */}
            <Col xs={12} lg={3}>
              <div className="d-flex gap-4 align-items-center justify-content-center justify-content-lg-end">
                {/* Notifications */}
                <div className="text-center position-relative">
                  <i className="ci-bell fs-4 text-dark"></i>
                  <div className="small text-dark">Notifications</div>
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ fontSize: '10px', padding: '2px 4px' }}>1</Badge>
                </div>

                {/* Log in */}
                <div className="text-center">
                  <i className="ci-user fs-4 text-dark"></i>
                  <div className="small text-dark">Log in</div>
                </div>

                {/* My orders */}
                <div className="text-center">
                  <i className="ci-package fs-4 text-dark"></i>
                  <div className="small text-dark">My orders</div>
                </div>

                {/* Shopping cart */}
                <div className="text-center">
                  <i className="ci-cart fs-4 text-dark"></i>
                  <div className="small text-dark">Shopping cart</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Category Navigation Bar - Exact Joom Style */}
      <div className="bg-white border-top border-bottom">
        <Container>
          <Row className="py-2">
            <Col>
              <div className="d-flex gap-3 align-items-center overflow-auto category-nav" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {/* All Categories Button */}
                <Button variant="outline-dark" size="sm" className="text-nowrap border-2">
                  <i className="ci-menu me-1"></i>
                  All categories
                </Button>
                
                {/* Special Links with Icons */}
                <Link href="/outlet" className="text-dark text-decoration-none small text-nowrap d-flex align-items-center">
                  <i className="ci-tag text-danger me-1"></i>
                  Outlet
                </Link>
                <Link href="/free-gift" className="text-dark text-decoration-none small text-nowrap d-flex align-items-center">
                  <i className="ci-gift text-danger me-1"></i>
                  Free gift with purchase
                </Link>
                
                {/* Category Links */}
                {joomCategories.slice(2).map((category, index) => (
                  <Link 
                    key={index}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted text-decoration-none text-nowrap small"
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
