'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import FormLabel from 'react-bootstrap/FormLabel'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Alert from 'react-bootstrap/Alert'
import ImageZoom from '@/components/image/image-zoom'
import CountInput from '@/components/forms/count-input'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

interface ProductGalleryOptionsElectronicsProps {
  product: Product
  gallery: {
    thumbs: string[]
    slides: string[]
  }
  botbleProduct?: any // Add the original Botble product data
}

const ProductGalleryOptionsElectronics = ({ product, gallery, botbleProduct }: ProductGalleryOptionsElectronicsProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  // Generate model options from backend specification attributes
  const generateModelOptions = () => {
    if (botbleProduct?.specification_attributes) {
      // Look for model/size related attributes
      const modelAttributes = botbleProduct.specification_attributes.filter((attr: any) => 
        attr.attribute?.name?.toLowerCase().includes('model') ||
        attr.attribute?.name?.toLowerCase().includes('size') ||
        attr.attribute?.name?.toLowerCase().includes('capacity') ||
        attr.attribute?.name?.toLowerCase().includes('version') ||
        attr.attribute?.name?.toLowerCase().includes('battery') ||
        attr.attribute?.name?.toLowerCase().includes('display') ||
        attr.attribute?.name?.toLowerCase().includes('resolution')
      )
      
      if (modelAttributes.length > 0) {
        return modelAttributes.map((attr: any) => `${attr.attribute?.name}: ${attr.value}`)
      }
    }
    
    // No options available - return empty array
    return []
  }

  const modelOptions = generateModelOptions()

  // Generate color options from backend specification attributes
  const generateColorOptions = () => {
    if (botbleProduct?.specification_attributes) {
      // Look for color related attributes
      const colorAttributes = botbleProduct.specification_attributes.filter((attr: any) => 
        attr.attribute?.name?.toLowerCase().includes('color') ||
        attr.attribute?.name?.toLowerCase().includes('colour')
      )
      
      if (colorAttributes.length > 0) {
        return colorAttributes.map((attr: any) => ({
          colorName: attr.value,
          colorHex: '#5a7aa1' // Default color, could be enhanced with color mapping
        }))
      }
    }
    
    // No color options available - return empty array
    return []
  }

  const colorOptions = generateColorOptions()

  // Check if we have any specification attributes to show
  const hasSpecificationAttributes = botbleProduct?.specification_attributes && 
    (modelOptions.length > 0 || colorOptions.length > 0)

  // No default values needed since there are no options
  const defaultModelValue = ''
  const defaultColorValue = ''

  const [count, setCount] = useState(1)
  const [wishlist, setWishlist] = useState(false)
  const [comparison, setComparison] = useState(false)
  const [modelValue, setModelValue] = useState(defaultModelValue)
  const [colorValue, setColorValue] = useState(defaultColorValue)
  const { addToCart } = useCart('electronics')
  const { createToast, ToastRenderer } = useToast()

  // Handle add to cart with toast
  const handleAddToCart = async () => {
    if (!product) return

    try {
      console.log('Adding product to cart:', product);
      
      // Use the product ID directly as expected by the cart context
      await addToCart({
        id: product.id,
        product_id: product.id,
        quantity: count,
        qty: count
      });

      createToast(
        {
          action: 'Added to cart:',
          product: ` ${product.title}`,
        },
        'cart'
      )
    } catch (error) {
      console.error('Add to cart error:', error);
      createToast(
        {
          action: 'Error adding to cart:',
          product: ` ${product.title}`,
        },
        'cart'
      )
    }
  }

  // Handle toggle wishlist with toast
  const handleToggleWishlist = () => {
    setWishlist(!wishlist)

    if (wishlist) {
      createToast(
        {
          action: 'Removed from wishlist: ',
          product: product.title,
        },
        'wishlist'
      )
    } else {
      createToast(
        {
          action: 'Added to wishlist: ',
          product: product.title,
        },
        'wishlist'
      )
    }
  }

  // Handle toggle comparison with toast
  const handleToggleCompare = () => {
    setComparison(!comparison)

    if (comparison) {
      createToast(
        {
          action: 'Removed from comparison list: ',
          product: product.title,
        },
        'comparison'
      )
    } else {
      createToast(
        {
          action: 'Added to comparison list: ',
          product: product.title,
        },
        'comparison'
      )
    }
  }

  return (
    <>
      {/* 
        Product page layout with hover zoom functionality:
        - Left column (md-6): Product image gallery with ImageZoom component
        - Middle column (md-3): Zoom pane container where hover zoom appears (desktop only)
        - Right column (md-6): Product options, price, and purchase controls
        
        The ImageZoom component uses Drift.js with:
        - External pane on desktop (appears in zoomPane container)
        - Inline pane on mobile (appears as overlay on image)
        - Touch support enabled for mobile devices
      */}
      <Container as="section" className="pb-5 mb-1 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
        <Row>
          {/* Product gallery */}
          <Col md={6}>
            {/* Preview images */}
            <Swiper
              modules={[Navigation, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              loop={gallery.slides.length > 1}
              navigation={{
                prevEl: '#prodGalPrev',
                nextEl: '#prodGalNext',
              }}
            >
              {gallery.slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <ImageZoom
                    priority
                    src={slide}
                    zoomSrc={slide}
                    paneContainerId="zoomPane"
                    inlinePane={768}
                    hoverDelay={500}
                    touchDelay={300}
                    touchDisable={false}
                    width={1272}
                    height={1272}
                    alt="Image"
                  />
                </SwiperSlide>
              ))}
              <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-sm-2 ms-lg-3">
                <Button
                  variant="outline-secondary"
                  className="btn-icon bg-body rounded-circle animate-slide-start"
                  id="prodGalPrev"
                  aria-label="Previous slide"
                >
                  <i className="ci-chevron-left fs-lg animate-target" />
                </Button>
              </div>
              <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-sm-2 me-lg-3">
                <Button
                  variant="outline-secondary"
                  className="btn-icon bg-body rounded-circle animate-slide-end"
                  id="prodGalNext"
                  aria-label="Next slide"
                >
                  <i className="ci-chevron-right fs-lg animate-target" />
                </Button>
              </div>
            </Swiper>

            {/* Thumbnails */}
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              watchSlidesProgress
              slidesPerView={3}
              spaceBetween={12}
              loop={gallery.thumbs.length > 3}
              breakpoints={{
                340: {
                  slidesPerView: 4,
                },
                500: {
                  slidesPerView: 5,
                },
                600: {
                  slidesPerView: 6,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
              className="swiper-thumbs swiper-load pt-2 mt-1"
            >
              {gallery.thumbs.map((thumb, index) => (
                <SwiperSlide key={index} className="swiper-thumb">
                  <div className="ratio ratio-1x1" style={{ maxWidth: 94 }}>
                    <Image src={thumb} width={188} height={188} className="swiper-thumb-img" alt="Thumbnail" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>

          {/* Zoom pane container - positioned next to the image */}
          <Col md={3} className="d-none d-md-block">
            <div className="position-relative" id="zoomPane">
              {/* Zoom content will be inserted here by Drift.js */}
            </div>
          </Col>

          {/* Product options */}
          <Col as="aside" md={6} xl={3} className="offset-xl-0 pt-4">
            <div className="ps-md-4 ps-xl-0">
              {/* Model - only show if we have specification attributes */}
              {hasSpecificationAttributes && modelOptions.length > 0 && (
                <div className="pb-3 mb-2 mb-lg-3">
                  <FormLabel className="fw-semibold pb-1 mb-2">Specifications</FormLabel>
                  <div className="d-flex flex-wrap gap-2">
                    {modelOptions.map((model: string, index: number) => (
                      <ToggleButton
                        key={index}
                        type="radio"
                        id={`model-${index}`}
                        variant="outline-secondary"
                        size="sm"
                        name="model-options"
                        value={model}
                        checked={modelValue === model}
                        onChange={(e) => setModelValue(e.currentTarget.value)}
                      >
                        {model}
                      </ToggleButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Color - only show if we have specification attributes */}
              {hasSpecificationAttributes && colorOptions.length > 0 && (
                <div className="pb-3 mb-2 mb-lg-3">
                  <FormLabel className="fw-semibold pb-1 mb-2">Color</FormLabel>
                  <div className="d-flex flex-wrap gap-2">
                    {colorOptions.map((color: any, index: number) => (
                      <ToggleButton
                        key={index}
                        type="radio"
                        id={`color-${index}`}
                        variant="outline-secondary"
                        size="sm"
                        name="color-options"
                        value={color.colorName}
                        checked={colorValue === color.colorName}
                        onChange={(e) => setColorValue(e.currentTarget.value)}
                      >
                        <div
                          className="d-flex align-items-center gap-2"
                          style={{ color: color.colorHex }}
                        >
                          <div
                            className="rounded-circle"
                            style={{
                              width: 16,
                              height: 16,
                              backgroundColor: color.colorHex,
                              border: '1px solid #dee2e6',
                            }}
                          />
                          {color.colorName}
                        </div>
                      </ToggleButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="d-flex flex-wrap align-items-center mb-3">
                <div className="h4 mb-0 me-3">
                  $
                  {product.price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                  {product.price[1] !== undefined && (
                    <del className="fs-base fw-normal text-body-tertiary">
                      $
                      {product.price[1]?.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </del>
                  )}
                </div>
                <div className="d-flex align-items-center text-success fs-sm ms-auto">
                  <i className="ci-check-circle fs-base me-2" />
                  Available to order
                </div>
              </div>

              {/* Count + Buttons */}
              <div className="d-flex flex-wrap flex-sm-nowrap flex-md-wrap flex-lg-nowrap gap-3 gap-lg-2 gap-xl-3 mb-4">
                <CountInput
                  size="lg"
                  value={count}
                  min={1}
                  onChange={(value) => {
                    setCount(value)
                  }}
                />
                <Button
                  size="lg"
                  className="flex-fill animate-slide-end"
                  onClick={handleAddToCart}
                >
                  <i className="ci-shopping-cart fs-lg animate-target me-2" />
                  Add to cart
                </Button>
              </div>

              {/* Wishlist + Compare buttons */}
              <div className="d-flex gap-2 mb-4">
                <Button
                  variant="outline-secondary"
                  className="flex-fill animate-slide-end"
                  onClick={handleToggleWishlist}
                >
                  <i className={`ci-heart${wishlist ? '-filled' : ''} animate-target me-2`} />
                  {wishlist ? 'Remove from' : 'Add to'} Wishlist
                </Button>
                <Button
                  variant="outline-secondary"
                  className="flex-fill animate-slide-end"
                  onClick={handleToggleCompare}
                >
                  <i className={`ci-compare${comparison ? '-filled' : ''} animate-target me-2`} />
                  {comparison ? 'Remove from' : 'Add to'} Compare
                </Button>
              </div>

              {/* Shipping options */}
              <div className="border-top pt-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h6 className="mb-0">Shipping options</h6>
                  <Button variant="link" className="p-0 text-decoration-none">
                    <i className="ci-location me-1" />
                    Find local store
                  </Button>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <i className="ci-truck fs-4 me-3" />
                    <div>
                      <div className="fw-semibold">Pickup from the store</div>
                      <div className="text-body-tertiary fs-sm">Today</div>
                    </div>
                  </div>
                  <span className="text-success fw-semibold">Free</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <i className="ci-truck fs-4 me-3" />
                    <div>
                      <div className="fw-semibold">Pickup from postal offices</div>
                      <div className="text-body-tertiary fs-sm">Tomorrow</div>
                    </div>
                  </div>
                  <span className="fw-semibold">$25.00</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <i className="ci-truck fs-4 me-3" />
                    <div>
                      <div className="fw-semibold">Delivery by courier</div>
                      <div className="text-body-tertiary fs-sm">2-3 days</div>
                    </div>
                  </div>
                  <span className="fw-semibold">$35.00</span>
                </div>
              </div>

              {/* Collapsible sections */}
              <div className="accordion" id="productAccordion">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <Button
                      className="accordion-button collapsed"
                      variant="link"
                      data-bs-toggle="collapse"
                      data-bs-target="#warrantyInfo"
                    >
                      Warranty information
                    </Button>
                  </h3>
                  <div className="accordion-collapse collapse" id="warrantyInfo" data-bs-parent="#productAccordion">
                    <div className="accordion-body">
                      <p className="mb-0">
                        This product comes with a 2-year warranty covering manufacturing defects and hardware failures.
                        Extended warranty options are available for purchase.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <Button
                      className="accordion-button collapsed"
                      variant="link"
                      data-bs-toggle="collapse"
                      data-bs-target="#paymentInfo"
                    >
                      Payment and credit
                    </Button>
                  </h3>
                  <div className="accordion-collapse collapse" id="paymentInfo" data-bs-parent="#productAccordion">
                    <div className="accordion-body">
                      <p className="mb-0">
                        We accept all major credit cards, PayPal, and bank transfers. Financing options available
                        for purchases over $500.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastRenderer />
    </>
  )
}

export default ProductGalleryOptionsElectronics
