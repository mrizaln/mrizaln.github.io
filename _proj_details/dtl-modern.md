---
---
There is no good diff library in C++. I found one, but it has very old API design, philosophy and
inflexible in general. This one is a direct fork of said library,
[dtl](https://github.com/cubicdaiya/dtl). This fork aims to modernize the library by refactoring the
code, adding more features, and making the API more flexible and modern (C++20 ranges support). The
library is used to compare two sequences and produce a diff of the two sequences, of any type as
long as you provide a comparator for them.

Really the reason I forked and modernize the library is to have an easy to use pretty diff printer
on test output on my projects :D.
