---
---
It's not uncommon to want to create a generator for a particular task and stop when some condition
is met. This library attempts to provide wrappers for input range/generator pattern, as describe
previously that are compatible with range-based for loop and the C++20 ranges library. Creating the
wrapper yourself is tedious due to the amount of boilerplate required and is error-prone, so
providing an easy to use wrapper for this pattern is the main motivation of creating this library.
This library kinda does the same thing what generator does but without coroutine. If you have access
to that then you should use that one, otherwise this library is very handy.
