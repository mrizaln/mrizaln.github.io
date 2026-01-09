---
---
Entity Component System (ECS) is a programming technique that is on the rise in the game development
community. ECS promises games to have better performance when working with large number of entities
if it was implemented in it. I implemented this ECS using very modern C++ (C++23) which allows me to
try different approach from the [reference](https://austinmorlan.com/posts/entity_component_system/)
I'm using to implement this project. My implementation uses a templated classes to generate the ECS
setup so I can expand it without much of a hassle. On this occasion I learned so much about template
metaprogramming that allows this approach to be viable.
