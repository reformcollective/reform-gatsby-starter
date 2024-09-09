import * as Form from "@radix-ui/react-form"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"

import { useRef, useState } from "react"
import data from "styles/blog/data"
import Primary from "../Buttons/Primary"
import Secondary from "../Buttons/Secondary"
import Input from "./Input"

const textStyles = data.projectTextStyles
const colors = data.projectColors

const PORTAL_ID = "39655947"

export default function WhitePaperForm({
	formId,
	onComplete,
	className = "",
	primary = false,
}: {
	formId: string
	onComplete?: () => void
	className?: string
	primary?: boolean
}) {
	const labelRef = useRef<HTMLLabelElement>(null)
	const [formValues, setFormValues] = useState({
		firstname: "",
		lastname: "",
		email: "",
	})
	const emailInputRef = useRef<HTMLInputElement>(null)

	return (
		<FormRoot
			className={className}
			onSubmit={(e) => {
				e.preventDefault()
				const url = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${formId}`

				const data = new FormData(e.currentTarget)

				const submission = {
					context: {
						hutk: window.hutk,
						pageUri: window.location.href,
						pageName: document.title,
					},
					fields: [...data.entries()].map(([name, value]) => ({
						name,
						value,
					})),
				}

				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(submission),
				})
					.then(() => {
						if (onComplete) {
							const values = {
								firstname: "",
								lastname: "",
								email: "",
							}
							setFormValues(values)

							onComplete()
						}
						return null
					})
					.catch((error: Error) => {
						console.error(error)
					})
			}}
		>
			<Row>
				<FormField name="firstname">
					<Form.Control asChild>
						<Input
							value={formValues.firstname}
							onChange={(e) => {
								const newValues = {
									...formValues,
									firstname: e.target.value,
								}
								setFormValues(newValues)
							}}
							placeholder="John"
							required
						/>
					</Form.Control>
					<FormMessage match="valueMissing">
						Please enter your first name
					</FormMessage>
					<Label>First Name</Label>
				</FormField>

				<FormField name="lastname">
					<Form.Control asChild>
						<Input
							value={formValues.lastname}
							onChange={(e) => {
								const newValues = {
									...formValues,
									lastname: e.target.value,
								}
								setFormValues(newValues)
							}}
							placeholder="Smith"
							required
						/>
					</Form.Control>
					<FormMessage match="valueMissing">
						Please enter your last name
					</FormMessage>
					<Label>Last Name</Label>
				</FormField>
			</Row>
			<FormField name="email">
				<Form.Control asChild>
					<Input
						ref={emailInputRef}
						onChange={(e) => {
							const newValues = {
								...formValues,
								email: e.target.value,
							}
							setFormValues(newValues)
						}}
						value={formValues.email}
						placeholder="john@email.com"
						required
						type="email"
					/>
				</Form.Control>
				<FormMessage match="valueMissing">Please enter your email</FormMessage>
				<FormMessage match="typeMismatch">
					Please enter a valid email
				</FormMessage>
				{/* forbid dotless domains */}
				<FormMessage match={(v) => !/@.*\./.test(v)}>
					Please enter a valid email
				</FormMessage>
				<Label ref={labelRef}>Email</Label>
			</FormField>
			<Form.Submit asChild>
				{primary ? (
					// <StyledPrimary type="submit">Download</StyledPrimary>
					<Primary style={{ width: "100%" }} type="submit">
						Download
					</Primary>
				) : (
					<StyledSecondary type="submit">Download</StyledSecondary>
				)}
			</Form.Submit>
		</FormRoot>
	)
}

const FormRoot = styled(Form.Root)`
	${fresponsive(css`
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 32px;
		width: 100%;
	`)}
`

const FormMessage = styled(Form.Message)`
	${textStyles.kicker4};
	color: ${colors.red01};
	display: block;
	height: 0;
	${fresponsive(css`
		translate: 0 2px;
	`)}
`

const Label = styled(Form.Label)`
	${textStyles.kicker4};
	color: ${colors.grey04};
	pointer-events: none;
	position: absolute;
	${fresponsive(css`
		right: 0;
		top: 8px;
	`)}

	${ftablet(css`
		top: 4px;
	`)}

  ${fmobile(css`
		top: 6px;
	`)}
`

const FormField = styled(Form.Field)`
	position: relative;

	${fresponsive(css`
		width: 100%;
		flex-shrink: 0;
	`)}

	${fmobile(css`
		height: auto;
	`)}
`

const StyledSecondary = styled(Secondary)`
	${fresponsive(css`
		width: 160px;
		flex-shrink: 0;
	`)}
`

// const StyledPrimary = styled(Primary)`
// 	width: 100%;

// 	${fresponsive(css`
// 		width: 100%;
// 	`)}

// 	${ftablet(css`
// 		width: 100%;
// 	`)}
// `

const Row = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr;

	${fresponsive(css`
		gap: 32px;
	`)}

	${fmobile(css`
		grid-template-columns: 1fr;
	`)}
`
