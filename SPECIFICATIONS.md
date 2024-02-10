 # Specifications

## Listing (Min-max)

| Data          | Min   | Max                |
| ------------- | ----- | ------------------ |
| Price         | 100   | 100 million        |
| Description   | 16    | 1024 characters    |
| Deposit       | 0     | 1 million          |
| Availabe Date | Today | 4 years from today |
| No. of Beds   | 1     | 750                |
| No. of Baths  | 1     | 250                |


## Rating (Min-max)

Allowed value is between one (1) to five (5).
- One (1) is the lowest possible score.
- Five (5) is the highest possible score.

## Listing Address

* All listed address information below can be edited by the user

|          | 3Geonames | DB Column     |
| -------- | --------- | ------------- |
| Name     | `name`    | `addressLine` |
| Region   | `region`  | `addressLine` |
| City     | `city`    | `city`        |
| Province | `prov`    | `state`       |
| Country  | `state`   | `country`     |
