'use client'

import { useState, useEffect, useRef, Fragment, type CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
// import { useStickyNavbar } from '@/hooks/use-sticky-navbar'
// import { useOffcanvas } from '@/contexts/offcanvas-context'
// import { useCart } from '@/contexts/cart-context'
// import { useCategories } from '@/contexts/categories-context'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '@/components/logo'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Collapse from 'react-bootstrap/Collapse'
import Nav from 'react-bootstrap/Nav'
import DropdownHover from '@/components/dropdown-hover'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ThemeSwitcher from '../theme-switcher'
import ShoppingCartListItem from '@/components/shop/shopping-cart-list-item'
import { mainNavigation, categoriesElectronics } from '@/app/navigation'
import axiosInstance from '@/utils/axiosInstance'
import axios from 'axios'
// import { useBrands } from '@/contexts/BrandContext'
// import CardListGroupDemo from '@/app/docs/card/card-list-group'

interface HeaderElectronicsProps {
  logoHref?: string
  isLoggedIn?: {
    name: string
    href: string
  }
  expandedCategories?: boolean
  categories?: TransformedCategory[]
}
interface Category {
  id: number;
  name: string;
  slug: string;
  icon?: string | null;
  icon_image?: string | null;
  parent_id: number;
  [key: string]: any; // allows other dynamic fields
}

interface Subcategory {
  title: string;
  href: string;
  icon?: string | null;
  icon_image?: string | null;
}
interface TransformedCategory extends Category {
  href: string;
  subcategories: Subcategory[];
}

const HeaderElectronics = ({ logoHref, isLoggedIn, expandedCategories, categories: propCategories = [] }: HeaderElectronicsProps) => {
  const pathname = usePathname()
  const [categories, setCategories] = useState<TransformedCategory[]>(propCategories);
  const [localCategoriesOpen, setLocalCategoriesOpen] = useState(false)
  const [cookieConsent, setCookieConsent] = useState(true)
  
  // Simplified context handling
  const contextCategories = { 
    isCategoriesOpen: localCategoriesOpen, 
    setIsCategoriesOpen: setLocalCategoriesOpen 
  }

  // Simplified hooks
  const navbarRef = useRef<HTMLDivElement>(null)
  const [stuckNavOpen, setStuckNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const openOffcanvas = () => setIsOpen(true)
  const closeOffcanvas = () => setIsOpen(false)
  
  // Simplified cart state
  const cart: any[] = []
  const brands: any[] = []

  // Simplified categories for now
  const joomCategories = ['All categories', 'Electronics', 'Headphones', 'Desktop', 'With Bluetooth', 'Microscope', 'Best Sellers']

  // Autofocus search input when it is open on mobile devices
  const searchRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchRef.current?.focus(), 0)
    }
  }, [searchOpen])

  return (
    <>
      {/* Cookie Consent Banner - Dark Grey */}
      {cookieConsent && (
        <div className="bg-dark py-2">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={8}>
                <small className="text-white">
                  By using this site, you agree to our use of cookies. Learn more in our{' '}
                  <Link href="/privacy" className="text-decoration-underline text-white">
                    Privacy Policy
                  </Link>
                </small>
              </Col>
              <Col xs={12} md={4} className="text-md-end">
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  onClick={() => setCookieConsent(false)}
                  className="px-3"
                >
                  OK
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {/* Main Header Section - White Background */}
      <div className="bg-white border-bottom">
        <Container>
          {/* Top Row - Language, Currency, Help Links */}
          <Row className="align-items-center py-2">
            <Col xs={12} md={6}>
              <div className="d-flex align-items-center gap-3">
                <Dropdown>
                  <DropdownToggle variant="link" className="text-decoration-none text-dark p-0 d-flex align-items-center gap-2">
                    <span className="fi fi-gb"></span>
                    English
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>English</DropdownItem>
                    <DropdownItem>Spanish</DropdownItem>
                    <DropdownItem>French</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <DropdownToggle variant="link" className="text-decoration-none text-dark p-0">
                    USD
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>USD</DropdownItem>
                    <DropdownItem>EUR</DropdownItem>
                    <DropdownItem>GBP</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Col>
            <Col xs={12} md={6} className="text-md-end">
              <div className="d-flex align-items-center justify-content-md-end gap-3">
                <Link href="/help" className="text-decoration-none text-dark small">Help centre</Link>
                <Link href="/delivery" className="text-decoration-none text-dark small">Delivery</Link>
                <Link href="/warranty" className="text-decoration-none text-dark small">Warranty</Link>
                <Button variant="dark" size="sm" className="rounded-pill px-3">
                  Cartzilla Geek
                </Button>
              </div>
            </Col>
          </Row>

          {/* Main Navigation Row - Logo, Search, User Actions */}
          <Row className="align-items-center py-3">
            {/* Logo */}
            <Col xs={12} lg={3} className="mb-3 mb-lg-0">
              <Link href={logoHref || '/'} className="text-decoration-none">
                <h1 className="h2 mb-0 fw-bold text-dark d-flex align-items-center">
                  <span className="text-danger me-1">C</span>ARTZILLA
                </h1>
              </Link>
            </Col>

            {/* Search Bar */}
            <Col xs={12} lg={6} className="mb-3 mb-lg-0">
              <div className="d-flex">
                <FormControl
                  type="search"
                  placeholder="What are you looking for?"
                  className="rounded-start border-end-0"
                  size="lg"
                />
                <Button variant="danger" className="rounded-end px-4" size="lg">
                  Search
                </Button>
              </div>
            </Col>

            {/* User Actions */}
            <Col xs={12} lg={3} className="d-flex justify-content-center justify-content-lg-end">
              <div className="d-flex gap-4">
                <Link href="/notifications" className="text-decoration-none text-dark text-center">
                  <div className="position-relative mb-1">
                    <i className="ci-bell fs-4"></i>
                    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ fontSize: '0.6rem' }}>
                      1
                    </Badge>
                  </div>
                  <div className="small">Notifications</div>
                </Link>
                <Link href="/login" className="text-decoration-none text-dark text-center">
                  <i className="ci-user fs-4 mb-1 d-block"></i>
                  <div className="small">Log in</div>
                </Link>
                <Link href="/orders" className="text-decoration-none text-dark text-center">
                  <i className="ci-package fs-4 mb-1 d-block"></i>
                  <div className="small">My orders</div>
                </Link>
                <Link href="/cart" className="text-decoration-none text-dark text-center position-relative">
                  <i className="ci-cart fs-4 mb-1 d-block"></i>
                  <div className="small">Shopping cart</div>
                  {cart.length > 0 && (
                    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ fontSize: '0.6rem' }}>
                      {cart.length}
                    </Badge>
                  )}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Category Navigation Bar - White Background */}
      <div className="bg-white border-bottom">
        <Container>
          <div className="d-flex align-items-center py-2">
            {/* All Categories Button */}
            <Button
              variant="outline-dark"
              className="me-3 d-flex align-items-center gap-2"
              onClick={() => setLocalCategoriesOpen(!localCategoriesOpen)}
            >
              <i className="ci-menu"></i>
              All categories
            </Button>

            {/* Horizontal Category List */}
            <Nav className="flex-nowrap overflow-auto py-2 category-nav flex-grow-1">
              {joomCategories.slice(1).map((category, index) => (
                <Nav.Link key={index} as={Link} href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-nowrap px-3 py-2 text-dark text-decoration-none">
                  {category}
                </Nav.Link>
              ))}
            </Nav>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Button */}
      <div className="d-lg-none bg-white border-bottom">
        <Container>
          <Button
            variant="link"
            className="text-decoration-none text-dark p-0"
            onClick={() => setLocalCategoriesOpen(!localCategoriesOpen)}
          >
            <i className="ci-menu fs-4"></i>
            <span className="ms-2">Menu</span>
          </Button>
        </Container>
      </div>

      {/* Mobile Categories Offcanvas */}
      <Offcanvas show={localCategoriesOpen} onHide={() => setLocalCategoriesOpen(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {joomCategories.map((category, index) => (
              <Nav.Link key={index} as={Link} href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="py-2">
                {category}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default HeaderElectronics
