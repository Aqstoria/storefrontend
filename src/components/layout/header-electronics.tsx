'use client'

import { useState, useEffect, useRef, Fragment, type CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
import { useStickyNavbar } from '@/hooks/use-sticky-navbar'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import { useCart } from '@/contexts/cart-context'
import { useCategories } from '@/contexts/categories-context'
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
import { useBrands } from '@/contexts/BrandContext'
import CardListGroupDemo from '@/app/docs/card/card-list-group'

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
  
  // Try to use context if available, otherwise use local state
  let contextCategories
  try {
    contextCategories = useCategories()
  } catch {
    contextCategories = { 
      isCategoriesOpen: localCategoriesOpen, 
      setIsCategoriesOpen: setLocalCategoriesOpen 
    }
  }

  const { navbarRef } = useStickyNavbar({ offset: 500 })
  const [stuckNavOpen, setStuckNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const { cart, calculateTotal, removeFromCart, increaseQuantity, decreaseQuantity, reloadCart } =
    useCart('electronics')
  const { brands } = useBrands();

  // Autofocus search input when it is open on mobile devices
  const searchRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchRef.current?.focus(), 0)
    }
  }, [searchOpen])

  // Joom-style category navigation
  const joomCategories = [
    'All categories', 'Outlet', 'Free gift with purchase', 'Xiaomi', 'Men\'s Fashion', 
    'Pet Supplies', 'Shoes', 'Home Improvement', 'Electronics', 'Smartphone Cases', 
    'Home Appliances', 'Home & Kitchen', 'Kids', 'Parties & Events', 'Beauty', 
    'Health', 'Bags & Suitcases', 'Women\'s Fashion', 'Office & School', 'Watches & Clocks'
  ]

  return (
    <>
      {/* Top Bar - Language and Currency Selector */}
      <div className="bg-light border-bottom">
        <Container>
          <Row className="align-items-center py-2">
            <Col xs={6}>
              <div className="d-flex align-items-center gap-3">
                <Dropdown>
                  <DropdownToggle variant="link" className="text-decoration-none text-dark p-0">
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
            <Col xs={6} className="text-end">
              <small className="text-muted">
                By using this site, you agree to our use of cookies. 
                <Link href="/privacy" className="text-decoration-none ms-1">Learn more in our Privacy Policy</Link>
              </small>
              <Button variant="outline-primary" size="sm" className="ms-2">OK</Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <Navbar ref={navbarRef} expand="lg" className="bg-white border-bottom py-3">
        <Container>
          <Row className="w-100 align-items-center">
            {/* Logo */}
            <Col xs={12} lg={3} className="mb-3 mb-lg-0">
              <Link href={logoHref || '/'} className="text-decoration-none">
                <h1 className="h3 mb-0 fw-bold text-dark">CARTZILLA</h1>
              </Link>
            </Col>

            {/* Search Bar */}
            <Col xs={12} lg={6} className="mb-3 mb-lg-0">
              <div className="d-flex">
                <FormControl
                  type="search"
                  placeholder="What are you looking for?"
                  className="rounded-start"
                />
                <Button variant="danger" className="rounded-end">
                  Search
                </Button>
              </div>
            </Col>

            {/* User Actions */}
            <Col xs={12} lg={3} className="d-flex justify-content-end gap-3">
              <Link href="/notifications" className="text-decoration-none text-dark">
                <i className="ci-bell fs-5"></i>
                <span className="ms-1 d-none d-lg-inline">Notifications</span>
              </Link>
              <Link href="/login" className="text-decoration-none text-dark">
                <i className="ci-user fs-5"></i>
                <span className="ms-1 d-none d-lg-inline">Log in</span>
              </Link>
              <Link href="/orders" className="text-decoration-none text-dark">
                <i className="ci-package fs-5"></i>
                <span className="ms-1 d-none d-lg-inline">My orders</span>
              </Link>
              <Link href="/cart" className="text-decoration-none text-dark position-relative">
                <i className="ci-cart fs-5"></i>
                <span className="ms-1 d-none d-lg-inline">Shopping cart</span>
                {cart.length > 0 && (
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill">
                    {cart.length}
                  </Badge>
                )}
              </Link>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Category Navigation Bar */}
      <div className="bg-white border-bottom">
        <Container>
          <Nav className="flex-nowrap overflow-auto py-2 category-nav">
            {joomCategories.map((category, index) => (
              <Nav.Link key={index} as={Link} href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-nowrap px-3 py-2 text-dark text-decoration-none">
                {category}
              </Nav.Link>
            ))}
          </Nav>
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
