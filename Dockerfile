# ---------------------------------------------------------------
# Multi-stage build for fashionista-page (Vite + React + TypeScript)
# Stage 1: Build static assets with Node
# Stage 2: Serve with nginx (SPA fallback for client-side routing)
# ---------------------------------------------------------------

# ---- Stage 1: Build ----
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ---- Stage 2: Serve with nginx ----
FROM nginx:1.27-alpine AS serve

# Custom nginx config (SPA fallback + static asset caching)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets into nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
