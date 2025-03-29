# Aspect - Next.js Version

A modern magazine theme built with Next.js, TypeScript, and Tailwind CSS. This is a React version of the original Aspect Ghost theme.

## Features

- 🎨 Modern and clean design
- 🌙 Dark mode support
- 📱 Fully responsive
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 📝 MDX support for blog posts
- 🎨 Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/edisonjong/aspect.git
cd aspect
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── blog/        # Blog pages
│   ├── layout.tsx   # Root layout
│   └── page.tsx     # Home page
├── components/      # React components
├── lib/            # Utility functions
├── styles/         # Global styles
└── types/          # TypeScript types
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
