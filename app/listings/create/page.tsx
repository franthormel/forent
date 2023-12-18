import InputField from '@/components/ui/form/InputField';
import TextField from '@/components/ui/form/TextField';
import ResetButton from '@/components/ui/form/buttons/ResetButton';
import SubmitButton from '@/components/ui/form/buttons/SubmitButton';
import MapForm from '@/components/ui/map/MapForm';
import { FormDataUtils } from "@/lib/commons";
import { fetchDateOneYearFromToday, fetchDateToday } from "@/lib/date";
import { GeonamesProvider, GeonamesResponse } from "@/lib/geocode/geonames";
import { FormListing } from '@/lib/types/listing';
import { FormListingValidator, FormListingError } from "@/lib/validation/listing";

export default function CreateListing() {
    async function submit(formData: FormData) {
        'use server'

        const formUtils = new FormDataUtils(formData);
        // Default values, if the field is required, must be fail safes
        const draft: FormListing = {
            price: formUtils.getNumber("price", -1),
            description: formUtils.getString("description", ''),
            deposit: formUtils.getNumber("deposit", 0),
            availableDate: formUtils.getDate("availableDate", new Date()),
            beds: formUtils.getNumber("beds", -1),
            baths: formUtils.getNumber("baths", -1),
            longitude: formUtils.getString("inputLongitude", ''),
            latitude: formUtils.getString("inputLatitude", ''),
        }

        // TODO Handle possible error
        const validator = new FormListingValidator(draft);
        try {
            validator.validate();
        } catch (e) {
            if (e instanceof FormListingError) {
                console.error(e.errors);
            }
        }

        const geocodeProvider = new GeonamesProvider(draft.latitude, draft.longitude);
        const url = geocodeProvider.url();

        // Fetch data from the geocode provider
        const response: GeonamesResponse = await fetch(url).then((res) => res.json());

        // TODO Parse response
    }

    const todayISO = fetchDateToday().toISOString().substring(0, 10);
    const oneYearFromTodayISO = fetchDateOneYearFromToday().toISOString().substring(0, 10);

    return (
        <div className="min-w-full px-24 py-16">
            <form action={submit}>
                <div className="grid grid-cols-1 divide-y-2">
                    <div className="grid grid-cols-2 gap-x-8 pb-8">
                        <div>
                            <header className="font-semibold">
                                General Information
                            </header>
                            <p className="text-gray-600 mt-2">
                                Information that helps a prospective tenant or buyer in what they are looking
                            </p>
                        </div>
                        <div className="grid gap-y-8">
                            {/* Price */}
                            <InputField label='Price' name='price' type="number" min={100} max={100_000_000} />
                            {/* Description */}
                            <TextField label='Description' name='description' minLength={16} maxLength={1024} />
                            {/* Map */}
                            <MapForm />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 py-8">
                        <div>
                            <header className="font-semibold">Property Information</header>
                            <p className="text-gray-600 mt-2">Please provide other essential details</p>
                        </div>
                        <div className="grid gap-y-8">
                            {/* Deposit */}
                            <InputField label='Deposit' name='deposit' type="number" optional={true} min={0} max={1_000_000} defaultValue={0} />
                            {/* Availabe Date */}
                            <InputField label='Available Date' name='availableDate' type='date' optional={true}
                                min={todayISO} defaultValue={todayISO} max={oneYearFromTodayISO} />
                            {/* Number of Beds */}
                            <InputField label='No. of Beds' name='beds' type="number" min={1} max={750} />
                            {/* Number of Baths */}
                            <InputField label='No. of Baths' name='baths' type="number" min={1} max={250} />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-8 pt-8">
                        <ResetButton />
                        <SubmitButton />
                    </div>
                </div>
            </form>
        </div>
    )
}