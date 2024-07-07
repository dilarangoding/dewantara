import Content1 from "../../../assets/Images/DetailMuseum/content1.png";
import Content2 from "../../../assets/Images/DetailMuseum/content2.png";
import Content3 from "../../../assets/Images/DetailMuseum/content3.png";
import Content4 from "../../../assets/Images/DetailMuseum/content4.png";

export default function GridImage() {
  return (
    <section className="gridimage py-[72px]">
      <div className="container px-4 md:px-[120px]">
        <div className="content flex flex-col gap-8">
          <div className="content-top flex flex-col items-center text-center">
            <h2 className="text-xl md:text-3xl">Koleksi Museum</h2>
            <span className="subtitle text-base text-gray">
              Beberapa koleksi ini dapat Anda temukan di museum
            </span>
          </div>
          <div className="content-bottom">
            <div className="content-card grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <img src={Content1} alt="" className="img-card" />
              </div>
              <div className="card">
                <img src={Content2} alt="" className="img-card" />
              </div>
              <div className="card">
                <img src={Content3} alt="" className="img-card" />
              </div>
              <div className="card">
                <img src={Content4} alt="" className="img-card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
