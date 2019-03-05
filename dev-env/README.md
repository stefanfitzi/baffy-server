# baffy dockerized development environment

##Overview
This module creates and starts a minimal local environment (only the mysql application database). 

##Customize for your machine
There is no customization needed.

##Create and run the database for the local development
Start the database with a few simple commands:

    cd PROJECT_DIRECTORY/dev-env

    docker-compose down
    docker-compose build
    docker-compose up

Give it **about 10 seconds to startup the mysql database**
After the database Docker container started up, start the baffy server with following commands

    cd PROJECT_DIRECTORY
    node server.js
    
the REST service is available on [http://localhost:49999/member](http://localhost:49999/member) etc.


##In-detail documentation - how to work with the Docker containers

###MySQL Docker container
The MySQL Docker container provides the application database with a user 'bafapp' and password 'bafapp'

####Using the database client
You probably have some tools (like MySQL workbench) on your developer machine to examine the database. For that reason the
database is mapped to the host port 13306. Just connect to localhost on port 13306 with user bafapp and password bafapp.
