
## Nodejs app

A Dungeons and Dragons map editor running on Node v12.15.0

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone https://github.com/Pho3b/DndMapEditor.git
cd DndMapEditor
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Docker based installation
- Build: `docker build -t dnd-map-editor .`

- Start (attached): ``docker run -it -p 3000:3000 -v `pwd`/images:/usr/src/app/images -v `pwd`/saved_map:/usr/src/app/saved_map dnd-map-editor``

- Start (production only): ``docker run -d --restart always -p 80:3000 -v `pwd`/images:/usr/src/app/images -v `pwd`/saved_map:/usr/src/app/saved_map dnd-map-editor``

