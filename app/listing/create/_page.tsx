"use client"

import ButtonFilled from '@/components/buttons/filled';
import FormInput from '@/components/form-input';
import FormInputMap from '@/components/form-input/map';
import FormInputReset from '@/components/form-input/reset';
import FormInputTextArea from '@/components/form-input/textarea';
import TextError from '@/components/text/error';
import { DateUtils } from '@/lib/commons/date_utils';
import { useFormState } from 'react-dom';
import { createListing } from './action';

export default function CreateListing() {
    // TODO: (A) Turn `formState` into a map
    // TODO: (A) Show errors for each input fields when key matches
    const [formState, formAction] = useFormState(createListing, '')

    const todayDate = new Date();
    const oneYearFromTodayDate = DateUtils.offsetYear(todayDate, 1);

    const today = todayDate.toISOString().substring(0, 10);
    const oneYearFromToday = oneYearFromTodayDate.toISOString().substring(0, 10);

    return <>
        <div className="min-w-full px-12 py-6 flex flex-col gap-5 scroll-smooth">
            {/* TODO: (A) Show general error key if corresponding key exists */}
            <TextError value={formState} />
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
                            <FormInput label='Price' name='price' type="number" min={100} max={100_000_000} />
                            {/* Description */}
                            <FormInputTextArea label='Description' name='description' minLength={16} maxLength={1024} />
                            {/* Map */}
                            <FormInputMap />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 py-8">
                        <div>
                            <header className="font-semibold">Property Information</header>
                            <p className="text-gray-600 mt-2">Please provide other essential details</p>
                        </div>
                        <div className="grid gap-y-8">
                            {/* Deposit */}
                            <FormInput label='Deposit' name='deposit' type="number" optional={true} min={0} max={1_000_000} defaultValue={0} />
                            {/* Availabe Date */}
                            <FormInput label='Available Date' name='availableDate' type='date' optional={true}
                                min={today} defaultValue={today} max={oneYearFromToday} />
                            {/* Number of Beds */}
                            <FormInput label='No. of Beds' name='beds' type="number" min={1} max={750} />
                            {/* Number of Baths */}
                            <FormInput label='No. of Baths' name='baths' type="number" min={1} max={250} />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-8 pt-8">
                        <FormInputReset />
                        <ButtonFilled text='Submit' />
                    </div>
                </div>
            </form>
        </div>
    </>
}
