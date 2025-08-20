import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'

export default function DeliveryPage() {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      price: 'Free',
      time: '3-5 business days',
      description: 'Free shipping on orders over $50',
      icon: 'ci-truck',
      color: 'success'
    },
    {
      name: 'Express Shipping',
      price: '$9.99',
      time: '1-2 business days',
      description: 'Fast delivery for urgent orders',
      icon: 'ci-clock',
      color: 'warning'
    },
    {
      name: 'Overnight Shipping',
      price: '$19.99',
      time: 'Next business day',
      description: 'Guaranteed next-day delivery',
      icon: 'ci-zap',
      color: 'danger'
    },
    {
      name: 'International Shipping',
      price: 'From $24.99',
      time: '7-14 business days',
      description: 'Worldwide delivery to 50+ countries',
      icon: 'ci-globe',
      color: 'info'
    }
  ]

  const deliveryFeatures = [
    {
      title: 'Real-time Tracking',
      description: 'Track your package from warehouse to doorstep with detailed updates',
      icon: 'ci-location'
    },
    {
      title: 'Delivery Notifications',
      description: 'Get SMS and email updates about your delivery status',
      icon: 'ci-bell'
    },
    {
      title: 'Flexible Delivery',
      description: 'Choose your preferred delivery time and location',
      icon: 'ci-calendar'
    },
    {
      title: 'Secure Packaging',
      description: 'All items are carefully packaged to ensure safe delivery',
      icon: 'ci-shield-check'
    }
  ]

  const countries = [
    { name: 'United States', time: '3-5 days', cost: 'Free over $50' },
    { name: 'Canada', time: '5-7 days', cost: '$14.99' },
    { name: 'United Kingdom', time: '7-10 days', cost: '$19.99' },
    { name: 'Germany', time: '7-10 days', cost: '$19.99' },
    { name: 'France', time: '7-10 days', cost: '$19.99' },
    { name: 'Australia', time: '8-12 days', cost: '$24.99' },
    { name: 'Japan', time: '8-12 days', cost: '$24.99' },
    { name: 'India', time: '10-14 days', cost: '$29.99' }
  ]

  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row className="text-center">
            <Col xs={12}>
              <h1 className="display-4 fw-bold mb-3">Delivery Information</h1>
              <p className="lead mb-4">
                Fast, reliable shipping to your doorstep with real-time tracking
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        {/* Shipping Options */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">Shipping Options</h2>
          </Col>
          {shippingOptions.map((option, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className={`bg-${option.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} style={{ width: '60px', height: '60px' }}>
                    <i className={`${option.icon} fs-2 text-${option.color}`}></i>
                  </div>
                  <h5 className="card-title mb-2">{option.name}</h5>
                  <div className="mb-2">
                    <Badge bg={option.color} className="fs-6 px-3 py-2">
                      {option.price}
                    </Badge>
                  </div>
                  <p className="text-muted mb-2">{option.time}</p>
                  <p className="card-text small">{option.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Delivery Features */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">Why Choose Cartzilla Delivery?</h2>
          </Col>
          {deliveryFeatures.map((feature, index) => (
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

        {/* International Shipping */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">International Shipping</h2>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-0">
                <Table responsive className="mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0 px-4 py-3">Country</th>
                      <th className="border-0 px-4 py-3">Delivery Time</th>
                      <th className="border-0 px-4 py-3">Shipping Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countries.map((country, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 fw-medium">{country.name}</td>
                        <td className="px-4 py-3">{country.time}</td>
                        <td className="px-4 py-3">{country.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Delivery Process */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">How Delivery Works</h2>
          </Col>
          <Col xs={12}>
            <div className="bg-white rounded-4 p-5 shadow-sm">
              <Row className="g-4">
                <Col md={3} className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="display-6 fw-bold text-primary">1</span>
                  </div>
                  <h5 className="h6 mb-2">Order Placed</h5>
                  <p className="text-muted small">Your order is confirmed and processed</p>
                </Col>
                <Col md={3} className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="display-6 fw-bold text-primary">2</span>
                  </div>
                  <h5 className="h6 mb-2">Order Shipped</h5>
                  <p className="text-muted small">Your package is packed and shipped</p>
                </Col>
                <Col md={3} className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="display-6 fw-bold text-primary">3</span>
                  </div>
                  <h5 className="h6 mb-2">In Transit</h5>
                  <p className="text-muted small">Track your package in real-time</p>
                </Col>
                <Col md={3} className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="display-6 fw-bold text-primary">4</span>
                  </div>
                  <h5 className="h6 mb-2">Delivered</h5>
                  <p className="text-muted small">Your package arrives safely</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Additional Information */}
        <Row>
          <Col xs={12}>
            <div className="bg-white rounded-4 p-5 text-center shadow-sm">
              <h3 className="mb-3">Need More Information?</h3>
              <p className="text-muted mb-4">
                Have questions about delivery? Our customer support team is here to help.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link href="/help" className="btn btn-primary btn-lg">
                  Visit Help Centre
                </Link>
                <Link href="/warranty" className="btn btn-outline-primary btn-lg">
                  Warranty Information
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
