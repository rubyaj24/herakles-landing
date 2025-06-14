import ksidclogo from '../assets/sponsors/ksidc.webp'
import indianoil from '../assets/sponsors/indian-oil-logo.jpg'
import mvd from '../assets/sponsors/mvd.webp'
import indcoil from '../assets/sponsors/indcoil-logo.jpg'
import solidworks from '../assets/sponsors/solidworks-logo.jpg'
import alethea from '../assets/sponsors/alethea-logo.jpg'
import bmw from '../assets/sponsors/bmw.webp'
import aptglobal from '../assets/sponsors/apt.webp'
import mindpetal from '../assets/sponsors/Mindpetal.webp'
import cetaa from '../assets/sponsors/cetaa.webp'
import altair from '../assets/sponsors/altair.webp'
import logo from '../assets/sponsors/logo.jpg';

// Bmw,CETAA, MINDPETAL, mvd ,ksidc, apt global, althea, c2m , Altair, solidworks,ansys, indianoil,indian coil

const Sponsors = () => {

  const sponsors = [
    bmw,
    cetaa,
    mindpetal,
    mvd,
    ksidclogo,
    aptglobal,
    alethea,
    altair,
    solidworks,
    indianoil,
    indcoil,
    logo
  ];
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mt-6">Our Sponsors</h2>
            <div className="flex flex-wrap justify-center items-center mt-4">
                {sponsors.map((sponsor, index) => (
                    <img key={index} src={sponsor} alt={`Sponsor ${index + 1}`} className="h-32 m-2 p-2 gap-2" />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sponsors