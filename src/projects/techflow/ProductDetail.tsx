import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Star, Truck, Shield, RotateCcw, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { products } from '../lib/store';
import { useStore } from '../hooks/useStore';
import { toast } from 'sonner@2.0.3';

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
}

export function ProductDetail({ productId, onBack }: ProductDetailProps) {
  const product = products.find(p => p.id === productId);
  const { addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Product not found</p>
        <Button onClick={onBack}>Back to Store</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Added ${quantity} × ${product.name} to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Store
      </Button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square rounded-xl overflow-hidden bg-slate-100">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-3">{product.category}</Badge>
            <h1 className="mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-slate-900">{product.rating}</span>
                <span className="text-slate-500">({product.reviews} reviews)</span>
              </div>
              {product.inStock ? (
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  In Stock ({product.stockCount} available)
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-red-100 text-red-700">
                  Out of Stock
                </Badge>
              )}
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-slate-900">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-slate-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge variant="secondary" className="bg-red-100 text-red-700">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </Badge>
                </>
              )}
            </div>

            <p className="text-slate-600">{product.description}</p>
          </div>

          <Separator />

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-slate-700">Quantity:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={!product.inStock}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  disabled={!product.inStock}
                >
                  +
                </Button>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
          </div>

          <Separator />

          {/* Product Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-slate-900">Free Shipping</p>
                <p className="text-sm text-slate-600">On orders over $50</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-slate-900">2 Year Warranty</p>
                <p className="text-sm text-slate-600">Full coverage</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <RotateCcw className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-slate-900">30-Day Returns</p>
                <p className="text-sm text-slate-600">Money back guarantee</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-slate-900">Fast Delivery</p>
                <p className="text-sm text-slate-600">2-3 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
