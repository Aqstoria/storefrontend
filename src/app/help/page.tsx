'use client'

import HeaderElectronics from '@/components/layout/header-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

export default function HelpCentrePage() {
  const [activeTab, setActiveTab] = useState('faq')

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      items: [
        {
          question: 'How do I create a Cartzilla account?',
          answer: 'Creating a Cartzilla account is simple! Click the "Log in" button in the header, then select "Sign up" to create your account. You can also use Facebook or Google for quick registration.'
        },
        {
          question: 'What are the benefits of having a Cartzilla account?',
          answer: 'With a Cartzilla account, you can save your favorite products, track orders, earn rewards, receive exclusive offers, create wishlists, and pay for purchases by installments.'
        },
        {
          question: 'How do I navigate the website?',
          answer: 'Use the top navigation bar to browse categories, the search bar to find specific products, and the hero slider to discover featured deals and promotions.'
        }
      ]
    },
    {
      title: 'Shopping & Orders',
      icon: '🛒',
      items: [
        {
          question: 'How do I place an order?',
          answer: 'Browse products, add them to your cart, review your cart, and proceed to checkout. Enter your shipping and payment information to complete your order.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and offer flexible payment plans including buy now, pay later options.'
        },
        {
          question: 'Can I modify or cancel my order?',
          answer: 'Orders can be modified within 1 hour of placement. For cancellations, contact our customer service team immediately.'
        }
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: '📦',
      items: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping: 3-5 business days. Express shipping: 1-2 business days. International shipping: 7-14 business days depending on destination.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes! We ship to over 50 countries worldwide. International shipping rates and delivery times vary by location.'
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in your account dashboard.'
        }
      ]
    },
    {
      title: 'Returns & Refunds',
      icon: '↩️',
      items: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for most items. Products must be unused and in original packaging. Some items are non-returnable.'
        },
        {
          question: 'How do I return an item?',
          answer: 'Initiate a return through your account dashboard or contact customer service. We\'ll provide a prepaid return label for your convenience.'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 3-5 business days after we receive your return. The time to appear in your account depends on your bank.'
        }
      ]
    },
    {
      title: 'Account & Security',
      icon: '🔒',
      items: [
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page. Enter your email address and follow the instructions sent to your inbox.'
        },
        {
          question: 'Is my personal information secure?',
          answer: 'Absolutely! We use industry-standard SSL encryption and never store your payment information. Your data is protected by our privacy policy.'
        },
        {
          question: 'Can I have multiple addresses?',
          answer: 'Yes! You can save multiple shipping addresses in your account for convenient checkout and gift-giving.'
        }
      ]
    }
  ]

  const premiumFeatures = [
    {
      title: 'VIP Customer Support',
      icon: '👑',
      description: 'Priority access to our dedicated support team with faster response times and personalized assistance.',
      badge: 'Premium'
    },
    {
      title: 'Exclusive Deals',
      icon: '💎',
      description: 'Access to member-only sales, early access to promotions, and special discount codes.',
      badge: 'Premium'
    },
    {
      title: 'Free Express Shipping',
      icon: '🚀',
      description: 'Enjoy free 1-2 day shipping on all orders over $50 for premium members.',
      badge: 'Premium'
    },
    {
      title: 'Extended Returns',
      icon: '⏰',
      description: '60-day return window instead of the standard 30 days for premium members.',
      badge: 'Premium'
    }
  ]

  const supportOptions = [
    {
      title: 'Live Chat Support',
      icon: '💬',
      description: 'Get instant help from our customer service team',
      action: 'Start Chat',
      available: true
    },
    {
      title: 'Email Support',
      icon: '📧',
      description: 'Send us a detailed message and get a response within 24 hours',
      action: 'Send Email',
      available: true
    },
    {
      title: 'Phone Support',
      icon: '📞',
      description: 'Speak directly with our support team',
      action: 'Call Now',
      available: true
    },
    {
      title: 'Help Articles',
      icon: '📚',
      description: 'Browse our comprehensive knowledge base',
      action: 'Browse Articles',
      available: true
    }
  ]

  return (
    <>
      <HeaderElectronics />
      <div className="min-vh-100 bg-light">
        {/* Hero Section */}
        <div className="bg-primary text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-3">
                  🎯 Cartzilla Help Centre
                </h1>
                <p className="lead mb-4">
                  Your ultimate guide to shopping smarter with Cartzilla. Get answers, find solutions, and unlock premium features.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="light" size="lg" className="fw-bold">
                    🚀 Get Started
                  </Button>
                  <Button variant="outline-light" size="lg">
                    📞 Contact Support
                  </Button>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="fs-1 mb-3">🛒</div>
                <h4>Premium Support</h4>
                <p className="mb-0">Unlock exclusive benefits and faster support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="container py-4">
          <div className="d-flex justify-content-center mb-4">
            <div className="nav nav-pills">
              <Button
                variant={activeTab === 'faq' ? 'primary' : 'outline-primary'}
                className="me-2"
                onClick={() => setActiveTab('faq')}
              >
                ❓ FAQ
              </Button>
              <Button
                variant={activeTab === 'premium' ? 'primary' : 'outline-primary'}
                className="me-2"
                onClick={() => setActiveTab('premium')}
              >
                👑 Premium Features
              </Button>
              <Button
                variant={activeTab === 'support' ? 'primary' : 'outline-primary'}
                onClick={() => setActiveTab('support')}
              >
                🆘 Support
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          {activeTab === 'faq' && (
            <div className="row g-4">
              {faqCategories.map((category, categoryIndex) => (
                <Col lg={6} key={categoryIndex}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0">
                        {category.icon} {category.title}
                      </h5>
                    </Card.Header>
                    <Card.Body>
                      <Accordion>
                        {category.items.map((item, itemIndex) => (
                          <Accordion.Item key={itemIndex} eventKey={`${categoryIndex}-${itemIndex}`}>
                            <Accordion.Header>
                              <strong>{item.question}</strong>
                            </Accordion.Header>
                            <Accordion.Body>
                              {item.answer}
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </div>
          )}

          {/* Premium Features Section */}
          {activeTab === 'premium' && (
            <div className="row g-4">
              <div className="col-12 text-center mb-4">
                <h2 className="display-6 fw-bold text-primary">👑 Premium Features</h2>
                <p className="lead">Unlock exclusive benefits and elevate your Cartzilla experience</p>
              </div>
              {premiumFeatures.map((feature, index) => (
                <Col lg={6} key={index}>
                  <Card className="h-100 border-0 shadow-lg">
                    <Card.Body className="text-center p-4">
                      <div className="fs-1 mb-3">{feature.icon}</div>
                      <Badge bg="warning" className="mb-3">{feature.badge}</Badge>
                      <h4 className="mb-3">{feature.title}</h4>
                      <p className="text-muted mb-4">{feature.description}</p>
                      <Button variant="primary" size="lg">
                        Upgrade Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              <div className="col-12 text-center mt-4">
                <Card className="border-0 bg-gradient text-white" style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)' }}>
                  <Card.Body className="p-5">
                    <h3 className="mb-3">🚀 Ready to Go Premium?</h3>
                    <p className="mb-4">Join thousands of satisfied customers who enjoy exclusive benefits and premium support.</p>
                    <Button variant="light" size="lg" className="fw-bold">
                      Start Premium Trial
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          )}

          {/* Support Section */}
          {activeTab === 'support' && (
            <div className="row g-4">
              <div className="col-12 text-center mb-4">
                <h2 className="display-6 fw-bold text-primary">🆘 Support Options</h2>
                <p className="lead">We're here to help you every step of the way</p>
              </div>
              {supportOptions.map((option, index) => (
                <Col lg={6} key={index}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="text-center p-4">
                      <div className="fs-1 mb-3">{option.icon}</div>
                      <h4 className="mb-3">{option.title}</h4>
                      <p className="text-muted mb-4">{option.description}</p>
                      <Button 
                        variant={option.available ? 'primary' : 'secondary'} 
                        size="lg"
                        disabled={!option.available}
                      >
                        {option.action}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              <div className="col-12">
                <Card className="border-0 bg-light">
                  <Card.Body className="p-4">
                    <h4 className="mb-3">📞 Contact Information</h4>
                    <Row>
                      <Col md={6}>
                        <p><strong>Customer Service:</strong> 1-800-CARTZILLA</p>
                        <p><strong>Email:</strong> support@cartzilla.com</p>
                        <p><strong>Hours:</strong> 24/7 Support Available</p>
                      </Col>
                      <Col md={6}>
                        <p><strong>Live Chat:</strong> Available 24/7</p>
                        <p><strong>Response Time:</strong> Within 2 hours</p>
                        <p><strong>Languages:</strong> English, Spanish, French</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="bg-dark text-white py-5">
          <div className="container text-center">
            <h3 className="mb-3">Still Need Help?</h3>
            <p className="mb-4">Our dedicated team is ready to assist you with any questions or concerns.</p>
            <Button variant="primary" size="lg" className="me-3">
              📞 Call Support
            </Button>
            <Button variant="outline-light" size="lg">
              💬 Live Chat
            </Button>
          </div>
        </div>
      </div>
      <FooterElectronics />
    </>
  )
}
