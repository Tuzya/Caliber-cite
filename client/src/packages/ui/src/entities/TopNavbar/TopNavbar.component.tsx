import React from 'react'

import Image from 'next/image'
import { topMenu } from './constants'
export default function TopNavbar() {
  
  return (
    <div style={{alignContent: 'center', justifyContent: 'center'}}>{topMenu.map(item=>(
      <a href={item?.href} key={item.id}> { item.icon && <Image src={item?.icon}   alt='s' width={30} />} {item.text} </a>
    ))}</div>
  )
}
