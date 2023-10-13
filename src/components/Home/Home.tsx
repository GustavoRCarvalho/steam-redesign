import styled from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import { GameInfos } from "./GameInfos"
import { Swiper } from "./Swiper"
import { useState } from "react"
import { HomeListSwiper } from "../../data/HomeSwiperList"

export const Home = () => {
  const [swiperIndex, setSwiperIndex] = useState(0)

  return (
    <HomeContainer>
      <BackgroundContainer>
        <BackgroundImage
          src={HomeListSwiper[swiperIndex].src}
          title="Game Background"
        />
        <BackgroundFilter />
      </BackgroundContainer>
      <ContentLimiter>
        <GameInfos
          title={HomeListSwiper[swiperIndex].title}
          fullPrice={HomeListSwiper[swiperIndex].fullPrice}
          price={HomeListSwiper[swiperIndex].price}
          salePorcent={HomeListSwiper[swiperIndex].salePorcent}
        />
        <Swiper
          list={HomeListSwiper}
          active={swiperIndex}
          setSwiperIndex={setSwiperIndex}
        />
      </ContentLimiter>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  height: max-content;
`

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  object-fit: cover;
  object-position: center;

  pointer-events: none;
`

const BackgroundFilter = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, #00000000, #000);

  bottom: 0;
  left: 0;
  height: 60%;
  width: 100%;
`

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;

  pointer-events: none;
`
