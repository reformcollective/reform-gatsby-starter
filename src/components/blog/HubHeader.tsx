import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"

import data from "pages/blog/data"
import { transparentText } from "styles/text"

const textStyles = data.projectTextStyles
const gradients = data.projectGradients
const colors = data.projectColors

export default function HubHeader({ kicker }: { kicker?: React.ReactNode }) {
	return (
		<Wrapper>
			{kicker}
			{data.hubHeaderTitle && <Title>{data.hubHeaderTitle}</Title>}
			{data.hubHeaderSubtitle && <Subtitle>{data.hubHeaderSubtitle}</Subtitle>}
			{data.hubHeaderDescription && (
				<Description>{data.hubHeaderDescription}</Description>
			)}
			{data.hubHeaderImage && (
				<Image src={data.hubHeaderImage} alt="two women using computers" />
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
  ${textStyles.h5};
  background-color: ${colors.neutral100};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: relative;
  overflow: clip;

  ${fresponsive(css`
    border-radius: 24px;
    gap: 10px;
    padding: 32px 48px 46px;
  `)}

  ${ftablet(css`
    gap: 15px;
  `)}

  ${fmobile(css`
    ${textStyles.h6}
    gap: 18px;
    align-items: start;
  `)} 
`

const Title = styled.div`
  ${textStyles.hubT};
  ${transparentText}
  background-image: ${gradients.primarySecondary};
`

const Subtitle = styled.div`
  ${textStyles.t2};
`

const Description = styled.div`
  ${textStyles.bodyS};
  color: ${colors.neutral700};
`

const Image = styled.img`
  position: absolute;
  height: 100%;
  right: 40px;
  top: 0;
`
