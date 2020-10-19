---
id: mg-changing-the-window-size
title: Changing The Window Size
---

[http://rbwhitaker.wikidot.com/changing-the-window-size](http://rbwhitaker.wikidot.com/changing-the-window-size)

## Introduction
By default, the window that comes up in XNA is `800 x 480` pixels. That is often a fairly good size, but not always. In this tutorial, we will see how easy it is to change the default window size for your game.

## Changing the Window Size
Changing the window size is extremely easy. It is really only three lines of code. Go to the constructor of your game (probably called `Game1()`) and add the following code, at any point after the graphics object is created (after the line that says`graphics = new GraphicsDeviceManager(this);'):

```csharp
graphics.PreferredBackBufferWidth = 100;  // set this value to the desired width of your window
graphics.PreferredBackBufferHeight = 500;   // set this value to the desired height of your window
graphics.ApplyChanges();
```

You can now run your game and see that your window is the size that you want.

You should be able to place this code just about anywhere in your game that has access to the graphics object, so you can change the size of your game on a settings screen using this same approach.

## Making the Game Window Size Match the Current Monitor Resolution
In a Windows-based game, if you want to run in full screen mode, you will likely want to make the window size be the same size as the monitor resolution.

There's any easy way to do this. The `GraphicsDevice` has a reference to something called the `DisplayMode`. The `DisplayMod`e` knows how big your monitor is, so you can use that information to appropriately set the size of your game window, as you go into full screen mode:

```csharp
graphics.PreferredBackBufferWidth = GraphicsDevice.DisplayMode.Width;
graphics.PreferredBackBufferHeight = GraphicsDevice.DisplayMode.Height;
graphics.IsFullScreen = true;
graphics.ApplyChanges();
```

## A Note on Screen Sizes
Not all screen sizes will work on the XBox 360. Unlike Windows, the XBox has to draw your game full screen. Be sure to pick a size that will work and look nice on the XBox.

I remember Microsoft recommending `1280x720 (HD 720)` for most XNA games, because the Xbox 360 can typically resample to any other smaller TV resolution, for most TVs, so that is probably a good choice.

## Conclusion
We've now seen how to change the size of your window. This tutorial doesn't lead to anything particular, but you might want to check out the tutorial about running your game in Full Screen Mode.