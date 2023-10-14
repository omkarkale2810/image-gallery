import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url:"/cycloA.jpg"},
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url:"/cyclokid.jpg" },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: "/11.jpg" },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: "/g.jpg" },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: "/13.jpg" },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: "/cyclo1.jpeg" },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: "/cyclo2.jpg" },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: "/8.jpg" },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: "/27.jpg" }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
