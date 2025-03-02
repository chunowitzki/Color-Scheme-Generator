import { useEffect } from "react"
export default function Header(props) {
    const { color, handleColorChange, selectedScheme, setSelectedScheme, colorData, setColorData} = props

    function handleSubmit() {
        fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${selectedScheme}`)
            .then(res => {
              if(!res.ok) {
                throw new Error(console.log(error))
              }
              return res.json()
            })
            .then(data => setColorData(data))
          console.log(colorData)
      }
    return (
        <header>
             <input type='color' value={color} onChange={handleColorChange}/>
            <select value={selectedScheme} onChange={e => setSelectedScheme(e.target.value)} >
                <option value="monochrome">monochrome</option>
                <option value="monochrome-dark">monochrome-dark</option>
                <option value="monochrome-light">monochrome-light</option>
                <option value="analogic">analogic</option>
                <option value="complement">complement</option>
                <option value="analogic-complement">analogic-complement</option>
                <option value="triad">triad</option>
                <option value="quad">quad</option>
            </select>
            <button onClick={handleSubmit}>Get Color Scheme</button>
        </header>
    )
}