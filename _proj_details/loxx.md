---
---
Programming language is a very interesting topic for me. I have always wanted to create my own
language interpreter/compiler. This project is my attempt at creating an interpreter for a language
called Lox. Lox is a very simple language created by
[Bob Nystrom](https://craftinginterpreters.com/) in his book _Crafting Interpreters_. The
interpreter is implemented in Rust just because. The interpreter is implemented in a very simple
way, it lexes the input, parses the tokens, and interprets the AST. The interpreter is very simple
and does not have any optimization.

At the moment I have only implemented a Treewalk Interpreter whith reference counting (Rust's Rc) as
the garbage collection mechanism. In the future I plan on implementing a bytecode interpreter with
the garbage collection implemented manually in the Rust code.
