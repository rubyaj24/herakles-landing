import { useEffect } from "react"
import FlowingButton from "../components/ui/FlowingButton"

const Merchandise = () => {

  useEffect(() => {
    document.title = "Merchandise | Herakles CET";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const merchandiseData = [
    {
      id: 1,
      name: "Herakles Racing Team T-Shirt",
      description: "Bold design. Track-ready comfort. A piece of the team, wherever you go.",
      price: "₹499",
      imageUrl: "https://placehold.co/600x400?text=Herakles+Racing+Team+T-Shirt"
    },
    {
      id: 2,
      name: "Herakles Racing Cap",
      description: "Iconic branding with everyday wearability. Built to shade champions.",
      price: "₹399",
      imageUrl: "https://placehold.co/600x400?text=Herakles+Racing+Cap"
    },
    {
      id: 3,
      name: "Herakles Racing eBaja Scale Model (1:18)",
      description: "A detailed tribute to our electric beast — built with passion and precision.",
      price: "₹1,299",
      imageUrl: "https://placehold.co/600x400?text=eBaja+Scale+Model"
    },
    {
      id: 4,
      name: "Herakles Racing sBaja Scale Model (1:18)",
      description: "Showcasing our hydrogen-powered machine — for collectors and competitors alike.",
      price: "₹1,299",
      imageUrl: "https://placehold.co/600x400?text=sBaja+Scale+Model"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold">HERAKLES RACING MERCH</h1>
      <span className="text-lg text-gray-600">
        Precision. Grit. Legacy.
      </span>
      <p className="mt-4">
        Herakles Racing merchandise embodies the spirit of engineering excellence and competitive dominance. Our curated selection of performance wear, signature accessories, and collector's items is crafted for those who live for speed, precision, and passion.
      </p>
      {merchandiseData.map(item => (
        <div key={item.id} className="mt-8 p-4 border rounded-lg shadow-md">
          <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-2xl font-semibold mt-4">{item.name}</h2>
          <p className="text-gray-700 mt-2">{item.description}</p>
          <p className="text-xl font-bold mt-2">{item.price}</p>
        </div>
      ))}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600">Limited quantities available.</p>
        <p className="text-lg text-gray-600">Own a piece of the Herakles legacy.</p>
      </div>
      <FlowingButton />
    </div>
  )
}

export default Merchandise