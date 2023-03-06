## Install Dependency

```
sh npm.sh npm install
```

## Running the consumer

To run the consumer run the following commands

```
docker-compose pull
```

```
docker-compose build --force-rm --pull
```

```
docker-compose up
```

## pushing a message to queue for testing

```
docker-compose run --rm my-sqs-consumer npm run write -- '{"first_name":"Dani","last_name":"marques","love_to":"programming"}'
```
