import './index.css'

const SkillsCard = props => {
  const {skillDetails} = props
  const {imageUrl, name} = skillDetails
  return (
    <li className="skill-item-container">
      <div className="skill-container">
        <img src={imageUrl} className="skill-image" alt={name} />
        <p className="skill-name">{name}</p>
      </div>
    </li>
  )
}

export default SkillsCard
