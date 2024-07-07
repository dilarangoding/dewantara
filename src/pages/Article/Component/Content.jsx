import tikel1 from "../../../assets/Images/Article/img-article1.png";
import tikel2 from "../../../assets/Images/Article/img-article2.png";
import tikel3 from "../../../assets/Images/Article/img-article3.png";

export default function Content() {
  return (
    <section className="artikel py-16">
      <div className="container mx-auto px-4">
        <div className="event flex flex-col gap-12">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">Artikel Kami</h2>
            <span className="text-base text-gray-600 text-center max-w-md">
              Perkaya pengetahuan tentang keajaiban budaya Dunia Perwayangan
            </span>
          </div>
          <div className="content-center flex flex-col gap-14">
            <div className="content-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card flex flex-col gap-2">
                <img src={tikel1} alt="" className="card-img w-full h-auto" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1">
                      Melacak Jejak Sejarah Wayang Dari Masa Lalu Hingga Kini
                    </h4>
                    <div className="wrap flex items-center gap-2">
                      <span className="text-sm font-normal text-gray-600">
                        Telusuri perjalanan panjang wayang dan bagaimana seni
                        ini telah berkembang, tetap memegang keasliannya
                        sepanjang sejarah Indonesia.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={tikel2} alt="" className="card-img w-full h-auto" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1">
                      Seni Wayang Kontemporer : Inovasi dalam Tradisi
                    </h4>
                    <div className="wrap flex items-center gap-2">
                      <span className="text-sm font-normal text-gray-600">
                        Temukan bagaimana seniman-seniman masa kini menghadirkan
                        sentuhan kontemporer pada seni wayang, menciptakan karya
                        yang memikat hati.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={tikel3} alt="" className="card-img w-full h-auto" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1">
                      Menggali Makna dalam Wayang Simbolisme di Balik Setiap
                      Karakter
                    </h4>
                    <div className="wrap flex items-center gap-2">
                      <span className="text-sm font-normal text-gray-600">
                        Pelajari makna filosofis di balik karakter-karakter
                        wayang, membuka pintu wawasan tentang kebijaksanaan dan
                        perenungan.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <nav aria-label="Pagination">
                <ul className="pagination flex flex-wrap gap-2 justify-center">
                  <li className="pagination-item">
                    <a
                      className="pagination-link py-2 px-3 border rounded-md"
                      href="/#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">Sebelumnya</span>
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link py-2 px-3 border rounded-md" href="/#">
                      1
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link py-2 px-3 border rounded-md" href="/#">
                      2
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link py-2 px-3 border rounded-md" href="/#">
                      3
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link py-2 px-3 border rounded-md" href="/#">
                      4
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link py-2 px-3 border rounded-md" href="/#">
                      5
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a
                      className="pagination-link py-2 px-3 border rounded-md"
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
