---
---
There is no de facto circular buffer library that is freestanding. The most used one is in Boost
which is a large library that I prefer not to use. I am in need of such data structure with good
interface and this this library is created. The main features of the library includes but not
limited to dynamic capacity, STL-compatibile including iterator support, and random access. At the
moment this library is slower than the boost library but I intend to optimize it.
