import { InstrumentChart, UsersChart } from './_charts/charts'

const DataVisualization = () => {
  return (
    <div className="my-5 lg:my-10 w-[95%] lg:w-[80%] xl:w-[75%] mx-auto">
      <h2>Data Analytics & Visualization</h2>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-2 md:gap-3 lg:gap-5">
        <div className="w-full md:w-[70%]">
          <p className="text-center">Students vs. Teachers for Each Instrument</p>
          <InstrumentChart />
        </div>
        <div className="w-1/2 md:w-[30%]">
          <p className="text-center">Total Users</p>
          <UsersChart />
        </div>
      </div>
    </div>
  )
}

export default DataVisualization
