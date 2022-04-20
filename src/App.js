import logo from './logo.svg';
import './App.css';
import { SocialBCollection, NavBar, SideBar } from './ui-components';
import { Flex } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <NavBar />
    <Flex direction="row">
      <SideBar />
      <SocialBCollection />
    </Flex>;

    </div>
  );
}

export default App;
