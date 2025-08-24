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
          {/* Joom Style Orange Banner */}
          <div 
            className="position-relative overflow-hidden rounded-4 p-6 p-lg-7"
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
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
                {/* Product illustration placeholder */}
                <div className="position-relative">
                  <div 
                    className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '120px', height: '120px' }}
                  >
                    <i className="ci-shopping-bag fs-1 text-white"></i>
                  </div>
                  {/* Navigation arrows like Joom */}
                  <button 
                    className="position-absolute top-50 start-0 translate-middle-y bg-white bg-opacity-20 border-0 rounded-circle p-2"
                    style={{ left: '-20px' }}
                  >
                    <i className="ci-chevron-left text-white"></i>
                  </button>
                  <button 
                    className="position-absolute top-50 end-0 translate-middle-y bg-white bg-opacity-20 border-0 rounded-circle p-2"
                    style={{ right: '-20px' }}
                  >
                    <i className="ci-chevron-right text-white"></i>
                  </button>
                </div>
              </Col>
            </Row>
            
            {/* Pagination dots at bottom */}
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
