import { ReactComponent as DateSVG } from "images/blog/AerodomeTemplate/calendar.svg"
import { fresponsive } from "library/fullyResponsive"

import styled, { css } from "styled-components"
import data from "styles/blog/data"

const textStyles = data.projectTextStyles
const colors = data.projectColors

interface Dates {
	createdAt: string | null
	updatedAt: string | null
	manualPublishDate: string | null
}

export default function DateTag({
	className = "",
	dates,
}: {
	className?: string
	dates: Dates
}) {
	const { createdAt, updatedAt, manualPublishDate } = dates
	const publishDate = manualPublishDate || updatedAt || createdAt

	return (
		<PublishDate>
			<Icon>
				<DateSVG />
			</Icon>
			{publishDate ?? ""}
		</PublishDate>
	)
}

const Icon = styled.div`
	${fresponsive(css`
		width: 24px;
		height: 24px;
	`)}

	svg {
		width: 100%;
		height: 100%;
	}
`

const PublishDate = styled.div`
	display: flex;
	align-items: center;
	color: ${colors.grey04};
	${textStyles.kicker3};

	${fresponsive(css`
		gap: 6px;
	`)}
`
