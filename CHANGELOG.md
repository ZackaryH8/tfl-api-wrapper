# Changelog

1.6.0
- Rename getValidModes to getModes
- Rename getallByNaptan to getAllByNaptan
- Add TrackerNet station codes enum
- Add return types to all methods

1.5.2
- getBikePointByID was renamed to getBikePointByIDs
- Added missing dependencies (@types/node & querystring)

1.5.1
- Fix getCarkParkByID url

1.5.0
- Change requests to use axios instead of node-fetch

1.4.0
- Changed config to a string
- Added occupancy as a named export
- Rework sendRequestTrackerNet
- objectToQuery, arrayToCSV & convertDate are now static methods
- Added incidentsCheck static method

1.3.5
- Added Crowding API
- Fix unset parameters appearing in FullURL

1.3.3
- Added getAllValidRoutes method
- Added accident stats endpoint
- Added getStatusByModes method
- Removed nodemon and added tsc-watch

1.3.2
- Fixed includeCrowdingData parameter for StopPoint/getByIDs

1.0.0
- Initial Release
