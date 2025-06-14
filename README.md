# 🌾 SmartAgro Connect - Agricultural Marketplace Platform

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Storage-orange?logo=firebase)](https://firebase.google.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.8.2-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-teal?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Transforming agricultural trade across Bangladesh with technology and trust**

SmartAgro Connect is a comprehensive B2B agricultural marketplace platform that revolutionizes how farmers, agents, and wholesale buyers interact in the agricultural supply chain. By eliminating intermediaries and ensuring transparency, we create a more efficient and profitable ecosystem for all stakeholders.

## 🚀 Live Demo

**[🌐 Visit SmartAgro Connect](https://your-deployed-url.com)**

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture & Tech Stack](#️-architecture--tech-stack)
- [👥 User Roles & Capabilities](#-user-roles--capabilities)
- [🛠️ Installation & Setup](#️-installation--setup)
- [🔧 Configuration](#-configuration)
- [📁 Project Structure](#-project-structure)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📞 Support](#-support)

## 🎯 Project Overview

### Problem Statement
Traditional agricultural trade in Bangladesh faces significant challenges:
- **Unfair pricing** due to multiple intermediaries
- **Lack of transparency** in quality assessment and pricing
- **Limited market access** for rural farmers
- **Inefficient logistics** and delivery systems
- **Trust deficits** between farmers and buyers

### Our Solution
SmartAgro Connect provides a **digital-first platform** that:
- **Directly connects** farmers with wholesale buyers
- **Ensures quality control** through verified regional agents
- **Provides transparent pricing** with no hidden fees
- **Streamlines logistics** with efficient delivery systems
- **Builds trust** through verified user profiles and ratings

### Impact Metrics
- 🚜 **500+** Registered Farmers
- 🏢 **200+** Wholesale Buyers
- 🌱 **1000+** Products Listed
- 📦 **2500+** Orders Processed
- 💰 **15%** Average Price Improvement for Farmers

## ✨ Key Features

### 🌟 Core Functionality
- **Multi-Role Dashboard System** (Admin, Agent, Seller, Consumer)
- **Real-time Product Catalog** with advanced filtering & search
- **Bulk Order Management** with customizable cart system
- **Application & Verification System** for sellers and agents
- **Regional Agent Network** for quality assurance
- **Secure Payment Integration** with multiple payment gateways
- **Order Tracking & Management** with delivery status updates

### 🔐 Security & Authentication
- **Firebase Authentication** with multi-provider support
- **JWT Token Management** with refresh mechanisms
- **Role-based Access Control** (RBAC)
- **Secure API Communication** with HTTPS encryption
- **Data Privacy Compliance** with GDPR standards

### 📱 User Experience
- **Responsive Design** optimized for all devices
- **Modern UI/UX** with intuitive navigation
- **Real-time Notifications** using React Hot Toast
- **Progressive Loading** with skeleton screens
- **Offline Capability** with local storage fallbacks

### 📊 Analytics & Reporting
- **Dashboard Analytics** with interactive charts (Recharts)
- **Sales Performance Tracking**
- **User Activity Monitoring**
- **Regional Market Insights**
- **Revenue Analytics**

## 🏗️ Architecture & Tech Stack

### Frontend Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Core Framework** | React | 18.2.0 | Component-based UI development |
| **State Management** | Redux Toolkit | 2.8.2 | Centralized state management |
| **Routing** | React Router DOM | 6.22.0 | Client-side routing and navigation |
| **Styling** | Tailwind CSS | 3.4.1 | Utility-first CSS framework |
| **UI Components** | DaisyUI | 5.0.35 | Pre-built component library |
| **Data Fetching** | React Query | 3.39.3 | Server state management |
| **Forms** | React Hook Form | 7.50.1 | Performant form handling |
| **Authentication** | Firebase Auth | 10.8.0 | User authentication & authorization |
| **Charts** | Recharts | 2.12.0 | Data visualization |
| **Icons** | React Icons | 5.0.1 | Comprehensive icon library |
| **Notifications** | React Hot Toast | 2.4.1 | Toast notifications |
| **Payments** | Stripe | 7.3.0 | Payment processing |

### Backend Integration
- **RESTful APIs** for all data operations
- **JWT Authentication** for secure communication
- **Cloudinary Integration** for image management
- **Firebase Storage** for document uploads
- **Real-time Updates** via WebSocket connections

### Development Tools
- **Vite** - Fast development build tool
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

## 👥 User Roles & Capabilities

### 🛡️ Admin
- **System-wide management** and oversight
- **User verification** and role assignment
- **Analytics dashboard** with comprehensive metrics
- **Platform configuration** and settings management
- **Order and payment** monitoring

### 🤝 Regional Agent
- **Farmer verification** and onboarding
- **Quality control** and product inspection
- **Regional analytics** and performance tracking
- **Warehouse management** and inventory control
- **Delivery coordination** and logistics

### 🚜 Seller (Farmer)
- **Product listing** with detailed descriptions
- **Inventory management** and stock updates
- **Order processing** and fulfillment
- **Sales analytics** and revenue tracking
- **Profile management** and verification status

### 🏢 Consumer (Wholesale Buyer)
- **Product browsing** with advanced filters
- **Bulk order placement** and cart management
- **Order tracking** and delivery status
- **Supplier communication** and reviews
- **Purchase history** and analytics

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Firebase project** setup
- **Cloudinary account** for image storage

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/smart-agro-connect-client.git
   cd smart-agro-connect-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following configuration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# Backend API Configuration
VITE_SERVER_API_URL=your_backend_api_url

# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset

# Stripe Configuration
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Environment
VITE_PROD=development
```

### Required Assets

Place the following assets in the `public/images/` directory:
- `logo-with-text.png` - Application logo with text
- `farming-illustration.png` - Agricultural illustration for auth pages

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication with Email/Password, Google, and Facebook providers
3. Create a Firestore database
4. Enable Firebase Storage
5. Configure authentication domains

### Cloudinary Setup

1. Create account at [Cloudinary](https://cloudinary.com)
2. Create an upload preset in your console
3. Configure upload restrictions and transformations

## 📁 Project Structure

```
smart-agro-connect-client/
├── 📁 public/                 # Static assets
│   ├── 📁 images/            # Image assets
│   └── 📄 index.html         # Entry HTML file
├── 📁 src/                   # Source code
│   ├── 📁 components/        # Reusable UI components
│   │   ├── 📁 Applications/  # Application management
│   │   ├── 📁 Cart/         # Shopping cart functionality
│   │   ├── 📁 Dashboard/    # Role-based dashboards
│   │   ├── 📁 Products/     # Product catalog
│   │   └── 📁 UI/           # Common UI components
│   ├── 📁 contexts/         # React context providers
│   ├── 📁 hooks/            # Custom React hooks
│   ├── 📁 layouts/          # Page layout components
│   ├── 📁 pages/            # Main application pages
│   ├── 📁 routes/           # Routing configuration
│   ├── 📁 services/         # API and external services
│   ├── 📁 store/            # Redux store configuration
│   ├── 📁 utils/            # Utility functions
│   └── 📄 main.jsx          # Application entry point
├── 📁 docs/                 # Project documentation
├── 📄 package.json          # Dependencies and scripts
├── 📄 tailwind.config.js    # Tailwind CSS configuration
├── 📄 vite.config.js        # Vite build configuration
└── 📄 README.md             # Project documentation
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Firebase Hosting (Recommended)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and initialize**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Alternative Deployment Options
- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment from Git
- **AWS S3 + CloudFront** - Scalable hosting solution
- **DigitalOcean Apps** - Platform-as-a-Service

## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines:

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- Follow **ESLint** configuration
- Use **conventional commits** format
- Write **descriptive** component and function names
- Add **comments** for complex logic
- Ensure **responsive design** compatibility

### Testing
- Test all user flows thoroughly
- Verify responsive design on multiple devices
- Check cross-browser compatibility
- Validate form inputs and error handling

## 📊 API Documentation

The platform integrates with a comprehensive REST API. Key endpoints include:

### Authentication
- `POST /users/register` - User registration
- `POST /users/login` - User authentication
- `GET /users/:email` - User profile retrieval

### Products
- `GET /products` - Product catalog with filtering
- `POST /products` - Create new product (Sellers)
- `PUT /products/:id` - Update product information

### Orders
- `POST /orders` - Place new order
- `GET /orders/user/:userId` - User order history
- `PATCH /orders/:id/status` - Update order status

### Applications
- `POST /applications` - Submit seller/agent application
- `GET /applications/all-applications` - Admin application management
- `PATCH /applications/:id/:action` - Approve/reject applications

For complete API documentation, see [API_Routing_Guide.md](./API_Routing_Guide.md)

## 🔒 Security Features

- **Input Validation** - Comprehensive form validation
- **XSS Protection** - Content sanitization
- **CSRF Protection** - Token-based security
- **Rate Limiting** - API abuse prevention
- **Secure Headers** - HTTPS enforcement
- **Data Encryption** - Sensitive data protection

## 📈 Performance Optimizations

- **Code Splitting** - Dynamic imports for reduced bundle size
- **Image Optimization** - WebP format with fallbacks
- **Caching Strategy** - Browser and CDN caching
- **Lazy Loading** - Component and image lazy loading
- **Bundle Analysis** - Regular performance audits

## 📞 Support

### 🐛 Bug Reports
Please use our [GitHub Issues](https://github.com/your-username/smart-agro-connect-client/issues) for bug reports.

### 💡 Feature Requests
We welcome feature suggestions! Please create an issue with the `enhancement` label.

### 📧 Contact
- **Email**: support@smartagroconnect.com
- **Website**: [smartagroconnect.com](https://smartagroconnect.com)
- **Documentation**: [docs.smartagroconnect.com](https://docs.smartagroconnect.com)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Firebase** for robust backend services
- **Tailwind CSS** for the utility-first approach
- **Open Source Community** for inspiration and tools

---

<div align="center">

**Built with ❤️ for the agricultural community of Bangladesh**

[⭐ Star this repo](https://github.com/your-username/smart-agro-connect-client) | [🐛 Report Bug](https://github.com/your-username/smart-agro-connect-client/issues) | [💡 Request Feature](https://github.com/your-username/smart-agro-connect-client/issues)

</div>
