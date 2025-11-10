import React, { useState } from 'react';
import { Edit, Plus, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { products } from '../../lib/store';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

export function InventoryManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [editingStock, setEditingStock] = useState<{ [key: string]: number }>({});

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalProducts = products.length;
  const inStock = products.filter(p => p.inStock).length;
  const outOfStock = products.filter(p => !p.inStock).length;
  const lowStock = products.filter(p => p.inStock && p.stockCount < 20).length;

  const handleStockUpdate = (productId: string, newStock: number) => {
    setEditingStock({ ...editingStock, [productId]: newStock });
  };

  const saveStockUpdate = (productId: string) => {
    // In a real app, this would update the backend
    toast.success('Stock updated successfully');
    const newEditing = { ...editingStock };
    delete newEditing[productId];
    setEditingStock(newEditing);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-slate-600">Total Products</p>
              <p className="text-slate-900">{totalProducts}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-slate-600">In Stock</p>
              <p className="text-green-600">{inStock}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-slate-600">Out of Stock</p>
              <p className="text-red-600">{outOfStock}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-slate-600">Low Stock</p>
              <p className="text-orange-600">{lowStock}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <CardTitle>Product Inventory</CardTitle>
            <div className="flex gap-2">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-full sm:w-64"
                />
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm text-slate-900 line-clamp-1">
                          {product.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{product.category}</Badge>
                    </TableCell>
                    <TableCell className="text-slate-900">
                      ${product.price}
                    </TableCell>
                    <TableCell>
                      {editingStock[product.id] !== undefined ? (
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            value={editingStock[product.id]}
                            onChange={(e) => handleStockUpdate(product.id, parseInt(e.target.value) || 0)}
                            className="w-20"
                          />
                          <Button
                            size="sm"
                            onClick={() => saveStockUpdate(product.id)}
                          >
                            Save
                          </Button>
                        </div>
                      ) : (
                        <span className="text-slate-900">{product.stockCount}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {product.inStock ? (
                        product.stockCount < 20 ? (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                            Low Stock
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            In Stock
                          </Badge>
                        )
                      ) : (
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          Out of Stock
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleStockUpdate(product.id, product.stockCount)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
