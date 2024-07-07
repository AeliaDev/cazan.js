# Setup

## Function

### ``setup(canvasSelector: string, context: string, fps?: number): Promise<Game | ContextNotFoundException>``

Generates a ``Game`` entity and fetch the configuration file to set up Cazan.

You must provide a:

- ``canvasSelector``: string, it's the query selector of the canvas.

- ``context``: it serves to define which context your game will use (e.g: "2d", by the way it's the only context
  available yet)

- ``fps``: number (optional)

It will return the ``Game`` instance created.

