import Button from "@/components/ui/button/Button";
import InputField from '@/components/ui/form/InputField';
import TextField from '@/components/ui/form/TextField';
import ResetButton from '@/components/ui/form/buttons/ResetButton';
import SubmitButton from '@/components/ui/form/buttons/SubmitButton';
import MapForm from '@/components/ui/map/MapForm';
import { GeonamesProvider } from "@/lib/geocode";
import { CreateListingPreview } from '@/lib/types/main';

export default function CreateListing() {
    async function submit(formData: FormData) {
        'use server';

        // Prepare geocode provider
        const lat = formData.get("addressLatitude")?.toString()!;
        const lon = formData.get("addressLongitude")?.toString()!;
        const geocodeProvider = new GeonamesProvider(lat, lon);
        const url = geocodeProvider.url();

        // TODO: 2. Continue parsing data
        fetch(url!).then((res) => res.json()).then((res) => console.log(JSON.parse(res)));

        // Map form data for preview
        const previewListing: CreateListingPreview = {
            title: formData.get("title")?.toString(),
            description: formData.get("description")?.toString(),
            price: formData.get("price")?.toString(),
            deposit: formData.get("deposit")?.toString(),
            availableDate: formData.get("availableDate")?.toString(),
            beds: formData.get("beds")?.toString(),
            baths: formData.get("baths")?.toString(),
        }
    }

    // TODO: 1. Validate form data
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
                                This should assist a future tenant in finding what they are looking for a property.
                            </p>
                        </div>
                        <div className="grid gap-y-8">
                            <InputField label='Title' name='title' placeholder='My Apartment' />
                            <TextField label='Description' name='description' placeholder="Describe your listing" />
                            <MapForm />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 py-8">
                        <div>
                            <header className="font-semibold">Payments</header>
                            <p className="text-gray-600 mt-2">Please provide the exact amount of how much a tenant needs to pay.</p>
                        </div>
                        <div className="grid gap-y-8">
                            <InputField label='Price' name='price' placeholder='0' />
                            <InputField label='Deposit' name='deposit' placeholder='0' optional={true} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 py-8">
                        <div>
                            <header className="font-semibold">Property Information</header>
                            <p className="text-gray-600 mt-2">Other important details a prospective lessee needs to know about the property.</p>
                        </div>
                        <div className="grid gap-y-8">
                            <InputField label='Available Date' name='availableDate' type='date' optional={true} />
                            <InputField label='No. of Beds' name='beds' placeholder='1' />
                            <InputField label='No. of Baths' name='baths' placeholder='1' />
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