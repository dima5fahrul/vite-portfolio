interface Props {
  stack: string[]
  classNames?: string
}

const StackTags = ({ stack, classNames = '' }: Props) => {
  if (!stack?.length) return null

  return (
    <ul className={`flex flex-wrap gap-2 ${classNames}`}>
      {
        stack.map((tech) =>
          <li key={tech} className="border dark:border-neutral-600 px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
            {tech}
          </li>
        )
      }
    </ul>
  )
}

export default StackTags
