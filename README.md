# AlphaGardenWebApp
A web-app built for displaying the AlphaGarden research. 

Flask Server [API](https://github.com/MarkSelden/AlphaGardenWebApp/blob/Backend/alpha-garden/modules/app/controllers/plants.py):
- CRUD plants (requires a location in pixels ['x_y' string format], radius [string], plant type [string], partition number [integer])

To start the server, run `docker-compose up --build` in the [alpha-garden](https://github.com/MarkSelden/AlphaGardenWebApp/tree/Backend/alpha-garden) directory.

If you wish to interact with MongoDB outside of the API and from the command line, start docker then run the following in a separate terminal.
1. `docker exec -it mongodb bash`
2. `mongo`
3. `use alphagarden`