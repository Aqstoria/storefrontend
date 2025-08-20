'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const WeeklyPromotionSection = () => {
  const promotionCards = [
    {
      title: 'Bestsellers for less',
      subtitle: 'Summer Sale',
      image: '/img/home/electronics/special-offers/01.jpg',
      href: '/shop/bestsellers',
    },
    {
      title: 'Hot deals',
      subtitle: 'Summer Sale',
      image: '/img/home/electronics/special-offers/02.jpg',
      href: '/shop/hot-deals',
    },
    {
      title: 'All sale items here',
      subtitle: 'Summer Sale',
      image: '/img/home/electronics/special-offers/03.jpg',
      href: '/shop/sale',
    },
  ]

  return (
    <Container as="section" className="pt-5">
      <Row className="g-4">
        {promotionCards.map((card, index) => (
          <Col lg={4} md={6} key={index}>
            <div className="position-relative bg-warning bg-opacity-10 rounded-4 p-4 h-100">
              <div className="text-center">
                <h3 className="h4 mb-2">{card.title}</h3>
                <p className="text-muted mb-3">{card.subtitle}</p>
                
                {/* Product Images Placeholder */}
                <div className="d-flex justify-content-center align-items-center mb-3" style={{ minHeight: '200px' }}>
                  <div className="bg-white rounded p-3 me-2">
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                      <span className="text-muted">Product 1</span>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3 me-2">
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                      <span className="text-muted">Product 2</span>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                      <span className="text-muted">Product 3</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-outline-secondary btn-sm rounded-circle p-2">
                    <i className="ci-chevron-left" />
                  </button>
                  <Link href={card.href} className="btn btn-primary">
                    View All
                  </Link>
                  <button className="btn btn-outline-secondary btn-sm rounded-circle p-2">
                    <i className="ci-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default WeeklyPromotionSection
