- Build: `docker build -t dnd-map-editor .`

- Start (attached): ``docker run -it -p 3000:3000 -v `pwd`/images:/usr/src/app/images -v `pwd`/saved_map:/usr/src/app/saved_map dnd-map-editor``

- Start (production only): ``docker run -d --restart always -p 80:3000 -v `pwd`/images:/usr/src/app/images -v `pwd`/saved_map:/usr/src/app/saved_map dnd-map-editor``

