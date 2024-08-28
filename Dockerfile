FROM node:22-alpine3.19

WORKDIR /app

CMD ["npm", "install"]
CMD ["npm", "run", "watch"]