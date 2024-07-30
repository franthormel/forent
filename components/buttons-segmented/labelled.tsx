import ButtonsSegmented from ".";

export interface ButtonsSegmentedLabelledProps {
    values: string[]
    label: string
}

// TODO: Story
export default function ButtonsSegmentedLabelled(props: ButtonsSegmentedLabelledProps) {
    return (
        <div>
            <label>{props.label}</label>
            <div className="mt-2">
                <ButtonsSegmented values={props.values} />
            </div>
        </div>
    );
}