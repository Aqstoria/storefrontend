'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FooterElectronics = ({ className, logoHref }: { className?: string; logoHref?: string }) => (
  <footer className={`footer position-relative bg-dark text-white${className ? ` ${className}` : ''}`}>
    <Container className="pt-5 pb-4">
      <Row className="g-4">
        {/* App Download Section */}
        <Col lg={3} md={6}>
          <div className="bg-secondary bg-opacity-25 rounded-3 p-4 h-100">
            <h5 className="mb-3 fw-bold fs-6 text-uppercase" style={{ letterSpacing: '0.5px' }}>More deals & promos in the Cartzilla app</h5>
            <div className="text-center mb-3">
              {/* QR Code - Replace with your actual QR code image */}
              <div className="bg-white rounded p-3 d-inline-block mb-2">
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <span className="text-dark fw-bold">QR Code</span>
                </div>
              </div>
              <p className="mb-3 text-white-75 small">Scan to download app</p>
            </div>
          </div>
        </Col>

        {/* Users Column */}
        <Col lg={2} md={6}>
          <h6 className="fw-bold mb-3 fs-6 text-uppercase" style={{ letterSpacing: '0.5px' }}>Users</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link href="/shop" className="text-white-75 text-decoration-none footer-link small">
                Catalogue
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/help" className="text-white-75 text-decoration-none footer-link small">
                Help centre
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/privacy" className="text-white-75 text-decoration-none footer-link small">
                Privacy policy
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/terms" className="text-white-75 text-decoration-none footer-link small">
                Terms of use
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/accessibility" className="text-white-75 text-decoration-none footer-link small">
                Accessibility settings
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/trending" className="text-white-75 text-decoration-none footer-link small">
                Top searches on Cartzilla
              </Link>
            </li>
          </ul>
        </Col>

        {/* Partners Column */}
        <Col lg={2} md={6}>
          <h6 className="fw-bold mb-3 fs-6 text-uppercase" style={{ letterSpacing: '0.5px' }}>Partners</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link href="/become-seller" className="text-white-75 text-decoration-none footer-link small">
                Become a seller
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/partner-terms" className="text-white-75 text-decoration-none footer-link small">
                Terms of service
              </Link>
            </li>
          </ul>
        </Col>

        {/* Company Column */}
        <Col lg={2} md={6}>
          <h6 className="fw-bold mb-3 fs-6 text-uppercase" style={{ letterSpacing: '0.5px' }}>Company</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link href="/about" className="text-white-75 text-decoration-none footer-link small">
                About us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/copyright" className="text-white-75 text-decoration-none footer-link small">
                Copyright protection
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/safety" className="text-white-75 text-decoration-none footer-link small">
                Product safety
              </Link>
            </li>
          </ul>
        </Col>

        {/* Cartzilla Group Companies Column */}
        <Col lg={3} md={6}>
          <h6 className="fw-bold mb-3 fs-6 text-uppercase" style={{ letterSpacing: '0.5px' }}>Cartzilla Group companies</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link href="/logistics" className="text-white-75 text-decoration-none footer-link small">
                Cartzilla Logistics
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/onfy" className="text-white-75 text-decoration-none footer-link small">
                Onfy
              </Link>
            </li>
          </ul>
          <div className="mt-3">
            <div className="bg-primary rounded-pill px-3 py-1 d-inline-flex align-items-center gap-2 mb-2">
              <i className="ci-check-circle text-white"></i>
              <span className="text-white small fw-medium">On the list! 2023</span>
            </div>
            <div className="text-white-75 small">Payment Card Security Standard</div>
          </div>
        </Col>
      </Row>

      {/* Bottom Section */}
      <Row className="mt-4 pt-4 border-top border-secondary">
        <Col md={6}>
          <p className="text-white mb-0 small">
            2025 Cartzilla All Rights Reserved.
          </p>
        </Col>
        <Col md={6} className="text-md-end">
          <span className="text-white-75 small">Page ID: </span>
          <span className="text-white-75 small font-monospace">7a4ba3ba0fb8f6c383745e0d6ffec1c1fab910193a75b3db89f26d0fd5f7d428</span>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default FooterElectronics
