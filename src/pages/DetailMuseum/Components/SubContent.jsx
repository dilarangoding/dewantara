import IconLocation from "../../../assets/Icon/icon-loc.png";
import IconCalender from "../../../assets/Icon/icon-calender.png";
import IconTicket from "../../../assets/Icon/Ticket.svg";

export default function SubContent() {
  return (
    <section className="pt-12 pb-[72px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="detail-museum flex flex-col md:flex-row justify-between gap-8 md:gap-16">
          <div className="content-left flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Tentang Museum</h2>
            <div className="subtext text-justify max-w-full md:max-w-[662px]">
              <p>
                Bangunan Museum Wayang dulunya merupakan sebuah gereja tua yang
                didirikan oleh VOC pada tahun 1640 dengan nama 'de oude
                Hollandsche Kerk'. Kemudian, gedung tersebut berfungsi sebagai
                tempat peribadatan penduduk sipil dan tentara Belanda yang
                tinggal di Batavia, Jakarta sampai tahun 1732. Lalu, pada tahun
                1733, gereja tersebut berubah nama menjadi "de nieuwe
                Hollandsche Kerk" yang berdiri sampai tahun 1808. Kemudian,
                bangunan tersebut hancur akibat gempa bumi.{" "}
              </p>
              <br />
              <p>
                Setelah dibedah, bangunan itu diserahkan kepada Stichting Oud
                Batavia untuk dijadikan museum yang diberi nama de Oude
                Bataviasche Museum atau Museum Batavia Lama.
              </p>
              <br />
              <p>
                Dua belas tahun setelah proklamasi kemerdekaan 1945, tepatnya
                pada tahun 1957, pemerintah menyerahkan gedung Museum Batavia
                Lama kepada Lembaga Kebudayaan Indonesia. Nama bangunan itu
                Museum Jakarta Lama, yang kemudian berubah menjadi Museum
                Jakarta pada 1 Agustus 1960.
              </p>
              <br />
              <p>
                Pada tahun 1968, Museum Jakarta kemudian diserahkan kepada
                Pemerintah Provinsi DKI Jakarta. Lalu, Museum Jakarta berubah
                menjadi Museum Wayang yang diresmikan pada tanggal 13 Agustus
                1975 oleh Ali Sadikin, Gubernur DKI Jakarta pada waktu itu.
              </p>
            </div>
          </div>
          <div className="content-right">
            <div className="board py-4 px-6 inline-flex flex-col shadow-[0_3px_16px_rgba(0,0,0,0.3)] rounded-xl gap-6">
              <h2 className="pb-4 border-b-[1px] border-[#CED4DA] text-xl md:text-2xl lg:text-3xl font-bold">
                Papan Informasi
              </h2>
              <div className="wrapper flex flex-col gap-8">
                <div className="wrap flex items-start gap-4">
                  <div className="icon inline-flex p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.3)] w-[100px] md:w-[36px] h-[36px] rounded">
                    <img
                      src={IconLocation}
                      alt="Location Icon"
                      className="ic w-full h-full object-contain"
                    />
                  </div>
                  <div className="subtext flex flex-col gap-2">
                    <h3 className="subtext-subtext text-[24px] font-semibold">
                      Lokasi Museum
                    </h3>
                    <p className="subtext-desc max-w-full md:max-w-[362px]">
                      Jalan Pintu Besar Utara No.27 Pinangsia, RT.3/RW.6, Kota
                      Tua, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus
                      Ibukota Jakarta
                    </p>
                  </div>
                </div>
                <div className="wrap flex items-start gap-4">
                  <div className="icon inline-flex p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.3)] w-[52px] md:w-[36px] h-[36px] rounded">
                    <img
                      src={IconCalender}
                      alt="Calendar Icon"
                      className="ic w-full h-full object-contain"
                    />
                  </div>
                  <div className="subtext flex flex-col gap-2">
                    <h3 className="subtext-subtext text-[24px] font-semibold">
                      Jam Operasional
                    </h3>
                    <p className="subtext-desc max-w-full md:max-w-[362px]">
                      Hari : Selasa - Minggu & Hari Libur Nasional Waktu : 09.00
                      - 15.00 WIB
                    </p>
                  </div>
                </div>
                <div className="wrap flex items-start gap-4">
                  <div className="icon inline-flex p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.3)] w-[36px] h-[36px] rounded">
                    <img
                      src={IconTicket}
                      alt="Ticket Icon"
                      className="ic w-full h-full object-contain"
                    />
                  </div>
                  <div className="subtext flex flex-col gap-2">
                    <h3 className="subtext-subtext text-[24px] font-semibold">
                      Harga Tiket Masuk
                    </h3>
                    <p className="subtext-desc max-w-full md:max-w-[362px]">
                      <ul>
                        <li>
                          Perorangan
                          <ul>
                            <li>Anak/Pelajar : Rp2.000</li>
                            <li>Mahasiswa : Rp3.000</li>
                            <li>Dewasa : Rp5.000</li>
                          </ul>
                        </li>
                        <br />
                        <li>
                          Rombongan
                          <ul>
                            <li>Anak/Pelajar : Rp1.500</li>
                            <li>Mahasiswa : Rp2.250</li>
                            <li>Dewasa : Rp3.750</li>
                          </ul>
                        </li>
                      </ul>
                    </p>
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
