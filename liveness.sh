#!/bin/sh

STATUS_CONTENT_API=$(curl -s -o /dev/null -w '%{http_code}' $OPL_CONTENT_API_SVC_SERVICE_HOST:$OPL_CONTENT_API_SVC_SERVICE_PORT/.well-known/apollo/server-health)
STATUS_MEDIA_API=$(curl -s -o /dev/null -w '%{http_code}' $OPL_MEDIA_SERVICE_SVC_SERVICE_HOST:$OPL_MEDIA_SERVICE_SVC_SERVICE_PORT/.well-known/apollo/server-health)

if [ $STATUS_CONTENT_API -eq 200 ] && [ $STATUS_MEDIA_API -eq 200 ]
then
    exit 0
else
    exit 1
fi


