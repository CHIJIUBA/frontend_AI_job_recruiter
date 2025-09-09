import { TopBar } from './components/TopBar';
import { SideNav } from './components/SideNav';

function App() {
  return (
    <>
      <TopBar />
      <div className={'maincontainer'}>
        <SideNav />
      </div>
    </>
  );
}

export default App;
