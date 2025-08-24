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
          {/* Hero Banner - Exact Joom Style */}
          <div 
            className="position-relative overflow-hidden rounded-4 p-6 p-lg-7 mb-4"
            style={{
              background: 'linear-gradient(to right, #f97316, #fb923c)',
              minHeight: '320px'
            }}
          >
            <Row className="align-items-center h-100">
              <Col lg={6}>
                <div className="text-white">
                  <h1 className="display-4 fw-bold mb-2">Outlet</h1>
                  <p className="fs-5 mb-4">Summer Sale</p>
                </div>
              </Col>
              <Col lg={6} className="text-center">
                {/* Summer hat illustration placeholder */}
                <div className="position-relative">
                  <div 
                    className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '128px', height: '128px' }}
                  >
                    <i className="ci-shopping-bag fs-1 text-white"></i>
                  </div>
                </div>
              </Col>
            </Row>
            
            {/* Navigation arrows - exactly like reference */}
            <button 
              className="position-absolute top-50 start-0 translate-middle-y bg-white bg-opacity-20 border-0 rounded-circle d-flex align-items-center justify-content-center text-white"
              style={{ 
                left: '1rem', 
                width: '32px', 
                height: '32px',
                fontSize: '20px'
              }}
            >
              ‹
            </button>
            <button 
              className="position-absolute top-50 end-0 translate-middle-y bg-white bg-opacity-20 border-0 rounded-circle d-flex align-items-center justify-content-center text-white"
              style={{ 
                right: '1rem', 
                width: '32px', 
                height: '32px',
                fontSize: '20px'
              }}
            >
              ›
            </button>
            
            {/* Pagination dots at bottom - exactly like reference */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
              <div className="d-flex gap-2">
                <div className="bg-white rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                <div className="bg-white bg-opacity-50 rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                <div className="bg-white bg-opacity-50 rounded-circle" style={{ width: '8px', height: '8px' }}></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroBannerJoom
