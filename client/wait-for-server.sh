#!/bin/sh

set -e

until curl --silent -X GET http://server:3001/api/health ; do
  echo "Waiting server container ready"
  sleep 1
done

exec "$@"