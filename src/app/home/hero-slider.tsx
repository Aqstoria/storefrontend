'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const HeroBannerJoom = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: 'Outlet',
      subtitle: 'Summer Sale',
      image: '/img/home/electronics/hero-slider/01.png',
      href: '/shop/outlet',
    },
    {
      title: 'New Arrivals',
      subtitle: 'Fresh Collection',
      image: '/img/home/electronics/hero-slider/02.png',
      href: '/shop/new-arrivals',
    },
    {
      title: 'Hot Deals',
      subtitle: 'Limited Time',
      image: '/img/home/electronics/hero-slider/03.png',
      href: '/shop/hot-deals',
    },
  ]

  return (
    <Container as="section" className="pt-4">
      <Row>
        <Col xs={12}>
          <div className="position-relative">
            {/* Hero Banner */}
            <div className="position-relative overflow-hidden rounded-4 hero-swiper">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: '.hero-pagination',
                }}
                navigation={{
                  nextEl: '.hero-next',
                  prevEl: '.hero-prev',
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
              >
                {heroSlides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="position-relative">
                      {/* Background with orange gradient */}
                      <div 
                        className="w-100 h-100 position-absolute"
                        style={{
                          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                          minHeight: '400px'
                        }}
                      />
                      
                      {/* Content */}
                      <Row className="align-items-center position-relative z-2 py-5 px-4">
                        <Col lg={6} className="text-white text-center text-lg-start">
                          <h1 className="display-3 fw-bold mb-2">{slide.title}</h1>
                          <h2 className="display-5 fw-medium mb-4">{slide.subtitle}</h2>
                          <Link href={slide.href} className="btn btn-light btn-lg px-4 py-2 fw-semibold">
                            Shop Now
                            <i className="ci-arrow-right ms-2" />
                          </Link>
                        </Col>
                        <Col lg={6} className="text-center">
                          <div className="position-relative">
                            <Image 
                              src={slide.image} 
                              width={400} 
                              height={400} 
                              alt={slide.title}
                              className="img-fluid"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <button className="hero-prev position-absolute top-50 start-0 translate-middle-y bg-white bg-opacity-75 border-0 rounded-circle p-3 ms-3 z-3">
                <i className="ci-chevron-left fs-4 text-dark" />
              </button>
              <button className="hero-next position-absolute top-50 end-0 translate-middle-y bg-white bg-opacity-75 border-0 rounded-circle p-3 me-3 z-3">
                <i className="ci-chevron-right fs-4 text-dark" />
              </button>

              {/* Pagination Dots */}
              <div className="hero-pagination position-absolute bottom-0 start-50 translate-middle-x mb-3 z-3" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroBannerJoom
