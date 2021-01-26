
import './App.css';
import StartPage from './components/start-component';
import StartScreen from './components/start-screen-component';
import styled from '@emotion/styled';
import { Flex } from 'rebass'

const Header = styled(Flex)`
  align-items: center;  
`;

const Logo = styled.h1`
  width: 200px;
`;

const Navigation = styled(Flex)`
  padding: 20px;
`;

const NavigationItem = styled.div`
  margin-right: 50px;
`;

const RecipeContainer = styled.div`
`;

function App() {
  return (
    <Flex m='20px' flexDirection='column'>
    <Header mb='16px'>
      <Logo>Hungry</Logo>
      <Navigation className='nav'>
        <NavigationItem>FRUKOST</NavigationItem>
        <NavigationItem>BAKVERK</NavigationItem>
      </Navigation>
    </Header>
    <RecipeContainer>
      <StartPage />
    </RecipeContainer>
    </Flex>
  );
}

export default App;
