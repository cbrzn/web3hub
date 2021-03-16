/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Select } from 'theme-ui'
import { useState } from 'react'
import { useStateValue } from '../state/state'
import SearchBox from './SearchBox'

const SortNav = () => {
  const [{ dapp }, dispatch] = useStateValue()

  // TODO: Turn this into reusable hook because it also exsits on playground
  const [searchValues, setsearchValues] = useState([])
  const [searchOptions, setsearchOptions] = useState(dapp.apis)
  const handleSearchValuesChange = (values) => setsearchValues(values)
  
  return (
    <nav>
      <form>
        <SearchBox
          detachedResults
          large
          searchBy="id"
          placeholder={'Search'}
          labelField="id"
          valueField="id"
          options={searchOptions}
          values={searchValues}
          onChange={handleSearchValuesChange}
        />
        <br />
        <Flex sx={{ justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
          <span>
            <b>46</b>API's
          </span>
          <div>
            <Select sx={{ minWidth: '150px', border: 'none', color: 'w3lightTeal' }}>
              <option value="HighestRated">Higest Rated</option>
              <option value="MostRecent">Most Recent</option>
              <option value="Alphabetical">Alphabetical</option>
            </Select>
          </div>
        </Flex>
      </form>
    </nav>
  )
}

export default SortNav
