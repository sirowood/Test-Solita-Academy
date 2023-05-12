# From https://docs.docker.com/compose/startup-order/
#!/bin/sh
# wait-for-postgres.sh

set -e
  
host="$1"
user="$2"
db="$3"
# Shift arguments with mapping:
# - $0 => $0
# - $1 => <discarded>
# - $2 => $1
# - $3 => $2
# - ...
# This is done for `exec "$@"` below to work correctly
shift
shift
shift
  
# Login for user (`-U`) and once logged in execute quit ( `-c \q` )
# If we can not login sleep for 1 sec
until PGPASSWORD=password psql -h "$host" -U "$user" -d $db -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "Postgres is up - executing command"
# Print and execute all other arguments starting with `$1`
# So `exec "$1" "$2" "$3" ...`
exec "$@"