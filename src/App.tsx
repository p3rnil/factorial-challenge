import { useState } from 'react'
import BikeConfigurator from '@/components/bike-configurator/BikeConfigurator'
import Ticket from '@/components/Ticket'
import type { ConfigSelection } from '@/components/bike-configurator/types'


function App() {
  const [selection, setSelection] = useState<ConfigSelection>({});

  return (
    <div className="flex justify-center gap-4">
      <h1>Marku's bike shop</h1>
      <BikeConfigurator selection={selection} setSelection={setSelection} />
      <Ticket />
    </div>
  )
}

export default App
