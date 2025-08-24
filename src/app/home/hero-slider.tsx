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
  return (
    <Container as="section" className="pt-8 pb-6">
      <Row>
        <Col xs={12}>
          {/* Hero Banner - EXACT Joom Style */}
          <div 
            className="position-relative overflow-hidden rounded-4 p-8 mb-4"
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              minHeight: '320px'
            }}
          >
            <Row className="align-items-center h-100">
              <Col lg={6}>
                <div className="text-white">
                  <h1 className="display-4 fw-bold mb-3" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>Outlet</h1>
                  <p className="fs-4 mb-0" style={{ fontSize: '1.25rem', opacity: '0.95' }}>Summer Sale</p>
                </div>
              </Col>
              <Col lg={6} className="text-center">
                {/* Summer hat illustration - exactly like Joom */}
                <div className="position-relative d-flex justify-content-center">
                  <div 
                    className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ 
                      width: '140px', 
                      height: '140px',
                      border: '2px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {/* Summer hat icon placeholder */}
                    <i className="ci-shopping-bag fs-1 text-white" style={{ fontSize: '3rem' }}></i>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Navigation arrows - EXACT Joom style */}
            <button 
              className="position-absolute top-50 start-0 translate-middle-y bg-white bg-opacity-20 border-0 rounded-circle d-flex align-items-center justify-content-center text-white"
              style={{ 
                left: '1.5rem', 
                width: '40px', 
                height: '40px',
                fontSize: '24px',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              ‹
            </button>
            <button 
              className="position-absolute top-50 end-0 translate-middle-y bg-white bg-opacity-20 border-0 rounded-circle d-flex align-items-center justify-content-center text-white"
              style={{ 
                right: '1.5rem', 
                width: '40px', 
                height: '40px',
                fontSize: '24px',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              ›
            </button>
            
            {/* Pagination dots - EXACT Joom style */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
              <div className="d-flex gap-3">
                <div className="bg-white rounded-circle" style={{ width: '10px', height: '10px' }}></div>
                <div className="bg-white bg-opacity-50 rounded-circle" style={{ width: '10px', height: '10px' }}></div>
                <div className="bg-white bg-opacity-50 rounded-circle" style={{ width: '10px', height: '10px' }}></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroBannerJoom
