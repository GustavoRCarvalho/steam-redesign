import styled from "styled-components"
import pubgBackground from "../../assets/images/pubg-background.jpg"
import { ContentLimiter } from "../Common/ContentLimit"
import { GameInfos } from "./GameInfos"
import { Swiper } from "./Swiper"

export const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage src={pubgBackground} title="Game Background" />
      <ContentLimiter>
        <GameInfos
          title="PUBG: Battlegrounds"
          fullPrice={100.0}
          price={30.0}
          salePorcent={70}
        />
        <Swiper totalPages={5} totalItems={10} />
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
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;

  object-fit: cover;
  object-position: center;

  pointer-events: none;
`
