import Wayang1 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang2 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang3 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang4 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang5 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang6 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang7 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang8 from "../../../assets/Images/Wayang/puntadewa.png";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IcSearch from "../../../assets/Icon/icon-search.svg";
import IcScan from "../../../assets/Icon/icon-scan.svg";

export default function Content() {
  return (
    <section className="py-[72px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="wayang flex flex-col gap-12">
          <div className="content-top flex flex-col items-center justify-center gap-2">
            <h2>Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jelajahi dunia perwayangan agar lebih mengenal wayang di Indonesia
            </span>
          </div>
          <div className="content-bottom flex flex-col gap-12 items-center">
            <div className="wrapper flex flex-col md:flex-row items-center gap-4 justify-center">
              <div className="wrap-search w-full md:w-auto">
                <form action="" className="inline-flex w-full">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="outline-none rounded-l-lg border-2 border-[#ADB5BD] px-4 py-2.5 w-full md:w-[500px]"
                  />
                  <button className="btn btn-search">
                    <img src={IcSearch} alt="" />
                    Cari
                  </button>
                </form>
              </div>
              <button className="btn btn-scan flex items-center">
                <img src={IcScan} alt="" />
                <span className="ml-2">Scan Disini</span>
              </button>
            </div>
            <div className="content-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[Wayang1, Wayang2, Wayang3, Wayang4, Wayang5, Wayang6, Wayang7, Wayang8].map((wayang, index) => (
                <div key={index} className="card rounded-lg overflow-hidden">
                  <img src={wayang} alt="" className="card-img w-full" />
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
                      <img src={IcArrow} alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <nav aria-label="Pagination" className="w-full">
                <ul className="pagination flex flex-wrap justify-center gap-2">
                  <li className="pagination-item">
                    <a
                      className="pagination-link p-2 border rounded-md"
                      href="/#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">Sebelumnya</span>
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link p-2 border rounded-md" href="/#">
                      1
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link p-2 border rounded-md" href="/#">
                      2
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link p-2 border rounded-md" href="/#">
                      3
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link p-2 border rounded-md" href="/#">
                      4
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link p-2 border rounded-md" href="/#">
                      5
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a
                      className="pagination-link p-2 border rounded-md"
                      href="/#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">Selanjutnya</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
