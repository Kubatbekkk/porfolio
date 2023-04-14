import { FC, ReactElement } from "react"

interface CourseProps {
  url?: string,
  children: ReactElement[]
}

const Course = ({ children, url }: CourseProps) => {
  return (
    <>
      {url
        ? (
          <a className="courses__item" href={url} target='_blank'>{children}</a>
        )
        : (
          <div className="courses__item-no">
            {
              children.map(item => item)
            }
          </div>
        )}
    </>
  )
}

export default Course