import React from 'react';
import HeaderMain from './components/header/Main';
import BillForm from './components/modules/Bill/Form';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <HeaderMain />
      <main>
        <div className="container mx-auto py-[32px]">
          <BillForm submit={(e) => console.log(e)} />
        </div>
        <div className="grid grid-cols-[repeat(8,auto)]">
          <div>항목</div>
          <div>금액</div>
          <div>범주</div>
          <div>수입 / 지출</div>
          <div>고정 / 변동</div>
          <div>일시 / 정기</div>
          <div>정기: 월 / 연</div>
          <div>연 수입 / 연 지출</div>
        </div>
      </main>
    </div>
  );
}

export default App;
