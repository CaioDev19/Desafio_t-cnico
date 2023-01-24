import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyles } from "./global/styles/GlobalStyles"
import { MainRoutes } from "./routes"
import { ThemeProvider } from "styled-components"
import { theme } from "./global/styles/theme"

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  )
}

export default App
