import { IListOperatives } from '@/packages/store/src/types/src';
import Link from 'next/link';
import React from 'react';

interface ListOperativesProps {
  operatives: IListOperatives[]
}

const ListOperatives = ({operatives}: ListOperativesProps) => {
  return (
    <div style={{display: 'flex'}}>
        <div>
          <ul> Штурмовики 
            {operatives?.map((item: IListOperatives) => (
             item.class_id === 1 && <li key={item?.id}>{item?.nickname}</li>
            ))}
        </ul>
        </div>
        <ul> Поддержка
          {operatives?.map((item: IListOperatives) => (
            item.class_id === 2 && <li key={item?.id}>{item?.nickname}</li>
          ))}
        </ul>
        <ul> Медики
          {operatives?.map((item: IListOperatives) => (
            item.class_id === 3 && <li key={item?.id}>{item?.nickname}</li>
          ))}
        </ul>
        <ul> Снайперы
          {operatives?.map((item: IListOperatives) => (
            item.class_id === 4 && <li key={item?.id}>{item?.nickname}</li>
          ))}
        </ul>
    </div>
  );
};

export default React.memo(ListOperatives);