import { ReactComponent as Icon } from "images/blog/icons/x.svg"
import UniversalLink from "library/Loader/UniversalLink"
import { fmobile, fresponsive } from "library/fullyResponsive"
import { useParamState } from "library/useParamState"
import { blogConfig as data } from "pages/blog/data"
import styled, { css } from "styled-components"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export default function ClearButton() {
	const [category, setCategory] = useParamState("category")
	const [query, setQuery] = useParamState("query")
	const [showAll, setShowAll] = useParamState("showAll")
	return (
		<>
			{Boolean(category) || Boolean(query) || Boolean(showAll) ? (
				<Wrapper
					type="button"
					onClick={() => {
						setCategory(null)
						setQuery(null)
						setShowAll(null)
					}}
				>
					<ClearIcon />
					Clear Filters / Search
				</Wrapper>
			) : null}
		</>
	)
}

const Wrapper = styled(UniversalLink)`
  ${textStyles.sh4}
  color: ${colors.neutral800};

  ${fresponsive(css`
    display: flex;
    gap: 10px;
    align-items: center;
    white-space: nowrap;
    flex-shrink: 0;
  `)}

  ${fmobile(css`
    padding-top: 20px;
  `)}
`

const ClearIcon = styled(Icon)`
  path {
    stroke: ${colors.neutralBlack};
  }

  ${fresponsive(css`
    width: 16px;
    height: 16px;
  `)}
`
