import styled from "styled-components"
import { HiArrowDownTray } from "react-icons/hi2"

interface GameInfosProps {
  title: string
  salePorcent: number
  fullPrice: number
  price: number
}

export const GameInfos = ({
  title,
  salePorcent,
  fullPrice,
  price,
}: GameInfosProps) => {
  const isFree = price === 0

  return (
    <Container>
      <Title>{title}</Title>
      {isFree ? (
        <FreePrice>FREE TO PLAY</FreePrice>
      ) : (
        <PriceWrapper>
          <SalePorcent>{salePorcent}% OFF</SalePorcent>
          <FullPrice>R$ {fullPrice}</FullPrice>
          <Price>R$ {price}</Price>
        </PriceWrapper>
      )}
      <DownloadButton>
        <InstallIcon />
        Download Now
      </DownloadButton>
    </Container>
  )
}

const InstallIcon = styled(HiArrowDownTray)`
  width: 1em;
`

const DownloadButton = styled.button`
  background-color: transparent;

  display: flex;
  align-items: center;

  gap: 0.5em;

  padding-block: 1em;
  padding-inline: 1.7em;
  margin-top: 0.5em;

  border: 1px solid white;
  border-radius: 0.25em;

  font-size: 1.05em;
  font-weight: 600;

  cursor: pointer;
`

const Container = styled.div`
  left: 0;

  margin-top: calc(20%);
  height: 50vh;
`

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5em;
`

const FreePrice = styled.span`
  display: flex;
  font-weight: 500;
`

const Price = styled.span`
  font-weight: 500;
`

const FullPrice = styled.span`
  text-decoration: line-through;
`

const SalePorcent = styled.span`
  background-color: red;
  color: white;

  font-weight: 500;

  padding-block: 0.1em;
  padding-inline: 0.3em;
  border-radius: 0.25em;

  width: max-content;
`

const Title = styled.h3`
  font-size: 2.75em;

  margin: 0;
  text-align: start;
`
