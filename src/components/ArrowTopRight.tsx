interface Props {
  classNames?: string
}

const ArrowTopRight = ({classNames}:Props) => {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      className={classNames}
    >
      <g>
        <path d="M15,51.3c-0.6,0-1.2-0.2-1.6-0.7c-0.9-0.9-0.9-2.3,0-3.2l30.3-30.3H19.5c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2H49
		c1.2,0,2.2,1,2.2,2.2v29.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V20.5L16.6,50.7C16.2,51.1,15.6,51.3,15,51.3z"
        />
      </g>
    </svg>
  )
}

export default ArrowTopRight