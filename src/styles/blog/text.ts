import { fresponsive } from "library/fullyResponsive"
import { css } from "styled-components"

// TODO: Delete this file once the data.ts file is updated!
export const blogTextStyles = {
	hubT: fresponsive(css`
		font-family: sans-serif;
		font-size: 68.5px;
		font-style: normal;
		font-weight: 400;
		line-height: 92%; /* 63.02px */
		letter-spacing: -4.11px;
	`),
	h5: fresponsive(css`
		font-family: sans-serif;
		font-size: 60px;
		font-style: normal;
		font-weight: 400;
		line-height: 94%; /* 56.4px */
		letter-spacing: -3px;
	`),
	h6: fresponsive(css`
		font-family: sans-serif;
		font-size: 48px;
		font-style: normal;
		font-weight: 400;
		line-height: 94%; /* 45.12px */
		letter-spacing: -2.88px;
	`),
	sh1: fresponsive(css`
		font-family: sans-serif;
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: 120%; /* 28.8px */
		letter-spacing: -0.96px;
	`),
	sh2: fresponsive(css`
		font-family: sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 120%; /* 21.6px */
		letter-spacing: -0.72px;
	`),
	sh3: fresponsive(css`
		font-family: sans-serif;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 120%; /* 16.8px */
		letter-spacing: -0.42px;
	`),
	sh4: fresponsive(css`
		font-family: sans-serif;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 120%; /* 14.4px */
		letter-spacing: -0.36px;
	`),
	t2: fresponsive(css`
		font-family: sans-serif;
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
		line-height: 152%; /* 15.2px */
		letter-spacing: 0.7px;
		text-transform: uppercase;
	`),
	t3: fresponsive(css`
		font-family: sans-serif;
		font-size: 6px;
		font-style: normal;
		font-weight: 400;
		line-height: 120%; /* 7.2px */
		letter-spacing: 0.48px;
		text-transform: uppercase;
	`),
	bodyXL: fresponsive(css`
		font-family: sans-serif;
		font-size: 24px;
		font-style: normal;
		font-weight: 350;
		line-height: 132%; /* 31.68px */
		letter-spacing: -0.48px;
	`),
	bodyL: fresponsive(css`
		font-family: sans-serif;
		font-size: 20px;
		font-style: normal;
		font-weight: 350;
		line-height: 132%; /* 26.4px */
		letter-spacing: -0.4px;
	`),
	bodyR: fresponsive(css`
		font-family: sans-serif;
		font-size: 16px;
		font-style: normal;
		font-weight: 350;
		line-height: 144%; /* 23.04px */
		letter-spacing: -0.32px;
	`),
	bodyS: fresponsive(css`
		font-family: sans-serif;
		font-size: 13px;
		font-style: normal;
		font-weight: 350;
		line-height: 144%; /* 23.04px */
		letter-spacing: -0.32px;
	`),
	bodyXS: fresponsive(css`
		font-family: sans-serif;
		font-size: 10px;
		font-style: normal;
		font-weight: 350;
		line-height: 144%; /* 14.4px */
		letter-spacing: -0.2px;
	`),
}
