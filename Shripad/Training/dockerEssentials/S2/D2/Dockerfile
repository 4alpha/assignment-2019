
FROM ubuntu:18.04

LABEL Creator: "SHRIPAD KSHIRSAGAR"

RUN apt-get update && apt-get install -y curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /home/Codes

ENV USER shripad 
ENV SHELL /bin/bash
ENV LOGNAME shripad

CMD ["bash"]


