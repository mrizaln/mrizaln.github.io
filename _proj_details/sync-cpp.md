---
---
C++ synchronization primitives are weird. Instead of protecting data from being accessed/modified by
multiple threads at the same time, it protects a block of code from being ran by multiple threads at
the same time. This is very error prone, since often times in a block of code you access/modify
multiple data at the same time on which you might forget to lock the mutex, or worse locking wrong
mutex. The fact that the data that needs protection and mutex used to protect the data are separated
make this kind of error easy to perform. This library fixed the aforementioned issue by tying the
mutex to the data that needs protection directly by wrapping both of them in a single wrapper. Every
access/modification to the data can only be carried by the function provided by the wrapper through
a lambda, function pointer, or member function pointer of the data. This way, the data is always
protected by the mutex. At the moment there is no way to lock multiple data at the same time, but I
plan to implement it in the future.
