import styled from "styled-components"
import { FiSearch } from "react-icons/fi"
import { useTranslation } from "react-i18next"

interface InputWrapperProps {
  $fullWidth: boolean
}

export const Search = ({ fullWidth }: { fullWidth: boolean }) => {
  const { t } = useTranslation()

  return (
    <InputWrapper $fullWidth={fullWidth}>
      <Input placeholder={t("Search")} />
      <SearchIcon />
    </InputWrapper>
  )
}

const SearchIcon = styled(FiSearch)`
  cursor: pointer;
`

const InputWrapper = styled.div<InputWrapperProps>`
  background-color: #0000006a;

  padding-inline: 0.75em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25em;

  width: ${(props) => (props.$fullWidth ? "calc(100% - 1.5em)" : "auto")};

  height: min-content;
`

const Input = styled.input`
  background-color: transparent;

  height: 3em;
  font-size: 1em;

  border: none;
  outline: none;
  padding: 0;

  &::placeholder {
    color: var(--color-placeholder-search);
  }
`
