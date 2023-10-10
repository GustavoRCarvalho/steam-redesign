import styled from "styled-components"
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2"
import { createArray } from "../Common/utils"
import cardImage from "../../assets/images/pubg-background.jpg"
import { useState } from "react"

interface CardListProps {
  $move: number
}
interface SwiperProps {
  totalPages: number
  totalItems: number
}

export const Swiper = ({ totalPages, totalItems }: SwiperProps) => {
  const [move, setMove] = useState(0)
  const pages = createArray({ n: totalPages })
  const items = createArray({ n: totalItems })

  function handleScrollNext() {
    setMove((state) => (state !== totalPages ? state + 1 : state))
  }
  function handleScrollBack() {
    setMove((state) => (state !== 0 ? state - 1 : state))
  }

  console.log(move)

  return (
    <SwiperContainer>
      <TitleWrapper>
        <SwiperTitle>Featured & Recommended</SwiperTitle>
        <NavigateWrapper>
          <BackIcon onClick={() => handleScrollBack()} />
          <NextIcon onClick={() => handleScrollNext()} />
        </NavigateWrapper>
      </TitleWrapper>
      <CardContainer>
        <CardList $move={move}>
          {items.map((_, index) => {
            return (
              <CardItem key={"card" + index}>
                <CardImage src={cardImage} />
              </CardItem>
            )
          })}
        </CardList>
      </CardContainer>
      <Paginate>
        {pages.map((_, index) => {
          return <PaginateItem key={"page" + index} />
        })}
      </Paginate>
    </SwiperContainer>
  )
}

const CardContainer = styled.div`
  overflow: hidden;
`

const CardList = styled.ul.attrs<CardListProps>(({ $move }) => ({
  style: {
    transform: `translateX(-${$move * 224 + 16}px)`,
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

const CardItem = styled.li`
  position: relative;
  background-color: var(--color-home-navigation);

  display: flex;

  min-width: 14em;
  height: 7em;

  border-radius: 0.25em;

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

const PaginateItem = styled.li`
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
