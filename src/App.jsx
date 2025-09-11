import { TopBar } from './components/TopBar';
import { SideNav } from './components/SideNav';

function App() {
  return (
    <>
      <TopBar />
      <div className={'maincontainer'}>
        <SideNav />
      </div>
      <div className="footer">this is the footer</div>
    </>
  );
}

export default App;
