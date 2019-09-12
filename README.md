# React navigation tips

This repository contains an example project for an important tip when dealing with navigation on react native.

I implemented it on react JS for the ease of developing and showing, but the principle is the same!

The thing is: **Render a simpler version of your screen first, then load the most complex one later**

React navigation renders the screen on the background before animating. If you load your whole beautiful screen
with all the data and components in one shot when the user clicks on a TouchableOpacity, for example,
the navigation will be delayed and the user will see your component freezed.

Rendering first the header and a loading indicator is a simple but effective solution for this problem!
Even if you already have all the data available, if the second render take some time to complete,
your indicator will run smoothly until the official template finishes loading (second rendering).

I am finishing the implementation of this example and I will update it soon.

This article explains it really well and gives another trick that is not exemplified here [Fixing common performance problems in react navigation](https://novemberfive.co/blog/react-performance-navigation-animations)
