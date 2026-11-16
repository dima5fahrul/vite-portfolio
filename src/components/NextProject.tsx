import {Link} from 'react-router-dom'
import projects from '../../portfolio.json'
import ArrowTopRight from './ArrowTopRight'

interface Props {
    slug: string
}

const shortTitle = (title: string) => title.split(' - ')[0]
const subtitle = (title: string) => title.split(' - ').slice(1).join(' - ')

const NextProject = ({slug}: Props) => {
    const index = projects.findIndex((project) => project.slug === slug)
    if (index < 0) return null

    const previous = projects[(index - 1 + projects.length) % projects.length]
    const next = projects[(index + 1) % projects.length]

    return (
        <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="flex justify-between items-baseline pb-6">
                    <span className="text-gray-500 text-lg">Keep exploring</span>
                    <Link to="/portfolio" className="font-semibold text-lg underline underline-offset-4 dark:text-gray-300">
                        All projects
                    </Link>
                </div>
                <Link
                    to={`/portfolio/${next.slug}`}
                    className="group flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 border-y border-neutral-950 dark:border-gray-300 py-10 lg:py-12"
                >
                    <span className="lg:w-24 shrink-0 text-gray-500 uppercase tracking-widest text-sm">
                        {(index + 2 > projects.length ? 1 : index + 2)} / {projects.length}
                    </span>
                    <div className="grow flex flex-col gap-3">
                        <span className="text-gray-500 uppercase tracking-widest text-sm">Next project</span>
                        <span
                            className="text-5xl md:text-7xl xl:text-8xl leading-none tracking-tight group-hover:underline decoration-2 underline-offset-8">
                            {shortTitle(next.title)}
                        </span>
                        <span className="text-gray-500 text-xl leading-relaxed">{subtitle(next.title)}</span>
                    </div>
                    <div className="lg:w-80 shrink-0 aspect-[17/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                        <img
                            src={next.image}
                            alt={next.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <span
                        className="hidden lg:flex w-20 h-20 shrink-0 items-center justify-center rounded-full border border-neutral-950 dark:border-gray-300 transition-colors duration-200 group-hover:bg-neutral-950 dark:group-hover:bg-gray-300">
                        <ArrowTopRight
                            classNames="w-7 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:fill-white dark:fill-gray-300 dark:group-hover:fill-neutral-900"
                        />
                    </span>
                </Link>
                <div className="flex justify-between pt-6 text-lg text-gray-500">
                    <Link to={`/portfolio/${previous.slug}`} className="hover:underline underline-offset-4">
                        &larr; Previous: {shortTitle(previous.title)}
                    </Link>
                    <span className="hidden sm:inline">{next.stack.slice(0, 2).join(' · ')}</span>
                </div>
            </div>
        </section>
    )
}

export default NextProject
