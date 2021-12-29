

<p align="center">
    <img width="200" src="https://blog.tfl.gov.uk/wp-content/uploads/2018/05/cropped-logo_roundel-2.png" alt="TfL Logo">
    <h1 align="center">TfL API Wrapper</h1>
    <p align="center">A NodeJS wrapper for the TfL Unified API, made with TypeScript.</p>
    <p align="center">Read the <a href="https://zackaryh8.github.io/tfl-api-wrapper/">Documentation</a></p>
</p>

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ZackaryH8/tfl-api-wrapper.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ZackaryH8/tfl-api-wrapper/context:javascript)
![CI](https://img.shields.io/github/workflow/status/zackaryh8/tfl-api-wrapper/CI/master?label=tfldoc)
[![NPM Version](https://img.shields.io/npm/v/tfl-api-wrapper)](https://www.npmjs.com/package/tfl-api-wrapper)
[![Issues](https://img.shields.io/github/issues/ZackaryH8/tfl-api-wrapper)](https://github.com/ZackaryH8/tfl-api-wrapper/issues)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ZackaryH8/tfl-api-wrapper)


## Installation
```
npm install tfl-api-wrapper
yarn add tfl-api-wrapper
```

## Contribute

There are many ways to contribute to this repo.
* [Submit bugs](https://github.com/ZackaryH8/tfl-api-wrapper/issues) and help us verify fixes as they are checked in.
* Review the [source code changes](https://github.com/ZackaryH8/tfl-api-wrapper/pulls).

## Example Usage

### Line
```js
import { Line } from 'tfl-api-wrapper';

const config = {
    app_key: 'API KEY HERE',
};
const line = new Line(config)
```

### StopPoint

```js
import { StopPoint } from 'tfl-api-wrapper';

const config = {
    app_key: 'API KEY HERE',
};
const stopPoint = new StopPoint(config)
```

## Disclaimer
This repository is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Transport for London (TfL) or it's parent organisation Greater London Authority (GLA)
