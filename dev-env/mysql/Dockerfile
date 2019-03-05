FROM mysql:5.6

# copy sql scripts to build the database, insert the data and create the app user
COPY assets/*.sql /docker-entrypoint-initdb.d/
