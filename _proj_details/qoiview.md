---
---
Out of frustation of me unable to view qoi image using feh (without conversion first, which is slow)
and imv (no support for qoi), I decided to create a simple qoi image viewer. The viewer can do
zooming, panning, and filtering on the image displayed. It is familiar enough for imv user since it
uses familiar keybinds for the actions. The viewer is created using GLFW and OpenGL to render the
image. The image is rendered using a single quad that is textured with the qoi image data. The image
data is decoded using my own qoipp library.

_Apparently, cloc measure the codebase to be only about 600 lines of C++ code!_
