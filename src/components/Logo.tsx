interface Props {
    darkMode: boolean
}

const Logo = ({ darkMode }:Props) => {
  return (
    <div className="logo">
      {/*<img src="/images/home.svg" className={"w-8 h-8"} alt="logo" />*/}
        <svg
            id="svg8"
            height={32}
            viewBox="0 0 20.000025 19.99609"
            width={32}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="layer1" transform="translate(-202 -332.652)">
                <g
                    id="g11673"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(200.029 39.998)"
                >
                    <path
                        id="path9547"
                        fill={darkMode ? 'white' : 'black'}
                        d="m11.970703 292.6543c-.809782.0461-1.444684.25255-1.916015.74023l-7.7792974 7.53711c-.3964183.38455-.406037 1.01765-.021484 1.41406.3840137.39696 1.0171248.40744 1.4140625.0234l7.7499999-7.50781c.322687-.28377.785229-.28477 1.107422 0l7.75 7.50781c.396938.38404 1.030049.37356 1.414062-.0234.384554-.39641.374937-1.02951-.02148-1.41406l-7.78125-7.53711c-.543969-.50984-1.268854-.74023-1.91602-.74023z"
                    />
                    <path
                        id="path9909"
                        fill={darkMode ? 'white' : 'black'}
                        d="m5 303.65039a1 1 0 0 0 -1 1v5c0 1.6447 1.3552977 3 3 3h10c1.644702 0 3-1.3553 3-3v-5a1 1 0 0 0 -1-1 1 1 0 0 0 -1 1v5c0 .57129-.4287 1-1 1h-10c-.5713001 0-1-.42871-1-1v-5a1 1 0 0 0 -1-1z"
                    />
                </g>
            </g>
        </svg>

    </div>
  )
}

export default Logo