import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyles } from "./global/styles/GlobalStyles"
import { MainRoutes } from "./routes"
import { ThemeProvider } from "styled-components"
import { theme } from "./global/styles/theme"
import { Provider } from "react-redux"
import { store } from "./store/config/store"

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainRoutes />
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </Router>
  )
}

export default App
