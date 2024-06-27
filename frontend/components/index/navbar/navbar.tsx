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
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
               Tutor.ai
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
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="PreparAI"
                        showFullDescription
                        description="Analyzes, Searches, Recommends targeted educational content, and aids comprehension"
                        icon={icons.scale}
                     >
                        PreparAI
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="HomeworkAidAI"
                        showFullDescription
                        description="Analyzes, Explains errors, Guides problem-solving, and Improves learning outcomes."
                        icon={icons.activity}
                     >
                        HomeworkAidAI
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="QuizzAI"
                        showFullDescription
                        description="Create and practice with quizzes from your course material. "
                        icon={icons.flash}
                     >
                        QuizzAI
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="KnowledgeDetectAI"
                        showFullDescription
                        description="Analyzes homework and exam, Identifies knowledge gaps, and Informs targeted instructional strategies."
                        icon={icons.server}
                     >
                        KnowledgeDetectAI
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="WisdomAI"
                        showFullDescription
                        description="Talk to your personal tutor 24/7 in real time"
                        icon={icons.server}
                     >
                        WisdomAI
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>

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
                        Use Cases
                     </Dropdown.Button>
                  </Navbar.Item>
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
                           background: '#f4f4f5',
                           margin: "$2"
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
                     <Dropdown.Section title="AI Learning">
                        <Dropdown.Item
                           key="Prepare for Class"
                           icon={icons.server}
                        >
                           Prepare for Class
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="Review After Class"
                           icon={icons.server}
                        >
                           Review After Class
                        </Dropdown.Item>
                     </Dropdown.Section>
                     <Dropdown.Section title="AI Asking">
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
                     <Dropdown.Section title="AI Preparation">
                        <Dropdown.Item
                           key="Paractice Generation"
                           icon={icons.server}
                        >
                           Paractice Generation
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

               <Navbar.Link href="#">Our Blog</Navbar.Link>
               <Navbar.Link href="#">For Educators</Navbar.Link>
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
