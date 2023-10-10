import styled from "styled-components"

export const Menu = () => {
  return (
    <ListMenu>
      <ItemMenu>Store</ItemMenu>
      <ItemMenu>Community</ItemMenu>
      <ItemMenu>About Steam</ItemMenu>
      <ItemMenu>Categories</ItemMenu>
      <ItemMenu>Points Shop</ItemMenu>
    </ListMenu>
  )
}

const ListMenu = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  gap: 1em;
`

const ItemMenu = styled.li`
  width: max-content;

  font-weight: 500;

  cursor: pointer;
`
