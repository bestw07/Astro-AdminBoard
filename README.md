# Kavarna Grohova - CMS Admin

Payload CMS configuration for managing artists, products, and content.

## 🚀 Quick Start

### Setup

1. **Install dependencies**
   ```bash
   cd cms-admin
   yarn install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your database URL and secret
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Access admin panel**
   Open `http://localhost:3001/admin`

## 📋 Commands

| Command | Action |
|---------|--------|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn start` | Start production server |
| `yarn payload:generate` | Generate TypeScript types |

## 🗂️ Collections

### **Artists**
- Name, bio, image, social links
- Genres/tags for categorization
- SEO metadata

### **Products**
- Name, description, price
- Artist association
- Product type (Káva/Ceramika)
- Image gallery (main + up to 4)
- Stock and availability

### **Media**
- Image upload with focal point
- Automatic thumbnail generation
- Alt text for accessibility

### **Users**
- Admin authentication
- Role-based permissions

## 🎨 Features

- **Rich Text Editor**: Lexical editor with formatting
- **Image Management**: Drag & drop with cropping
- **Relationships**: Link products to artists
- **Validation**: Form validation and data types

## 🔧 Configuration

### Environment Variables
```env
DATABASE_URL=postgresql://username:password@localhost:5432/kavarna_grohova
PAYLOAD_SECRET=your-secret-key
NODE_ENV=development
PORT=3001
```

### Database
- **PostgreSQL**: Primary database
- **Migrations**: Schema versioning
- **Seeds**: Initial data population

## 🚀 Deployment

### Production
```bash
yarn build
yarn start
```

### Docker
```bash
docker build -t kavarna-grohova-cms .
docker run -p 3001:3001 kavarna-grohova-cms
```

## 📞 Support

- [Payload CMS Docs](https://payloadcms.com/docs)
- [Payload Examples](https://github.com/payloadcms/payload/tree/main/examples)

---

**Powerful content management for Kavarna Grohova!** ☕🏺
