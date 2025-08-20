import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionButton from 'react-bootstrap/AccordionButton'
import AccordionCollapse from 'react-bootstrap/AccordionCollapse'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function HelpCentrePage() {
  const faqCategories = [
    {
      title: 'Shopping & Orders',
      icon: 'ci-shopping-bag',
      items: [
        {
          question: 'How do I place an order?',
          answer: 'Browse our products, add items to your cart, and proceed to checkout. You can pay using various payment methods including credit cards, PayPal, and digital wallets.'
        },
        {
          question: 'Can I modify or cancel my order?',
          answer: 'Orders can be modified within 1 hour of placement. For cancellations, contact our customer service team immediately. Once shipped, orders cannot be cancelled.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and other major payment methods. All transactions are secure and encrypted.'
        }
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: 'ci-truck',
      items: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 3-5 business days. Express shipping (1-2 days) and overnight shipping are available for select items. International shipping takes 7-14 business days.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. Check our shipping calculator for specific rates.'
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in your account dashboard or contact our support team.'
        }
      ]
    },
    {
      title: 'Returns & Refunds',
      icon: 'ci-refresh-cw',
      items: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for most items. Products must be unused, in original packaging, and in resellable condition. Some items are non-returnable.'
        },
        {
          question: 'How do I return an item?',
          answer: 'Initiate a return through your account dashboard or contact customer service. We\'ll provide a prepaid shipping label and instructions for returning your item.'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 3-5 business days after we receive your return. The time to appear in your account depends on your bank or payment provider.'
        }
      ]
    },
    {
      title: 'Account & Security',
      icon: 'ci-shield-check',
      items: [
        {
          question: 'How do I create an account?',
          answer: 'Click "Log in" in the header, then select "Create Account." Fill in your details and verify your email address to complete registration.'
        },
        {
          question: 'I forgot my password. What should I do?',
          answer: 'Click "Forgot Password" on the login page. Enter your email address and we\'ll send you a link to reset your password securely.'
        },
        {
          question: 'Is my personal information secure?',
          answer: 'Yes, we use industry-standard encryption and security measures to protect your personal information. We never share your data with third parties without consent.'
        }
      ]
    }
  ]

  const contactMethods = [
    {
      title: 'Live Chat',
      icon: 'ci-chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      href: '#'
    },
    {
      title: 'Email Support',
      icon: 'ci-mail',
      description: 'Send us a detailed message',
      action: 'Send Email',
      href: 'mailto:support@cartzilla.com'
    },
    {
      title: 'Phone Support',
      icon: 'ci-phone',
      description: 'Call us during business hours',
      action: 'Call Now',
      href: 'tel:+1-800-CARTZILLA'
    }
  ]

  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row className="text-center">
            <Col xs={12}>
              <h1 className="display-4 fw-bold mb-3">Help Centre</h1>
              <p className="lead mb-4">
                Find answers to your questions and get the support you need
              </p>
              <div className="d-flex justify-content-center">
                <div className="position-relative" style={{ maxWidth: '500px' }}>
                  <input
                    type="search"
                    className="form-control form-control-lg"
                    placeholder="Search for help articles..."
                  />
                  <Button variant="light" className="position-absolute end-0 top-0 h-100 rounded-start-0">
                    <i className="ci-search"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        {/* Contact Methods */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">Need Help? Contact Us</h2>
          </Col>
          {contactMethods.map((method, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className={`${method.icon} fs-2 text-primary`}></i>
                  </div>
                  <h5 className="card-title mb-2">{method.title}</h5>
                  <p className="card-text text-muted mb-3">{method.description}</p>
                  <Link href={method.href} className="btn btn-primary">
                    {method.action}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* FAQ Categories */}
        <Row>
          <Col xs={12}>
            <h2 className="h3 mb-4 text-center">Frequently Asked Questions</h2>
          </Col>
          {faqCategories.map((category, categoryIndex) => (
            <Col lg={6} key={categoryIndex} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-light border-0">
                  <h5 className="mb-0 d-flex align-items-center">
                    <i className={`${category.icon} me-2 text-primary`}></i>
                    {category.title}
                  </h5>
                </Card.Header>
                <Card.Body className="p-0">
                  <Accordion flush>
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} eventKey={`${categoryIndex}-${itemIndex}`}>
                        <AccordionButton className="px-4 py-3">
                          <span className="fw-medium">{item.question}</span>
                        </AccordionButton>
                        <AccordionCollapse eventKey={`${categoryIndex}-${itemIndex}`}>
                          <div className="px-4 pb-3">
                            <p className="text-muted mb-0">{item.answer}</p>
                          </div>
                        </AccordionCollapse>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Help Resources */}
        <Row className="mt-5">
          <Col xs={12}>
            <div className="bg-white rounded-4 p-5 text-center shadow-sm">
              <h3 className="mb-3">Still Need Help?</h3>
              <p className="text-muted mb-4">
                Can't find what you're looking for? Our customer support team is here to help you 24/7.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Contact Support
                </Link>
                <Link href="/delivery" className="btn btn-outline-primary btn-lg">
                  Delivery Information
                </Link>
                <Link href="/warranty" className="btn btn-outline-primary btn-lg">
                  Warranty Details
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
