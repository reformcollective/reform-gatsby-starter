import * as Form from "@radix-ui/react-form"
import UniversalLink from "library/Loader/UniversalLink"
import { fresponsive } from "library/fullyResponsive"
import { useState } from "react"
import styled, { css } from "styled-components"

const endpoint = ""

const sendEmail = async (email: string) => {
	const formData = new FormData()
	formData.append("email", email)

	const urlParams = new URLSearchParams(window.location.search)
	const queryParams = urlParams.toString()

	if (document.referrer) {
		urlParams.append(
			"referrer",
			document.referrer
				.replace(/^(https?:\/\/)?(www\.)?/, "")
				.replace(/\/$/, ""),
		)
	}

	if (typeof email === "string") {
		const url = `https://${endpoint}${encodeURIComponent(email)}&${queryParams}`
		window.open(url, "_blank")
	}
}

export default function EmailInput() {
	const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
		"idle",
	)

	return (
		<Wrapper
			onSubmit={(e) => {
				e.preventDefault()
				setState("success")

				const formData = new FormData(e.currentTarget)
				const email = formData.get("email")

				if (typeof email === "string") {
					setState("loading")
					sendEmail(email)
						.then(() => {
							return setState("success")
						})
						.catch((error) => {
							setState("error")
							console.error(error)
						})
				}
			}}
		>
			<Title>{state === "success" ? "Success message" : "Input title"}</Title>
			<Row>
				<Field name="email">
					<Input placeholder="Your Email" type="email" required />
					<Message match="valueMissing">Invalid Email</Message>
					<Message match="typeMismatch">Invalid Email</Message>
					{/* forbid dotless domains */}
					<Message match={(v) => !/@.*\./.test(v)}>Invalid Email</Message>
					{state === "success" ? (
						<Success>Success</Success>
					) : (
						<Submit ariaLabel="submit email" type="submit">
							Submit
						</Submit>
					)}
				</Field>
			</Row>
		</Wrapper>
	)
}

const Wrapper = styled(Form.Root)`
  border: 1px solid black;
  width: fit-content;

	${fresponsive(css`
		display: flex;
		flex-direction: column;
		align-items: start;
	`)}
`

const Title = styled.div``

const Row = styled.div``

const Success = styled.div``

const Submit = styled(UniversalLink)``

const Field = styled(Form.Field)`
	position: relative;
  display: flex;
  justify-content: space-between;

	&[data-invalid] {
		${Submit}, ${Success} {
			display: none;
		}
	}
`

const Input = styled(Form.Control)``

const Message = styled(Form.Message)``
