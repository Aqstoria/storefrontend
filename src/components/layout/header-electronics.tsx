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
    ? categories.map((cat: any) => cat.name).slice(0, 15)
    : ['Electronics', 'Headphones', 'Desktop', 'With Bluetooth', 'Microscope', 'Best Sellers', 'Home Appliances', 'Sports & Outdoor', 'Kids', 'Pets & Animals', 'Beauty', 'Health', 'Bags & Suitcases', 'Women\'s Clothes', 'Watches & Clocks']

  return (
    <>
      {/* Main Header Section - Joom Style */}
      <div className="bg-white shadow-sm">
        <Container>
          <Row className="py-3 align-items-center">
            {/* Logo */}
            <Col xs={12} lg={2}>
              <Link href={logoHref} className="text-decoration-none d-flex align-items-center">
                <span className="h2 mb-0 fw-bold" style={{ color: '#ff6b35' }}>JOOM</span>
              </Link>
            </Col>

            {/* Search Bar */}
            <Col xs={12} lg={7}>
              <div className="position-relative">
                <FormControl 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="border-0 bg-light rounded-pill ps-4 pe-5 py-2"
                  style={{ fontSize: '14px' }}
                />
                <Button 
                  variant="link" 
                  className="position-absolute end-0 top-50 translate-middle-y me-2 p-0"
                  style={{ color: '#ff6b35' }}
                >
                  <i className="ci-search fs-5"></i>
                </Button>
              </div>
            </Col>

            {/* Right Icons */}
            <Col xs={12} lg={3}>
              <div className="d-flex gap-3 align-items-center justify-content-center justify-content-lg-end">
                {/* Wishlist */}
                <Link href="/wishlist" className="text-dark text-decoration-none position-relative">
                  <i className="ci-heart fs-4"></i>
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ fontSize: '10px' }}>0</Badge>
                </Link>

                {/* Account */}
                <Link href={isLoggedIn ? isLoggedIn.href : "/login"} className="text-dark text-decoration-none">
                  <i className="ci-user fs-4"></i>
                </Link>

                {/* Shopping Cart */}
                <Link href="/cart" className="text-dark text-decoration-none position-relative">
                  <i className="ci-shopping-bag fs-4"></i>
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ fontSize: '10px' }}>2</Badge>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Category Navigation Bar */}
      <div className="bg-white border-top border-bottom">
        <Container>
          <Row className="py-2">
            <Col>
              <div className="d-flex gap-4 align-items-center overflow-auto category-nav" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <Button variant="outline-primary" size="sm" className="text-nowrap rounded-pill">
                  <i className="ci-menu me-1"></i>
                  All categories
                </Button>
                {joomCategories.map((category, index) => (
                  <Link 
                    key={index}
                    href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted text-decoration-none text-nowrap"
                    style={{ fontSize: '14px' }}
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
