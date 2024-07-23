import { NextPage } from 'next'

import Layout from '@/components/layout'
import useApiData from '@/hooks/use-api-data'
import Airport from '@/types/airport'
import Link from 'next/link'

const Page: NextPage = () => {
  const airports = useApiData<Airport[]>('/api/airports', [])

  return (
    <Layout>
      <h1 className="text-2xl">All Airports</h1>

      <div>
        {airports.map((airport) => (
          <Link
            href={`/airports/${airport.iata.toLowerCase()}`}
            key={airport.iata}
            className="mt-5 flex items-center shadow p-5 border"
          >
            <div>
              {airport.name}, {airport.city}
            </div>
            <div className="ml-auto text-mono">{airport.country}</div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Page
