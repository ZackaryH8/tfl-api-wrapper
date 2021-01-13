import Line from '../lib/line';
import StopPoint from '../lib/stopPoint';

const line = new Line({
    app_key: '',
});

const stopPoint = new StopPoint({
    app_key: '',
});

stopPoint.listStationArrivals('940GZZLUHSC').then((res: any) => {
    console.log(res);
});

// stopPoint.searchStopPoint('kings cross', 'tube').then((r) => {
//     console.log(r.matches[0].id);
// });

// client.sendRequest('StopPoint/Search/farringdon', {}, 'GET')
