import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePinType } from "library/Scroll"
import { MobileOnly } from "library/breakpointUtils"
import { fmobile, fresponsive, ftablet } from "library/fullyResponsive"
import useAnimation from "library/useAnimation"
import { useParamState } from "library/useParamState"
import { getResponsivePixels } from "library/viewportUtils"
import { type ReactNode, useRef } from "react"
import styled, { css } from "styled-components"
import data from "styles/blog/data"
import { desktopBreakpoint } from "styles/media"

import Categories from "./Categories"
import EmailInput from "./EmailInput"
import HubHeader from "./HubHeader"
import SearchBar from "./SearchBar"

const colors = data.projectColors

export default function BlogLayout({
	children,
	headerKicker,
	flipOrientation = false,
}: {
	children: ReactNode
	headerKicker?: ReactNode
	flipOrientation?: boolean
}) {
	const pin = useRef<HTMLDivElement>(null)
	const pinType = usePinType()

	const [query] = useParamState("query")
	const [category] = useParamState("category")
	const [showAll] = useParamState("showAll")

	useAnimation(
		() => {
			ScrollTrigger.create({
				trigger: pin.current,
				start: () => `top top+=${getResponsivePixels(120)}`,
				end: () =>
					// the height of the parent less the height of the pin
					`+=${
						(pin.current?.parentElement?.offsetHeight ?? 0) -
						(pin.current?.offsetHeight ?? 0)
					}`,
				pin: true,
				pinType,
			})
		},
		[pinType],
		{
			extraDeps: [query, category, showAll],
		},
	)

	return (
		<BlogWrapper>
			<BlogInner>
				<HubHeader kicker={headerKicker} />
				<Columns>
					{flipOrientation ? (
						<>
							<Right>
								<MobileOnly>
									<Line />
									<SearchBar />
								</MobileOnly>
								{children}
							</Right>
							<Left>
								<div ref={pin}>
									<SearchBar />
									<Categories />
									<EmailInput />
								</div>
							</Left>
						</>
					) : (
						<>
							<Left>
								<div ref={pin}>
									<SearchBar />
									<Categories />
									<EmailInput />
								</div>
							</Left>
							<Right>
								<MobileOnly>
									<Line />
									<SearchBar />
								</MobileOnly>
								{children}
							</Right>
						</>
					)}
				</Columns>
			</BlogInner>
		</BlogWrapper>
	)
}

const BlogWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${colors.neutralWhite};
`

const BlogInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${desktopBreakpoint}px;

  ${fresponsive(css`
    padding: 134px 110px 150px;
    gap: 50px;
  `)}

  ${ftablet(css`
    padding: 158px 20px 150px;
  `)}

  ${fmobile(css`
    padding: 112px 8px 100px;
    gap: 32px;
  `)}
`

const Line = styled.div`
  display: none;
  background-color: ${colors.neutral300};

  ${fmobile(css`
    display: flex;
    width: 100%;
    height: 1px;
    margin-bottom: 32px;
  `)}
`

const Columns = styled.div`
  ${fresponsive(css`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0 50px;
    width: 100%;
  `)}

  ${ftablet(css`
    gap: 58px;
  `)}

  ${fmobile(css`
    padding: 0 23px;
  `)}
`

const Left = styled.div` 
  ${fresponsive(css`
    width: 269px;
  `)}

  ${fmobile(css`
    display: none;
  `)}
`

const Right = styled.div`
  ${fresponsive(css`
    width: 768px;
  `)}
  ${ftablet(css`
    width: 560px;
  `)}
  ${fmobile(css`
    width: 100%;
  `)}
`
