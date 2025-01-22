FROM alpine:latest

RUN apk add --no-cache git bash

COPY sidecar.sh /sidecar.sh
RUN chmod +x /sidecar.sh

CMD ["bash", "/sidecar.sh"]
