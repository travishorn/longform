---
id: optimized-build-process
title: Optimized Build Process
order: 2
---

## Optimized Build Process

When it comes to production builds, Vite shines with its optimized build
process. It uses Rollup as its bundler, which is known for producing highly
optimized output. Vite pre-bundles dependencies using esbuild, a super-fast
bundler and minifier written in Go, which dramatically speeds up the build
process. This combination of Rollup and esbuild allows Vite to generate smaller
and more efficient bundles compared to traditional tools. Furthermore, Vite
automatically handles code splitting, ensuring that only the necessary parts of
the application are loaded when needed, which improves the performance of the
final product. These optimizations result in faster load times and a better user
experience for end-users, making Vite an excellent choice for production builds.
