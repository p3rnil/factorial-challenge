import BikeConfigurator from '@/components/bike-configurator/BikeConfigurator'
import Ticket from '@/components/Ticket'

function App() {
  return (
    <div className="flex justify-center gap-4">
      <div>Marku's bike shop</div>
      <BikeConfigurator />
      <Ticket />
    </div>
  )
}

export default App
