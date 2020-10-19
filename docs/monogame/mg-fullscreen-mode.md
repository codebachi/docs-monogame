---
id: mg-fullscreen-mode
title: Fullscreen
---

[http://rbwhitaker.wikidot.com/full-screen-mode](http://rbwhitaker.wikidot.com/full-screen-mode)

## Introduction
All nice games run in full screen mode. Full screen mode is where your game takes up the entire screen. You don't see the frame around the window, or the Start menu, or the system tray. It can really help immerse the player in the game because the game is the only thing they can see. In this tutorial, we will see how to run your game in full screen mode.

Closing the Program in Full Screen Mode
Before we put our program into full screen mode, make sure you have a way to exit your game. If you are running your game on the XBox, the standard game template has already built in the functionality to press the Back button and quit the game. If you are running on Windows, and you don't have an XBox controller plugged in, you might run into trouble. The little 'X' in the corner won't be around in full screen mode. So to deal with this small problem, let's add the following code to our Update() method:

```csharp
if(Keyboard.GetState().IsKeyDown(Keys.Escape))
    this.Exit();
```

If you've looked at the Basic Keyboard Input tutorial, you will know exactly what this does. If not, just put it in - this makes it so you can press Escape and quit the program.

Running in Full Screen Mode
Running the program in full screen mode is very simple. All we need to do is add one line of code to tell the graphics device we want the whole screen. Look in your game class for the constructor of your game. It should look something like the code below:

```csharp
public Game1()
{
    graphics = new GraphicsDeviceManager(this);
    Content.RootDirectory = "Content";
}
```

Yours might be a different name, instead of Game1(), if you have named your game something else.

We just want to add the following two lines of code to this method (or really anywhere in this class, but this is a good spot for it):

```csharp
graphics.IsFullScreen = true;
graphics.ApplyChanges();
```

You can now run your program in full screen mode!

## Conclusion
Running your game in full screen mode can add a lot to your game. An it is very simple to do. Full screen mode does not really lead to any more advanced techniques or tutorials, but you might also find the tutorial about Console Windows in XNA useful. It can be found from the Extra XNA tutorials page.