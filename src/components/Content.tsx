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
    </>
  )
}

export default Content
