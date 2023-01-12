# Longform

A scaffold for a long page of text with chapters. Includes table of contents.

![Desktop screenshot](./screenshot-desktop.png)

## Development

Install dependencies

```bash
npm install
```

Serve with hot reload at http://localhost:3000

```bash
npm run dev
```

## Writing

Create chapters as individual markdown (.md) files in `./pages`. Make sure to
give each a title in the frontmatter.

```markdown
---
title: My First Chapter
---

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad aut...
```

Chapters are sorted alphabetically by filename and displayed one after another
on one continuous page. To make sure chapters are in order, consider a naming
pattern such as `00-my-first-chapter.md` and `01-my-second-chapter.md`, etc.

## Deployment

### As a static site

Generate static project

```bash
npm run generate
```

Copy generated files located at `./dist` to your static host provider.

### With a server

Generate static files for production

```bash
npm run generate
```

Launch server for generated static files

```bash
npm run start
```

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
