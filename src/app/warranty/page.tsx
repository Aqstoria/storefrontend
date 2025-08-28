'use client'

import HeaderElectronics from '@/components/layout/header-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

export default function WarrantyPage() {
  const warrantyTypes = [
    {
      title: 'Standard Warranty',
      duration: '1 Year',
      icon: '🛡️',
      color: 'primary',
      features: ['Manufacturing defects', 'Hardware failures', 'Free repairs', 'Expert service']
    },
    {
      title: 'Extended Warranty',
      duration: '2-3 Years',
      icon: '⚡',
      color: 'success',
      features: ['Extended coverage', 'Priority service', 'Free shipping', 'Replacement options']
    },
    {
      title: 'Premium Warranty',
      duration: '3-5 Years',
      icon: '💎',
      color: 'warning',
      features: ['Comprehensive coverage', 'Accidental damage', 'Express service', 'Lifetime support']
    },
    {
      title: 'Lifetime Warranty',
      duration: 'Lifetime',
      icon: '👑',
      color: 'danger',
      features: ['Forever protection', 'Premium support', 'Upgrade options', 'VIP service']
    }
  ]

  const warrantyCategories = [
    {
      category: 'Electronics',
      duration: '1-2 years',
      coverage: 'Hardware defects, power issues, connectivity problems',
      icon: '📱',
      popular: true
    },
    {
      category: 'Appliances',
      duration: '2-3 years',
      coverage: 'Mechanical failures, electrical issues, performance problems',
      icon: '🏠',
      popular: false
    },
    {
      category: 'Furniture',
      duration: '1-5 years',
      coverage: 'Structural defects, material issues, assembly problems',
      icon: '🪑',
      popular: false
    },
    {
      category: 'Clothing',
      duration: '30 days',
      coverage: 'Manufacturing defects, stitching issues, size problems',
      icon: '👕',
      popular: false
    },
    {
      category: 'Jewelry',
      duration: '1 year',
      coverage: 'Setting defects, stone quality, craftsmanship issues',
      icon: '💍',
      popular: false
    },
    {
      category: 'Sports Equipment',
      duration: '1-2 years',
      coverage: 'Structural integrity, safety features, performance issues',
      icon: '⚽',
      popular: false
    }
  ]

  const warrantyFeatures = [
    {
      icon: '🔧',
      title: 'Free Repairs',
      description: 'All repairs covered under warranty are completely free of charge'
    },
    {
      icon: '⚡',
      title: 'Quick Service',
      description: 'Most repairs completed within 24-48 hours for your convenience'
    },
    {
      icon: '👨‍🔧',
      title: 'Expert Technicians',
      description: 'Certified technicians with years of experience and training'
    },
    {
      icon: '🔒',
      title: 'Genuine Parts',
      description: 'Only original manufacturer parts are used for all repairs'
    },
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping for warranty claims and returns'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all warranty inquiries'
    }
  ]

  return (
    <>
      <HeaderElectronics />
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <Badge bg="light" className="text-primary mb-3 px-3 py-2 fs-6">Product Protection</Badge>
              <h1 className="display-4 fw-bold mb-4">
                🛡️ Cartzilla Warranty Protection
              </h1>
              <p className="lead mb-4">
                Comprehensive coverage for all your purchases. Our warranty programs ensure your products 
                are protected against defects and failures, giving you peace of mind with every purchase.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button variant="light" size="lg" className="fw-bold">
                  📋 Check Warranty Status
                </Button>
                <Button variant="outline-light" size="lg">
                  📞 Contact Support
                </Button>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div className="fs-1 mb-3">🛡️</div>
              <h4>100% Protection</h4>
              <p className="mb-0">Your products are safe with us</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Warranty Types */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Warranty Plans</h2>
          <p className="lead text-muted">
            Choose the protection level that best suits your needs
          </p>
        </div>
        
        <Row className="g-4">
          {warrantyTypes.map((warranty, index) => (
            <Col lg={3} md={6} key={index}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="fs-1 mb-3">{warranty.icon}</div>
                  <Badge bg={warranty.color} className="mb-3 px-3 py-2 fs-6">
                    {warranty.duration}
                  </Badge>
                  <h4 className="fw-bold text-dark mb-3">{warranty.title}</h4>
                  <ul className="list-unstyled text-muted mb-4">
                    {warranty.features.map((feature, fIndex) => (
                      <li key={fIndex} className="mb-2">
                        <i className="ci-check text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline-primary" size="lg" className="w-100">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Warranty Features */}
      <Container className="py-5 bg-light rounded-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Why Choose Cartzilla Warranty?</h2>
          <p className="lead text-muted">
            We go above and beyond to ensure your satisfaction
          </p>
        </div>
        
        <Row className="g-4">
          {warrantyFeatures.map((feature, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="h-100 border-0 bg-white shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="fs-1 mb-3">{feature.icon}</div>
                  <h5 className="fw-bold text-dark mb-3">{feature.title}</h5>
                  <p className="text-muted mb-0">{feature.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Warranty Categories */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Warranty Coverage by Category</h2>
          <p className="lead text-muted">
            Detailed breakdown of warranty terms for different product categories
          </p>
        </div>
        
        <Row className="g-4">
          {warrantyCategories.map((category, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="fs-1 me-3">{category.icon}</div>
                    <div>
                      <h5 className="fw-bold text-dark mb-1">{category.category}</h5>
                      {category.popular && (
                        <Badge bg="success" className="fs-6">Most Popular</Badge>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <strong className="text-primary">Duration:</strong> {category.duration}
                  </div>
                  <p className="text-muted mb-0">{category.coverage}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Warranty Terms Table */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Detailed Warranty Terms</h2>
          <p className="lead text-muted">
            Complete information about warranty coverage and terms
          </p>
        </div>
        
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">
            <Table className="table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="border-0 px-4 py-3">Category</th>
                  <th className="border-0 px-4 py-3">Duration</th>
                  <th className="border-0 px-4 py-3">Coverage</th>
                  <th className="border-0 px-4 py-3">Exclusions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center">
                      <span className="fs-4 me-3">📱</span>
                      <strong>Electronics</strong>
                    </div>
                  </td>
                  <td className="px-4 py-3">1-2 years</td>
                  <td className="px-4 py-3">Hardware defects, power issues, connectivity problems</td>
                  <td className="px-4 py-3">Physical damage, water damage, unauthorized modifications</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center">
                      <span className="fs-4 me-3">🏠</span>
                      <strong>Appliances</strong>
                    </div>
                  </td>
                  <td className="px-4 py-3">2-3 years</td>
                  <td className="px-4 py-3">Mechanical failures, electrical issues, performance problems</td>
                  <td className="px-4 py-3">Normal wear and tear, improper installation, misuse</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center">
                      <span className="fs-4 me-3">🪑</span>
                      <strong>Furniture</strong>
                    </div>
                  </td>
                  <td className="px-4 py-3">1-5 years</td>
                  <td className="px-4 py-3">Structural defects, material issues, assembly problems</td>
                  <td className="px-4 py-3">Normal wear, accidental damage, improper assembly</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center">
                      <span className="fs-4 me-3">👕</span>
                      <strong>Clothing</strong>
                    </div>
                  </td>
                  <td className="px-4 py-3">30 days</td>
                  <td className="px-4 py-3">Manufacturing defects, stitching issues, size problems</td>
                  <td className="px-4 py-3">Wear and tear, alterations, improper care</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center">
                      <span className="fs-4 me-3">💍</span>
                      <strong>Jewelry</strong>
                    </div>
                  </td>
                  <td className="px-4 py-3">1 year</td>
                  <td className="px-4 py-3">Setting defects, stone quality, craftsmanship issues</td>
                  <td className="px-4 py-3">Loss, theft, damage from wear, improper storage</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <div className="d-flex align-items-center">
                      <span className="fs-4 me-3">⚽</span>
                      <strong>Sports Equipment</strong>
                    </div>
                  </td>
                  <td className="px-4 py-3">1-2 years</td>
                  <td className="px-4 py-3">Structural integrity, safety features, performance issues</td>
                  <td className="px-4 py-3">Normal wear, misuse, improper maintenance</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>

      {/* CTA Section */}
      <div className="bg-dark text-white py-5">
        <Container className="text-center">
          <h3 className="mb-3">Need Help with Your Warranty?</h3>
          <p className="mb-4">
            Our warranty support team is here to help you 24/7
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="primary" size="lg">
              📋 Check Status
            </Button>
            <Button variant="outline-light" size="lg">
              📞 Contact Support
            </Button>
            <Button variant="outline-light" size="lg">
              📖 Read Terms
            </Button>
          </div>
        </Container>
      </div>

      <FooterElectronics />
    </>
  )
}
