import React from 'react';
import HeaderMain from '@module/HeaderMain';
import BillForm from '@module/BillForm';
import BillList from '@module/BillList/container';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <HeaderMain />
      <main>
        <div className="container mx-auto py-[32px]">
          <BillForm onSubmit={(e) => console.log(e)} />
        </div>
        <BillList />
      </main>
    </div>
  );
}

export default App;
