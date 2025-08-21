import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
// import HeaderElectronics from '@/components/layout/header-electronics'
// import FooterElectronics from '@/components/layout/footer-electronics'

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
    <>
      {/* <HeaderElectronics /> */}
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
              <h2 className="h3 fw-bold mb-4">Shipping Options</h2>
            </Col>
            {shippingOptions.map((option, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className={`bg-${option.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} style={{ width: '60px', height: '60px' }}>
                      <i className={`${option.icon} fs-3 text-${option.color}`}></i>
                    </div>
                    <h5 className="fw-bold mb-2">{option.name}</h5>
                    <div className="mb-2">
                      <Badge bg={option.color} className="fs-6 px-3 py-2">{option.price}</Badge>
                    </div>
                    <p className="text-muted mb-2">{option.time}</p>
                    <p className="small text-muted mb-0">{option.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Delivery Features */}
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="h3 fw-bold mb-4">Why Choose Our Delivery?</h2>
            </Col>
            {deliveryFeatures.map((feature, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className={`${feature.icon} fs-3 text-primary`}></i>
                  </div>
                  <h6 className="fw-bold mb-2">{feature.title}</h6>
                  <p className="text-muted small mb-0">{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* International Shipping */}
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="h3 fw-bold mb-4">International Shipping</h2>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-0">
                  <Table className="mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="border-0 px-4 py-3">Country</th>
                        <th className="border-0 px-4 py-3">Delivery Time</th>
                        <th className="border-0 px-4 py-3">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {countries.map((country, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 fw-bold">{country.name}</td>
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

          {/* FAQ Section */}
          <Row>
            <Col xs={12}>
              <h2 className="h3 fw-bold mb-4">Frequently Asked Questions</h2>
              <div className="accordion" id="deliveryFAQ">
                <Card className="mb-3 border-0 shadow-sm">
                  <Card.Header className="bg-white border-0 p-0">
                    <button className="btn btn-link text-decoration-none text-dark w-100 text-start p-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      <h6 className="mb-0 fw-bold">How can I track my order?</h6>
                    </button>
                  </Card.Header>
                  <div id="faq1" className="collapse show" data-bs-parent="#deliveryFAQ">
                    <Card.Body className="p-4 pt-0">
                      <p className="mb-0">You can track your order using the tracking number provided in your shipping confirmation email. Simply enter it on our tracking page for real-time updates.</p>
                    </Card.Body>
                  </div>
                </Card>

                <Card className="mb-3 border-0 shadow-sm">
                  <Card.Header className="bg-white border-0 p-0">
                    <button className="btn btn-link text-decoration-none text-dark w-100 text-start p-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      <h6 className="mb-0 fw-bold">What if my package is damaged?</h6>
                    </button>
                  </Card.Header>
                  <div id="faq2" className="collapse" data-bs-parent="#deliveryFAQ">
                    <Card.Body className="p-4 pt-0">
                      <p className="mb-0">If your package arrives damaged, please take photos and contact our customer service within 48 hours. We'll arrange a replacement or refund.</p>
                    </Card.Body>
                  </div>
                </Card>

                <Card className="mb-3 border-0 shadow-sm">
                  <Card.Header className="bg-white border-0 p-0">
                    <button className="btn btn-link text-decoration-none text-dark w-100 text-start p-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      <h6 className="mb-0 fw-bold">Can I change my delivery address?</h6>
                    </button>
                  </Card.Header>
                  <div id="faq3" className="collapse" data-bs-parent="#deliveryFAQ">
                    <Card.Body className="p-4 pt-0">
                      <p className="mb-0">You can change your delivery address up to 24 hours after placing your order by contacting our customer service team.</p>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <FooterElectronics /> */}
    </>
  )
}
