import { Product, CartItem, User } from '../types';

// Mock product data
export const products: Product[] = [
  {
    id: '1',
    name: 'TechFlow Pro X1 Smartphone',
    description: 'Latest flagship smartphone with 5G connectivity, 108MP camera, and AI-powered features.',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lfGVufDF8fHx8MTc2Mjc4ODM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Smartphones',
    rating: 4.8,
    reviews: 342,
    inStock: true,
    stockCount: 45,
    featured: true
  },
  {
    id: '2',
    name: 'AirWave Premium Headphones',
    description: 'Wireless noise-cancelling headphones with 30-hour battery life and premium audio quality.',
    price: 349,
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYyNzQzODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Audio',
    rating: 4.9,
    reviews: 567,
    inStock: true,
    stockCount: 28,
    featured: true
  },
  {
    id: '3',
    name: 'ProBook Elite Laptop',
    description: 'Ultra-thin laptop with 16GB RAM, 512GB SSD, and all-day battery life.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjI2ODY3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computers',
    rating: 4.7,
    reviews: 289,
    inStock: true,
    stockCount: 15,
    featured: true
  },
  {
    id: '4',
    name: 'SmartFit Watch Pro',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzYyNzQwOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearables',
    rating: 4.6,
    reviews: 412,
    inStock: true,
    stockCount: 52,
    featured: false
  },
  {
    id: '5',
    name: 'ProShot Digital Camera',
    description: 'Professional mirrorless camera with 45MP sensor and 4K video recording.',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjI3MDYyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cameras',
    rating: 4.9,
    reviews: 178,
    inStock: true,
    stockCount: 8,
    featured: false
  },
  {
    id: '6',
    name: 'FlexPad Pro Tablet',
    description: '12.9-inch tablet perfect for creativity and productivity with stylus support.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1714071803623-9594e3b77862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYyNzg1MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Tablets',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    stockCount: 32,
    featured: false
  },
  {
    id: '7',
    name: 'GameStation 5 Console',
    description: 'Next-gen gaming console with 8K support and ultra-fast SSD storage.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1604846887565-640d2f52d564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2MjcyMTAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Gaming',
    rating: 4.8,
    reviews: 891,
    inStock: false,
    stockCount: 0,
    featured: true
  },
  {
    id: '8',
    name: 'SoundWave Bluetooth Speaker',
    description: 'Portable wireless speaker with 360° sound and waterproof design.',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyfGVufDF8fHx8MTc2Mjc5MTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Audio',
    rating: 4.5,
    reviews: 523,
    inStock: true,
    stockCount: 67,
    featured: false
  }
];

// Store state management
class Store {
  private cart: CartItem[] = [];
  private user: User | null = null;
  private listeners: Array<() => void> = [];

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }

  getCart(): CartItem[] {
    return [...this.cart];
  }

  addToCart(product: Product) {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.notify();
  }

  removeFromCart(productId: string) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.notify();
  }

  updateQuantity(productId: string, quantity: number) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(0, quantity);
      if (item.quantity === 0) {
        this.removeFromCart(productId);
      } else {
        this.notify();
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.notify();
  }

  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getCartCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  setUser(user: User | null) {
    this.user = user;
    this.notify();
  }

  getUser(): User | null {
    return this.user;
  }
}

export const store = new Store();
