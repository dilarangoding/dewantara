import React from "react";
import ImageContent from "../../../assets/Images/DetailArtikel/image-content.svg";
import ImageCard from "../../../assets/Images/DetailArtikel/image-card.svg";

export default function Content() {
  return (
    <section className="pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="content flex flex-col gap-10">
          <div className="content-top pb-10 border-b-[1px] border-[#ADB5BD]">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] text-[#212529] mb-6">
              Melacak Jejak Sejarah Wayang Dari Masa Lalu Hingga Kini
            </h2>
            <span className="text-[#6C757D] text-base">
              Melacak Jejak Sejarah Wayang Dari Masa Lalu Hingga Kini
            </span>
          </div>
          <div className="content-bottom flex flex-col lg:flex-row justify-between gap-[25px]">
            <div className="content-bottom-left lg:w-8/12 flex flex-col gap-10">
              <img
                src={ImageContent}
                alt=""
                className="img w-full rounded-lg"
              />
              <p className="text-lightBlack text-base text-justify">
                Lorem ipsum dolor sit amet consectetur. Turpis egestas
                pellentesque eget ipsum donec scelerisque. Fermentum tortor
                ipsum est nam ornare rhoncus urna cras sed. Eros ultrices ut
                purus lorem porttitor massa tortor interdum. Diam est vel enim
                scelerisque imperdiet dolor volutpat platea lorem. Enim a purus
                morbi et. Sit ultricies sed adipiscing consequat dolor dignissim
                ipsum massa vitae. In mauris quis rhoncus eget parturient arcu
                condimentum. Potenti scelerisque ullamcorper vitae dignissim.
                Scelerisque lectus orci tellus nibh.
                <br />
                <br />
                Dictum elementum iaculis neque scelerisque nunc. Vitae dignissim
                ut praesent leo pharetra. Lectus sed curabitur vitae faucibus in
                dis. Lacus blandit nulla justo lacus. Quis et elementum faucibus
                ornare. Vitae elit et non fermentum vel sed ullamcorper sagittis
                ut. Ornare vestibulum cursus id varius sit ac arcu lacus. At
                duis consectetur nibh tellus cras dui. In justo tempor egestas
                donec condimentum mi hendrerit condimentum.
                <br />
                <br />
                Mauris commodo eu mus pulvinar suspendisse lacus eu eget.
                Pellentesque porttitor morbi amet lectus in lectus. Erat
                sagittis id dictum hendrerit viverra consectetur mauris
                vestibulum donec. Eget pulvinar tempus vel varius viverra eu
                sociis. Aliquam volutpat ultricies lobortis suspendisse aliquam
                adipiscing massa etiam dignissim. Blandit mauris in molestie
                dignissim sed massa quam amet. Purus non augue laoreet accumsan
                id sed.
                <br />
                <br />
                Donec vel aliquet adipiscing id turpis potenti dignissim nunc
                tempus. Pellentesque tristique tortor leo donec. Vitae ultricies
                nulla sed at dictumst adipiscing tempus. Ultrices eu urna
                blandit venenatis. Leo libero pharetra lacus in dignissim.
                Ullamcorper volutpat sagittis euismod rhoncus sed scelerisque
                ipsum. Diam nisl cursus a tellus magna. Enim pellentesque proin
                in vel morbi penatibus morbi at aliquam. Ipsum consectetur etiam
                cras natoque tristique vitae. Nunc blandit eleifend velit
                gravida nulla blandit nullam. In turpis lectus egestas justo.
                Dolor vitae nulla risus posuere quis sagittis convallis.
                <br />
                <br />
                Elitaliquet eleifend et quis. Interdum orci curabitur in ornare
                sit fermentum phasellus ipsum. Pulvinar etiam scelerisque at nec
                turpis magna. Metus et eget placerat blandit. Venenatis
                venenatis magna et nulla orci quisque suscipit eget. Laoreet eu
                nisi sit purus turpis adipiscing quam. Et tempor varius diam
                laoreet consectetur sed elementum. Nunc arcu libero ultrices
                quis ornare. Urna ultrices morbi sed sed. Lectus suspendisse
                purus scelerisque eu. Ullamcorper non cras neque neque. Eu
                sagittis id nunc pellentesque lorem senectus. Euismod adipiscing
                ultrices orci proin suspendisse viverra.
              </p>
            </div>
            <div className="content-bottom-right side-bar flex flex-col gap-[22px]">
              <h5 className="text-primary font-bold text-base">
                Artikel Menarik Lainnya
              </h5>
              <div className="wrapper flex flex-col gap-4">
                <div className="side-bar-card flex gap-4">
                  <img src={ImageCard} alt="" className="card-img rounded-lg" />
                  <div className="card-body">
                    <span className="text-base text-gray mb-2">
                      12 Juni 2023 | 5 menit
                    </span>
                    <h5 className="text-base font-semibold">
                      Seni Wayang Kontemporer, Inovasi dalam Tradisi
                    </h5>
                  </div>
                </div>
                <div className="side-bar-card flex gap-4">
                  <img src={ImageCard} alt="" className="card-img rounded-lg" />
                  <div className="card-body">
                    <span className="text-base text-gray mb-2">
                      12 Juni 2023 | 5 menit
                    </span>
                    <h5 className="text-base font-semibold">
                      Seni Wayang Kontemporer, Inovasi dalam Tradisi
                    </h5>
                  </div>
                </div>
                <div className="side-bar-card flex gap-4">
                  <img src={ImageCard} alt="" className="card-img rounded-lg" />
                  <div className="card-body">
                    <span className="text-base text-gray mb-2">
                      12 Juni 2023 | 5 menit
                    </span>
                    <h5 className="text-base font-semibold">
                      Seni Wayang Kontemporer, Inovasi dalam Tradisi
                    </h5>
                  </div>
                </div>
                <div className="side-bar-card flex gap-4">
                  <img src={ImageCard} alt="" className="card-img rounded-lg" />
                  <div className="card-body">
                    <span className="text-base text-gray mb-2">
                      12 Juni 2023 | 5 menit
                    </span>
                    <h5 className="text-base font-semibold">
                      Seni Wayang Kontemporer, Inovasi dalam Tradisi
                    </h5>
                  </div>
                </div>
                <div className="side-bar-card flex gap-4">
                  <img src={ImageCard} alt="" className="card-img rounded-lg" />
                  <div className="card-body">
                    <span className="text-base text-gray mb-2">
                      12 Juni 2023 | 5 menit
                    </span>
                    <h5 className="text-base font-semibold">
                      Seni Wayang Kontemporer, Inovasi dalam Tradisi
                    </h5>
                  </div>
                </div>
                <div className="side-bar-card flex gap-4">
                  <img src={ImageCard} alt="" className="card-img rounded-lg" />
                  <div className="card-body">
                    <span className="text-base text-gray mb-2">
                      12 Juni 2023 | 5 menit
                    </span>
                    <h5 className="text-base font-semibold">
                      Seni Wayang Kontemporer, Inovasi dalam Tradisi
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
