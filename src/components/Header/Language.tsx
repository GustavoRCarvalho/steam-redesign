import styled from "styled-components"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import { BsGlobe } from "react-icons/bs"
import { useState } from "react"

import { useTranslation } from "react-i18next"
import { useCookies } from "react-cookie"

const languages = ["English", "Português", "Español"]

interface LangLabelProps {
  $active: boolean
}

export const Language = () => {
  const [, setCookie] = useCookies(["language"])
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  function onSetLanguage(lang: string) {
    i18n.changeLanguage(lang)
    setCookie("language", lang)
  }

  return (
    <DropdownButton>
      <LangLabel $active={false} onClick={() => setOpen((state) => !state)}>
        <GlobeIcon /> {t("Select Language")} {open ? <UpIcon /> : <DownIcon />}
      </LangLabel>
      {open &&
        languages.map((lang) => {
          const active = lang === i18n.language
          return (
            <LangLabel
              $active={active}
              key={lang}
              onClick={() => onSetLanguage(lang)}
            >
              {lang}
            </LangLabel>
          )
        })}
    </DropdownButton>
  )
}

const LangLabel = styled.span.attrs<LangLabelProps>(({ $active }) => ({
  style: {
    textDecoration: $active ? "underline" : "none",
  },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding-block: 0.5em;

  cursor: pointer;

  width: 100%;
`

const DropdownButton = styled.button`
  background-color: #00000088;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0.5em 1em;

  border: none;
  border-radius: 0.25em;
`

const DownIcon = styled(AiFillCaretDown)`
  width: 1.5em;
  height: 1.5em;
`
const UpIcon = styled(AiFillCaretUp)`
  width: 1.5em;
  height: 1.5em;
`
const GlobeIcon = styled(BsGlobe)`
  width: 1.5em;
  height: 1.5em;
`
