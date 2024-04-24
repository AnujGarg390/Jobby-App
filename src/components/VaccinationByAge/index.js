// Write your code here
import {Pie, Cell, Legend, PieChart} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationAgeDetails} = props

  return (
    <div className="vaccination-container">
      <h1 className="vaccination-heading">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationAgeDetails}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell fill="#2d87bb" name="18-44" />
          <Cell fill="#64c2a6" name="44-60" />
          <Cell fill="#a3df9f" name="Above 60" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
