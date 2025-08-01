'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'

import { botbleAPI } from '@/services/api'
import HeaderElectronics from '@/components/layout/header-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import AccountSidebarDashboard from '@/components/account/account-sidebar-dashboard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import Link from 'next/link'

interface DashboardStats {
  totalOrders: number
  pendingOrders: number
  completedOrders: number
  totalSpent: number
  wishlistItems: number
}

interface RecentOrder {
  id: number
  code: string
  status: string
  amount: number
  created_at: string
  payment_method?: string
}

const AccountDashboardPage = () => {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth()

  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalSpent: 0,
    wishlistItems: 0
  })
  const [recentOrders, setRecentOrders] = useState<RecentOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Set document title
    document.title = 'Cartzilla | Account Dashboard'
  }, [])

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/account')
      return
    }

    if (isAuthenticated) {
      console.log('Dashboard: User authenticated:', { isAuthenticated, user })
      fetchDashboardData()
    }
  }, [isAuthenticated, authLoading, router])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log('Dashboard: Starting to fetch data...')
      
      // Test authentication first
      const authToken = localStorage.getItem('auth_token')
      console.log('Dashboard: Auth token exists:', !!authToken)
      console.log('Dashboard: Auth token (first 20 chars):', authToken?.substring(0, 20))
      
      // Test API call manually
      try {
        const testResponse = await fetch(`${process.env.NEXT_PUBLIC_ECOMMERCE_API_URL || 'http://127.0.0.1:8000/api/v1/ecommerce'}/orders?per_page=10`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...(authToken ? { 'Authorization': `Bearer ${authToken}` } : {})
          }
        })
        const testData = await testResponse.json()
        console.log('Dashboard: Manual API test response status:', testResponse.status)
        console.log('Dashboard: Manual API test response:', testData)
      } catch (testError) {
        console.error('Dashboard: Manual API test failed:', testError)
      }

      // Fetch orders for stats and recent orders
      const ordersResponse = await botbleAPI.getOrders({ per_page: 10 })
      console.log('Dashboard: Orders response:', ordersResponse)
      console.log('Dashboard: Full response structure:', JSON.stringify(ordersResponse, null, 2))
      
      if (ordersResponse.success && ordersResponse.data) {
        const orders = ordersResponse.data.data || ordersResponse.data || []
        console.log('Dashboard: Orders data:', orders)
        console.log('Dashboard: Orders length:', orders.length)
        console.log('Dashboard: First order (if any):', orders[0])
        
        // Calculate stats
        const totalOrders = orders.length
        const pendingOrders = orders.filter((order: any) => order.status === 'pending').length
        const completedOrders = orders.filter((order: any) => order.status === 'completed').length
        const totalSpent = orders.reduce((sum: number, order: any) => sum + parseFloat(order.amount || 0), 0)
        
        console.log('Dashboard: Calculated stats:', {
          totalOrders,
          pendingOrders,
          completedOrders,
          totalSpent
        })
        
        setStats({
          totalOrders,
          pendingOrders,
          completedOrders,
          totalSpent,
          wishlistItems: 0 // Will be updated below
        })

        // Set recent orders (first 5)
        const recentOrdersData = orders.slice(0, 5)
        console.log('Dashboard: Recent orders:', recentOrdersData)
        setRecentOrders(recentOrdersData)
      } else {
        console.warn('Orders fetch failed:', ordersResponse.message)
        console.warn('Full failed response:', ordersResponse)
        // Don't set error, just use default stats
        setStats({
          totalOrders: 0,
          pendingOrders: 0,
          completedOrders: 0,
          totalSpent: 0,
          wishlistItems: 0
        })
        setRecentOrders([])
      }

      // Fetch wishlist count
      try {
        const wishlistResponse = await botbleAPI.getWishlist()
        console.log('Dashboard: Wishlist response:', wishlistResponse)
        if (wishlistResponse.success && wishlistResponse.data) {
          const wishlistItems = wishlistResponse.data.items?.length || 0
          setStats(prev => ({ ...prev, wishlistItems }))
        }
      } catch (wishlistError) {
        console.log('Wishlist fetch failed:', wishlistError)
      }

    } catch (err) {
      console.error('Error fetching dashboard data:', err)
      setError('Failed to load dashboard data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'warning'
      case 'processing':
        return 'info'
      case 'shipped':
        return 'primary'
      case 'delivered':
      case 'completed':
        return 'success'
      case 'cancelled':
        return 'danger'
      default:
        return 'secondary'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  // Show loading state while checking authentication
  if (authLoading) {
    console.log('Dashboard: Auth loading...', { authLoading, isAuthenticated, user })
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3 text-muted">Loading account...</p>
        </div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated || !user) {
    console.log('Dashboard: Not authenticated, redirecting...', { isAuthenticated, user })
    if (!isAuthenticated) {
      router.push('/account')
    }
    return null // Will redirect to login
  }

  console.log('Dashboard: Rendering dashboard for user:', user)

  return (
    <>
      <HeaderElectronics
        isLoggedIn={{
          name: user.name || user.email || 'User',
          href: '/account/dashboard',
        }}
      />

      <main className="content-wrapper">
        <Container className="py-5 mt-n2 mt-sm-0">
          <Row className="pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            {/* Sidebar */}
            <Col as="aside" lg={3}>
              <AccountSidebarDashboard 
                name={user.name || user.email || 'User'} 
              />
            </Col>

            {/* Main content */}
            <Col lg={9}>
              <div className="ps-lg-3 ps-xl-0">
                {/* Welcome section */}
                <div className="mb-4">
                  <h1 className="h2 mb-2">Welcome back, {user.name || user.email || 'User'}!</h1>
                  <p className="text-muted mb-0">Here's what's happening with your account today.</p>
                </div>

                {error && (
                  <Alert variant="danger" className="mb-4">
                    <Alert.Heading>Error</Alert.Heading>
                    <p className="mb-0">{error}</p>
                    <hr />
                    <Button variant="outline-danger" size="sm" onClick={fetchDashboardData}>
                      Try Again
                    </Button>
                  </Alert>
                )}

                {loading ? (
                  <div className="text-center py-5">
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-3 text-muted">Loading dashboard...</p>
                  </div>
                ) : (
                  <>
                    {/* Statistics Cards */}
                    <Row className="g-4 mb-4">
                      <Col sm={6} lg={3}>
                        <Card className="border-0 shadow-sm h-100">
                          <Card.Body className="text-center">
                            <div className="bg-primary-subtle rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '3rem', height: '3rem' }}>
                              <i className="ci-shopping-bag text-primary fs-5"></i>
                            </div>
                            <h3 className="h4 mb-1">{stats.totalOrders}</h3>
                            <p className="text-muted mb-0">Total Orders</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col sm={6} lg={3}>
                        <Card className="border-0 shadow-sm h-100">
                          <Card.Body className="text-center">
                            <div className="bg-warning-subtle rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '3rem', height: '3rem' }}>
                              <i className="ci-time text-warning fs-5"></i>
                            </div>
                            <h3 className="h4 mb-1">{stats.pendingOrders}</h3>
                            <p className="text-muted mb-0">Pending Orders</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col sm={6} lg={3}>
                        <Card className="border-0 shadow-sm h-100">
                          <Card.Body className="text-center">
                            <div className="bg-success-subtle rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '3rem', height: '3rem' }}>
                              <i className="ci-check-circle text-success fs-5"></i>
                            </div>
                            <h3 className="h4 mb-1">{stats.completedOrders}</h3>
                            <p className="text-muted mb-0">Completed</p>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col sm={6} lg={3}>
                        <Card className="border-0 shadow-sm h-100">
                          <Card.Body className="text-center">
                            <div className="bg-info-subtle rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '3rem', height: '3rem' }}>
                              <i className="ci-heart text-info fs-5"></i>
                            </div>
                            <h3 className="h4 mb-1">{stats.wishlistItems}</h3>
                            <p className="text-muted mb-0">Wishlist Items</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      {/* Recent Orders */}
                      <Col lg={8}>
                        <Card className="border-0 shadow-sm">
                          <Card.Header className="bg-light">
                            <div className="d-flex align-items-center justify-content-between">
                              <h5 className="mb-0">
                                <i className="ci-package me-2"></i>
                                Recent Orders
                              </h5>
                              <Link href="/account/orders" className="btn btn-sm btn-outline-primary">
                                View All
                              </Link>
                            </div>
                          </Card.Header>
                          <Card.Body className="p-0">
                            {recentOrders.length === 0 ? (
                              <div className="text-center py-5">
                                <i className="ci-package text-muted mb-3" style={{ fontSize: '3rem' }}></i>
                                <h5 className="text-muted mb-2">No orders yet</h5>
                                <p className="text-muted mb-3">Start shopping to see your orders here.</p>
                                <Link href="/shop" className="btn btn-primary">
                                  Start Shopping
                                </Link>
                              </div>
                            ) : (
                              <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                  <thead className="table-light">
                                    <tr>
                                      <th>Order</th>
                                      <th>Date</th>
                                      <th>Status</th>
                                      <th>Total</th>
                                      <th>Payment</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {recentOrders.map((order) => (
                                      <tr key={order.id}>
                                        <td>
                                          <Link href={`/account/orders/${order.id}`} className="text-decoration-none">
                                            <strong>#{order.code || order.id}</strong>
                                          </Link>
                                        </td>
                                        <td className="text-muted">{formatDate(order.created_at)}</td>
                                        <td>
                                          <Badge bg={getStatusVariant(order.status)} className="text-capitalize">
                                            {order.status}
                                          </Badge>
                                        </td>
                                        <td>
                                          <strong>{formatCurrency(order.amount)}</strong>
                                        </td>
                                        <td className="text-muted text-capitalize">
                                          {order.payment_method || 'N/A'}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </Card.Body>
                        </Card>
                      </Col>

                      {/* Quick Actions & Account Info */}
                      <Col lg={4}>
                        {/* Quick Actions */}
                        <Card className="border-0 shadow-sm mb-4">
                          <Card.Header className="bg-light">
                            <h5 className="mb-0">
                              <i className="ci-zap me-2"></i>
                              Quick Actions
                            </h5>
                          </Card.Header>
                          <Card.Body>
                            <div className="d-grid gap-2">
                              <Link href="/account/orders" className="btn btn-outline-primary btn-sm">
                                <i className="ci-package me-2"></i>
                                View All Orders
                              </Link>
                              <Link href="/account/shop/wishlist" className="btn btn-outline-primary btn-sm">
                                <i className="ci-heart me-2"></i>
                                My Wishlist
                              </Link>
                              <Link href="/account/shop/addresses" className="btn btn-outline-primary btn-sm">
                                <i className="ci-map-pin me-2"></i>
                                Manage Addresses
                              </Link>
                              <Link href="/account/shop/info" className="btn btn-outline-primary btn-sm">
                                <i className="ci-user me-2"></i>
                                Edit Profile
                              </Link>
                            </div>
                          </Card.Body>
                        </Card>

                        {/* Account Info */}
                        <Card className="border-0 shadow-sm">
                          <Card.Header className="bg-light">
                            <h5 className="mb-0">
                              <i className="ci-user me-2"></i>
                              Account Info
                            </h5>
                          </Card.Header>
                          <Card.Body>
                            <div className="d-flex align-items-center mb-3">
                              <div className="flex-shrink-0">
                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }}>
                                  <i className="ci-user text-white fs-5"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1">{user.name || user.email || 'User'}</h6>
                                <p className="text-muted mb-0 small">{user.email || 'No email'}</p>
                              </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span className="text-muted">Total Spent:</span>
                              <strong>{formatCurrency(stats.totalSpent)}</strong>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                              <span className="text-muted">Member Since:</span>
                              <span className="small">{user.created_at ? formatDate(user.created_at) : 'N/A'}</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <FooterElectronics className="border-top" />
    </>
  )
}

export default AccountDashboardPage 