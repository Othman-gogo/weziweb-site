import React, { useState } from 'react'
import { ShoppingCart, Search, User, Star, Plus, Minus } from 'lucide-react'

const TechFlowDemo = () => {
  const [currentView, setCurrentView] = useState('store')
  const [cartItems, setCartItems] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: "MacBook Pro 14\"",
      price: 1999,
      originalPrice: 2199,
      image: "/api/placeholder/300/200",
      rating: 4.8,
      reviews: 1234,
      inStock: true,
      category: "Laptops"
    },
    {
      id: 2, 
      name: "iPhone 15 Pro",
      price: 999,
      image: "/api/placeholder/300/200",
      rating: 4.9,
      reviews: 2341,
      inStock: true,
      category: "Smartphones"
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 249,
      originalPrice: 299,
      image: "/api/placeholder/300/200", 
      rating: 4.7,
      reviews: 892,
      inStock: false,
      category: "Audio"
    }
  ]

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1, cartId: Date.now() }])
  }

  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter(item => item.cartId !== cartId))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const StoreFrontView = () => (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">TechFlow Store</h1>
        <p className="text-gray-600">Discover the latest in technology</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <div className="p-4">
              <span className="text-sm text-blue-600 font-medium">{product.category}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{product.rating} ({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => {setSelectedProduct(product); setCurrentView('product')}}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  View Details
                </button>
                <button 
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const ProductDetailView = () => (
    <div className="p-6">
      <button 
        onClick={() => setCurrentView('store')}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
      >
        ← Back to Store
      </button>
      
      {selectedProduct && (
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Product Image</span>
          </div>
          
          <div className="space-y-6">
            <div>
              <span className="text-blue-600 font-medium">{selectedProduct.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">{selectedProduct.name}</h1>
              <div className="flex items-center mt-3">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-gray-600 ml-2">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="text-3xl font-bold text-gray-900">
              ${selectedProduct.price}
              {selectedProduct.originalPrice && (
                <span className="text-xl text-gray-500 line-through ml-3">${selectedProduct.originalPrice}</span>
              )}
            </div>
            
            <p className="text-gray-600">
              Premium {selectedProduct.category.toLowerCase()} with cutting-edge technology and exceptional build quality. 
              Perfect for professionals and enthusiasts alike.
            </p>
            
            <button 
              onClick={() => addToCart(selectedProduct)}
              disabled={!selectedProduct.inStock}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart - ${selectedProduct.price}
            </button>
            
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">Free</div>
                <div className="text-sm text-gray-600">Shipping</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">2 Year</div>
                <div className="text-sm text-gray-600">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const CartView = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart ({cartItems.length} items)</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Your cart is empty</p>
          <button 
            onClick={() => setCurrentView('store')}
            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.cartId} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">IMG</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button className="p-1 rounded-full hover:bg-gray-200">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="p-1 rounded-full hover:bg-gray-200">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.cartId)}
                  className="text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total: ${getTotalPrice().toFixed(2)}</span>
              <button 
                onClick={() => setCurrentView('checkout')}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const CheckoutView = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="First Name" className="p-3 border rounded-lg" />
              <input placeholder="Last Name" className="p-3 border rounded-lg" />
              <input placeholder="Email" className="col-span-2 p-3 border rounded-lg" />
              <input placeholder="Address" className="col-span-2 p-3 border rounded-lg" />
              <input placeholder="City" className="p-3 border rounded-lg" />
              <input placeholder="ZIP Code" className="p-3 border rounded-lg" />
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
            <div className="space-y-4">
              <input placeholder="Card Number" className="w-full p-3 border rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="MM/YY" className="p-3 border rounded-lg" />
                <input placeholder="CVC" className="p-3 border rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            {cartItems.map((item) => (
              <div key={item.cartId} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          <button 
            onClick={() => alert('Order placed successfully!')}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors mt-6"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )

  const AdminView = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">$12,450</div>
          <div className="text-blue-600">Today's Sales</div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="text-3xl font-bold text-green-600">143</div>
          <div className="text-green-600">Orders Today</div>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">1,234</div>
          <div className="text-purple-600">Total Customers</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1,2,3,4,5].map(i => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#ORD-00{i}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Customer {i}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{products[i%3]?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${products[i%3]?.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-blue-600">TechFlow</div>
              <nav className="flex space-x-4">
                <button 
                  onClick={() => setCurrentView('store')}
                  className={`px-3 py-2 rounded-md ${currentView === 'store' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Store
                </button>
                <button 
                  onClick={() => setCurrentView('admin')}
                  className={`px-3 py-2 rounded-md ${currentView === 'admin' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Admin
                </button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentView('cart')}
                className="p-2 text-gray-400 hover:text-gray-600 relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentView === 'store' && <StoreFrontView />}
        {currentView === 'product' && <ProductDetailView />}
        {currentView === 'cart' && <CartView />}
        {currentView === 'checkout' && <CheckoutView />}
        {currentView === 'admin' && <AdminView />}
      </main>
    </div>
  )
}

export default TechFlowDemo