<p align="center">
    <img width="200" src="https://blog.tfl.gov.uk/wp-content/uploads/2018/05/cropped-logo_roundel-2.png" alt="TfL Logo">
    <h1 align="center">TfL API Wrapper</h1>
    <p align="center">A NodeJS wrapper for the TfL Unified API, made with TypeScript.</p>
    <p align="center">Read the <a href="https://tfldoc.dparture.cc/">Doumentation</a></p>
</p>

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ZackaryH8/tfl-api-wrapper.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ZackaryH8/tfl-api-wrapper/context:javascript)
![NPM Version](https://img.shields.io/npm/v/tfl-api-wrapper)
![Issues](https://img.shields.io/github/issues/ZackaryH8/tfl-api-wrapper)

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
const line = new StopPoint(config)
```
