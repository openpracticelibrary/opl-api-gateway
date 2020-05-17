# --------------------------------------------------------
#  THIS IS ONLY INTENDED TO BE USED FOR LOCAL DEVELOPMENT |
# --------------------------------------------------------

start:
	@ENVIRONMENT=local \
	CONTENT_API_ENDPOINT="http://localhost:1337/graphql" \
	VERSIONING_API_ENDPOINT="" \
	MEDIA_API_ENDPOINT="http://localhost:4002/graphql" \
	node gateway.js

dockerbuild:
	docker build -t opl-api-gateway .

dockerstart:
	docker start -d --rm \
	-p 5000:5000 \
	--net=host \
	-e CONTENT_API_ENDPOINT="http://localhost:1337/graphql" \
	-e VERSIONING_API_ENDPOINT="" \
	-e MEDIA_API_ENDPOINT="http://localhost:4002/graphql" \
	--name opl-api-gateway \
	opl-api-gateway

dockerstop:
	docker stop opl-api-gateway

podmanbuild:
	echo "Make doesn't check aliases to docker if you use podman that way" && \
	podman build -t opl-api-gateway .

podmanstart:
	podman run -d --rm \
	-p 5000:5000 \
	--net=host \
	-e CONTENT_API_ENDPOINT="http://localhost:1337/graphql" \
	-e VERSIONING_API_ENDPOINT="" \
	-e MEDIA_API_ENDPOINT="http://localhost:4002/graphql" \
	--name opl-api-gateway \
	opl-api-gateway

podmanstop:
	podman stop opl-api-gateway
