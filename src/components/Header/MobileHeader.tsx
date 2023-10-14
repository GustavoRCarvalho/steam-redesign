import styled from "styled-components"
import { LogoMobile } from "./Logo"
import LogoSteam from "../../assets/images/steam-logo.png"
import { Search } from "./Search"
import { FiMenu } from "react-icons/fi"

export const MobileHeader = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <LogoMobile src={LogoSteam} title="Steam Logo" />
        <MenuIcon />
      </LogoWrapper>
      <Search fullWidth />
    </HeaderContainer>
  )
}

const MenuIcon = styled(FiMenu)`
  width: 2em;
  height: 2em;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderContainer = styled.header`
  background-color: var(--color-button-install);
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;

  gap: 1em;

  padding: 1em;

  width: calc(100% - 2em);

  z-index: 2;
`
