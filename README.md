# Frontend CRUD

### Learning Objectives
- Use a client library from the browser to send HTTP requests to a local REST API
- Explain and use the Fetch API to consume data from an API and update the DOM
- Explain and apply the CRUD pattern in a simple frontend app


### Quickstart
Fork and clone this repository to your local machine
```sh
$ git clone git@github.com:[username]/js-dom-pokemon-crud.git && cd js-dom-pokemon-crud
$ npm ci # to install dependencies
$ npx json-server db.json # run the local api
# serve your index.html and then navigate to it in your browser
```

### Standard Criteria
We should be able to:

- Show all existing pokemon when the page loads (GET) -- DONE
- Add a new pokemon (POST) -- DONE
- Allow users to delete a pokemon (DELETE) -- DONE
- Allow users to like a pokemon (PATCH) 
