import DataAddition from './DataAddition/DataAddition'
import DataVisualization from './DataVisualization/DataVisualization'
import HeroMain from './Hero/HeroMain'

const Content = () => {
  return (
    <>
      <div className="w-full text-center">
        <h1>Aegir Assessment</h1>
      </div>
      <HeroMain />
      <DataVisualization />
      <DataAddition />
    </>
  )
}

export default Content
