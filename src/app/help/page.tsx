'use client'

import HeaderElectronics from '@/components/layout/header-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'

export default function HelpCentrePage() {
  return (
    <>
      <HeaderElectronics />
      <div className="min-vh-100 bg-light">
        <div className="container py-5">
          <h1>Help Centre</h1>
          <p>Find answers to frequently asked questions and get support.</p>
          
          <div className="row mt-4">
            <div className="col-md-6">
              <h3>Frequently Asked Questions</h3>
              <ul>
                <li>How do I place an order?</li>
                <li>What is your return policy?</li>
                <li>How long does shipping take?</li>
                <li>Do you ship internationally?</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Contact Support</h3>
              <ul>
                <li>Live Chat</li>
                <li>Email Support</li>
                <li>Phone Support</li>
                <li>Help Articles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterElectronics />
    </>
  )
}
