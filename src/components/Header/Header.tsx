import styled from "styled-components"
import LogoSteam from "../../assets/images/steam-logo.png"
import { ContentLimiter } from "../Common/ContentLimit"
import { Logo } from "./Logo"
// import { Menu } from "./Menu"
import { Search } from "./Search"
import { InstallButton } from "./InstallButton"
import { Language } from "./Language"

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLimiter>
        <HeaderWrapper>
          <Logo src={LogoSteam} title="Steam Logo" />
          {/* <Menu /> */}
        </HeaderWrapper>
        <HeaderWrapper>
          <Search />
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
  align-items: center;

  gap: 1em;

  padding-block: 0.5em;
`

const HeaderWrapper = styled.div`
  display: flex;
  height: 100%;

  gap: 1em;
`

const HeaderContainer = styled.header`
  background-color: transparent;

  position: fixed;
  top: 0;

  width: 100vw;

  font-size: 1em;

  display: flex;
  justify-content: center;

  z-index: 2;
`
