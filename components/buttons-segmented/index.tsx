export interface ButtonsSegmentedProps {
    values: string[]
}

// TODO: Correct hover style on currently active segment
export default function ButtonsSegmented(props: ButtonsSegmentedProps) {
    return (
        <div className="flex w-full">
            {props.values.map((value, index, arrayValue) =>
                <div key={`button-segmented-${index}`}
                    className="w-12 cursor-pointer border-y-[1px] border-l-[1px] border-gray-400 py-2 text-center
                            first:bg-amber-400 last:border-r-[1px] hover:bg-amber-200
                            first:rounded-l-md last:rounded-r-md"
                    onClick={(e) => { }}>
                    {value}
                </div>)}
        </div>
    );
}
