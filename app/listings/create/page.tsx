import MapForm from '@/components/ui/map/MapForm';
import Button from "@/components/ui/button/Button";
import prisma from '@/lib/db';
import InputField from '@/components/ui/form/InputField';
import TextField from '@/components/ui/form/TextField';
import SubmitButton from '@/components/ui/form/SubmitButton'

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
        <div className="min-w-full">
            <form action={create}>
                <div className="grid grid-cols-1 divide-y-2">
                    <div className="grid grid-cols-2 gap-x-8 pb-8">
                        <div>
                            <header className="font-semibold">Suspendisse Dui Sem</header>
                            <p className="text-gray-600 mt-2">Nam mollis sapien est, euismod dapibus orci ultricies vel.</p>
                        </div>
                        <div className="grid gap-y-8">
                            <InputField label='Title' name='title' placeholder='My Apartment' />
                            <MapForm />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 py-8">
                        <div>
                            <header className="font-semibold">Suspendisse Dui Sem</header>
                            <p className="text-gray-600 mt-2">Nam mollis sapien est, euismod dapibus orci ultricies vel.</p>
                        </div>
                        <div className="grid gap-y-8">
                            <InputField label='Price' name='price' placeholder='0' />
                            <InputField label='Deposit' name='deposit' placeholder='0' optional={true} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 py-8">
                        <div>
                            <header className="font-semibold">Suspendisse Dui Sem</header>
                            <p className="text-gray-600 mt-2">Nam mollis sapien est, euismod dapibus orci ultricies vel.</p>
                        </div>
                        <div className="grid gap-y-8">
                            <TextField label='Description' name='description' placeholder="Describe your listing" />
                            <InputField label='Available Date' name='availableDate' type='date' />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 py-8">
                        <div>
                            <header className="font-semibold">Suspendisse Dui Sem</header>
                            <p className="text-gray-600 mt-2">Nam mollis sapien est, euismod dapibus orci ultricies vel.</p>
                        </div>
                        <div className="grid gap-y-8">
                            <InputField label='No. of Beds' name='beds' placeholder='1' />
                            <InputField label='No. of Baths' name='baths' placeholder='1' />
                        </div>
                    </div>
                    <div className="pt-8">
                        <button>Hi</button>
                    </div>
                </div>
            </form>
        </div>
    )
}