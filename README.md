# Dataspace Index Page template

Please note that resulted HTML page contains some placeholders from
[conf.js](src/conf.js) file. The idea is to replace them using
[parse-template](https://github.com/cocreators-ee/parse-template) on a target website.
All placeholders are listed in this file for simplicity, so just override them with the
tool.

## Development

```shell
pnpm install
pnpm run start
```

Deployment is made automatically into
[dist](https://github.com/ioxio-dataspace/dataspace-index-page/tree/dist) branch by
pushing to `main`.
