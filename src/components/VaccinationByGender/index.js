// Write your code here
import {Pie, Cell, Legend, PieChart} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationGenderDetails} = props

  return (
    <div className="vaccination-container">
      <h1 className="vaccination-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationGenderDetails}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell fill="#f54394" name="Male" />
          <Cell fill="#5a8dee" name="Female" />
          <Cell fill="#2cc6c6" name="Others" />
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

export default VaccinationByGender
