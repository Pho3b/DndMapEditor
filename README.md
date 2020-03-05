Build: `docker build -t dnd-map-editor .`
Avvio: ``docker run -it -p 3000:3000 -v `pwd`/images:/usr/src/app/images -v `pwd`/saved_map:/usr/src/app/saved_map dnd-map-editor``

