export interface ButtonsSegmentedProps {
    values: string[]
    /**
     * Valid value is between 0-`n`
     * Where `n` is the number of entries in `values` minus one (1).
     */
    activeIndex: number
    onCick?: (index: number) => void
}

export default function ButtonsSegmented(props: ButtonsSegmentedProps) {
    return (
        <div className="flex w-full">
            {props.values.map((value, index, arrayValue) => {
                const indexIsActive = props.activeIndex === index;
                return (
                    <div key={`button-segmented-${index}`}
                        className={`w-12 cursor-pointer border-y-[1px] border-l-[1px] border-gray-400 py-2 text-center last:border-r-[1px]
                            first:rounded-l-md last:rounded-r-md
                            // Current active index should have background color amber-400 and no change in background color when hovered upon
                            ${indexIsActive && 'bg-amber-400'}
                            // Other segments must have no background color should change its background color when hovered upon
                            ${!indexIsActive && 'hover:bg-amber-200'} `}
                        onClick={(e) => {
                            if (props.onCick) {
                                props.onCick(index)
                            }
                        }}>
                        {value}
                    </div>
                )
            })}
        </div>
    );
}
