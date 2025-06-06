import ksidclogo from '../assets/sponsors/ksidc-logo.jpg'
import indianoil from '../assets/sponsors/indian-oil-logo.jpg'
import mvd from '../assets/sponsors/mvd-logo.png'
import indcoil from '../assets/sponsors/indcoil-logo.jpg'
import solidworks from '../assets/sponsors/solidworks-logo.jpg'
import alethea from '../assets/sponsors/alethea-logo.jpg'
import bmw from '../assets/sponsors/bmw-logo.jpg'
import aptglobal from '../assets/sponsors/aptglobal-logo.jpg'
import mindpetal from '../assets/sponsors/mindpetal-logo.jpg'
const Sponsors = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mt-6">Our Sponsors</h2>
            <div className="flex flex-wrap justify-center items-center mt-4">
                <img src={ksidclogo} alt="Sponsor 1" className="h-32 m-2" />
                <img src={indianoil} alt="Sponsor 2" className="h-32 m-2" />
                <img src={mvd} alt="Sponsor 3" className="h-32 m-2" />
                <img src={indcoil} alt="Sponsor 4" className="h-32 m-2" />
                <img src={solidworks} alt="Sponsor 5" className="h-32 m-2" />
                <img src={alethea} alt="Sponsor 6" className="h-32 m-2" />
                <img src={bmw} alt="Sponsor 7" className="h-32 m-2" />
                <img src={aptglobal} alt="Sponsor 8" className="h-32 m-2" />
                <img src={mindpetal} alt="Sponsor 9" className="h-32 m-2" />
            </div>
        </div>
    </div>
  )
}

export default Sponsors