import { fresponsive } from "library/fullyResponsive"
import { useCallback } from "react"
import WhitePaperForm from "./Form/WhitePaperForm"

import styled, { css } from "styled-components"
import data from "styles/blog/data"

const textStyles = data.projectTextStyles
const colors = data.projectColors

type WhitePaperProps = {
	title: string
	description: string
	hubspotFormId: string
	pdfFile: {
		file: {
			url: string
		}
	}
}

const downloadFile = async (fileURL: string, nameWithExtension: string) => {
	const response = await fetch(fileURL)
	const blob = await response.blob()
	const url = URL.createObjectURL(blob)
	const a = document.createElement("a")
	a.href = url
	a.download = nameWithExtension
	a.click()
	URL.revokeObjectURL(url)
}

export default function WhitePaper({
	className = "",
	whitePaperInfo,
}: {
	className?: string
	whitePaperInfo: WhitePaperProps
}) {
	const {
		title,
		description,
		hubspotFormId,
		pdfFile: {
			file: { url },
		},
	} = whitePaperInfo

	const handleSuccess = useCallback(() => {
		downloadFile(url, title)
	}, [url, title])

	return (
		<WhitePaperWrapper className={className}>
			<div>
				<WhiteTitle>{title}</WhiteTitle>

				<WhiteDescription>{description}</WhiteDescription>
			</div>
			<WhitePaperForm formId={hubspotFormId} onComplete={handleSuccess} />
		</WhitePaperWrapper>
	)
}

const WhitePaperWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${colors.black};
	color: ${colors.white};
	${textStyles.blogQuote};

	${fresponsive(css`
		border-radius: 24px;
		padding: 32px;
		gap: 32px;
	`)}

	svg {
		width: 24px;
		height: 24px;
	}
`

const WhiteTitle = styled.h3`
	${textStyles.h7};
	color: ${colors.white};
`

const WhiteDescription = styled.p`
	${textStyles.body3};
	color: ${colors.grey04};

	${fresponsive(css`
		margin-top: 16px;
	`)}
`
