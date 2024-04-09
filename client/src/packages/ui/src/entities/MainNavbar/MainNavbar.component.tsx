import Image from 'next/image'
import React from 'react'
import { mainMenu } from './constants'
import Button from '../../shared/Button/Button.component'

export default function MainNavbar() {
  return (

    <div style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>{mainMenu.map(item=>(
      <a href={item?.href} key={item.id}> { item.icon && <Image src={item?.icon}   alt='s' width={30} />} {item.text} </a>
    ))}
    <Button url='/'/>
    </div>
  )
}
