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

const TableContainer = styled('table')`
    
`
TableContainer.displayName = 'TableContainer'

const testZips = '92240, 92282, 92276, 92236, 92241, 92234, 92235, 92270, 92253, 92211, 92255, 92260, 92261, 92258, 92262, 92263, 92264, 92201, 92210, 92202, 92203'
const testBusinessUnits = '51893976, 51893712, 51893234, 51893085, 51893076, 51885229'

export const DemonHunter = () => {
  const [zipCodes, setZipCodes] = useState([])
  const [businessUnits, setBusinessUnits] = useState([])
  const [tableRow, setTableRow] = useState()
  const [error, setError] = useState(false)
  
  const alignBusinesses = () => {
    const matchedBusinesses = []
    setZipCodes(testZips)
    setBusinessUnits(testBusinessUnits)
    if(zipCodes.length === 0 || businessUnits.length === 0) return setError(true)
    setError(false)
    formatInput(zipCodes).map(zipCode => {
      return formatInput(businessUnits).map(unit => {
        return matchedBusinesses.push([zipCode, unit])
      })
    })
    setTableRow(matchedBusinesses)
  }

  return (
    <DemonHunterContainer>
      <h1>DemonHunter</h1>
      <InputContainer>
        <input type='text' id='zip-code' name='zipcodes' placeholder={testZips} onChange={event => setZipCodes(event.target.value)}></input>
        <input type='text' id='business-Unit' name='businessUnits' placeholder={testBusinessUnits} onChange={event => setBusinessUnits(event.target.value)}></input>
        {error && <div>You done messed up A-A-Ron!</div>}
        <button onClick={() => alignBusinesses()}>Enter</button>
      </InputContainer>
      <TableContainer>
        <tbody>
        {tableRow && tableRow.map((row, i) => 
          <tr key={i}>
            <td>{row[0]}, {row[1]}</td>
          </tr>
        )}
        </tbody>
      </TableContainer>
    </DemonHunterContainer>
  );
};

export default DemonHunter

