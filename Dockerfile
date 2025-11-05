FROM node:22.12.0

WORKDIR /app

# Geri kalan her şeyi kopyala ve build al
COPY . .

CMD ["npm","run", "start"]