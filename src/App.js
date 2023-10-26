import React, { useState, useEffect } from 'react';
import { Route,Routes } from 'react-router';
import Sider from './components/Sider/Sider';
import DummyTable from './tabs/DummyTable';
import DummyChart from './tabs/DummyChart';
import DummyList from './tabs/DummyList';
import "./App.scss"



function App() {
  const [tab, setTab] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/tabs.json');
        if (!response.ok) {
          throw new Error('Network error');
        }
        const data = await response.json();
        setTab(data);
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
    
  }, []);

  return (
    <div className='app' >
      <Sider tab={tab}/>
      <main className='app__content'>
      <Routes>
      <Route path={"/"} index element={<DummyList/>}/>
        <Route path={"/dummyTable"} element={<DummyTable/>}/>
        <Route path={"/dummyChart"} element={<DummyChart/>}/>
        <Route path={"/dummyList"} index element={<DummyList/>}/>
      </Routes>
      </main>
    </div >
  );
}

export default App;
