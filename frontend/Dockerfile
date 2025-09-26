FROM node:18.20

WORKDIR /container-frontend

COPY package*.json .
RUN rm -rf node_modules package-lock.json \
    && npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]