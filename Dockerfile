FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]


ARG BUILD_DATE
ARG VCS_REF
ARG VERSION

LABEL org.opencontainers.image.created=$BUILD_DATE \
org.opencontainers.image.authors="Dmitry Trosman <mailto:dmatik@gmail.com>" \
org.opencontainers.image.url="https://hub.docker.com/r/dmatik/oref-alerts" \
org.opencontainers.image.documentation="https://dmatik.github.io/docs/oref_alerts" \
org.opencontainers.image.source="https://github.com/dmatik/orefAlerts" \
org.opencontainers.image.version=$VERSION \
org.opencontainers.image.revision=$VCS_REF \
org.opencontainers.image.vendor="https://www.oref.org.il/" \
org.opencontainers.image.licenses="Apache-2.0" \
org.opencontainers.image.ref.name=$VERSION \
org.opencontainers.image.title="dmatik/oref-alerts" \
org.opencontainers.image.description="Node.js RESTful API to retrieve Israeli Pikud Ha-Oref so called Red Color alerts"