import { useEffect, useState } from 'react'
import Header from './Header'


function App() {
  const [selectedScheme, setSelectedScheme] = useState('')
  const [color, setColor] = useState('000000')
  const [colorData, setColorData] = useState()

  const handleColorChange = e => {
    setColor(e.target.value.slice(1,7))
    
  }


  console.log(color)
  console.log(selectedScheme)


  return (
    <>
     <Header color={color} handleColorChange={handleColorChange} selectedScheme={selectedScheme} setSelectedScheme={setSelectedScheme} colorData={colorData} setColorData={setColorData}/>
     {colorData && <img className="scheme-image"src={colorData.image.bare} />}
     <div className='scheme-hex-values'>
      {colorData && colorData.colors.map(color => {
        return (
        <p>{color.hex.value}</p>
        )
      })}
      </div>
    </>
  )
}

export default App
