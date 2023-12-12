 # Specifications

## Listing (Minmax)

| Data          | Min   | Max                |
| ------------- | ----- | ------------------ |
| Price         | 100   | 100 million        |
| Description   | 16    | 1024 characters    |
| Deposit       | 0     | 1 million          |
| Availabe Date | Today | 4 years from today |
| No. of Beds   | 1     | 750                |
| No. of Baths  | 1     | 250                |

## Listing Address (Editable)

|          | 3Geonames | DB Column     |
| -------- | --------- | ------------- |
| Name     | `name`    | `addressLine` |
| Region   | `region`  | `addressLine` |
| City     | `city`    | `city`        |
| Province | `prov`    | `state`       |
| Country  | `state`   | `country`     |
