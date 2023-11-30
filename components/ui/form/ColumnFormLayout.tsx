import InputField from "./InputField";

// TODO: Generate values
export default function ColumnFormLayout() {
    return (
        <div className="min-w-full">
            <form>
                <div className="grid grid-cols-1 divide-y-2">
                    <div className="grid grid-cols-2 gap-x-8 pb-8">
                        <div>
                            <header className="font-semibold">Suspendisse Dui Sem</header>
                            <p className="text-gray-600 mt-2">Nam mollis sapien est, euismod dapibus orci ultricies vel.</p>
                        </div>
                        <div className="grid gap-y-8">
                            <InputField label="Suspendisse" name="ornare " placeholder="Suspendisse" />
                            <InputField label="Vestibulum " name="ante" placeholder="Vestibulum ante" optional={true} />
                            <InputField label="Vivamus" name="eleifend" placeholder="Vivamus eleifend imperdiet" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 py-8">
                        <div>
                            <header className="font-semibold">Suspendisse Dui Sem</header>
                            <p className="text-gray-600 mt-2">Nam mollis sapien est, euismod dapibus orci ultricies vel.</p>
                        </div>
                        <div className="grid gap-y-8">
                            <InputField label="Suspendisse" name="ornare " placeholder="Suspendisse" />
                            <InputField label="Vestibulum " name="ante" placeholder="Vestibulum ante" optional={true} />
                            <InputField label="Vivamus" name="eleifend" placeholder="Vivamus eleifend imperdiet" />
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
