
import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-full p-2 overflow-y-auto text-black border-2 bg-slate-100">
        <Sidebar className=''/>
      </div>

      {/* Main Content */}
      <div className="w-full h-full overflow-y-auto ">
        <Main />
      </div>
    </div>
  );
}

export default App;
