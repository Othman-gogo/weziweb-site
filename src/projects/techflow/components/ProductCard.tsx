import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from '../types';
import { useStore } from '../hooks/useStore';
import { toast } from 'sonner@2.0.3';

interface ProductCardProps {
  product: Product;
  onViewDetails: (productId: string) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.inStock) {
      addToCart(product);
      toast.success(`Added ${product.name} to cart`);
    }
  };

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
      <div onClick={() => onViewDetails(product.id)}>
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              Save ${product.originalPrice - product.price}
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary">Out of Stock</Badge>
            </div>
          )}
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div onClick={() => onViewDetails(product.id)}>
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-2 text-slate-900">{product.name}</h3>
          </div>

          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-slate-700">{product.rating}</span>
            <span className="text-sm text-slate-500">({product.reviews})</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-slate-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardContent>
    </Card>
  );
}
