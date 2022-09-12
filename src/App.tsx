import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./Components/Header"
import { Blog } from "./pages/Blog"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
      </HashRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

