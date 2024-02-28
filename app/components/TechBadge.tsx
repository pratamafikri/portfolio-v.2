export default function TechBadge({ name }: { name: string }): JSX.Element {
  return (
    <li className='mr-1.5 mt-2'>
      <div className='flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary '>
        {name}
      </div>
    </li>
  )
}
