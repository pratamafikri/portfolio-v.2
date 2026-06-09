'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MdArrowForward, MdArrowOutward } from 'react-icons/md'
import TechBadge from './components/TechBadge'
import LoadingSpin from './components/LoadingSpin'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [isLoadingSection, setloadingSection] = useState(false)

  function navigateSection(section: string) {
    setloadingSection(true)
    setTimeout(() => {
      setActiveSection(section)
      setloadingSection(false)
    }, 300)
  }

  return (
    <div className=''>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <div className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-around lg:py-24'>
            <div>
              <h1 className='text-4xl font-bold tracking-tight text-primary sm:text-5xl'>Fikri M. F.</h1>
              <h2 className='mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl'>Software Engineer</h2>
              <p className='mt-4 max-w-xs leading-normal'>Think, Tinker, Explore. The world is our laboratory.</p>
            </div>
            <ul className='ml-1 mt-8 flex items-center' aria-label='Social media'>
              <li className='mr-5 text-xs shrink-0'>
                <a
                  className='block transition duration-300 hover:text-primary'
                  href='https://github.com/pratamafikri'
                  target='_blank'
                  rel='noreferrer noopener'
                  aria-label='GitHub (opens in a new tab)'
                  title='GitHub'>
                  <span className='sr-only'>GitHub</span>
                  <FaGithub className='h-8 w-8 text-primary' />
                </a>
              </li>
              <li className='mr-5 text-xs shrink-0'>
                <a
                  className='block transition duration-300 hover:text-primary'
                  href='https://www.linkedin.com/in/fikri-muhamad-fahmi/'
                  target='_blank'
                  rel='noreferrer noopener'
                  aria-label='LinkedIn (opens in a new tab)'
                  title='LinkedIn'>
                  <span className='sr-only'>LinkedIn</span>
                  <FaLinkedin className='h-8 w-8 text-primary' />
                </a>
              </li>
              <li className='mr-5 text-xs shrink-0'>
                <a
                  className='block transition duration-300 hover:text-primary'
                  href='https://instagram.com/fukurou_shi'
                  target='_blank'
                  rel='noreferrer noopener'
                  aria-label='Instagram (opens in a new tab)'
                  title='Instagram'>
                  <span className='sr-only'>Instagram</span>
                  <FaInstagram className='h-8 w-8 text-primary' />
                </a>
              </li>
            </ul>
          </div>
          <div className='pt-24 lg:w-1/2 lg:py-20 lg:min-h-screen lg:flex lg:flex-col lg:justify-center'>
            <div className='gap-4 mb-8 hidden lg:flex'>
              <button
                onClick={() => navigateSection('about')}
                className={`rounded-full px-4 py-2 font-semibold text-primary text-xs uppercase ${
                  activeSection == 'about' ? 'text-white bg-primary' : 'bg-transparent border-2 border-primary'
                }`}>
                About
              </button>
              <button
                onClick={() => navigateSection('experience')}
                className={`rounded-full px-4 py-2 font-semibold text-primary text-xs uppercase ${
                  activeSection == 'experience' ? 'text-white bg-primary' : 'bg-transparent border-2 border-primary'
                }`}>
                Experience
              </button>
              <button
                onClick={() => navigateSection('projects')}
                className={`rounded-full px-4 py-2 font-semibold text-primary text-xs uppercase ${
                  activeSection == 'projects' ? 'text-white bg-primary' : 'bg-transparent border-2 border-primary'
                }`}>
                Projects
              </button>
            </div>
            <div className={`transition-opacity duration-500 ${isLoadingSection ? 'opacity-0' : 'opacity-100'}`}>
              <div id='about' className={`${activeSection != 'about' ? 'lg:hidden' : ''}`} aria-label='About me'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                  <h2 className='text-sm font-bold uppercase tracking-widest lg:sr-only'>About</h2>
                </div>
                <div>
                  <p className='mb-4 text-justify'>
                    The curiosity about how things work and how to build it led me to pursue and dive into the vast
                    world of coding. My first encounter with code occurred when I wanted to modify a game with a custom
                    asset and change its saved data. From that on, my passion for programming has grown more and more.
                    Jump to the present time, and I&apos;ve trusted to build software for a&nbsp;
                    <a className='font-bold hover:text-primary transition duration-300' href='https://priadi.id'>
                      psychology company
                    </a>
                    .
                    <br />
                  </p>
                  <p className='mb-4 text-justify'>
                    My current focus these days is building software and maintaining it. I enjoy working on challenging
                    projects that push me to learn and collaborate. My work philosophy revolves around continuous
                    improvement, teamwork, and solving problems. In my free time, I usually RnD-ing my current work,
                    write &quot;poetic&quot; words, and tinkering random stuffs.
                  </p>
                </div>
              </div>
              <div
                id='experience'
                className={`${activeSection != 'experience' ? 'lg:hidden' : ''}`}
                aria-label='Work Experience'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                  <h2 className='text-sm font-bold uppercase tracking-widest lg:sr-only'>Experience</h2>
                </div>
                <div>
                  <ol className='group/list'>
                    <li className='mb-10'>
                      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg'></div>
                        <header className='z-10 mb-2 mt-1 text-xs font-semibold text-jetblack/50 uppercase tracking-wide sm:col-span-2'>
                          2019 - Present
                        </header>
                        <div className='z-10 col-span-6'>
                          <h3 className='font-medium leading-snug'>
                            <div>
                              <a
                                href='https://priadi.id'
                                target='_blank'
                                rel='noreferrer noopener'
                                className='inline-flex items-baseline font-medium leading-tight hover:text-primary focus-visible:text-primary group/link text-base'>
                                <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                <span>
                                  Software Engineer ·{' '}
                                  <span className='inline-block'>
                                    PRiADI
                                    <span className='inline-block'>
                                      <MdArrowOutward className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div>
                              <div className='text-jetblack/50' aria-hidden='true'>
                                Programmer
                              </div>
                            </div>
                          </h3>
                          <p className='mt-2 text-sm leading-normal text-justify'>
                            Developed and maintained websites, mobile apps, and desktop applications including CRM,
                            HRIS, Admin Dashboard, and more. Providing tech solution for the company through
                            brainstorming, collaboration, and knowledge shares.
                          </p>
                          <ul className='mt-2 flex flex-wrap'>
                            <TechBadge name={'Vue.js'} />
                            <TechBadge name={'Django'} />
                            <TechBadge name={'Codeigniter'} />
                            <TechBadge name={'Bootstrap'} />
                            <TechBadge name={'JavaFX'} />
                            <TechBadge name={'Flutter'} />
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className='mb-10 lg:mb-0'>
                      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg'></div>
                        <header className='z-10 mb-2 mt-1 text-xs font-semibold text-jetblack/50 uppercase tracking-wide sm:col-span-2'>
                          2017 - 2022
                        </header>
                        <div className='z-10 col-span-6'>
                          <h3 className='font-medium leading-snug'>
                            <div>
                              <span
                                rel='noreferrer noopener'
                                className='inline-flex items-baseline font-medium leading-tight hover:text-primary focus-visible:text-primary group/link text-base'>
                                <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                                <span className='hover'>Freelance Programmer</span>
                              </span>
                            </div>
                          </h3>
                          <p className='mt-2 text-sm leading-normal text-justify'>
                            While finishing high school, I&apos;ve taking several projects including library guestbook,
                            cashier application for school cooperatives, and more.
                          </p>
                          <ul className='mt-2 flex flex-wrap'>
                            <TechBadge name={'Java'} />
                            <TechBadge name={'JQuery'} />
                            <TechBadge name={'Codeigniter'} />
                            <TechBadge name={'Bootstrap'} />
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div id='projects' className={`${activeSection != 'projects' ? 'lg:hidden' : ''}`} aria-label='Projects'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                  <h2 className='text-sm font-bold uppercase tracking-widest lg:sr-only'>Projects</h2>
                </div>
                <div>
                  <ul className='group/list'>
                    <li className='mb-12'>
                      <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                        <div className='z-10 sm:order-2 sm:col-span-6'>
                          <h3>
                            <a
                              href='https://fukurou-space.vercel.app/'
                              target='_blank'
                              rel='noreferrer noopener'
                              className='inline-flex items-baseline font-medium leading-tight hover:text-primary focus-visible:text-primary group/link text-base'>
                              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                              <span>
                                fukurou-space
                                <span className='inline-block'>
                                  <MdArrowOutward className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                                </span>
                              </span>
                            </a>
                          </h3>
                          <p className='mt-2 text-sm leading-normal'>
                            When boredom meets code.
                          </p>
                          <ul className='mt-2 flex flex-wrap' aria-label='Technologies used:'>
                            <TechBadge name={'Next.js'} />
                            <TechBadge name={'Typescript'} />
                            <TechBadge name={'Tailwind CSS'} />
                          </ul>
                        </div>
                        <Image
                          src='/fukurou-space.png'
                          alt='Portfolio v1'
                          width={200}
                          height={80}
                          loading='lazy'
                          className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 hidden md:block'
                          style={{ color: 'transparent' }}
                        />
                      </div>
                    </li>
                    <li className='mb-12'>
                      <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                        <div className='z-10 sm:order-2 sm:col-span-6'>
                          <h3>
                            <a
                              href='https://fukurou-shi.vercel.app/'
                              target='_blank'
                              rel='noreferrer noopener'
                              className='inline-flex items-baseline font-medium leading-tight hover:text-primary focus-visible:text-primary group/link text-base'>
                              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                              <span>
                                fukurou-shi (Portfolio) v.1
                                <span className='inline-block'>
                                  <MdArrowOutward className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                                </span>
                              </span>
                            </a>
                          </h3>
                          <p className='mt-2 text-sm leading-normal'>My first attempt to create a portfolio website.</p>
                          <ul className='mt-2 flex flex-wrap' aria-label='Technologies used:'>
                            <TechBadge name={'React'} />
                            <TechBadge name={'Javascript'} />
                            <TechBadge name={'Tailwind CSS'} />
                          </ul>
                        </div>
                        <Image
                          src='/android-chrome-192x192.png'
                          alt='Portfolio v1'
                          width={200}
                          height={80}
                          loading='lazy'
                          className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 hidden md:block'
                          style={{ color: 'transparent' }}
                        />
                      </div>
                    </li>
                  </ul>
                  <Link
                    className='inline-flex items-center font-semibold group'
                    aria-label='View more projects'
                    href='/projects'>
                    <span>
                      <span className='border-b border-transparent pb-px transition'>View Full Project</span>
                      <MdArrowForward className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none' />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
