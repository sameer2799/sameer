import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useState } from 'react'
import { CONTACT } from '../constants';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { MdDownload } from "react-icons/md";

const CV = "Sameer_Singh_CV.pdf";

const navigation = [
  { name: 'Home', href: "#", current: true },
  { name: 'About', href: "#about", current: false },
  //{ name: 'Experience', href: '#experience', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {

	const [active, setActive] = useState("");

	
  return (
    <Disclosure as="nav" className="bg-transparent items-center justify-center py-6">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => {setActive(item.name);window.scrollTo(0,0);item.current=true; navigation.forEach((i) => {if(i.name!=item.name)(i.current = false)})}}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				<button
                  type="button"
                  title="Download Resume"
                  className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                <a href={CV} target="_blank">
                  <span className="absolute -inset-1.5" />
					<MdDownload className="h-6 w-6"/>
                  <span className="sr-only">Resume</span></a>
                </button>
                <button
                  type="button"
                  title="LinkedIn"
                  className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                <a href={CONTACT.linkedin} target="_blank">
                  <span className="absolute -inset-1.5" />
					<FaLinkedin className="h-6 w-6"/>
                  <span className="sr-only">LinkedIn</span></a>
                </button>
                <button
                  type="button"
                  title="GitHub"
                  className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                <a href={CONTACT.github} target="_blank">
                  <span className="absolute -inset-1.5" />
					<FaGithub className="h-6 w-6"/>
                  <span className="sr-only">Github</span></a>
                </button>
                <button
                  type="button"
                  title="X"
                  className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-black hover:brightness-150 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                <a href={CONTACT.x} target="_blank">
                  <span className="absolute -inset-1.5" />
					<FaSquareXTwitter className="h-6 w-6"/>
                  <span className="sr-only">Twitter</span>
                  </a>
                </button>
                <button
                  type="button"
                  title="Email"
                  className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-[#CD4340] hover:brightness-150 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                	<a href={CONTACT.email}>
                  <span className="absolute -inset-1.5" />
					<IoMdMail className="h-6 w-6"/>
                  <span className="sr-only">Email</span>
                  </a>
                </button>

                
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

