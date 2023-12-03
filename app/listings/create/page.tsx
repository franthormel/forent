import MapForm from '@/components/ui/map/MapForm';
import Button from "@/components/ui/button/Button";
import prisma from '@/lib/db';
import InputField from '@/components/ui/form/InputField';
import TextField from '@/components/ui/form/TextField';
import SubmitButton from '@/components/ui/form/buttons/SubmitButton'
import ResetButton from '@/components/ui/form/buttons/ResetButton';

export default function CreateListing() {
    async function submit(formData: FormData) {
        'use server';
        let i = 0;
        console.log("Input length: ", i);
        console.log("Displaying form entries 👇")
        formData.forEach((v, k) => { i++; console.log(`${k} = ${v}`) })
        console.log("Input length: ", i);
    }

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