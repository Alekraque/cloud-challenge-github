FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY server.js .

USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --retries=5 CMD wget -qO- http://localhost:8080/health || exit 1
CMD ["npm", "start"]