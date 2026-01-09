---
---
To test out C++ compile-time capabilities, I decided to create a library that obfuscates string
literals at compile-time. This library is very simple, but very much customizable. One can customize
the obfuscator to xor the string with a key, or to encrypt the string with a cipher, or to do
anything with the string as long as it is done at compile-time. The obfuscated string are then can
only be read by deobfuscating the string in runtime which incur a runtime cost, albeit very small
(creating a wrapper that caches the deobfuscated string is a great idea to alleviate this).
