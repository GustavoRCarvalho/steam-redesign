import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { CookiesProvider } from "react-cookie"

import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useCookies } from "react-cookie"

function App() {
  const [cookies] = useCookies(["language"])
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== cookies.language) {
      i18n.changeLanguage(
        cookies.language === undefined ? "English" : cookies.language
      )
    }
  }, [])

  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <Header />
      <Home />
    </CookiesProvider>
  )
}

export default App
