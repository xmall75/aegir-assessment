import { Chart as ChartJS, registerables } from 'chart.js'
import { IInstrumentTable } from '../../../types/instrument'
import { Bar, Pie } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import { getItems } from '../../../services/getItems'
import { instrumentQuery, roleStudentTeacherQuery } from '../../../queries/queries'
import { IUserTable } from '../../../types/user'
import { getRoles } from '../../../services/getRoles'

// Chart options & Components for Data Visualization section
ChartJS.register(...registerables)

// Instruments
const instrumentsOptions = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false
      }
    },
    y: {
      grid: {
        drawOnChartArea: false
      }
    }
  }
}

export const InstrumentChart = () => {
  const [instrumentData, setInstrumentData] = useState<IInstrumentTable[] | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getItems('instruments', instrumentQuery)

        setInstrumentData(result as IInstrumentTable[])
      } catch (error) {
        throw new Error(error as string)
      }
    }

    fetchData()
  }, [])

  const data = {
    labels: instrumentData?.map((instrument) => instrument.name),
    datasets: [
      {
        label: 'Students',
        data: instrumentData?.map((instrument) => instrument.students.length),
        backgroundColor: 'rgb(255, 92, 92)'
      },
      {
        label: 'Teachers',
        data: instrumentData?.map((instrument) => instrument.teachers.length),
        backgroundColor: 'rgb(142, 221, 252)'
      }
    ]
  }

  return <Bar data={data} options={instrumentsOptions} />
}

// Users
const usersOptions = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false
  }
}

export const UsersChart = () => {
  const [studentsData, setStudentsData] = useState<IUserTable[] | undefined>(undefined)
  const [teachersData, setTeachersData] = useState<IUserTable[] | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRoles(roleStudentTeacherQuery)

        setStudentsData(result[0].users as IUserTable[])
        setTeachersData(result[1].users as IUserTable[])
      } catch (error) {
        throw new Error(error as string)
      }
    }

    fetchData()
  }, [])

  const data = {
    labels: ['Students', 'Teachers'],
    datasets: [
      {
        label: ' Users',
        backgroundColor: ['rgb(255, 92, 92)', 'rgb(142, 221, 252)'],
        data: [studentsData?.length, teachersData?.length]
      }
    ]
  }

  return <Pie data={data} options={usersOptions} />
}
