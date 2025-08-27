'use client'

import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function HeroBannerJoom() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: 'Outlet',
      subtitle: 'Summer Sale',
      description: 'Discover amazing deals on trending products',
      buttonText: 'Shop Now',
      buttonLink: '/shop'
    }
  ]

  return (
    <section className="hero-banner-joom">
      <Container fluid className="px-0">
        <div 
          className="hero-banner position-relative d-flex align-items-center"
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            minHeight: '500px',
            padding: '80px 0'
          }}
        >
          {/* Content */}
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="text-white">
                <h1 className="display-4 fw-bold mb-3" style={{ fontSize: '3.5rem' }}>
                  {slides[currentSlide].title}
                </h1>
                <h2 className="h3 mb-4" style={{ fontSize: '1.5rem', opacity: 0.9 }}>
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="lead mb-4" style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                  {slides[currentSlide].description}
                </p>
                <Button 
                  variant="light" 
                  size="lg" 
                  className="px-4 py-3 fw-bold"
                  href={slides[currentSlide].buttonLink}
                >
                  {slides[currentSlide].buttonText}
                </Button>
              </Col>
              
              {/* Illustration - Right Side */}
              <Col lg={6} className="text-center">
                <div className="hero-illustration">
                  {/* Placeholder for illustration - you can add your own image here */}
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{ 
                      height: '300px',
                      color: 'rgba(255,255,255,0.1)',
                      fontSize: '4rem'
                    }}
                  >
                    🛍️
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          {/* Navigation Arrows */}
          <button 
            className="btn btn-outline-light rounded-circle position-absolute start-0 top-50 translate-middle-y ms-4"
            style={{ width: '50px', height: '50px' }}
            onClick={() => setCurrentSlide(0)}
          >
            <i className="ci-arrow-left fs-4"></i>
          </button>
          
          <button 
            className="btn btn-outline-light rounded-circle position-absolute end-0 top-50 translate-middle-y me-4"
            style={{ width: '50px', height: '50px' }}
            onClick={() => setCurrentSlide(0)}
          >
            <i className="ci-arrow-right fs-4"></i>
          </button>

          {/* Pagination Dots */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
            <div className="d-flex gap-2">
              <div 
                className="bg-white rounded-circle" 
                style={{ width: '12px', height: '12px', opacity: 1 }}
              ></div>
              <div 
                className="bg-white rounded-circle" 
                style={{ width: '12px', height: '12px', opacity: 0.5 }}
              ></div>
              <div 
                className="bg-white rounded-circle" 
                style={{ width: '12px', height: '12px', opacity: 0.5 }}
              ></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
