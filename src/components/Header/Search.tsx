import styled from "styled-components"
import { FiSearch } from "react-icons/fi"
import { useTranslation } from "react-i18next"

export const Search = () => {
  const { t } = useTranslation()

  return (
    <InputWrapper>
      <Input placeholder={t("Search")} />
      <SearchIcon />
    </InputWrapper>
  )
}

const SearchIcon = styled(FiSearch)`
  cursor: pointer;
`

const InputWrapper = styled.div`
  background-color: #0000006a;

  padding-inline: 0.75em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25em;

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
