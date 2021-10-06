FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf

RUN echo TESTING
RUN echo TESTING 2
RUN echo TESTING 3