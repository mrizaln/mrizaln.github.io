---
---
At the end of a [YouTube video](https://www.youtube.com/watch?v=EFUYNoFRHQI) about PNG and how it
works, the creator of said video mentioned an alternative image format called
[QOI](https://qoiformat.org) which was created by a single person. Unlike PNG which was a very
complex mechanism of image lossless compression, QOI was a very simple format which was very
surprising since the compression rate is comparable to PNG! Intrigued by this, I decided to
implement a codec for this format in C++ by following the
[specificiation](https://qoiformat.org/qoi-specification.pdf) (just one page, how simple is that!)
directly.
