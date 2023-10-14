import styled from "styled-components"
import LogoSteam from "../../assets/images/steam-logo.png"
import { ContentLimiter } from "../Common/ContentLimit"
import { Logo } from "./Logo"
import { Menu } from "./Menu"
import { Search } from "./Search"
import { InstallButton } from "./InstallButton"
import { Language } from "./Language"
import { MobileHeader } from "./MobileHeader"

export const Header = () => {
  const isMobile = window.innerWidth < 1280

  console.log(isMobile)

  return isMobile ? (
    <MobileHeader />
  ) : (
    <HeaderContainer>
      <HeaderLimiter>
        <HeaderWrapper>
          <Logo src={LogoSteam} title="Steam Logo" />
          <Menu />
        </HeaderWrapper>
        <HeaderWrapper>
          <Search fullWidth={false} />
          <InstallButton />
          <Language />
        </HeaderWrapper>
      </HeaderLimiter>
    </HeaderContainer>
  )
}

const HeaderLimiter = styled(ContentLimiter)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 1em;

  padding-block: 0.5em;
`

const HeaderWrapper = styled.div`
  display: flex;
  height: min-content;

  gap: 1em;
`

const HeaderContainer = styled.header`
  background-color: transparent;

  position: sticky;
  top: 0;

  width: 100vw;

  font-size: 1em;

  display: flex;
  justify-content: center;

  z-index: 2;
`
