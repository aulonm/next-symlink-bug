
# Test the bug

```
npm run dev
```

The `dev` script runs a symlink from `components/pages` to `pages/` and then starts the server.

There are two routes here, one of them is working, the other doesn't. 

The hardcoded route works as expected, but a dynamic route does not work.

`localhost:3000/test` -- this works. Returns `This works`
`localhost:3000/test/fail` -- does not work. Should return `This should work` but returns a 404 page instead
