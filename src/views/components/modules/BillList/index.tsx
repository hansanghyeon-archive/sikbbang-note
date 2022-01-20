import React from 'react';
import BillItem from '@module/BillItem';
import type IBill from '@model/Bill';

function BillList({ bills }: { bills: IBill[] }) {
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
      {bills?.map((bill, index: number) => {
        const key = `billitem-${index}`;
        return <BillItem key={key} bill={bill} />;
      })}
    </div>
  );
}

export default BillList;
