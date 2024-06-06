import { graphql, useStaticQuery } from "gatsby"
import UniversalImage from "library/UniversalImage"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import { transparentText } from "styles/text"

const textStyles = data.projectTextStyles
const gradients = data.projectGradients
const colors = data.projectColors

/**
 * It is possible that this component will need to be updated to match the new project's design.
 */

export default function HubHeader({ kicker }: { kicker?: React.ReactNode }) {
	const images: Queries.BlogLayoutQuery = useStaticQuery(graphql`
		query BlogLayout {
			hubHeader: file(relativePath: { eq: "blog/hubHeader.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`)

	return (
		<Wrapper>
			<Content>
				{kicker}
				{data.hubHeaderTitle && <Title>{data.hubHeaderTitle}</Title>}
				{data.hubHeaderSubtitle && (
					<Subtitle>{data.hubHeaderSubtitle}</Subtitle>
				)}
				{data.hubHeaderDescription && (
					<Description>{data.hubHeaderDescription}</Description>
				)}
			</Content>
			{images.hubHeader && (
				<Image image={images.hubHeader} alt="blog hub header" />
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: ${colors.neutral100};
	position: relative;
	overflow: clip;
	width: 100%;

	${fresponsive(css`
		border-radius: 24px;
	`)}
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	${fresponsive(css`
		gap: 10px;
		padding: 32px 48px 46px;
	`)}

	${ftablet(css`
		max-width: 375px;
		gap: 15px;
	`)}

  ${fmobile(css`
		gap: 18px;
		padding: 26px 41px 30px;
	`)}
`

const Title = styled.div`
	${textStyles.hubT};
	${transparentText}
	background-image: ${gradients.primarySecondary};

	${fresponsive(css`
		padding-right: 3px;
		margin-right: -3px;
	`)}
`

const Subtitle = styled.div`
	${textStyles.t2};
`

const Description = styled.div`
	${textStyles.bodyS};
	color: ${colors.neutral700};
`

const Image = styled(UniversalImage)`
	position: absolute;
	height: 100%;

	${fresponsive(css`
		right: 40px;
		top: 0;
	`)}

	${fmobile(css`
		display: none;
	`)}
`
