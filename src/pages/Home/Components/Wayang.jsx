import Wayang1 from "../../../assets/Images/DetailWayang/yudhistira.png";
import Wayang2 from "../../../assets/Images/DetailWayang/yudhistira.png";
import Wayang3 from "../../../assets/Images/DetailWayang/yudhistira.png";
import Wayang4 from "../../../assets/Images/DetailWayang/yudhistira.png";
import Wayang5 from "../../../assets/Images/DetailWayang/yudhistira.png";
import Wayang6 from "../../../assets/Images/DetailWayang/yudhistira.png";
import Wayang7 from "../../../assets/Images/DetailWayang/yudhistira.png";
import Wayang8 from "../../../assets/Images/DetailWayang/yudhistira.png";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IcSearch from "../../../assets/Icon/icon-search.svg";

export default function Wayang() {
  return (
    <section className="py-18 pb-10 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="wayang flex flex-col gap-12">
          <div className="content-top flex flex-col items-center justify-center gap-2">
            <h2 className="text-center text-2xl md:text-3xl">Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jelajahi dunia perwayangan agar lebih mengenal wayang di Indonesia
            </span>
          </div>
          <div className="content-bottom flex flex-col gap-12 items-center">
            <div className="wrapper flex items-center gap-4 justify-center">
              <div className="wrap-search w-full max-w-md">
                <form action="" className="inline-flex w-full">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="outline-none rounded-l border-2 border-[#ADB5BD] px-4 py-2.5 w-full"
                    placeholder="Cari Wayang..."
                  />
                  <button className="btn btn-search rounded-r border-2 border-[#ADB5BD] px-4 py-2.5 bg-gray-100">
                    <img src={IcSearch} alt="Search Icon" />
                  </button>
                </form>
              </div>
            </div>
            <div className="content-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[Wayang1, Wayang2, Wayang3, Wayang4, Wayang5, Wayang6, Wayang7, Wayang8].map((wayang, index) => (
                <div className="card rounded-lg overflow-hidden" key={index}>
                  <img src={wayang} alt={`Wayang ${index + 1}`} className="card-img py-6 px-12" />
                  <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                    <div className="wrap">
                      <h4 className="text-base font-semibold text-darkBlack">
                        Werkudara
                      </h4>
                      <span className="text-sm text-gray font-medium">
                        Wayang Kulit
                      </span>
                    </div>
                    <button className="btn btn-icon">
                      <img src={IcArrow} alt="Arrow Icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary">Lihat Wayang Lainnya</button>
          </div>
        </div>
      </div>
    </section>
  );
}
