import { ReactComponent as CutoutSVG } from "images/blog/AerodomeTemplate/1_M.svg"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import EmailList from "./Form/EmailList"
import Share from "./Share"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export default function Newsletter({
	isArticle = false,
}: {
	isArticle?: boolean
}) {
	return (
		<Wrapper>
			<NewsletterWrapper $isArticle={isArticle}>
				<TitleWrapper>
					<Title>Subscribe to our newsletter</Title>
					<Details>
						Stay up to date on the latest in DFR technology, company updates and
						new initiatives from the Aerodome team.
					</Details>
				</TitleWrapper>
				<StyledEmailList className="blg-newsletter" primary />
				<Cutout />
				{isArticle && <Share title="" />}
			</NewsletterWrapper>
		</Wrapper>
	)
}

const Cutout = styled(CutoutSVG)`
	position: absolute;

	${fresponsive(css`
		bottom: -2px;
		left: -2px;
		width: 227px;
		height: 65px;
		transform: rotateX(180deg);
	`)}

	${ftablet(css`
		bottom: -1.5px;
		left: -1.8px;
	`)}
`

const NewsletterWrapper = styled.div<{ $isArticle: boolean }>`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid ${colors.charcoal};

	${({ $isArticle }) =>
		fresponsive(css`
			width: 322px;
			height: ${$isArticle ? "548px" : "526px"};
			padding: 24px 24px 64px;
			background: ${colors.black};
			border-radius: 24px;
		`)}

	${ftablet(css`
		width: 100%;
		height: 214px;
		padding: 24px;
		flex-direction: row;
	`)}

  ${fmobile(css`
		width: 343px;
		height: 411px;
		padding: 16px 16px 58px;
	`)}
`

const Title = styled.div`
	${textStyles.h7}
	color: ${colors.white};
`

const StyledEmailList = styled(EmailList)`
	${fresponsive(css`
		flex-direction: column;
		width: 274px !important;
	`)}

	${ftablet(css`
		width: 541px !important;
		height: 166px;
		padding: 0;
		justify-content: space-between;

		button {
			width: 300px;
		}
	`)}


  ${fmobile(css`
		width: 100% !important;
		height: 133px;
		padding: 0;
		justify-content: space-between;
	`)}
`

const Details = styled.p`
	${textStyles.body3};
	color: ${colors.grey04};
`

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	${fresponsive(css`
		gap: 14px;
	`)}

	${ftablet(css`
		width: 274px;
	`)}
`

const Wrapper = styled.div`
	position: relative;

	${ftablet(css`
		width: 100%;
	`)}

	${fmobile(css`
		width: 343px;
	`)}
`
