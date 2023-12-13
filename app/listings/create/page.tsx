import Button from "@/components/ui/button/Button";
import InputField from '@/components/ui/form/InputField';
import TextField from '@/components/ui/form/TextField';
import ResetButton from '@/components/ui/form/buttons/ResetButton';
import SubmitButton from '@/components/ui/form/buttons/SubmitButton';
import MapForm from '@/components/ui/map/MapForm';
import { NumberUtils } from "@/lib/commons";
import { fetchDateOneYearFromToday, fetchDateToday } from "@/lib/date";
import { GeonamesProvider, GeonamesResponse } from "@/lib/geocode/geonames";
import { DraftListing } from '@/lib/types/listing';
import { ZodError, z } from "zod";

export default function CreateListing() {
    const today = fetchDateToday();
    const oneYearFromToday = fetchDateOneYearFromToday();

    async function submit(formData: FormData) {
        'use server'

        // TODO: Maybe FormDataUtils?
        // Default values must be fail safes
        const draft: DraftListing = {
            price: NumberUtils.toNumber(formData.get("price")?.toString().trim(), -1),
            description: formData.get("description")?.toString()?.trim() ?? '',
            deposit: NumberUtils.toNumber(formData.get("deposit")?.toString().trim(), -1),
            // TODO: DateUtils might help
            // availableDate: new Date(formData.get("availableDate")?.toString().trim()) ?? '', 
            availableDate: formData.get("availableDate")?.toString().trim() ?? '',
            beds: NumberUtils.toNumber(formData.get("beds")?.toString().trim(), -1),
            baths: NumberUtils.toNumber(formData.get("baths")?.toString().trim(), -1),
        }

        console.log(draft)

        // TODO Check if values have data
        const draftValidator = z.object({
            price: z.number().min(100).max(100_000_000),
            description: z.string().min(16).max(1024),
            deposit: z.number().min(0).max(1_000_000),
            availableDate: z.date().min(today).max(oneYearFromToday),
            beds: z.number().min(1).max(750),
            baths: z.number().min(1).max(250),
        })

        // Check if map data is selected
        const lat = formData.get("addressLatitude")?.toString();
        const lon = formData.get("addressLongitude")?.toString();

        if (!lat || !lon) {
            // TODO Show error message if nothing was selected (use zod also)
            return;
        }

        // Prepare geocode provider
        const geocodeProvider = new GeonamesProvider(lat, lon);
        const url = geocodeProvider.url();

        // Fetch data from the geocode provider
        const response: GeonamesResponse = await fetch(url).then((res) => res.json());

        // TODO Need to add address info (just essentials)
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
                            <InputField label='Price' name='price' type="number" min={100} max={100_000_000} />
                            <TextField label='Description' name='description' minLength={16} maxLength={1024} />
                            <MapForm />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 py-8">
                        <div>
                            <header className="font-semibold">Property Information</header>
                            <p className="text-gray-600 mt-2">Please provide other essential details</p>
                        </div>
                        <div className="grid gap-y-8">
                            <InputField label='Deposit' name='deposit' type="number" optional={true} min={0} max={1_000_000} />
                            <InputField label='Available Date' name='availableDate' type='date' optional={true}
                                min={todayISO} defaultValue={todayISO} max={oneYearFromTodayISO} />
                            <InputField label='No. of Beds' name='beds' type="number" min={1} max={750} />
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