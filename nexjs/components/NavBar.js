"use client";
import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='mr-64'
            >
                <div>Hello World</div>
            </Drawer>
        </>
    )
}

export default NavBar
