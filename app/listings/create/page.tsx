import Button from "@/components/ui/buttons/Button";

export default function CreateListing() {
    async function create(formData: FormData) {
        'use server';
        console.log("Displaying form entries 👇")
        formData.forEach((v, k) => console.log(`${k} = ${v}`))
    }

    return (
        <form action={create} className="border-2 border-orange-600 p-4 divide-y">
            <div className="flex flex-col gap-5 p-4">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="My Apartment" name="title" required />
                </div>

                <div>
                    <label htmlFor="deposit">Deposit</label>
                    <input type="number" placeholder="0" name="deposit" />
                </div>

                {/* TODO: Make them choose temporary images or at least make them choose temporary image assets*/}

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea placeholder="Describe your listing" name="description" required />
                </div>

                {/* TODO: Improve try input type=range or selection */}
                <div>
                    <label htmlFor="beds">No. of Beds</label>
                    <input type="number" placeholder="1" name="beds" required />
                </div>

                {/* TODO: Improve try input type=range or selection */}
                <div>
                    <label htmlFor="baths">No. of Baths</label>
                    <input type="number" placeholder="1" name="baths" required />
                </div>

                <div>
                    <label htmlFor="availableDate">Available Date?</label>
                    <input type="date" name="availableDate" />
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" required placeholder="0"></input>
                </div>
            </div>

            <div>
                {/* TODO: Address */}
            </div>

            <input type="submit" value="Create Listing" className="cursor-pointer" />
        </form>
    )
}