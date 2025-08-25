# actual image
FROM nginx:alpine

# copy built files to nginx
COPY . /usr/share/nginx/html
