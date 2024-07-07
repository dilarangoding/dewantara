import museum1 from "../../../assets/Images/Museum/img-museum1.png";
import museum2 from "../../../assets/Images/Museum/img-museum2.png";
import museum3 from "../../../assets/Images/Museum/img-museum3.png";
import museum4 from "../../../assets/Images/Museum/img-museum4.png";
import museum5 from "../../../assets/Images/Museum/img-museum5.png";
import museum6 from "../../../assets/Images/Museum/img-museum6.png";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Content() {
  return (
    <section className="bg-[#E9ECEF] py-12 md:py-18">
      <div className="container mx-auto px-4 md:px-6">
        <div className="event flex flex-col gap-8 md:gap-12">
          <div className="content-top flex flex-col gap-2 items-center text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Kunjungi Museum</h2>
            <span className="text-sm md:text-base text-gray max-w-[90%] md:max-w-[511px]">
              Terbukanya pintu untuk Anda menjelajahi budaya yang terwujud dalam setiap bayangan wayang
            </span>
          </div>
          <div className="content-bottom flex flex-col items-center gap-10 md:gap-14">
            <div className="content-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: museum1, title: "Museum Wayang Jakarta", location: "Jakarta Barat, Jakarta" },
                { img: museum2, title: "Museum Wayang Banyumas", location: "Banyumas, Jawa Tengah" },
                { img: museum3, title: "Museum Wayang Kulit Wonogiri", location: "Wonogiri, Jawa Tengah" },
                { img: museum4, title: "Museum Topeng & Wayang Ubud", location: "Gianyar, Bali" },
                { img: museum5, title: "Museum Wayang Gubug Mojokerto", location: "Mojokerto, Jawa Timur" },
                { img: museum6, title: "Galeri Wayang Purwakarta", location: "Purwakarta, Jawa Barat" }
              ].map((museum, index) => (
                <div key={index} className="card flex flex-col gap-2">
                  <img src={museum.img} alt="" className="card-img" />
                  <div className="card-body flex flex-col gap-2 p-4">
                    <div className="wrapper">
                      <h4 className="text-sm md:text-base font-semibold text-darkBlack mb-1.5">{museum.title}</h4>
                      <div className="wrap flex items-center gap-1 mb-2">
                        <img src={IconLocation} alt="" className="w-4 md:w-6" />
                        <span className="text-xs md:text-sm text-lightBlack font-medium">{museum.location}</span>
                      </div>
                      <button className="btn btn-link flex items-center text-sm md:text-sm ">
                        Lihat Museum
                        <img src={IcArrow} alt="" className="w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
