import styled from "styled-components"
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2"
import { createArray } from "../Common/utils"
import cardImage from "../../assets/images/pubg-background.jpg"

interface SwiperProps {
  totalPages: number
  totalItems: number
}

export const Swiper = ({ totalPages, totalItems }: SwiperProps) => {
  const pages = createArray({ n: totalPages })
  const items = createArray({ n: totalItems })

  return (
    <SwiperContainer>
      <TitleWrapper>
        <SwiperTitle>Featured & Recommended</SwiperTitle>
        <NavigateWrapper>
          <BackIcon />
          <NextIcon />
        </NavigateWrapper>
      </TitleWrapper>
      <CardList>
        {items.map((index) => {
          return (
            <CardItem key={"card" + index}>
              <CardImage src={cardImage} />
            </CardItem>
          )
        })}
      </CardList>
      <Paginate>
        {pages.map((index) => {
          return <PaginateItem key={"page" + index} />
        })}
      </Paginate>
    </SwiperContainer>
  )
}

const CardList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;

  padding: 0;
  margin: 0;

  overflow: auto;
  width: max-content;
`

const CardItem = styled.li`
  position: relative;
  background-color: var(--color-home-navigation);

  display: flex;

  width: 14em;
  height: 7em;

  border-radius: 0.25em;

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
