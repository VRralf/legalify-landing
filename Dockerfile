FROM node:16-alpine AS build
LABEL manteiner = 'SolveTechEC' \
      version = "v1.0"
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .

ARG DOMAIN_URL=https://login.legalify-app.com
RUN DOMAIN_URL_=$(echo "${DOMAIN_URL}" | sed -r 's/\//\\\//g'); FILE_TMP=$(mktemp); echo ${DOMAIN_URL_} > $FILE_TMP; cat $FILE_TMP; sed -ie "/NEXT_PUBLIC_URL_APP=/ s/=.*/=${DOMAIN_URL_}/" .env

RUN npm --legacy-peer-deps install
RUN npm run build-static

FROM nginx:1.21.5-alpine
RUN rm -rf /usr/share/nginx/html/*

ENV TZ=America/Argentina/Buenos_Aires
ARG URL_SUPERVIELLE="https://onboardingnegocios.supervielle.com.ar/?utm_source=legalify-mail\&utm_medium=off\&utm_campaign=empresas_display_performance_conversiones_prospecting_null_linea-express\&utm_content=linea-express_\&utm_term=null\&deal=legalify-mail"
ARG URL_TRIBUTOSIMPLE="https://tributosimple.com/legalify"
RUN sed -i 's#^}$#    location = \/aliados\/supervielle { \n        return 301 '$URL_SUPERVIELLE';\n    }\n}#g' /etc/nginx/conf.d/default.conf
RUN sed -i 's#^}$#    location = \/aliados\/tributoSimple { \n        return 301 '$URL_TRIBUTOSIMPLE';\n    }\n}#g' /etc/nginx/conf.d/default.conf

COPY --from=build --chown=nginx:nginx /app/out /usr/share/nginx/html
