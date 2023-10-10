import styled from "styled-components"
import { HiArrowDownTray } from "react-icons/hi2"

export const InstallButton = () => {
  return (
    <Button type="button">
      <InstallIcon />
      Install Steam
    </Button>
  )
}

const Button = styled.button`
  background-color: var(--bg-color-button-install);
  color: var(--color-button-install);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25em;

  font-weight: bold;

  height: 3em;
  font-size: 1em;
  min-width: max-content;
  padding: 0 1.75em;

  border: none;
  border-radius: 0.25em;

  cursor: pointer;
`

const InstallIcon = styled(HiArrowDownTray)`
  width: 1em;
`
