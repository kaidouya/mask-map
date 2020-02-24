import React, { useEffect, useState } from 'react'
import BodyCOntainer from './BodyContainer'

const sixSchoolApi =
  'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json'

const App = () => {
  const [storeList, setStoreList] = useState([])

  const fetchData = async url => {
    const response = await fetch(url)
    const data = await response.json()
    setStoreList(data.features)
  }

  // 取得診所資料 + 使用者的定位資料
  useEffect(() => {
    // fetchData(sixSchoolApi);
  }, [])

  return (
    <>
      <BodyCOntainer />
    </>
  )
}

export default App
