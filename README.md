# Education-Super-Highway-assessment

## Prequisites
- Mapbox API key (can obtain by registering account on https://docs.mapbox.com/)

## Instructions
1. Clone this repository (develop is the branch with the most recent updates)
2. Open the project in code editor of choice
3. Create a .env file and include your API key. (Refer to .env.sample file for reference)
4. In your terminal, run `npm install` at the root level
5. Run `nodemon index.js` to start the server
6. In the client directory of the project, run `npm install` again for the client side dependencies
7. Run `npm run start` to start the React client
8. On your browser, navigate to localhost:3000

## Notes
- You can type addresses into the input field and press 'Enter' or click on 'Add Address' to create a list of addresses to search on.
- You can remove addresses you've added as needed.
- When ready, click 'Get Coordinates' to get the longitude and latitude for the addresses specified.

## Changes I'd like to make if there was more time:
- Error handling
- Add more comments in codebase to improve readability
- Refactoring frontend (component-ize elements such as the address list)
- Explore more with the MapBox API
