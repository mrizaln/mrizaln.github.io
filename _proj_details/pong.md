---
---
This project comes into existence from me watching a
[talk](https://www.youtube.com/watch?v=8U3hl8XMm8c) from Herb Sutter about Cppfront and C++ syntax
2.0. This technology allows the developer to generate (transpile to) C++ code from a higher level
language which I will call C++2. Just for fun I tried to use this language which pretty much feels
like C++ (value semantics, RAII) but with better syntax (C++2 aims to have a unified syntax for all
the declaration, from variables, functions, closures, classes, namespaces, all of them).

In order for me to try the language effectively, I decided to try making a game in this case Pong
since it seems to be easy to implement. The game is created with the help of SFML which was the
first time I use it. It was fairly easy to use using its built-in primitive renderable objects.
Since it's a pong, a collision logic also implemented.
