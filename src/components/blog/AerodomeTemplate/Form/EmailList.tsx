import * as Form from "@radix-ui/react-form"
import gsap from "gsap"
import { loader } from "library/Loader"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import { useRef, useState } from "react"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import Primary from "../Buttons/Primary"
import Secondary from "../Buttons/Secondary"
import Input from "./Input"

const textStyles = data.projectTextStyles
const colors = data.projectColors

const PORTAL_ID = "39655947"
const FORM_ID = "23ebaacd-584d-4135-bab1-966e751dc4cd"

declare global {
	interface Window {
		hutk: unknown
	}
}

export default function EmailList({
	onComplete,
	className = "",
	primary = false,
}: {
	onComplete?: () => void
	className?: string
	primary?: boolean
}) {
	const labelRef = useRef<HTMLLabelElement>(null)
	const [labelText, setLabelText] = useState("Email")
	const [emailValue, setEmailValue] = useState("")
	const [mutableKey, setMutableKey] = useState(0)
	const emailInputRef = useRef<HTMLInputElement>(null)

	loader.useEventListener("routeChange", () => {
		setLabelText("Email")
		setEmailValue("")
		//apparently this is a hack to force a "clear" of the form and error messages
		setMutableKey(Math.random())
	})

	const handleComplete = () => {
		setLabelText("success")

		const tl = gsap.timeline()
		tl.fromTo(
			labelRef.current,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				color: colors.green01,
				borderBottomColor: colors.green01,
				duration: 0.3,
			},
			0,
		)
			.to(
				emailInputRef.current,
				{
					borderBottomColor: colors.green01,
					duration: 0.3,
				},
				0,
			)
			.to(
				labelRef.current,
				{
					color: colors.grey04,
					duration: 0.3,
					onStart: () => {
						setLabelText("Email")
						setEmailValue("")
					},
				},
				5,
			)
			.to(
				emailInputRef.current,
				{
					borderBottomColor: colors.grey04,
					duration: 0.3,
				},
				5,
			)
	}

	return (
		<FormRoot
			key={mutableKey}
			className={className}
			onSubmit={(e) => {
				e.preventDefault()
				const url = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`

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
						handleComplete()
						return null
					})
					.catch((error: Error) => {
						console.error(error)
					})
			}}
		>
			<FormField name="email">
				<Form.Control asChild>
					<Input
						ref={emailInputRef}
						onChange={(e) => setEmailValue(e.target.value)}
						value={emailValue}
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
				<Label ref={labelRef}>{labelText}</Label>
			</FormField>
			<Form.Submit asChild>
				{primary ? (
					// <StyledPrimary type="submit">Submit</StyledPrimary>
					<Primary style={{ width: "100%" }} type="submit">
						Submit
					</Primary>
				) : (
					<StyledSecondary type="submit">Submit</StyledSecondary>
				)}
			</Form.Submit>
		</FormRoot>
	)
}

const FormRoot = styled(Form.Root)`
	${fresponsive(css`
		display: flex;
		gap: 32px;
		padding-top: 60px;
		width: 350px;
	`)}

	${ftablet(css`
		padding-top: 48px;
		align-items: flex-end;
		width: 391px;
	`)}

  ${fmobile(css`
		gap: 24px;
		flex-direction: column;
		align-items: flex-end;
		padding-top: 32px;
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
		translate: 0 -6px;
		width: 100%;
		flex-shrink: 0;
	`)}

	${fmobile(css`
		height: auto;
	`)}
`

const StyledSecondary = styled(Secondary)`
	${fresponsive(css`
		width: 107px;
		flex-shrink: 0;
	`)}

	${ftablet(css`
		width: 124px;
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
