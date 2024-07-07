# Configuration

The configuration file of a project permits to tell Cazan to do things that you want to be done, to specify which plugins do you use or sign your app.

!!!warning
    This is only a prototype yet. Things could evolve.

## App data

### name

The name of the game.

### version

The version of your game that the user actually uses.

### author

The name of the developers of the game.

## App settings

### useAutoplayForMultimedia (optional)

If your app needs to play audios or videos automatically (after the load of the page), you need to enable this setting.

Some browsers need permissions to do that, like Mozilla Firefox and derivatives.

### plugins (optional)

Contains the list of plugins used, on this format:

- name

- version (optional, required if the plugin is available for everyone)

- path (optional, required if it's a non-published or custom plugin)
