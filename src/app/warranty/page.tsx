'use client'

import HeaderElectronics from '@/components/layout/header-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'

export default function WarrantyPage() {
  return (
    <>
      <HeaderElectronics />
      <div className="min-vh-100 bg-light">
        <div className="container py-5">
          <h1>Warranty Information</h1>
          <p>Comprehensive protection for all your Cartzilla products.</p>
          
          <div className="row mt-4">
            <div className="col-md-6">
              <h3>Warranty Types</h3>
              <ul>
                <li><strong>Standard Warranty:</strong> 1 Year - Manufacturing defects, hardware failures</li>
                <li><strong>Extended Warranty:</strong> 2-3 Years - Extended coverage for electronics</li>
                <li><strong>Premium Warranty:</strong> 3-5 Years - Comprehensive coverage including accidental damage</li>
                <li><strong>Lifetime Warranty:</strong> Lifetime coverage for select premium products</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Warranty Features</h3>
              <ul>
                <li><strong>Free Repairs:</strong> All repairs covered under warranty are completely free</li>
                <li><strong>Quick Service:</strong> Most repairs completed within 24-48 hours</li>
                <li><strong>Expert Technicians:</strong> Certified technicians with years of experience</li>
                <li><strong>Genuine Parts:</strong> Only original manufacturer parts are used</li>
              </ul>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-12">
              <h3>Warranty Terms by Category</h3>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Duration</th>
                      <th>Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Electronics</td>
                      <td>1-2 years</td>
                      <td>Hardware defects, power issues</td>
                    </tr>
                    <tr>
                      <td>Appliances</td>
                      <td>2-3 years</td>
                      <td>Mechanical failures, electrical issues</td>
                    </tr>
                    <tr>
                      <td>Furniture</td>
                      <td>1-5 years</td>
                      <td>Structural defects, material issues</td>
                    </tr>
                    <tr>
                      <td>Clothing</td>
                      <td>30 days</td>
                      <td>Manufacturing defects, stitching issues</td>
                    </tr>
                    <tr>
                      <td>Jewelry</td>
                      <td>1 year</td>
                      <td>Setting defects, stone quality</td>
                    </tr>
                    <tr>
                      <td>Sports Equipment</td>
                      <td>1-2 years</td>
                      <td>Structural integrity, safety features</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterElectronics />
    </>
  )
}
