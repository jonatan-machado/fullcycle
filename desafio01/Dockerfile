FROM golang:latest as build-stage
WORKDIR /src
COPY codejonatan.go .
RUN go build codejonatan.go


FROM scratch  as production-stage
WORKDIR /root/
COPY --from=build-stage /src/codejonatan .
CMD [ "./jonatan" ]
