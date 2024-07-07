import Wayang1 from "../../../assets/Images/DetailWayang/yudhistira.png";

export default function Content() {
  return (
    <section className="detail-wayang pt-12 pb-[72px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="content flex flex-col md:flex-row gap-8">
          <div className="content-left flex justify-center">
            <div className="card">
              <img
                src={Wayang1}
                alt=""
                className="img card-img max-w-full md:max-w-[384px] mb-6 rounded-xl py-[25px] px-[49px] shadow-[0_3px_16px_rgba(0,0,0,0.3)]"
              />
              <h2 className="flex flex-col items-center">Puntadewa</h2>
            </div>
          </div>
          <div className="content-right flex flex-col gap-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Deskripsi Wayang</h2>
            <p>
              Puntadewa atau Yudistira adalah salah satu tokoh sentral dalam epik Mahabharata. Kisahnya dimulai dengan kelahirannya sebagai putra tertua Pandu dan Kunti. Sejak kecil, Yudistira telah menunjukkan sifat-sifat kebijaksanaan, keadilan, dan kesetiaan yang luar biasa.
            </p>
            <p>
              Dalam perjalanan hidupnya, Yudistira menghadapi banyak cobaan dan ujian. Salah satu momen penting dalam kehidupannya adalah permainan dadu yang diatur oleh Duryodana, saudara sepupunya yang iri padanya. Dalam permainan dadu itu, Yudistira kehilangan segalanya, termasuk tanah, harta, dan bahkan saudara-saudaranya. Akhirnya, ia bahkan mempertaruhkan dirinya sendiri dan Kunti.
            </p>
            <p>
              Meskipun demikian, Yudistira memenangkan kembali segalanya dalam permainan dadu terakhir. Namun, kemenangan ini tidak membawa kebahagiaan, karena ia menyadari bahwa harga kemenangan tersebut sangat mahal, dan permainan dadu itu merupakan awal dari perang besar di Kurukshetra.
            </p>
            <p>
              Sebagai pemimpin Pandawa, Yudistira memainkan peran yang sangat penting dalam perang tersebut. Meskipun merasa terpukul oleh kenyataan bahwa perang ini akan menyebabkan banyak penderitaan, Yudistira mengambil tanggung jawabnya sebagai pemimpin dengan penuh keberanian dan keteguhan hati.
            </p>
            <p>
              Di tengah-tengah pertempuran, Yudistira juga menghadapi ujian moral ketika ia harus membunuh Drona, guru besar Pandawa dan Kaurawa, yang bersekutu dengan pihak Kaurawa. Meskipun berat hati, Yudistira melaksanakan tugasnya demi kepentingan yang lebih besar. Pada akhirnya, perang berakhir dengan kemenangan bagi Pandawa, meskipun banyak kerugian dan penderitaan yang terjadi. Yudistira kemudian memerintah dengan bijaksana sebagai raja Hastinapura, memimpin kerajaan dengan keadilan dan kebajikan.
            </p>
            <p>
              Kisah Yudistira dalam cerita Mahabharata menggambarkan perjuangan seorang pemimpin yang harus menghadapi berbagai ujian dan tantangan dalam menjalankan tanggung jawabnya. Meskipun mengalami penderitaan dan kesulitan, Yudistira tetap setia pada nilai-nilai kebaikan dan kebenaran, menjadi contoh yang inspiratif bagi banyak orang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
