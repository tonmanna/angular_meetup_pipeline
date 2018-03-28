FROM node:alpine

LABEL IT_TEAM="it@itopplus.com"
EXPOSE 3000

ENV INSTALL_PATH /project
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

ADD . $INSTALL_PATH
RUN chmod 755 *.sh
RUN npm install
CMD ["./startscript.sh"]