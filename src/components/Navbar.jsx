import React from 'react';
import styled from 'styled-components';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Nav = styled.div`
  height: 70px;
  /* position: fixed; */
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
`
const Left = styled.div`
  display: flex;
`
const Logo = styled.h1`
  font-weight: bold;
`
const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  @media only screen and (max-width: 900px){
    display: none;
  }
`
const MenuItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  color: #353535;
  font-size: 18px;
  font-weight: 800;
  @media only screen and (max-width: 900px){
    margin: 1rem;
  }
`
const Button = styled.button`
  background: #d92e50;
  border: 2px solid white;
  border-radius: 30px;
  color: white;
  font-size: 15px;
  letter-spacing: 0.1em;
  padding: 0.5rem 1.8rem;
  font-weight: 900;
  @media only screen and (max-width: 900px){
    margin-right: 5rem;
  }
  @media only screen and (max-width: 480px){
    display: none;
  }
`
const PhoneMenu = styled.div`
  display: none;
  position: absolute;
  left: 2rem;
  top: 1.5rem;
  margin-right: 1rem;
  @media only screen and (max-width: 900px){
    display: block;
  }
`
const Dropdown = styled.div`
  position: absolute;
  left: 2%;
  top: 60px;
  display: flex;
  flex-direction: column;
  width: 160px;
  background-color: rgb(255, 255, 255);
  border-radius: 17px;
`


const Navbar = () => {

  const [menuClicked, setMenuClicked] = React.useState(false);

  const MenuList = () => (
    <>
      <MenuItem>Home</MenuItem>
      <MenuItem>Features</MenuItem>
      <MenuItem>Services</MenuItem>
      <MenuItem>Pricing</MenuItem>
      <MenuItem>Contact</MenuItem>
    </>
  )

  return (
    <Nav>
      <Wrapper>
        <Left>
          <Logo></Logo>
          <Menu>
            <MenuList />
          </Menu>
          <PhoneMenu>
            {menuClicked
              ? <RiCloseLine color="black" size={25} onClick={() => setMenuClicked(false)} />
              : <RiMenu3Line color="black" size={25} onClick={() => setMenuClicked(true)} />}
          </PhoneMenu>
          {menuClicked && (
            <Dropdown>
              <MenuList />
            </Dropdown>
          )}
        </Left>
        <Button>JOIN TODAY</Button>
      </Wrapper>
    </Nav>
  )
}

export default Navbar