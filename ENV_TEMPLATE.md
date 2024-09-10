## How to use

1. Create a new `.env` file
2. Paste the contents from the `Environment variables` section below
3. Edit the required values

## Environment variables

```
DATABASE_URL="postgresql://forent:password@localhost:5432/forent?schema=public"

# Read more at https://next-auth.js.org/configuration/options#nextauth_secret
NEXTAUTH_SECRET=
NEXTAUTH_URL="http://localhost:3000"

# Read more at https://next-auth.js.org/providers/email
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_FROM=

# Read more at
# https://next-auth.js.org/providers/google
# https://developers.google.com/identity/protocols/oauth2
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=

# (Optional)
# Read more at https://www.chromatic.com/docs/cli/
CHROMATIC_PROJECT_TOKEN=


## NOTICE
# The values below can be left as-is. 
# However, you can edit any of them to customize this application's behavior.
## NOTICE


# Reverse geocoding
GEOCODE_URL_GEONAMES="http://api.3geonames.org/lat,lon.json"

# Listing image dimensions
LISTING_CARD_PHOTO_WIDTH=300
LISTING_CARD_PHOTO_HEIGHT=300

LISTING_COVER_PHOTO_WIDTH=800
LISTING_COVER_PHOTO_HEIGHT=600

LISTING_FULL_PHOTO_WIDTH=1600
LISTING_FULL_PHOTO_HEIGHT=900

# Listing min-max values
LISTING_PRICE_MIN=100
LISTING_PRICE_MAX=100_000_000

LISTING_DEPOSIT_MIN=0
LISTING_DEPOSIT_MAX=1_000_000

LISTING_DESC_MIN=16
LISTING_DESC_MAX=1024

LISTING_BEDS_MIN=1
LISTING_BEDS_MAX=750

LISTING_BATHS_MIN=1
LISTING_BATHS_MAX=250

LISTING_AREA_MIN=10
LISTING_AREA_MAX=1_000_000

LISTING_ADDRESS_LINE_MIN=1
LISTING_ADDRESS_LINE_MAX=128

LISTING_ADDRESS_CITY_MIN=1
LISTING_ADDRESS_CITY_MAX=64

LISTING_ADDRESS_STATE_MIN=1
LISTING_ADDRESS_STATE_MAX=64

LISTING_ADDRESS_ZIP_MIN=0
LISTING_ADDRESS_ZIP_MAX=64

LISTING_ADDRESS_LON_MIN=-180
LISTING_ADDRESS_LON_MAX=180

LISTING_ADDRESS_LAT_MIN=-90
LISTING_ADDRESS_LAT_MAX=90
```