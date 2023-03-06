#!/bin/bash

for i in {1..5}
do
  sudo docker-compose run --rm my-sqs-consumer npm run write
  sudo docker-compose run --rm my-sqs-consumer npm run write
  sudo docker-compose run --rm my-sqs-consumer npm run write
  sudo docker-compose run --rm my-sqs-consumer npm run write
  sudo docker-compose run --rm my-sqs-consumer npm run write
done
