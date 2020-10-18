---
id: sprite_and_2d_graphics
title: Sprite and 2D Graphics
---

## Initial setup


## Show Me Something on Screen
In Chapter 1,“Getting Started,” you spent some time creating projects and saw them run with nothing showing except a solid colored background. Let’s expand on those projects and show new and hopefully interesting things instead! Start by creating a new game project in Visual Studio and add a new variable to the list of variables the project already has defined, as shown in the following:

```csharp
GraphicsDeviceManager _graphics;
SpriteBatch _spriteBatch;
Texture2D _texture;
```

`Texture2D` is a class that holds any images you might want to render on screen. In later chapters, you see how this is also used to give detail to 3D models, but for now, it is simply a data store for the image we want to show in our game.Also notice the other two variables declared by default, namely the `SpriteBatch` and `GraphicsDeviceManager`.
The `GraphicsDeviceManager` is discussed in more detail in later chapters, but the `SpriteBatch` object is what you use to do the actual rendering. This object is discussed in depth throughout this chapter, but before you learn about the intricacies of rendering 2D objects, first, you shouls just get something showing on the screen.

You need an image to draw to the screen. In your Visual Studio solution, notice that you have two projects: your code project where your game is and a content project next
to it.This content project is where you add the images you want to draw and it is discussed in more detail in later chapters. Right-click your content project now, and then
choose Add->New Item. Feel free to pick an image for your computer (ensure the image is a common image format such as jpg, bmp, png, or gif), or use one from the downloadable examples.The example included with the downloadable examples uses the file glacier.jpg, which is used in some of the samples you can download for Game Studio 4.0.

>Content Item Properties
Selecting an item in a content project (such as the image you just added) and viewing its
properties show you many different options depending on the type of item you have
selected. For now, the only one that is important is Asset Name, which, by default, is the
name of the file you’ve added to the content project without the extension. In the case of
the code in the downloadable examples, it is glacier. The other properties are explained in
more detail in later chapters.

Getting something on screen is remarkably easy from here. First, you need to scroll
through your project’s game1.cs file and find the LoadContent method.As the name
implies, this is where you load the content for your game, so add the following line of
code to that method:

```csharp
texture = Content.Load<Texture2D>("glacier");
```

If you used a different image other than the glacier image this example uses, you need
to enter that filename (without the extension) instead.This takes the image data from your
picture and loads it into the Texture2D object you specified.The Content object is an
instance of the ContentManager, which was automatically created by the new project.
Again, the content manager is discussed in more depth later, but for now, it is the thing
that loads your content.
All that is left is to draw your image on the screen. Look through your project to find
the Draw method and replace the method body with the following code:

```csharp
GraphicsDevice.Clear(Color.CornflowerBlue);
spriteBatch.Begin();
spriteBatch.Draw(texture, GraphicsDevice.Viewport.Bounds, Color.White);
spriteBatch.End();
base.Draw(gameTime);
```

The first and last lines are the same as what is already in your project, whereas the middle three lines are where the actual drawing of your image is. Run the project and you
should see an image similar to the one shown in Figure 2.2 if you used the glacier image provided with the downloadable examples or an image you chose that covered the entire
window if you did not use the glacier image.

A theme you will notice throughout this book is how easy it is to do simple operations
using Game Studio 4.0.This is an example of this simplicity.With a mere five lines of
code, you’ve done more work than you probably realize, rendering your image on to the
screen.With the instant gratification of seeing something, now it’s time to take a step back
and see what has gone into rendering this picture.

## Spritebatch
When you first create a new project, a SpriteBatch object is declared and instantiated in
the LoadContent method.This is the main object used to render 2D graphics, and virtually
all games (even full 3D games) need to render 2D graphics at some time.This object can
be used to draw a single sprite like you just did, or it can draw many sprites with a wide
variety of options that can be used to control exactly how you want your images drawn.

## Drawing
First, let’s look at the Draw method, which is the one that actually got the picture on to
the screen:

```csharp
spriteBatch.Draw(texture, GraphicsDevice.Viewport.Bounds, Color.White);
```

[Artwork created by Luis Zuno (@ansimuz)](http://ansimuz.com/site/)
[Artwork created by Trixie](https://trixelized.itch.io/)

This is only one overload of the Draw method (there are seven total), but it is one of the
simplest.The first parameter is obvious—what texture do you want to draw? In the project

earlier, you loaded your image into this texture, so that is what is rendered on the screen.
This is one of the two parameters required and it is in every overload for the Draw method.
The other nonoptional parameter to Draw is the last one in the call, the color.This is
the color your image is “tinted” with (in actuality, it is the color of each pixel in your
image multiplied by the color specified, which is discussed later). Passing in Color.White,
as done here, causes your image to appear with the same colors as the original image,
whereas passing in Color.Black causes the image to be replaced by solid black. If you
change this to Color.Red, and you will notice that the image is now tinted red. In many
cases, you can simply leave this Color.White.
The middle parameter in the Draw call is the destination rectangle.As the name
implies, it is the rectangle where you want the drawing to occur (hence, the destination).
This rectangle is specified in screen coordinates where 0,0 is the upper left corner of the
rendering area, which in this case is the window.When in full-screen mode, it is the upper
left corner of the monitor as mentioned earlier.The destination rectangle is useful because
if the image you are drawing isn’t the exact size of the rectangle you’re drawing, it automatically stretches or shrinks to fit exactly in that area.
In this case, the destination rectangle is calculated using a property of the
GraphicsDevice object.The GraphicsDevice is the object that encapsulates the portions
of the graphics card you can control, whereas the Viewport property contains information about where the device renders to on the screen.You used the Bounds property
because it returns the rectangle that encompasses the entire rendering area, which is why
the image you chose covers the entire window, regardless of what size it was originally
when it was loaded.

:::note
The GraphicsDevice object and its properties are discussed in depth in Chapter 3, “The
Game Object and the Default Game Loop.
:::

Before we look at other methods used on the sprite batch, let’s look at the more overloads for drawing images on the screen. In your project, right-click the content project
and add a reference to cat.jpg, which you can find in the downloadable examples.Anyone familiar with many of the samples that are available for Game Studio realizes that cats
appear all over the samples.This one, however, is a different cat—it is my own. He is a little bit camera shy though, so please be gentle with him.
Change the code that loaded the previous image to load the cat image, as the following:

```csharp
texture = Content.Load<Texture2D>("cat");
```

This image is 256×256 pixels, and your window by default is 800×480 pixels. Running
the project right now shows you a stretched version of the cat covering the entire rendering surface, much like you saw earlier. Now change the Draw method to the following:

```csharp
spriteBatch.Draw(texture, Vector2.Zero, Color.White);
```

Notice that a different parameter of type Vector2 replaced the destination rectangle.
Like the name implies, Vector2.Zero returns a vector with both the X and Y value as
zero.The new parameter, called the position, tells the sprite batch where to begin drawing, so the upper left pixel of the image draws at the spot specified by this parameter (in
this case 0,0, or the upper, left corner of the rendering area).

:::note
The Vector2 class is a value type used to store two-dimensional coordinates, namely an X
and Y value.
:::

Using this overload and specifying a position means that no stretching of the image
occurs; it renders whatever size the source image actually is. Run the application and
notice that the cat is now in the upper, left corner of the window, but there are large areas
of empty background everywhere else.To render the cat in the center of the window,
modify the Draw call as follows:

```csharp
spriteBatch.Draw(texture,
new Vector2((GraphicsDevice.Viewport.Width-texture.Width)/2,
(GraphicsDevice.Viewport.Height - texture.Height) / 2), Color.White);
```

This combines information from the Viewport, along with information about the texture to properly position the image in the center of the window as in Figure 2.3. It still
isn’t exciting though because it is a static image that doesn’t do anything.

Notice that the two overloads so far do remarkably similar things.They both draw an
image to a particular place on the screen of a particular size.The only difference between
them is the one with the destination rectangle requires you to specify a width, a height,
and a position.As a matter of fact, these three lines produce the same results.

```csharp
spriteBatch.Draw(texture, Vector2.Zero, Color.White);
spriteBatch.Draw(texture, new Rectangle(0,
0, texture.Width, texture.Height), Color.White);
```