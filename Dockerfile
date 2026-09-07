# ---- Etapa 1: build estático ----
FROM node:20-alpine AS builder
WORKDIR /app

# Instalar dependencias con cache eficiente
COPY package.json package-lock.json ./
RUN npm ci

# Copiar el resto y generar el export estático en /app/out
COPY . .
RUN npm run build

# ---- Etapa 2: servir con nginx ----
FROM nginx:1.27-alpine AS runner

# Config de nginx para SPA/estático
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el sitio estático generado
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
