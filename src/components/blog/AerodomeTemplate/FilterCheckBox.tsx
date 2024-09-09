import { ReactComponent as CheckIcon } from "images/blog/AerodomeTemplate/checkIcon.svg"
import { ReactComponent as EmptyCheck } from "images/blog/AerodomeTemplate/emptyCheck.svg"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import styled, { css } from "styled-components"

import { Checkbox } from "@radix-ui/react-checkbox"
import { useEffect, useState } from "react"
import data from "styles/blog/data"

const textStyles = data.projectTextStyles
const colors = data.projectColors

export function FilterCheckBox({
	category,
	setFilterWords,
	filterWords,
	setLastUpdated,
	lastUpdated,
}: {
	category: string
	setFilterWords: (arg0: string[]) => void
	filterWords: string[]
	setLastUpdated: (arg0: "searchValue" | "filterWords") => void
	lastUpdated: "searchValue" | "filterWords"
}) {
	const [checked, setChecked] = useState<boolean>(false)

	useEffect(() => {
		// visually handles the case where the searchValue is updated while the checkbox is checked
		if (lastUpdated === "searchValue") {
			setChecked(false)
		}
	}, [lastUpdated])

	return (
		<StyledCheckbox
			checked={checked}
			onCheckedChange={(checkedState) => {
				if (typeof checkedState === "boolean") {
					setChecked(checkedState)

					if (checkedState) {
						const newArray = filterWords.concat(category)
						setFilterWords(newArray)
						setLastUpdated("filterWords")
					} else {
						const newArray = filterWords.filter((word) => word !== category)
						setFilterWords(newArray)
					}
				}
			}}
		>
			<StyledIndicator>
				{checked === false ? <StyledEmptyCheck /> : <StyledCheckIcon />}
			</StyledIndicator>
			<StyledLabel $checked={checked}>{category}</StyledLabel>
		</StyledCheckbox>
	)
}

const StyledCheckbox = styled(Checkbox)`
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;
	${fresponsive(css`
		height: 16px;
		gap: 8px;
	`)}
`

const StyledCheckIcon = styled(CheckIcon)`
	${fresponsive(css`
		width: 16px;
		height: 16px;
	`)}
`

const StyledLabel = styled.label<{ $checked: boolean }>`
	${fresponsive(css`
		${textStyles.button5};
	`)}

	${ftablet(css`
		${textStyles.button4};
	`)}

  ${fmobile(css`
		white-space: nowrap;
	`)}
  color: ${({ $checked }) => ($checked ? colors.black : colors.grey03)};
`

const StyledIndicator = styled.div`
	position: relative;

	${fresponsive(css`
		width: 16px;
		height: 16px;

		svg {
			position: absolute;
			left: 0;
			top: 0;
		}
	`)};
`

const StyledEmptyCheck = styled(EmptyCheck)`
	${fresponsive(css`
		width: 16px;
		height: 16px;
	`)}
`
