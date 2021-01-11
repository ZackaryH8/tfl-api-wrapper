<p align="center">
    <img width="200" src="https://blog.tfl.gov.uk/wp-content/uploads/2018/05/cropped-logo_roundel-2.png" alt="TfL Logo">
    <h1 align="center">TfL API Wrapper</h1>
</p>
A Node JS wrapper for the Transport for London API and made with TypeScript

## Documentation
[Click here](https://tfldoc.dparture.cc/)

## Example Usage

### Line
```js
import { Line } from 'tfl-api-wrapper';

const config = {
    apiKey: 'API_KEY_HERE',
    appID: '',
};
const line = new Line(config)
```

### StopPoint

```js
import { StopPoint } from 'tfl-api-wrapper';

const config = {
    apiKey: 'API_KEY_HERE',
    appID: '',
};
const line = new StopPoint(config)
```
