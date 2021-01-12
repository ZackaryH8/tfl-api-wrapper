<p align="center">
    <img width="200" src="https://blog.tfl.gov.uk/wp-content/uploads/2018/05/cropped-logo_roundel-2.png" alt="TfL Logo">
    <h1 align="center">TfL API Wrapper</h1>
    <p align="center">A NodeJS wrapper for the TfL Unified API, made with TypeScript.</p>
    <p align="center">Read the <a href="https://tfldoc.dparture.cc/">Doumentation</a></p>
</p>


## Installation
```
npm install tfl-api-wrapper
yarn add tfl-api-wrapper
```

## Example Usage

### Line
```js
import { Line } from 'tfl-api-wrapper';

const config = {
    app_id: '',
    app_key: 'API KEY HERE',
};
const line = new Line(config)
```

### StopPoint

```js
import { StopPoint } from 'tfl-api-wrapper';

const config = {
    app_id: '',
    app_key: 'API KEY HERE',
};
const line = new StopPoint(config)
```
