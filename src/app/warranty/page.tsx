import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'

export default function WarrantyPage() {
  const warrantyTypes = [
    {
      name: 'Standard Warranty',
      duration: '1 Year',
      coverage: 'Manufacturing defects, hardware failures',
      icon: 'ci-shield-check',
      color: 'success'
    },
    {
      name: 'Extended Warranty',
      duration: '2-3 Years',
      coverage: 'Extended coverage for electronics and appliances',
      icon: 'ci-clock',
      color: 'warning'
    },
    {
      name: 'Premium Warranty',
      duration: '3-5 Years',
      coverage: 'Comprehensive coverage including accidental damage',
      icon: 'ci-star',
      color: 'danger'
    },
    {
      name: 'Lifetime Warranty',
      duration: 'Lifetime',
      coverage: 'Lifetime coverage for select premium products',
      icon: 'ci-infinity',
      color: 'info'
    }
  ]

  const warrantyFeatures = [
    {
      title: 'Free Repairs',
      description: 'All repairs covered under warranty are completely free',
      icon: 'ci-tools'
    },
    {
      title: 'Quick Service',
      description: 'Most repairs completed within 24-48 hours',
      icon: 'ci-zap'
    },
    {
      title: 'Expert Technicians',
      description: 'Certified technicians with years of experience',
      icon: 'ci-user-check'
    },
    {
      title: 'Genuine Parts',
      description: 'Only original manufacturer parts are used',
      icon: 'ci-package'
    }
  ]

  const warrantyTerms = [
    { category: 'Electronics', duration: '1-2 years', coverage: 'Hardware defects, power issues' },
    { category: 'Appliances', duration: '2-3 years', coverage: 'Mechanical failures, electrical issues' },
    { category: 'Furniture', duration: '1-5 years', coverage: 'Structural defects, material issues' },
    { category: 'Clothing', duration: '30 days', coverage: 'Manufacturing defects, stitching issues' },
    { category: 'Jewelry', duration: '1 year', coverage: 'Setting defects, stone quality' },
    { category: 'Sports Equipment', duration: '1-2 years', coverage: 'Structural integrity, safety features' }
  ]

  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row className="text-center">
            <Col xs={12}>
              <h1 className="display-4 fw-bold mb-3">Warranty Information</h1>
              <p className="lead mb-4">
                Comprehensive protection for all your Cartzilla products
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        {/* Warranty Types */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">Warranty Options</h2>
          </Col>
          {warrantyTypes.map((warranty, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className={`bg-${warranty.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} style={{ width: '60px', height: '60px' }}>
                    <i className={`${warranty.icon} fs-2 text-${warranty.color}`}></i>
                  </div>
                  <h5 className="card-title mb-2">{warranty.name}</h5>
                  <div className="mb-2">
                    <Badge bg={warranty.color} className="fs-6 px-3 py-2">
                      {warranty.duration}
                    </Badge>
                  </div>
                  <p className="card-text small">{warranty.coverage}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Warranty Features */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">Why Choose Cartzilla Warranty?</h2>
          </Col>
          {warrantyFeatures.map((feature, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                  <i className={`${feature.icon} fs-2 text-primary`}></i>
                </div>
                <h5 className="h6 mb-2">{feature.title}</h5>
                <p className="text-muted small mb-0">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Warranty Terms by Category */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">Warranty Terms by Product Category</h2>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-0">
                <Table responsive className="mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0 px-4 py-3">Product Category</th>
                      <th className="border-0 px-4 py-3">Warranty Duration</th>
                      <th className="border-0 px-4 py-3">Coverage Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {warrantyTerms.map((term, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 fw-medium">{term.category}</td>
                        <td className="px-4 py-3">{term.duration}</td>
                        <td className="px-4 py-3">{term.coverage}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Warranty Process */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">How Warranty Claims Work</h2>
          </Col>
          <Col xs={12}>
            <div className="bg-white rounded-4 p-5 shadow-sm">
              <Row className="g-4">
                <Col md={3} className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="display-6 fw-bold text-primary">1</span>
                  </div>
                  <h5 className="h6 mb-2">Report Issue</h5>
                  <p className="text-muted small">Contact our support team with your warranty claim</p>
                </Col>
                <Col md={3} className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="display-6 fw-bold text-primary">2</span>
                  </div>
                  <h5 className="h6 mb-2">Assessment</h5>
                  <p className="text-muted small">Our technicians assess the issue and coverage</p>
                </Col>
                <Col md={3} className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="display-6 fw-bold text-primary">3</span>
                  </div>
                  <h5 className="h6 mb-2">Repair/Replace</h5>
                  <p className="text-muted small">We repair or replace the defective item</p>
                </Col>
                <Col md={3} className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="display-6 fw-bold text-primary">4</span>
                  </div>
                  <h5 className="h6 mb-2">Return</h5>
                  <p className="text-muted small">Your repaired item is returned to you</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Warranty Exclusions */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">What's Not Covered</h2>
            <div className="bg-white rounded-4 p-4 shadow-sm">
              <Row>
                <Col md={6}>
                  <h6 className="text-danger mb-3">Warranty Exclusions:</h6>
                  <ul className="text-muted">
                    <li>Normal wear and tear</li>
                    <li>Accidental damage (unless covered by premium warranty)</li>
                    <li>Damage from improper use or maintenance</li>
                    <li>Cosmetic damage that doesn't affect functionality</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6 className="text-danger mb-3">Additional Exclusions:</h6>
                  <ul className="text-muted">
                    <li>Software issues not related to hardware</li>
                    <li>Damage from power surges or electrical issues</li>
                    <li>Products used in commercial settings</li>
                    <li>Unauthorized modifications or repairs</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Additional Information */}
        <Row>
          <Col xs={12}>
            <div className="bg-white rounded-4 p-5 text-center shadow-sm">
              <h3 className="mb-3">Need Warranty Support?</h3>
              <p className="text-muted mb-4">
                Have questions about your warranty? Our customer support team is here to help.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link href="/help" className="btn btn-primary btn-lg">
                  Visit Help Centre
                </Link>
                <Link href="/delivery" className="btn btn-outline-primary btn-lg">
                  Delivery Information
                </Link>
                <Link href="/contact" className="btn btn-outline-primary btn-lg">
                  Contact Support
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
