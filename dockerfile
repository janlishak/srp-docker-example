FROM nginx:latest
LABEL org.opencontainers.image.source=https://github.com/janlishak/srp-docker-example
RUN echo TESTING 1
RUN echo TESTING 2
RUN echo TESTING 3
RUN echo TESTING 4
RUN echo TESTING new plugin with old format
RUN echo TESTING posting to multiple registries
RUN echo this is new version, yes
COPY localfile.txt /containerpath/file.txt
