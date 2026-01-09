---
---
madbfs (Modern adb Filesystem, formerly adbfsm) is a userspace filesystem for Android via adb built
using libfuse. It focuses on being fast, reliable, and safe, with straightforward, well-structured
code that follows modern C++ practices.

I want to manage my Android phone storage from my computer without using MTP (it's awful).

This project is inspired by the [adbfs-rootless](https://github.com/spion/adbfs-rootless) project.
While adbfs-rootless works most of the time under light load it has reliability issues. Under high
load (such as when a thumbnailer service is running) adbfs-rootless tends to crash, making it
unusable until it is forcefully unmounted and its cache cleaned.

The file I/O approach of adbfs-rootless is also similar to that of MTP, in which each file is first
pulled from device (using adb pull) before any operations like reading and writing performed. If a
write operation is performed, the file is then pushed back into the device (using adb push). This
approach limits the size of the file that can be handled before the cache is filled (it uses /tmp).,
