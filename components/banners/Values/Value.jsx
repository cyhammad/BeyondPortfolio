import React from 'react'

const Value = ({title, subtitle, number}) => {
  return (
    <div className="flex flex-col py-[2vw] border-b border-gray-300">
        <div className="flex justify-between">
            <div className="font-macklindisplay leading-[3.5vw] text-[4vw]">
                {title}
            </div>
            <div className="text-[1.5vw]">
                {number}
            </div>
        </div>
        <div className="font-gthaptik">
            {subtitle}
        </div>
    </div>
  )
}

export default Value