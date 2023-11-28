import MapForm from '@/components/ui/map/MapForm';
import Button from "@/components/ui/button/Button";
import prisma from '@/lib/db';
import InputField from '@/components/ui/form/InputField';
import TextField from '@/components/ui/form/TextField';
import SubmitButton from '@/co@/components/ui/form/SubmitButton

export default function CreateListing() {
    async function create(formData: FormData) {
        'use server';
        let i = 0;
        console.log("Input length: ", i);
        console.log("Displaying form entries 👇")
        formData.forEach((v, k) => { i++; console.log(`${k} = ${v}`) })
        console.log("Input length: ", i);
    }

    return (
        <form action={create}>
            <div className="flex flex-col gap-5">
                <InputField label='Title' name='title' type='text' placeholder='My Apartment' required={true} />
                <InputField label='Deposit' name='deposit' type='number' placeholder='0' required={true} />
                <TextField label='Description' name='description' placeholder="Describe your listing" required={true} />
                <InputField label='No. of Beds' name='beds' type='number' placeholder='1' required={true} />
                <InputField label='No. of Baths' name='baths' type='number' placeholder='1' required={true} />
                <InputField label='Available Date' name='availableDate' type='date' />
                <InputField label='Price' name='price' type='number' placeholder='0' required={true} />
                <MapForm />
                <SubmitButton text="Create Listing" />
            </div>
        </form>
    )
}