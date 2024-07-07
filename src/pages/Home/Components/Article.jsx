import tikel1 from "../../../assets/Images/Article/img-article1.png";
import tikel2 from "../../../assets/Images/Article/img-article2.png";
import tikel3 from "../../../assets/Images/Article/img-article3.png";
import pipel from "../../../assets/Images/Article/ill-people.png";

export default function Article() {
  return (
    <section className="artikel py-10 md:py-16 lg:py-[72px]">
      <div className="container mx-auto px-4">
        <div className="event flex flex-col gap-8 md:gap-10 lg:gap-12">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2 className="text-2xl md:text-3xl font-bold">Artikel Kami</h2>
            <span className="text-base text-gray text-center max-w-[344px]">
              Perkaya pengetahuan tentang keajaiban budaya Dunia Perwayangan
            </span>
          </div>
          <div className="content-center flex flex-col gap-8 md:gap-12 lg:gap-14">
            <div className="content-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="card flex flex-col gap-2">
                <img src={tikel1} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1">
                      Melacak Jejak Sejarah Wayang Dari Masa Lalu Hingga Kini
                    </h4>
                    <div className="wrap flex items-center gap-2">
                      <span
                        className="text-sm font-normal"
                        style={{ color: "#6C757D" }}
                      >
                        Telusuri perjalanan panjang wayang dan bagaimana seni
                        ini telah berkembang, tetap memegang keasliannya
                        sepanjang sejarah Indonesia.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={tikel2} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1">
                      Seni Wayang Kontemporer : Inovasi dalam Tradisi
                    </h4>
                    <div className="wrap flex items-center gap-2">
                      <span
                        className="text-sm font-normal"
                        style={{ color: "#6C757D" }}
                      >
                        Temukan bagaimana seniman-seniman masa kini menghadirkan
                        sentuhan kontemporer pada seni wayang, menciptakan karya
                        yang memikat hati.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={tikel3} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1">
                      Menggali Makna dalam Wayang Simbolisme di Balik Setiap
                      Karakter
                    </h4>
                    <div className="wrap flex items-center gap-2">
                      <span
                        className="text-sm font-normal"
                        style={{ color: "#6C757D" }}
                      >
                        Pelajari makna filosofis di balik karakter-karakter
                        wayang, membuka pintu wawasan tentang kebijaksanaan dan
                        perenungan.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-join bg-white flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8 px-4 md:px-12 rounded-[30px] shadow-[0_2px_12px_rgba(0,0,0,0.11)]">
              <div className="content-image">
                <img src={pipel} alt="" className="card-img max-w-[200px] md:max-w-[331px]" />
              </div>
              <div className="content-text text-center md:text-left">
                <h1 className="mb-6 subtext-title text-black text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Ayo gabung grup Komunitas <br />
                  Pecinta Wayang kami di Telegram!
                </h1>
                <button className="btn btn-primary mx-auto md:mx-0">Gabung Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
