import React, { useState } from 'react';
import styled from 'styled-components/macro';

const formatInput = (text) => {
  return text.replace(/[^0-9,]/g, '').split(',')
}
const ZenGardenContainer = styled('div')`
  width: 550px;
  margin: 15px auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 10px;
`
ZenGardenContainer.displayName = 'ZenGardenContainer'

const InputContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`
InputContainer.displayName = 'InputContainer'

const DataInput = styled('input')`
  height: 34px;
  width: 250px;
  margin: 5px;
  border-radius: 4px;
  padding: 0px 10px;
`
DataInput.displayName = 'DataInput'

const ErrorMessageContainer = styled('div')`
    height: 24px;
`
ErrorMessageContainer.displayName = 'ErrorMessageContainer'

const ErrorMessage = styled('div')`
    color: red;
`
ErrorMessage.displayName = 'ErrorMessage'

const Button = styled('button')`
    margin: 5px;
    width: 132px;
    height: 34px;
    border-radius: 4px;
`
Button.displayName = 'Button'

export const ZenGarden = () => {
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
    setError(false)
  }

  return (
    <ZenGardenContainer >
      <h1>Zen Garden</h1>
      <InputContainer>
        <DataInput type='text' id='zip-code' name='zipcodes' placeholder='Zip Codes' onChange={event => setZipCodes(event.target.value)} value={zipCodes}></DataInput>
        <DataInput type='text' id='business-Unit' name='businessUnits' placeholder='Business Units' onChange={event => setBusinessUnits(event.target.value)} value={businessUnits}></DataInput>
        <ErrorMessageContainer>
          {error && <ErrorMessage>You done messed up A-A-Ron!</ErrorMessage>}
        </ErrorMessageContainer>
      </InputContainer>
      <Button onClick={() => submit()}>Enter</Button>
      <Button onClick={() => clear()}>Clear</Button>
      {/* <audio src='/Koto.mp3' type="audio/mp3" controls>
      </audio> */}
      {tableRow.map((row, i) => 
        <div key={i}>{row[0]} {row[1]}</div>
      )}
    </ZenGardenContainer>
  );
};

export default ZenGarden

