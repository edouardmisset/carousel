import Carousel from './Carousel'

function App() {
  return (
    <Carousel
      carouselItems={[
        <div>carousel-item 1</div>,
        <div>carousel-item 2</div>,
        <div>carousel-item 3</div>,
        <div>carousel-item 4</div>,
        <div>carousel-item 5</div>,
      ]}
      timeout={2000}
    />
  )
}

export default App
