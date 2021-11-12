FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf

RUN echo TESTING 1
RUN echo TESTING 2
RUN echo TESTING 3
RUN echo TESTING 4
RUN echo TESTING new plugin with old format
RUN echo TESTING posting to multiple registries