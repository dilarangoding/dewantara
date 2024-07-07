import ImageCard1 from "../../../assets/Images/Event/event-1.png";
import ImageCard2 from "../../../assets/Images/Event/event-2.png";
import ImageCard3 from "../../../assets/Images/Event/event-3.png";
import ImageCard4 from "../../../assets/Images/Event/event-4.png";
import IconCalender from "../../../assets/Icon/icon-calender.png";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Event() {
  return (
    <section className="bg-[#E9ECEF] py-10 md:py-16 lg:py-[72px]">
      <div className="container mx-auto px-4">
        <div className="event flex flex-col gap-8 md:gap-10 lg:gap-12">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2 className="text-2xl md:text-3xl font-bold">Event Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jangan lewatkan event-event menarik yang akan diselenggarakan.
            </span>
          </div>
          <div className="content-bottom flex flex-col items-center gap-8 md:gap-10 lg:gap-14">
            <div className="content-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="card flex flex-col gap-2">
                <img src={ImageCard1} alt="Event 1" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Pagelaran Wayang Kulit HARJASDA
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconCalender}
                        alt="Calendar Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        3 Februari 2024
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Sidoarjo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={ImageCard2} alt="Event 2" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Festival Wayang Orang Indonesia 2023
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconCalender}
                        alt="Calendar Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        18 - 21 Oktober 2023
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Semarang
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={ImageCard3} alt="Event 3" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Spesial Pagelaran Wayang Jawa Timur
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconCalender}
                        alt="Calendar Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        26 - 27 Agustus 2023
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Taman Candra Wilwatikta
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={ImageCard4} alt="Event 4" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Pesta Wayang 2023 - “Mewayang Hayu Eksistensi & Konservasi”
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconCalender}
                        alt="Calendar Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        3 Februari 2024
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Sidoarjo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Lihat Event Lainnya</button>
          </div>
        </div>
      </div>
    </section>
  );
}
