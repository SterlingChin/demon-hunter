import React, { useState } from 'react';
import styled from 'styled-components/macro';

const formatInput = (text) => {
  return text.replace(/[^0-9,]/g, '').split(',')
}
const DemonHunterContainer = styled('div')`
  
`
DemonHunterContainer.displayName = 'DemonHunterContainer'

const InputContainer = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
`
InputContainer.displayName = 'InputContainer'

const TableContainer = styled('p')`
    
`
TableContainer.displayName = 'TableContainer'

export const DemonHunter = () => {
  const [zipCodes, setZipCodes] = useState([])
  const [businessUnits, setBusinessUnits] = useState([])
  const [tableRow, setTableRow] = useState([])
  const [error, setError] = useState(false)
  
  const submit = () => {
    const matchedBusinesses = []
    if(zipCodes.length === 0 || businessUnits.length === 0) return setError(true)
    setError(false)
    formatInput(zipCodes).map(zipCode => {
      return formatInput(businessUnits).map(unit => {
        return matchedBusinesses.push([zipCode, unit])
      })
    })
    setTableRow(matchedBusinesses)
  }

  const clear = () => {
    setZipCodes([])
    setBusinessUnits([])
    setTableRow([])
  }

  return (
    <DemonHunterContainer>
      <h1>DemonHunter</h1>
      <InputContainer>
        <input type='text' id='zip-code' name='zipcodes' placeholder='Zip Codes' onChange={event => setZipCodes(event.target.value)} value={zipCodes}></input>
        <input type='text' id='business-Unit' name='businessUnits' placeholder='Business Units' onChange={event => setBusinessUnits(event.target.value)} value={businessUnits}></input>
        {error && <div>You done messed up A-A-Ron!</div>}
        <button onClick={() => submit()}>Enter</button>
        <button onClick={() => clear()}>Clear</button>
      </InputContainer>
        {tableRow.map((row, i) => 
          <div key={i}>{row[0]} {row[1]}</div>
        )}
    </DemonHunterContainer>
  );
};

export default DemonHunter

