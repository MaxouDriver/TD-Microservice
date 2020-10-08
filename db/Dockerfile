FROM postgres:9.4
ENV POSTGRES_DB microservice 
VOLUME ./postgres-data:/var/lib/postgresql/data
COPY create-db.sql /docker-entrypoint-initdb.d/
COPY dataset.sql /docker-entrypoint-initdb.d/