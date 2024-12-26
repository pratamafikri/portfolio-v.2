import { Metadata } from 'next'
import Link from 'next/link'
import { MdArrowBack, MdArrowOutward } from 'react-icons/md'
import TechBadge from '../components/TechBadge'

export const metadata: Metadata = {
  title: 'Projects | Fikri',
}

export default function ProjectPage() {
  const projects = [
    {
      year: '2019',
      name: 'SMART SMK',
      tools: ['Laravel', 'Bootstrap', 'jQuery'],
      link: '',
    },
    {
      year: '2019',
      name: 'SMKN 13 BANDUNG Library Guestbook',
      tools: ['HTML', 'PHP', 'Bootstrap', 'jQuery'],
      link: '',
    },
    {
      year: '2019',
      name: 'SMKN 13 BANDUNG School Cooperatives Store Cashier',
      tools: ['HTML', 'PHP', 'Bootstrap', 'jQuery'],
      link: '',
    },
    {
      year: '2019',
      name: 'PRiADI CRM',
      tools: ['Codeigniter', 'Bootstrap', 'jQuery'],
      link: '',
    },
    {
      year: '2020',
      name: 'PRiADI.id',
      tools: ['Codeigniter', 'Bootstrap', 'jQuery'],
      link: 'https://priadi.id',
    },
    {
      year: '2020',
      name: 'PRiADI CBT',
      tools: ['Codeigniter', 'Bootstrap', 'jQuery'],
      link: 'http://test.priadi.id',
    },
    {
      year: '2021',
      name: 'SID-DK-Haji',
      tools: ['Android Studio', 'Retrofit', 'Java'],
      link: '',
    },
    {
      year: '2021',
      name: 'PRiADI Corporate Dashboard',
      tools: ['Codeigniter', 'Bootstrap', 'jQuery'],
      link: '',
    },
    {
      year: '2022',
      name: 'PRiADI Test Desktop',
      tools: ['JavaFX'],
      link: '',
    },
    {
      year: '2022',
      name: 'PRiADI Appointment Maker',
      tools: ['Codeigniter', 'jQuery'],
      link: '',
    },
    {
      year: '2022',
      name: 'PRiADI Recruitment Dashboard',
      tools: ['Codeigniter', 'Bootstrap', 'jQuery'],
      link: '',
    },
    {
      year: '2022',
      name: 'PRiADI Customer Service',
      tools: ['Flutter', 'Retrofit', 'Django'],
      link: '',
    },
    {
      year: '2022',
      name: 'PRiADI Finger Test',
      tools: ['Vue.js', 'Bootstrap', 'Django', 'OpenCV'],
      link: 'https://apps.priadi.id',
    },
    {
      year: '2023',
      name: 'PRiADI Finger Test Mobile',
      tools: ['Flutter', 'OpenCV', 'Django'],
      link: '',
    },
    {
      year: '2023',
      name: 'Nekochigura (Static)',
      tools: ['HTML & CSS', 'Bootstrap'],
      link: 'https://pratamafikri.github.io/nekochigura',
    },
    {
      year: '2023',
      name: 'Portfolio v.1',
      tools: ['React', 'Tailwind CSS'],
      link: 'https://fukurou-shi.vercel.app',
    },
    {
      year: '2023',
      name: 'PRiADI HRIS',
      tools: ['Codeigniter', 'Bootstrap'],
      link: '',
    },
    {
      year: '2023',
      name: 'Kanbanwa (Trello Clone)',
      tools: ['Flutter', 'Firebase'],
      link: 'https://github.com/denasusan/todo_app',
    },
    {
      year: '2024',
      name: 'Portfolio v.2',
      tools: ['Next.js', 'Typescript', 'Tailwind CSS'],
      link: 'https://fikri-mf.vercel.app',
    },
    {
      year: '2024',
      name: 'Fukurou Space',
      tools: ['Next.js', 'Typescript', 'Tailwind CSS'],
      link: 'https://fukurou-space.vercel.app',
    },
  ]

  const sortedProject = projects.reverse()

  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:py-24'>
          <Link href='/' className='inline-flex items-center font-semibold text-primary'>
            <MdArrowBack className='mr-1' /> Back to Portfolio
          </Link>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>Projects</h1>
          <table className='mt-12 w-full border-collapse text-left text-sm'>
            <thead className='sticky top-0 z-10 border-b border-jetblack/30 bg-neutral-100 px-6 py-5 backdrop-blur'>
              <tr>
                <th className='py-4 pr-8 text-sm font-semibold'>Year</th>
                <th className='py-4 pr-8 text-sm font-semibold'>Project</th>
                <th className='hidden py-4 pr-8 text-sm font-semibold lg:table-cell'>Built with</th>
                <th className='hidden py-4 pr-8 text-sm font-semibold lg:table-cell'>Link</th>
              </tr>
            </thead>
            <tbody>
              {sortedProject.map((project, index) => {
                return (
                  <tr key={index}>
                    <td className='py-4 pr-4 lg:table-cell'>{project.year}</td>
                    <td className='hidden py-4 pr-4 font-semibold lg:table-cell'>{project.name}</td>
                    <td className='hidden py-4 pr-4 lg:table-cell'>
                      <ul className='flex flex-wrap'>
                        {project.tools.map((tool, index) => {
                          return <TechBadge key={index} name={tool} />
                        })}
                      </ul>
                    </td>
                    <td className='py-4 pr-4 lg:table-cell'>
                      {project.link ? (
                        <a
                          className='inline-flex items-center group font-semibold hover:text-primary'
                          target='_blank'
                          rel='noreferrer noopener'
                          href={project.link}>
                          <span>
                            {project.link}
                            <MdArrowOutward className='ml-1 inline-block h-4 w-4 shrink-0 -translate-x-px transition-transform group-hover:-translate-y-2 group-focus-visible:-translate-y-2 motion-reduce:transition-none' />
                          </span>
                        </a>
                      ) : (
                        <span className='lg:opacity-0 font-semibold'>{project.name}</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
