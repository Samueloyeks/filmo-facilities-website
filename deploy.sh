# Install Dependencies
npm install --only=prod

# Fix audit dependencies
npm audit fix

# Build app for production
npm run build