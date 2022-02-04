import { useEffect, useState, cloneElement, ReactElement } from 'react'
import './Carousel.css'

const Carousel: (
  carouselItems: any,
  timeout: number,
  attributes: any
) => ReactElement = ({ carouselItems, timeout = 4000, ...rest }) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const scrollInterval = setTimeout(() => {
      setActive((active + 1) % carouselItems.length)
    }, timeout)
    return () => clearTimeout(scrollInterval)
  }, [active, carouselItems.length, timeout])

  return (
    <div className="carousel">
      {carouselItems.map((item: any, index: number) =>
        cloneElement(item, {
          key: index,
          className: `carousel-item${active === index ? ' visible' : ''}`,
          ...rest,
        })
      )}
    </div>
  )
}

export default Carousel
