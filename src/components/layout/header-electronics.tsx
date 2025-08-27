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

      {/* Main Header - CORRECT Layout: Logo (left) + Search (left) + Icons (right) */}
      <div className="bg-white">
        <Container>
          <Row className="py-4 align-items-center">
            {/* Logo - LEFT SIDE */}
            <Col xs={12} lg={3}>
              <Link href={logoHref} className="text-decoration-none d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <span className="h2 mb-0 fw-bold bg-danger text-white px-2 py-1 rounded me-2">C</span>
                  <span className="h2 mb-0 fw-bold text-dark">ARTZILLA</span>
                </div>
              </Link>
            </Col>

            {/* Search Bar - LEFT SIDE (next to logo) */}
            <Col xs={12} lg={6}>
              <div className="d-flex align-items-center search-container">
                <div className="position-relative d-flex flex-grow-1">
                  <FormControl 
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="border-0 rounded-start-pill ps-4 pe-5 py-3 search-input"
                    style={{ 
                      fontSize: '16px', 
                      minHeight: '52px',
                      backgroundColor: '#F8F9FA',
                      border: 'none',
                      boxShadow: 'none',
                      outline: 'none'
                    }}
                  />
                  {/* Camera Icon inside search bar */}
                  <i className="ci-camera position-absolute" style={{ 
                    right: '90px', 
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
                    minHeight: '52px',
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

            {/* Right Icons - RIGHT SIDE */}
            <Col xs={12} lg={3}>
              <div className="d-flex gap-4 align-items-center justify-content-center justify-content-lg-end">
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
      
      <style jsx>{`
        .search-container {
          display: flex;
          align-items: center;
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .search-input {
          border: none !important;
          box-shadow: none !important;
          outline: none !important;
          background-color: #F8F9FA !important;
        }
        
        .search-button {
          border: none !important;
          box-shadow: none !important;
          background-color: #dc3545 !important;
          border-color: #dc3545 !important;
        }
        
        .search-input:focus {
          box-shadow: none !important;
          outline: none !important;
        }
      `}</style>
    </>
  )
}

export default HeaderElectronics
