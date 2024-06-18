import { Button, Dropdown, DropdownTrigger, Link, Navbar, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { AcmeLogo } from './logo';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';

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
                     aria-label="ACME features"
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
                     aria-label="ACME features"
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
                  href="https://github.com/Siumauricio/landing-template-nextui"
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
            <ModalLogin />

            <Navbar.Item>
               <Button auto flat href="#">
                  Start free trial
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
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
