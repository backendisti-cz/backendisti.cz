# Build CKR-2017
FROM alpine:latest

COPY requirements.txt /tmp/requirements.txt

RUN apk add --no-cache make nodejs nodejs-npm pcre python3 \
    && apk add --no-cache --virtual .build-deps alpine-sdk python3-dev linux-headers pcre-dev \
    && python3 -m ensurepip \
    && pip3 install --upgrade pip setuptools \
    && pip3 install --no-cache-dir -r /tmp/requirements.txt \
    && npm install -g stylus \
    && apk del .build-deps

EXPOSE 5000

#&& pip3 install --no-cache-dir uWSGI \
