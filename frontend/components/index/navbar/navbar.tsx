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
            <Text b color="inherit" hideIn="xs">
               <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }} >Tutor.ai</Link>
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
                 <Navbar.Content 
                  >
                  <Navbar.Item>
                     <Navbar.Link href="#">
                     Use Cases
                     </Navbar.Link>
                  </Navbar.Item>
               </Navbar.Content>


               <Dropdown isBordered>
                                   <Navbar.Content 
                  css={{ pl: 'px' }}
                  >
                  <Navbar.Item>
                     <Navbar.Link href="#">
                     Technologies
                     </Navbar.Link>
                  </Navbar.Item>
               </Navbar.Content>
                  <Dropdown.Menu
                     color="secondary"
                     aria-label="Actions"
                     css={{
                        $$dropdownMenuWidth: "100%",
                        display: 'flex',
                        "flex-wrap": "wrap",
                        '$$dropdownItemHeight': '100px',
                        '& .nextui-dropdown-item': {
                           'py': '$2',
                           'my': '$5',
                           'mx': '$4',
                           'outline': 'solid',
                           'outline-color': 'Gray',
                           'outlineWidth': '0.5px',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           
                           h: "50%",
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$medium',
                              margin:'$4 $4 $4 0',
                           },
                           w: '100%',
                        },
                        '& .nextui-dropdown-section-divider': {
                           display: 'none'
                        },
                        '& .nextui-dropdown-section': {
                           //background: '#000',

                           margin: '$5',
                           'mr': '$9' 
                        },
                        '& .nextui-dropdown-section-wrapper': {
                           flex: "1 1 auto",
                           "white-space": "nowrap",
                           overflow: "hidden",
                           "text-overflow":"ellipsis",
                           
                        },
                        '& .nextui-dropdown-section-title': {
                           fontWeight: '$semibold',
                           "font-size": "inherit",
                           color: "inherit"
                        }
                     }}
                  >
                     <Dropdown.Section title="Smart Study Guide">
                        <Dropdown.Item
                           key="Prepare for Class"
                           icon={icons.server}
                        >
                           Class Preparation
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="Review After Class"
                           icon={icons.server}
                        >
                           Class Review
                        </Dropdown.Item>
                     </Dropdown.Section>
                     <Dropdown.Section title="AI-powered Q&A">
                        <Dropdown.Item
                           key="Exam Preparation"
                           icon={icons.server}
                        >
                           Exam Preparation
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="Exam Review"
                           icon={icons.server}
                        >
                           Exam Review
                        </Dropdown.Item>

                     </Dropdown.Section>
                     <Dropdown.Section title="Assessment Preparation">
                        <Dropdown.Item
                           key="Practice Generation"
                           icon={icons.server}
                        >
                           AI Generated Practice
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="Knowledge Gap Analysis"
                           icon={icons.server}
                        >
                           Knowledge Gap Analysis
                        </Dropdown.Item>
                     </Dropdown.Section>
                  </Dropdown.Menu>
               </Dropdown>

               <Navbar.Link href="https://sites.google.com/my.smccd.edu/tutor-ai-team/team">Our Team</Navbar.Link>
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
