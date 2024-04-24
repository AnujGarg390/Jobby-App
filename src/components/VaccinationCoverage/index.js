// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}K`
    }
    return number.toString()
  }

  const {vaccinationCoverageDetails} = props

  return (
    <div className="vaccination-container">
      <h1 className="vaccination-heading">Vaccination Coverage</h1>
      <BarChart
        data={vaccinationCoverageDetails}
        width={900}
        height={400}
        margin={{top: 5}}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c575d',
            strokeWidth: 1,
            fontFamily: 'Roboto',
            fontSize: 15,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c575d',
            strokeWidth: 0.5,
            fontFamily: 'Roboto',
            fontSize: 15,
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: 12,
          }}
        />
        <Bar
          fill="#5a8dee"
          dataKey="dose1"
          name="dose 1"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          fill="#f54394"
          dataKey="dose2"
          name="dose 2"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
