import React, { useState } from 'react';

function Item() {
  return (
    <>
      <div>항목</div>
      <div>금액</div>
      <div>범주</div>
      <div>수입 / 지출</div>
      <div>고정 / 변동</div>
      <div>일시 / 정기</div>
      <div>정기: 월 / 연</div>
      <div>연 수입 / 연 지출</div>
    </>
  );
}

function BillList() {
  const [items, setItems] = useState([1, 2, 3, 4]);

  return (
    <div className="grid grid-cols-[repeat(8,auto)]">
      <div>항목</div>
      <div>금액</div>
      <div>범주</div>
      <div>수입 / 지출</div>
      <div>고정 / 변동</div>
      <div>일시 / 정기</div>
      <div>정기: 월 / 연</div>
      <div>연 수입 / 연 지출</div>
      {items?.map((item) => (
        <Item />
      ))}
    </div>
  );
}

export default BillList;
