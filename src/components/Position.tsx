interface Props {
  job: any,
  isResume?: boolean
  isTools?: boolean
}
const Position = ({ job, isResume, isTools }:Props) => {
  return (
    <div className={`flex md:flex-row flex-col gap-5 items-start w-full p-4 ${isResume && !isTools ? 'mb-5' : ''}`}>
      {
        !isResume &&
        <img src={job.logo} alt={job.company} className="w-20 h-20" />
      }
      <div className="flex w-full flex-col justify-center h-full">
        {
          job.startYear && job.endYear &&
          <p className="font-normal tracking-wide text-gray-500 text-lg">
            {job.company}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{job.startYear} - {job.endYear}
          </p>
        }
        <p className={`${isTools ? 'text-xl text-gray-800' : 'text-2xl py-3'} font-medium`}>
          {job.title}
        </p>
        <p className="font-normal leading-relaxed text-gray-500 text-lg">
          {job.description}
        </p>
      </div>
    </div>
  )
}

export default Position