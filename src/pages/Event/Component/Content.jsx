import ImageCard1 from "../../../assets/Images/Event/event-1.png";
import ImageCard2 from "../../../assets/Images/Event/event-2.png";
import ImageCard3 from "../../../assets/Images/Event/event-3.png";
import ImageCard4 from "../../../assets/Images/Event/event-4.png";
import ImageCard5 from "../../../assets/Images/Event/event-5.png";
import ImageCard6 from "../../../assets/Images/Event/event-6.png";
import IconCalender from "../../../assets/Icon/icon-calender.png";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Content() {
  return (
    <section className="bg-[#E9ECEF] py-[72px]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="event flex flex-col gap-12 mb-16">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2>Event Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jangan lewatkan event-event menarik yang akan diselenggarakan.
            </span>
          </div>
          <div className="content-bottom flex flex-col items-center gap-14">
            <div className="content-card grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: ImageCard1, title: "Pagelaran Wayang Kulit HARJASDA", date: "3 Februari 2024", location: "Sidoarjo" },
                { img: ImageCard2, title: "Festival Wayang Orang Indonesia 2023", date: "18 - 21 Oktober 2023", location: "Semarang" },
                { img: ImageCard3, title: "Spesial Pagelaran Wayang Jawa Timur", date: "26 - 27 Agustus 2024", location: "Taman Candra Wilwatikta" },
                { img: ImageCard4, title: "Pesta Wayang 2023 - “Mewayang Hayu Eksistensi & Konservasi”", date: "3 Februari 2024", location: "Sidoarjo" },
                { img: ImageCard5, title: "Pesta Rakyat Hari Bhayangkara ke-77", date: "1 Juli 2024", location: "Bali" },
                { img: ImageCard6, title: "Pesta Rakyat Jawa Barat Pagelaran Seni Budaya Siliwangi", date: "21 Maret 2024", location: "Bandung" }
              ].map((event, index) => (
                <div key={index} className="card flex flex-col gap-2">
                  <img src={event.img} alt="" className="card-img" />
                  <div className="card-body flex flex-col gap-2">
                    <h4 className="text-base font-semibold text-darkBlack">{event.title}</h4>
                    <div className="wrapper">
                      <div className="wrap flex items-center gap-1">
                        <img src={IconCalender} alt="" className="max-w-[24px]" />
                        <span className="text-sm text-lightBlack font-medium">{event.date}</span>
                      </div>
                      <div className="wrap flex items-center gap-1">
                        <img src={IconLocation} alt="" className="max-w-[24px]" />
                        <span className="text-sm text-lightBlack font-medium">{event.location}</span>
                      </div>
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
