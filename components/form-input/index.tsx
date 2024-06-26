"use client"

import { StringUtils } from "@/lib/commons/string_utils"
import TextError from "../text/error"
import TextOptional from "../text/optional"
import { ChangeEventHandler } from "react"

// FUTURE: Break into separate component for each of the types
type FormInputType = "text" | "date" | "number"

interface FormInputProps {
	/**
	 * Input type. Default is 'text'
	 */
	type?: FormInputType
	/**
	 * Input name
	 */
	name: string
	/**
	 * Input label
	 */
	label: string
	/**
	 * Input placeholder
	 */
	placeholder?: string
	/**
	 * Is input optional. Default is 'false'
	 */
	optional?: boolean
	/**
	 * Minimum value
	 */
	min?: number | string
	/**
	 * Maximum value
	 */
	max?: number | string
	/**
	 * Minimum string length
	 */
	minLength?: number
	/**
	 * Maximum string length
	 */
	maxLength?: number
	/**
	 * Default value
	 */
	defaultValue?: number | string
	value?: string | ReadonlyArray<string> | number
	onChange?: ChangeEventHandler<HTMLInputElement>
	/**
	 * Error message
	 */
	errorMessage?: string
	dataCyOptional?: string
	dataCyLabel?: string
	dataCy?: string
	dataCyError?: string
}

export default function FormInput(props: FormInputProps) {
	const hasError = StringUtils.checkInput(props.errorMessage)

	return (
		<div className="w-5/6 min-w-full">
			<div className="flex justify-between">
				<label htmlFor={props.name}
					data-cy={props.dataCyLabel ?? "form-input-label"}>
					{props.label}
				</label>
				<TextOptional optional={props.optional}
					dataCy={props.dataCyOptional} />
			</div>
			<input type={props.type ?? "text"}
				placeholder={props.placeholder}
				name={props.name}
				required={!props.optional}
				min={props.min}
				max={props.max}
				minLength={props.minLength}
				maxLength={props.maxLength}
				defaultValue={props.defaultValue}
				value={props.value}
				onChange={props.onChange}
				data-cy={props.dataCy ?? "form-input"}
				className={`${hasError ? 'border-red-600' : 'border-slate-200'} 
							focus:${hasError && 'outline-none'}
							mt-2 w-full rounded-md border-2 px-2 py-1`} />
			{/* FUTURE: Animate when it pops up */}
			<TextError value={props.errorMessage} dataCy={props.dataCyError} />
		</div>
	)
}
