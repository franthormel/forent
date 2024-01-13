"use client"

import ErrorMessage from '@/components/ui/ErrorMessage';
import InputField from '@/components/ui/form/InputField';
import TextField from '@/components/ui/form/TextField';
import ResetButton from '@/components/ui/form/buttons/ResetButton';
import MapForm from '@/components/ui/map/MapForm';
import { fetchDateOneYearFromToday, fetchDateToday } from "@/lib/date";
import { useFormState } from 'react-dom';
import { createListing } from './action';
import Button from '@/components/ui/button/Button';

export default function CreateListing() {
    const [formState, formAction] = useFormState(createListing, '')

    const todayISO = fetchDateToday().toISOString().substring(0, 10);
    const oneYearFromTodayISO = fetchDateOneYearFromToday().toISOString().substring(0, 10);

    if (formState !== undefined) {
        window.scroll(0, 0);
    }

    return <>
        <div className="min-w-full px-12 py-6 flex flex-col gap-5 scroll-smooth">
            <ErrorMessage value={formState} />
            <form action={formAction}>
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
                        <Button text='Submit'/>
                    </div>
                </div>
            </form>
        </div>
    </>
}