---
---
Julia Set is similar to Mandelbrot in that it shows _pretty images_ (what a shallow understanding,
haha). The similarity of Julia Set and Mandelbrot Set lies in the equation that produces the set,
both uses the same equation but different variable. Since the Mandelbrot Set and Julia Set are
related, this renderer also draws the Mandelbrot in the background. If the point in which the Julia
Set is evaluated lies inside the Mandelbrot Set (white), the Julia Set will be connected, otherwise
the Julia Set will be disconnected.

Unlike previous attempt at rendering a [Mandelbrot Set](mandelbrot-set.html) using CPU
rendering, this one uses GPU rendering (leveraging GLSL). This makes the renderer much faster and
responsive.
