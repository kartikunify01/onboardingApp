import PlanChooser from './PlanChooser'
import DisplayPlan from './DisplayPlan'

const PlanDetails = () => {
  return (
    <div className='flex flex-col p-2'>
        <PlanChooser />
        <DisplayPlan />

    </div>
  )
}

export default PlanDetails