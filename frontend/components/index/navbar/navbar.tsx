import { Button, Dropdown, Link, Navbar, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { useEffect } from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { AcmeLogo } from './logo';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../../icons/GithubIcon';
export const Nav = () => {
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();
   const collapseItems = [
      'Features',
      'Customers',
      'Pricing',
      'Company',
      'Legal',
   ];



   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo ></AcmeLogo >

            <Text b color="inherit" hideIn="xs">
               <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }} >Tutor.ai</Link>
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: { pe: 'none' },
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Our Features
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="Tutor.ai features"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                              // mb: '$4'
                           },
                           mt: '$5',
                           mb: '$3',
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                              textAlign: 'left', // Add this line to left align the text
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="AI-Powered Class Preview and Review"
                        showFullDescription
                        description="place holder - dr qin"
                        icon={icons.scale}
                     >
                        <Link href='#feature1' css={{'color':'black'}}>AI Powered Class Preview and Review</Link>
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="AI-Driven Step by Step Problem Solving"
                        showFullDescription
                        description="place holder -dr qin"
                        icon={icons.activity}
                     >
                        <Link href='#feature2' css={{'color':'black'}}>AI-Driven Step-by-step Problem Solving</Link>
                     </Dropdown.Item>

                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link href="#technologies">Technologies</Navbar.Link>
               <Navbar.Link href="https://sites.google.com/my.smccd.edu/tutorai/team">Teams</Navbar.Link>

            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/zhenyulincs/tutor.ai"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>


            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/zhenyulincs/tutor.ai"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
