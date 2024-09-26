



#FROM node:lts
FROM node:alpine

WORKDIR /app
COPY package.json package-lock.json ./
COPY app ./app
RUN npm install
EXPOSE 5000
CMD [ "npm", "start"]
#CMD node /app/app
#CMD exec /bin/bash -c "trap : TERM INT; sleep infinity & wait"











