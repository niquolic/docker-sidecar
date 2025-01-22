FROM alpine:latest

# Installer git et bash
RUN apk add --no-cache git bash

# Ajouter un script shell pour pull les mises à jour toutes les 10 secondes
COPY sidecar.sh /sidecar.sh
RUN chmod +x /sidecar.sh

# Exécuter le script shell au démarrage
CMD ["bash", "/sidecar.sh"]
