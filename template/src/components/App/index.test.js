import React from "react"
import { render, screen } from "@testing-library/react"
import App from "."

const TARGET_MESSAGE = "Hello World"
it(`Renders "${TARGET_MESSAGE}"`, () => {
	render(<App />)
	expect(screen.getByText(TARGET_MESSAGE)).toBeInTheDocument()
})