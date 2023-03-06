# get the official nodejs container image from docker hub
FROM node:16
# set app work directory
WORKDIR /usr/src/app

EXPOSE 9324

#copy all files
COPY . .

CMD [ "npm", "start" ]
