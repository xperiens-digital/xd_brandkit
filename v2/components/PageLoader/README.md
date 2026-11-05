# PageLoader

Full-screen page loader: the mark's pixels pop in one by one (the x, then the dot, then the d) while the V1 conic sweep turns, then the whole overlay fades out.

Add `<xd-page-loader></xd-page-loader>` as the first element in `<body>`. It covers the page with `ground`, and hides itself when the window's `load` event fires, after at least `min` milliseconds (default 1200) so it never flashes. `XD.pageLoader.show()` / `.hide()` drive it for route changes. `inline` renders it in place (as in this preview). It announces "Loading" politely to screen readers, and under reduced motion it shows the still mark.

For contexts without script (email, slides, a static HTML holding page) use `xd-loader.svg` from the Logos group, which animates on its own.
