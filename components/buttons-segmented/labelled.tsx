import ButtonsSegmented, { ButtonsSegmentedProps } from ".";

export interface ButtonsSegmentedLabelledProps extends ButtonsSegmentedProps {
    label: string
}

export default function ButtonsSegmentedLabelled(props: ButtonsSegmentedLabelledProps) {
    return (
        <div>
            <label>{props.label}</label>
            <div className="mt-2">
                <ButtonsSegmented values={props.values} activeIndex={props.activeIndex} />
            </div>
        </div>
    );
}