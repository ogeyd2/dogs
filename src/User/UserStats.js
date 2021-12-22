import React from 'react'
import Head from '../Components/Helper/Head'
import useFetch from '../Hooks/useFetch'
import Loading from '../Components/Helper/Loading'
import Error from '../Components/Helper/Error'
import { STATS_GET } from '../api'
const UserStatsGraph = React.lazy(() => import('./UserStatsGraph'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Suas Estatísticas" />
        <UserStatsGraph data={data} />
      </React.Suspense>
    )
  else return null
}

export default UserStats
