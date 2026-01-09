---
---
Most of the first C++ projects I see online somehow are console-based CRUD application. My fried who
also learned C++ created this console-based CRUD application by following a tutorial, so I said to
myself why not I create one as well? What this project do is basically emulating a database, very
simple one. The challenge then is serialization, most of which are string. The reference tutorial
used fixed length string which is not very flexible. To spice things up I decided to allow the
string to have dynamic length and implemented a simple Length-Value encoding for it. This way I can
store any string of any length in the file. While the reference tutorial manipulate the file
directly when modification is done to the data, my implementation cannot because of the dynamic
length of the string. So I decided to read the whole file into memory, modify the data in memory,
then write the whole file back to the disk. This works for this small scale project and small data
size, but won't scale well for large data size. At the end of the day this is just a simple database
emulation, so it's fine.
