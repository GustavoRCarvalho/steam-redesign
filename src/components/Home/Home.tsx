import styled from "styled-components"
import pubgBackground from "../../assets/images/pubg-background.jpg"
import cs2Background from "../../assets/images/cs2-background.jpg"
import { ContentLimiter } from "../Common/ContentLimit"
import { GameInfos } from "./GameInfos"
import { Swiper } from "./Swiper"
import { useState } from "react"

const ListSwiper = [
  {
    title: "PUBG: Battlegrounds",
    fullPrice: 100.0,
    price: 30.0,
    salePorcent: 70,
    src: pubgBackground,
  },
  {
    title: "Counter-Strike 2",
    fullPrice: 100.0,
    price: 60.0,
    salePorcent: 40,
    src: cs2Background,
  },
]

export const Home = () => {
  const [swiperIndex, setSwiperIndex] = useState(1)

  return (
    <HomeContainer>
      <BackgroundContainer>
        <BackgroundImage
          src={ListSwiper[swiperIndex].src}
          title="Game Background"
        />
        <BackgroundFilter />
      </BackgroundContainer>
      <ContentLimiter>
        <GameInfos
          title={ListSwiper[swiperIndex].title}
          fullPrice={ListSwiper[swiperIndex].fullPrice}
          price={ListSwiper[swiperIndex].price}
          salePorcent={ListSwiper[swiperIndex].salePorcent}
        />
        <Swiper
          list={ListSwiper}
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
