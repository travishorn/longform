# Longform

A scaffold for a long page of text with chapters. Includes table of contents.

![Desktop screenshot](./screenshot-desktop.png)

## Development

Install dependencies

```sh
npm install
```

Serve with hot reload at http://localhost:3000

```sh
npm run dev
```

## Writing

Create chapters as individual markdown (.md) files in `./content`. Make sure to
give each a title in the frontmatter.

```markdown
---
title: My First Chapter
---

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad aut...
```

If you give chapters order properties in the frontmatter, they will be sorted
accordingly. Otherwise, they will be sorted by filename.

```markdown
---
title: My First Chapter
order: 1
---
```

Chapters are displayed one after another on one continuous page.

## Deployment

Generate static output files

```sh
npm run generate
```

Copy generated files located at `./.output/` to your static host provider.

## License

The MIT License

Copyright 2023 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.