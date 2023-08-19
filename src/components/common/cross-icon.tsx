import { useState } from 'react'

const ArrowCrossIcon = () => {
  const [isArrowIcon, setIsArrowIcon] = useState(false)

  return (
    <div
      className={`${
        isArrowIcon ? 'rotate-90' : 'cross rotate-180'
      } cross-arrow-icon relative flex h-3 w-3 cursor-pointer items-center justify-center transition-all duration-200`}
      onClick={() => setIsArrowIcon(!isArrowIcon)}
    >
      <div className="stroke rotate-45 bg-white" />
      <div className="stroke -rotate-45 bg-white" />
      <div className="stroke rotate-45 bg-white stroke-1 opacity-0" />
      <div className="stroke -rotate-45 bg-white stroke-2 opacity-0" />
    </div>
  )
}

export default ArrowCrossIcon
