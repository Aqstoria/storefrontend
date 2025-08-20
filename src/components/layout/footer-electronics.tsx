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
            <h5 className="mb-3">More deals & promos in the Cartzilla app</h5>
            <div className="text-center mb-3">
              {/* QR Code Placeholder - Replace with actual QR code image */}
              <div className="bg-white rounded p-3 d-inline-block mb-2">
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <span className="text-dark fw-bold">QR Code</span>
                </div>
              </div>
              <p className="mb-3">Scan to download app</p>
            </div>
            <div className="d-flex flex-column gap-2">
              <Link href="#" className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center gap-2">
                <i className="ci-apple fs-5"></i>
                <span>App Store</span>
              </Link>
              <Link href="#" className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center gap-2">
                <i className="ci-google-play fs-5"></i>
                <span>Google Play</span>
              </Link>
              <Link href="#" className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center gap-2">
                <i className="ci-huawei fs-5"></i>
                <span>AppGallery</span>
              </Link>
            </div>
          </div>
        </Col>

        {/* Users Column */}
        <Col lg={2} md={6}>
          <h6 className="fw-bold mb-3">Users:</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link href="/shop" className="text-white-50 text-decoration-none footer-link">
                Catalogue
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/help" className="text-white-50 text-decoration-none footer-link">
                Help centre
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/privacy" className="text-white-50 text-decoration-none footer-link">
                Privacy policy
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/terms" className="text-white-50 text-decoration-none footer-link">
                Terms of use
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/accessibility" className="text-white-50 text-decoration-none footer-link">
                Accessibility settings
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/trending" className="text-white-50 text-decoration-none footer-link">
                Top searches on Cartzilla
              </Link>
            </li>
          </ul>
        </Col>

        {/* Partners Column */}
        <Col lg={2} md={6}>
          <h6 className="fw-bold mb-3">Partners:</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link href="/become-seller" className="text-white-50 text-decoration-none footer-link">
                Become a seller
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/partner-terms" className="text-white-50 text-decoration-none footer-link">
                Terms of service
              </Link>
            </li>
          </ul>
        </Col>

        {/* Company Column */}
        <Col lg={2} md={6}>
          <h6 className="fw-bold mb-3">Company:</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link href="/about" className="text-white-50 text-decoration-none footer-link">
                About us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/copyright" className="text-white-50 text-decoration-none footer-link">
                Copyright protection
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/safety" className="text-white-50 text-decoration-none footer-link">
                Product safety
              </Link>
            </li>
          </ul>
        </Col>

        {/* Cartzilla Group Companies Column */}
        <Col lg={3} md={6}>
          <h6 className="fw-bold mb-3">Cartzilla Group companies:</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link href="/logistics" className="text-white-50 text-decoration-none footer-link">
                Cartzilla Logistics
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/onfy" className="text-white-50 text-decoration-none footer-link">
                Onfy
              </Link>
            </li>
          </ul>
          <div className="mt-3">
            <div className="bg-primary rounded-pill px-3 py-1 d-inline-flex align-items-center gap-2 mb-2">
              <i className="ci-check-circle text-white"></i>
              <span className="text-white small">On the list! 2023</span>
            </div>
            <div className="text-white-50 small">Payment Card Security Standard</div>
          </div>
        </Col>
      </Row>

      {/* Bottom Section */}
      <Row className="mt-4 pt-4 border-top border-secondary">
        <Col md={6}>
          <p className="text-white-50 mb-0">
            © 2025 Cartzilla Group (Latvia)
          </p>
        </Col>
        <Col md={6} className="text-md-end">
          <span className="text-white-50 small">Page ID: </span>
          <span className="text-white-50 small font-monospace">7a4ba3ba0fb8f6c383745e0d6ffec1c1fab910193a75b3db89f26d0fd5f7d428</span>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default FooterElectronics
