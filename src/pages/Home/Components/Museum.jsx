import museum1 from "../../../assets/Images/Museum/img-museum1.png";
import museum2 from "../../../assets/Images/Museum/img-museum2.png";
import museum3 from "../../../assets/Images/Museum/img-museum3.png";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Museum() {
  return (
    <section className="bg-[#E9ECEF] py-12 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="event flex flex-col gap-12">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2 className="text-center text-2xl md:text-3xl">Museum</h2>
            <span className="text-base text-gray text-center max-w-[511px]">
              Terbukanya pintu untuk Anda menjelajahi budaya yang terwujud dalam
              setiap bayangan wayang
            </span>
          </div>
          <div className="content-bottom flex flex-col items-center gap-14">
            <div className="content-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[museum1, museum2, museum3].map((museum, index) => (
                <div className="card flex flex-col gap-2" key={index}>
                  <img src={museum} alt={`Museum ${index + 1}`} className="card-img" />
                  <div className="card-body flex flex-col gap-2">
                    <div className="wrapper">
                      <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                        Museum Wayang {index === 0 ? 'Jakarta' : index === 1 ? 'Banyumas' : 'Kulit Wonogiri'}
                      </h4>
                      <div className="wrap flex items-center gap-1">
                        <img src={IconLocation} alt="Location Icon" className="max-w-[24px]" />
                        <span className="text-sm text-lightBlack font-medium">
                          {index === 0 ? 'Jakarta Barat, Jakarta' : index === 1 ? 'Banyumas, Jawa Tengah' : 'Wonogiri, Jawa Tengah'}
                        </span>
                      </div>
                      <button className="btn btn-link flex items-center gap-1">
                        Lihat Museum
                        <img src={IcArrow} alt="Arrow Icon" className="max-w-[16px]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary">Lihat Museum Lainnya</button>
          </div>
        </div>
      </div>
    </section>
  );
}
