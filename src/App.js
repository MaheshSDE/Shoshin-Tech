import DashTopBoard from './components/DashTopBoard';
import DashBottomBoard from './components/DashBottomBoard';
import SideBar from "./components/SideBar"
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <SideBar/>
      <div className='analysis-content'>
          <nav className='navbar-container'>
              <div className='left-nav-container'>
                <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727243053/ic_burgermenu_ldcyzy.png' alt=''/>
                <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242829/Frame_9_vl7qza.png' alt=''/>
              </div>
              <div className='search-container'>
                 <input type='search' placeholder='Search'/>
                 <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242829/Frame_9_vl7qza.png' alt=''/>
              </div>
                <div className='right-nav-container'>
                <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242828/ic_round-notifications_ovh9ct.png' alt=''/>
                <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727242828/bi_chat-left-dots-fill_ejc0lw.png' alt=''/>
                <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727252233/Frame_12_tef03a.png' alt='' className='mobile-image-icon'/>
                <img src='https://res.cloudinary.com/ddsn9feta/image/upload/v1727273080/Frame_12_1_m2plu4.png' alt='' className='desktop-image-icon'/>
              </div>
          </nav>
          <h3>Dashboard</h3>
          <div className='dashboard-container'>
            <DashTopBoard/>
            <DashBottomBoard/>
          </div>
      </div>
    </div>
  );
}

export default App;
