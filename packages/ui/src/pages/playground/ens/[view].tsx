/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Global } from '@emotion/core'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/Navbar'
import Header from '../../../components/Header'
import Playground from '../../../components/Playground'

import { useRouter } from 'next/router'
import { useGetAPIfromENSParamInURL } from '../../../hooks/ens/useGetAPIfromENS'
import BottomSpace from '../../../components/BottomSpace'

const PlaygroundPage = () => {
  const router = useRouter()
  const [{ data }] = useGetAPIfromENSParamInURL()
  if (router.asPath !== '/playground' && !router.asPath.includes('/playground/ens/')) {
    router.push('/playground')
  }
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents animate">
            <Header onDark title="Playground" />
            {data !== null && <Playground api={data} />}
          </div>
        </main>
      </Flex>
      <Global
        styles={(theme) => ({
          body: {
            background: 'none' + ' !important',
            backgroundColor: theme.colors.w3shade0 + ' !important',
          },
        })}
      />
    </Layout>
  )
}

export default PlaygroundPage
