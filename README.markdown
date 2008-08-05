# jQuery Fade Gallery

## Setup

Place your images inside an ul element in a div called '#fadeGallery'.

The gallery has two modes of operation: automated and manual. If you don't define any
links inside your '#fadeGallery', automatic mode will indeed automatically be toggled.
For manual operation, put two links inside the aforementioned div with the classes
'next' and 'prev'.

For both modes, a .title element can be inside '#fadeGallery' - it will be updated
with the title of the current image.

Image transition duration can be configured in fadeGallery.options.
