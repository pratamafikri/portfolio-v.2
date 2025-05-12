import { Metadata } from 'next'
import Link from 'next/link'
import { MdArrowBack, MdArrowOutward } from 'react-icons/md'
import TechBadge from '../components/TechBadge'
import { projects } from './projects'

export const metadata: Metadata = {
  title: 'Projects | Fikri',
}

export default function ProjectPage() {
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
