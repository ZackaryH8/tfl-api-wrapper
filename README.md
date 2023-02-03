

<p align="center">
    <img width="200" src="https://blog.tfl.gov.uk/wp-content/uploads/2018/05/cropped-logo_roundel-2.png" alt="TfL Logo">
    <h1 align="center">TfL API Wrapper</h1>
    <p align="center">A NodeJS wrapper for the TfL Unified API, made with TypeScript.</p>
    <p align="center">Read the <a href="https://zackaryh8.github.io/tfl-api-wrapper/">Documentation</a></p>
</p>

![CI](https://img.shields.io/github/actions/workflow/status/zackaryh8/tfl-api-wrapper/main.yml?branch=master)
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

### Async... await

```js
import { StopPoint } from 'tfl-api-wrapper';

const app_key = 'API KEY HERE'; // Use an environment file
const stopPoint = new StopPoint(app_key)

const arrivals = await stopPoint.getStationArrivals('940GZZLUKSX');
console.log(arrivals);
```

### Callback

```js
import { StopPoint } from 'tfl-api-wrapper';

const app_key = 'API KEY HERE'; // Use an environment file
const stopPoint = new StopPoint(app_key)

stopPoint.getStationArrivals('940GZZLUKSX').then((arrivals) => {
    console.log(arrivals)
});
```

## Disclaimer
This repository is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Transport for London (TfL) or its parent organisation Greater London Authority (GLA)
