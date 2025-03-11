FROM node:latest

ADD ./package.json package.json
RUN npm install

EXPOSE 7000 7000

# ADD ./node_modules node_modules
ADD ./lib lib
ADD ./views views
ADD ./app.js app.js
ADD ./config.js config.js
ADD ./idp-public-cert.pem idp-public-cert.pem
ADD ./idp-private-key.pem idp-private-key.pem
ADD ./public public

ENTRYPOINT [ "node", "app.js", "--acs", "http://localhost:8080/saml2/acs", "--aud", "http://devops-testing-master01.int.hyperscience.com/", "--host", "0.0.0.0" ]