from node:alpine3.20

WORKDIR /apps

COPY package.json /apps/
COPY package-lock.json /apps/

RUN npm i

COPY . /apps/

EXPOSE 5173

CMD [ "npm", "run", "dev" ]