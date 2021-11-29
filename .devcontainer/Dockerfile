FROM alpine:3.15

RUN apk update \
    apk add --no-cache --virtual .build-deps bash wget gcc musl-dev openssl go \
    cd /tmp \
    wget https://dl.google.com/go/go1.17.3.src.tar.gz \
    tar -C /usr/local -vxzf go1.17.3.linux-amd64.tar.gz \
    cd /usr/local/go/src \
    ./make.bash \
    apk del .build-deps \
    apk add bash \
    rm /tmp/go1.17.3.src.tar.gz

ENV PATH $PATH:/usr/local/go/bin
ENV GOPATH $HOME/go

CMD /bin/bash
