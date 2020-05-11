# --------------------------------------------------------
#  THIS IS ONLY INTENDED TO BE USED FOR LOCAL DEVELOPMENT |
# --------------------------------------------------------

start:
	@ENVIRONMENT=local \
	CONTENT_API_ENDPOINT="http://localhost:1337/graphql" \
	VERSIONING_API_ENDPOINT="" \
	MEDIA_API_ENDPOINT="http://localhost:4002/graphql" \
	node gateway.js

