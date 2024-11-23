'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    // Check if the current route is the homepage
    setIsHomePage(window.location.pathname === '/');
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed w-screen z-10 ${
        isHomePage ? 'bg-transparent' : 'bg-black bg-opacity-70'
      } transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between items-center">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo/Title */}
          <div className="flex items-center justify-center md:justify-start flex-grow md:flex-grow-0">
            <h1 className="text-3xl font-bold tracking-tight text-white font-[geist-sans]">
              Tishaun Williams
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-end">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-white hover:border-white"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-white hover:border-white"
              >
                Contact Me
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-white hover:border-white"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-white hover:border-white"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* White line under navbar */}
      <div className="mx-auto mt-2 mb-4 w-[90%] border-b-2 border-white"></div>

      {/* Mobile menu */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 pb-4 pt-2">
          <DisclosureButton
            as="a"
            href="/"
            className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium text-white hover:border-white hover:bg-gray-50 hover:text-gray-700"
          >
            Home
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/contact"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-white hover:bg-gray-50 hover:text-gray-700"
          >
            Contact Me
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/portfolio"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-white hover:bg-gray-50 hover:text-gray-700"
          >
            Portfolio
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/about"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-white hover:bg-gray-50 hover:text-gray-700"
          >
            About
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
