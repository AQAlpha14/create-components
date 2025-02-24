import React from 'react'
import Paragraph from './Typography/Paragraph'
import Heading3 from './Typography/Heading3'
import Heading2 from './Typography/Heading2'

const Content = ({ topTitle,heading,bottomTitle, paragraph }) => {
    return (
        <>
            <div className="lg:max-w-[1024px] w-full mx-auto">
          {topTitle && (
            <Heading3
              heading={topTitle}
              className="lg:text-center !text-white"
            />
          )}
          <Heading2 heading={heading} className="lg:text-center !text-white" />
          {bottomTitle && (
            <Heading3
              heading={bottomTitle}
              className="lg:text-center !text-white"
            />
          )}
          {paragraph?.map((para, ind) => (
            <Paragraph
              content={para}
              key={ind}
              className="lg:!text-center !text-white"
            />
          ))}
        </div>
        </>
    )
}

export default Content
