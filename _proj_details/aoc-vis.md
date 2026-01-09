---
---
This one is actually part of a project. I am participating in
[Advent of Code]('https://adventofcode.com/) 2024 and I want to visualize the algorithm (working on
2D data) I used to solve the problem. I use SFML to render the visualization.

The approach to rendering the algorithm is simple. At each step I update the algorithm working on
the data, capture the state and convert them to an image data (RGB colors) then send it as Texture
to the SFML renderer. The renderer then displays the texture on the window. The visualization is
done in real-time so I can see the algorithm working on the data.
