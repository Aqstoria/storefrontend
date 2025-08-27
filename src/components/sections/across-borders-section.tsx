'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AcrossBordersSection() {
  const countries = [
    { 
      country: 'Korea', 
      flag: '🇰🇷', 
      desc: 'Ultimate finds from around the world',
      image: '/images/countries/korea.png'
    },
    { 
      country: 'India', 
      flag: '🇮🇳', 
      desc: 'Ultimate finds from around the world',
      image: '/images/countries/india.png'
    },
    { 
      country: 'France', 
      flag: '🇫🇷', 
      desc: 'Ultimate finds from around the world',
      image: '/images/countries/france.png'
    },
    { 
      country: 'Japan', 
      flag: '🇯🇵', 
      desc: 'Ultimate finds from around the world',
      image: '/images/countries/japan.png'
    },
    { 
      country: 'Italy', 
      flag: '🇮🇹', 
      desc: 'Ultimate finds from around the world',
      image: '/images/countries/italy.png'
    },
    { 
      country: 'Germany', 
      flag: '🇩🇪', 
      desc: 'Ultimate finds from around the world',
      image: '/images/countries/germany.png'
    }
  ];

  // Pagination logic - show 3 countries per page
  const [currentPage, setCurrentPage] = useState(0);
  const countriesPerPage = 3;
  const totalPages = Math.ceil(countries.length / countriesPerPage);
  const startIndex = currentPage * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;
  const currentCountries = countries.slice(startIndex, endIndex);

  return (
    <>
      {/* Countries Display */}
      <Row className="g-3 mb-3">
        {currentCountries.map((item, index) => (
          <Col lg={4} key={index}>
            <div className="bg-light rounded-3 p-4 text-center position-relative">
              <h6 className="mb-3">Products from {item.country}</h6>
              
              {/* Country Image */}
              <div className="mb-3 position-relative">
                <Image 
                  src={item.image} 
                  width={120} 
                  height={120} 
                  alt={`Products from ${item.country}`}
                  className="rounded-circle mx-auto"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <p className="text-muted small mb-0">{item.desc}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls - Exactly like Joom.com */}
      <div className="d-flex align-items-center justify-content-center gap-2">
        {/* Left Arrow */}
        <button
          onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
          className="btn btn-outline-secondary rounded-circle p-2"
          style={{ 
            width: '40px', 
            height: '40px',
            border: '1px solid #dee2e6'
          }}
        >
          <i className="ci-arrow-left" style={{ fontSize: '16px' }}></i>
        </button>
        
        {/* Page Dots */}
        <div className="d-flex gap-2 mx-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`btn rounded-circle p-0 ${
                currentPage === index 
                  ? 'bg-primary' 
                  : 'bg-secondary bg-opacity-25'
              }`}
              style={{ 
                width: '10px', 
                height: '10px',
                border: 'none'
              }}
            />
          ))}
        </div>
        
        {/* Right Arrow */}
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
          disabled={currentPage === totalPages - 1}
          className="btn btn-outline-secondary rounded-circle p-2"
          style={{ 
            width: '40px', 
            height: '40px',
            border: '1px solid #dee2e6'
          }}
        >
          <i className="ci-arrow-right" style={{ fontSize: '16px' }}></i>
        </button>
      </div>
    </>
  );
}
