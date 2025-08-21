export default function DeliveryPage() {
  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-5">
        <h1>Delivery Information</h1>
        <p>Fast, reliable shipping to your doorstep with real-time tracking.</p>
        
        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Shipping Options</h3>
            <ul>
              <li>Standard Shipping: Free (3-5 business days)</li>
              <li>Express Shipping: $9.99 (1-2 business days)</li>
              <li>Overnight Shipping: $19.99 (Next business day)</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Features</h3>
            <ul>
              <li>Real-time Tracking</li>
              <li>Delivery Notifications</li>
              <li>Flexible Delivery</li>
              <li>Secure Packaging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}