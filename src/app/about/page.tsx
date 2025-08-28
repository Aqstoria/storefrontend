import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderElectronics from '@/components/layout/header-electronics'
import ValuesCarousel from './values-carousel'
import OpenPositions from './open-positions'
import SubscriptionVlogElectronics from '@/components/shop/subscription-vlog-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionBody from 'react-bootstrap/AccordionBody'
import Lightbox from '@/components/lightbox'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

export const metadata: Metadata = {
  title: 'Cartzilla | About Us - Your Trusted Shopping Partner',
  description: 'Learn about Cartzilla - your trusted shopping partner since 2015',
}

const About_V1_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <Container className="pt-3 my-3 my-md-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/home">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About
            </li>
          </ol>
        </nav>
      </Container>

      {/* Hero Section */}
      <Container as="section" className="py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="pe-lg-4">
              <Badge bg="warning" className="mb-3 px-3 py-2 fs-6">Since 2015</Badge>
              <h1 className="display-4 fw-bold text-dark mb-4">
                🚀 Cartzilla - More than just shopping
              </h1>
              <p className="lead text-muted mb-4">
                We're your trusted partner in discovering amazing products at unbeatable prices. From electronics to fashion, 
                home goods to gadgets - we've got everything you need to make life better, easier, and more enjoyable.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button href="#mission" variant="primary" size="lg" className="px-4 py-3">
                  🎯 Our Mission
                  <i className="ci-arrow-down ms-2" />
                </Button>
                <Button href="#stats" variant="outline-primary" size="lg" className="px-4 py-3">
                  📊 Company Stats
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <div className="ratio ratio-16x9">
                <Image
                  priority
                  fill
                  src="/img/about/v1/hero.jpg"
                  sizes="(max-width: 992px) 100vw, 50vw"
                  className="object-fit-cover rounded-4"
                  alt="Cartzilla Team"
                />
              </div>
              {/* Floating stats card */}
              <div className="position-absolute top-0 end-0 bg-white rounded-4 p-4 shadow-lg" style={{ transform: 'translate(20px, -20px)' }}>
                <div className="text-center">
                  <div className="h2 fw-bold text-primary mb-1">8+</div>
                  <div className="small text-muted">Years of Excellence</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Stats Section */}
      <Container as="section" id="stats" className="py-5 bg-light rounded-4">
        <Row xs={2} md={4} className="g-4 text-center">
          {[
            { number: '14k+', label: 'Products Available', icon: '🛍️' },
            { number: '120M+', label: 'Happy Customers', icon: '😊' },
            { number: '800+', label: 'Global Team', icon: '🌍' },
            { number: '92%', label: 'Return Rate', icon: '🔄' },
          ].map((item, index) => (
            <Col key={index}>
              <div className="p-4">
                <div className="fs-1 mb-2">{item.icon}</div>
                <div className="h2 fw-bold text-primary mb-2">{item.number}</div>
                <p className="text-muted mb-0 small">{item.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Mission Section */}
      <Container
        as="section"
        id="mission"
        className="py-5 mt-5"
        style={{ scrollMarginTop: 60 }}
      >
        <div className="text-center mx-auto" style={{ maxWidth: 800 }}>
          <Badge bg="info" className="mb-3 px-3 py-2 fs-6">Our Mission</Badge>
          <h2 className="display-5 fw-bold text-dark mb-4">
            The best products at fair prices
          </h2>
          <div className="bg-light rounded-4 p-5 mb-5">
            <p className="fs-xl text-muted mb-4 fst-italic">
              "We believe that things exist to make life easier, more pleasant and kinder. That's why the search
              for the right thing should be quick, convenient and enjoyable. We do not just sell household appliances and
              electronics, but comfort and accessibility."
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <Image 
                src="/img/about/v1/avatar.jpg" 
                width={80} 
                height={80} 
                className="rounded-circle me-3" 
                alt="William Lacker" 
              />
              <div className="text-start">
                <h6 className="mb-1 fw-bold">William Lacker</h6>
                <p className="text-muted mb-0 small">Founder & CEO, Cartzilla</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Principles Section */}
      <Container as="section" className="py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <Image 
                src="/img/about/v1/delivery.jpg" 
                width={600} 
                height={600} 
                className="rounded-4 w-100" 
                alt="Cartzilla Principles" 
              />
              {/* Floating badge */}
              <div className="position-absolute top-0 start-0 bg-primary text-white rounded-3 px-3 py-2">
                <span className="fw-bold">Core Values</span>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-lg-4">
              <Badge bg="success" className="mb-3 px-3 py-2 fs-6">Our Principles</Badge>
              <h2 className="h1 fw-bold text-dark mb-4">
                The foundation of our success
              </h2>
              <p className="text-muted mb-4">
                Cartzilla is a comprehensive solution to fulfill any customer's needs, serving as both the starting
                point and end destination of their search. We operate as a reliable assistant, dedicated to eliminating
                the need for any unpleasant compromises.
              </p>
              <Accordion defaultActiveKey="0" className="accordion-modern">
                {[
                  {
                    title: 'Customer Focus',
                    icon: '🎯',
                    description: "We prioritize understanding and anticipating our customers' needs, delivering an exceptional and personalized experience from start to finish."
                  },
                  {
                    title: 'Quality & Trust',
                    icon: '⭐',
                    description: 'We value a solid reputation built on integrity, transparency, and quality - ensuring our customers trust and rely on our brand.'
                  },
                  {
                    title: 'Innovation & Speed',
                    icon: '🚀',
                    description: "We've streamlined our process for speed, convenience, and an enjoyable shopping experience, redefining online standards for our delighted customers."
                  },
                ].map((item, index) => (
                  <AccordionItem key={index} eventKey={`${index}`} className="border-0 mb-3">
                    <AccordionHeader className="bg-light rounded-3 p-3">
                      <div className="d-flex align-items-center">
                        <span className="fs-4 me-3">{item.icon}</span>
                        <span className="fw-bold">{item.title}</span>
                      </div>
                    </AccordionHeader>
                    <AccordionBody className="bg-light rounded-bottom-3 p-3">
                      <p className="text-muted mb-0">{item.description}</p>
                    </AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Values Carousel */}
      <ValuesCarousel />

      {/* Video & Blog Section */}
      <Container as="section" className="py-5">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div className="position-relative h-100">
              <div className="ratio ratio-16x9">
                <Image
                  src="/img/about/v1/video-cover.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-fit-cover rounded-4"
                  alt="Cartzilla Story"
                />
              </div>
              <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
                <Lightbox
                  href="https://www.youtube.com/watch?v=Sqqj_14wBxU"
                  gallery="video"
                  className="btn btn-lg btn-light rounded-pill shadow"
                >
                  <i className="ci-play fs-lg ms-n1 me-2" />
                  Watch Our Story
                </Lightbox>
              </div>
            </div>
          </Col>
          <Col>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-5">
                <Badge bg="warning" className="mb-3 px-3 py-2 fs-6">Latest News</Badge>
                <h3 className="h4 fw-bold text-dark mb-3">
                  Building a better world through innovation
                </h3>
                <p className="text-muted mb-4">
                  Discover how Cartzilla is making a difference in the world through innovative solutions, 
                  sustainable practices, and commitment to customer satisfaction...
                </p>
                <Button variant="outline-primary" size="lg" className="rounded-pill">
                  Read More
                  <i className="ci-arrow-right ms-2" />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Open Positions */}
      <OpenPositions />

      {/* Subscription & Vlog */}
      <SubscriptionVlogElectronics />
    </main>

    {/* Page footer */}
    <FooterElectronics />
  </>
)

export default About_V1_Page
