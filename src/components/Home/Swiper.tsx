import styled from "styled-components"
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2"
import { createArray } from "../Common/utils"
import { useLayoutEffect, useRef, useState } from "react"

interface PaginateItemProps {
  $active: boolean
}
interface CardContainerProps {
  ref: object
}
interface CardListProps {
  $move: number
  ref: object
}
interface CardItemProps {
  $active: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

interface SwiperProps {
  list: {
    title: string
    fullPrice: number
    price: number
    salePorcent: number
    src: string
  }[]
  active: number
  setSwiperIndex: (swiperIndex: number) => void
}

export const Swiper = ({ active, list, setSwiperIndex }: SwiperProps) => {
  const [move, setMove] = useState(0)
  const [width, setWidth] = useState(0)
  const CardListRef = useRef(null)
  const CardContainerRef = useRef(null)
  const totalPages = Math.round(width / 224)
  const pages = createArray({ n: totalPages + 1 })

  function handleScrollNext() {
    setMove((state) => (state < totalPages ? state + 1 : state))
  }
  function handleScrollBack() {
    setMove((state) => (state !== 0 ? state - 1 : state))
  }

  useLayoutEffect(() => {
    CardListRef.current !== null &&
      CardContainerRef.current !== null &&
      setWidth(
        CardListRef.current["offsetWidth"] -
          CardContainerRef.current["offsetWidth"]
      )
  }, [])

  return (
    <SwiperContainer>
      <TitleWrapper>
        <SwiperTitle>Featured & Recommended</SwiperTitle>
        <NavigateWrapper>
          <BackIcon onClick={() => handleScrollBack()} />
          <NextIcon onClick={() => handleScrollNext()} />
        </NavigateWrapper>
      </TitleWrapper>
      <CardContainer ref={CardContainerRef}>
        <CardList $move={move} ref={CardListRef}>
          {list.map(({ src }, index) => {
            return (
              <CardItem
                key={"card" + index}
                $active={active === index}
                onClick={() => {
                  setSwiperIndex(index)
                }}
              >
                <CardImage src={src} />
              </CardItem>
            )
          })}
        </CardList>
      </CardContainer>
      <Paginate>
        {pages.map((_, index) => {
          return (
            <PaginateItem
              $active={move === index}
              key={"page" + index}
              onClick={() => setMove(index)}
            />
          )
        })}
      </Paginate>
    </SwiperContainer>
  )
}

const CardContainer = styled.div<CardContainerProps>`
  overflow: hidden;
`

const CardList = styled.ul.attrs<CardListProps>(({ $move }) => ({
  style: {
    transform: `translateX(-${$move !== 0 ? $move * 224 + 16 : 0}px)`,
  },
}))`
  list-style: none;
  display: flex;

  gap: 1em;

  padding: 0;
  margin: 0;

  overflow: auto;
  width: max-content;

  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }

  transition: 500ms;
`

const CardItem = styled.li.attrs<CardItemProps>(({ $active }) => ({
  style: {
    border: $active ? "1px solid white" : "",
  },
}))`
  position: relative;
  background-color: var(--color-home-navigation);

  display: flex;

  min-width: 224px;
  height: 7em;

  border-radius: 0.25em;
  overflow: hidden;

  user-select: none;
  cursor: pointer;
`

const CardImage = styled.img`
  position: absolute;

  left: 0;
  top: 0;

  height: 100%;
  width: 100%;

  object-fit: cover;
  object-position: center;
`

const Paginate = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;

  padding: 0;
  margin: 0;
`

const PaginateItem = styled.li.attrs<PaginateItemProps>(({ $active }) => ({
  style: {
    backgroundColor: $active ? "#fff" : "var(--color-home-navigation)",
  },
}))`
  background-color: var(--color-home-navigation);
  display: flex;

  width: 0.4em;
  height: 0.4em;

  border-radius: 50%;

  cursor: pointer;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SwiperContainer = styled.div`
  background-color: #ff000000;
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 100%;
  bottom: 0;

  gap: 1em;
`

const SwiperTitle = styled.h4`
  margin: 0;
`

const NavigateWrapper = styled.div`
  display: flex;

  gap: 1em;
`

const NextIcon = styled(HiArrowLongRight)`
  width: 3em;
  height: 3em;

  cursor: pointer;
`

const BackIcon = styled(HiArrowLongLeft)`
  width: 3em;
  height: 3em;

  cursor: pointer;
`
