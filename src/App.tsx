import { useState } from 'react'
import BikeConfigurator from '@/components/bike-configurator/BikeConfigurator'
import Ticket from '@/components/Ticket'
import type { ConfigSelection } from '@/components/bike-configurator/types'

function App() {
  const [selection, setSelection] = useState<ConfigSelection>({})

  return (
    <div className="flex justify-center gap-4">
      <BikeConfigurator selection={selection} setSelection={setSelection} />
      <Ticket selection={selection} />
    </div>
  )
}

export default App
