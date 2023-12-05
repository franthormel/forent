import Button from "@/components/ui/button/Button";
import InputField from '@/components/ui/form/InputField';
import TextField from '@/components/ui/form/TextField';
import ResetButton from '@/components/ui/form/buttons/ResetButton';
import SubmitButton from '@/components/ui/form/buttons/SubmitButton';
import MapForm from '@/components/ui/map/MapForm';
import { fetchDateOneYearFromToday, fetchDateToday } from "@/lib/date";
import { GeonamesProvider } from "@/lib/geocode";
import { CreateListingPreview } from '@/lib/types/main';
import { ZodError, z } from "zod";

export default function CreateListing() {
    async function submit(formData: FormData) {
        'use server';

        // Check if map data is selected
        const lat = formData.get("addressLatitude")?.toString();
        const lon = formData.get("addressLongitude")?.toString();

        if (!lat || !lon) {
            // TODO: 3. Show error message if nothing was selected
            return;
        }

        // Prepare geocode provider
        const geocodeProvider = new GeonamesProvider(lat, lon);
        const url = geocodeProvider.url();

        // TODO: 2. Continue parsing data
        // Fetch data from the geocode provider
        fetch(url).then((res) => res.json()).then((res) => console.log(res.nearest));

        // Map form data for previewing
        const previewListing: CreateListingPreview = {
            description: formData.get("description")?.toString(),
            price: formData.get("price")?.toString(),
            deposit: formData.get("deposit")?.toString(),
            availableDate: formData.get("availableDate")?.toString(),
            beds: formData.get("beds")?.toString(),
            baths: formData.get("baths")?.toString(),
            // TODO: 2. Need to add address info (just essentials)
        }
    }

    const today = fetchDateToday();
    const oneYearFromToday = fetchDateOneYearFromToday();

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
                            <InputField label='Available Date' name='availableDate' type='date' optional={true} min={today} defaultValue={today} max={oneYearFromToday} />
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