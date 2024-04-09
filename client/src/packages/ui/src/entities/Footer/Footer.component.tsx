'use client'
import { useGetOperativesQuery } from '@/packages/store/api/operativesApi';
import { useAppDispatch, useAppSelector } from '@/packages/store/src/hooks';
import React, { useState, useEffect } from 'react';
import ListOperativesComponent from '../../shared/ListOperatives/ListOperatives.component';
import Button from '../../shared/Button/Button.component';

export default function Footer() {
  const [assaultNick, setAssaultNick] = useState([]);
  const [sd, setAssaultasdNick] = useState([]);


// const assault = useAppSelector((store)=>store.allNicknameAssault.allNicknameAssault)

const {data} = useGetOperativesQuery({ per_page: 999})

console.log(data)

  return (
    <>
   <ListOperativesComponent operatives={data}/>
    <Button type='button'> Привет </Button>
    </>
  );
}
