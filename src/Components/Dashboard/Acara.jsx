import gambar from "../../assets/acaraLanding.svg";

const data = [
  {
    header: "Bazar Ramadhan",
    agenda: "Kuliner",
    tanggal: "07/Mei/2023",
    jam: "15.30 - 17.00",
    kota: "Bandung",
  },
  {
    header: "Bazar Ramadhan",
    agenda: "Kuliner",
    tanggal: "07/Mei/2023",
    jam: "15.30 - 17.00",
    kota: "Bandung",
  },
  {
    header: "Bazar Ramadhan",
    agenda: "Kuliner",
    tanggal: "07/Mei/2023",
    jam: "15.30 - 17.00",
    kota: "Bandung",
  },
  {
    header: "Bazar Ramadhan",
    agenda: "Kuliner",
    tanggal: "07/Mei/2023",
    jam: "15.30 - 17.00",
    kota: "Bandung",
  },
  {
    header: "Bazar Ramadhan",
    agenda: "Kuliner",
    tanggal: "07/Mei/2023",
    jam: "15.30 - 17.00",
    kota: "Bandung",
  },
  {
    header: "Bazar Ramadhan",
    agenda: "Kuliner",
    tanggal: "07/Mei/2023",
    jam: "15.30 - 17.00",
    kota: "Bandung",
  },
  {
    header: "Bazar Ramadhan",
    agenda: "Kuliner",
    tanggal: "07/Mei/2023",
    jam: "15.30 - 17.00",
    kota: "Bandung",
  },
  {
    header: "Bazar Ramadhan",
    agenda: "Kuliner",
    tanggal: "07/Mei/2023",
    jam: "15.30 - 17.00",
    kota: "Bandung",
  },
  {
    header: "Bazar Ramadhan",
    agenda: "Kuliner",
    tanggal: "07/Mei/2023",
    jam: "15.30 - 17.00",
    kota: "Bandung",
  },
];

const Acara = () => {
  return (
    <>
      <div className="lg:h-screen lg:pb-0 pb-10 bg-gradient-to-b from-cust-secondary200 from-10% via-cust-secondary100 via-20% to-cust-secondary200 to-90% font-poppins">
        <div className="md:w-fit w-10/12 mx-auto md:text-4xl sm:text-3xl text-2xl font-bold text-black pt-20">
          Acara
        </div>
        <div className="md:w-fit w-10/12 mx-auto md:text-4xl sm:text-3xl text-2xl font-bold text-black pt-3">
          UMKM - Community
        </div>
        <div className="w-10/12 mx-auto text-black md:text-lg sm:text-base text-sm text-justify my-10">
          Acara UMKMCommunity adalah fitur yang menonjol dalam wesbite kami.
          Fitur ini menyediakan platform untuk para pelaku UMKM mengikuti dan
          berpartisipasi dalam bazar dan seminar eksklusif. Bazar ini memberikan
          kesempatan kepada pelaku UMKM untuk memamerkan produk dan layanan
          mereka, sementara seminar disusun khusus untuk meningkatkan pemahaman
          dan keterampilan bisnis.
        </div>

        <div className="carousel carousel-center rounded-box w-full">
          {data.map((index, i) => (
            <div
              className="xl:w-3/12 lg:w-4/12 w-[300px] mx-auto carousel-item py-2"
              key={i}
            >
              <div className="w-10/12 mx-auto bg-gray-300 p-3 rounded-2xl shadow-lg">
                <img src={gambar} alt="" className="mx-auto w-10/12" />
                <div className="font-bold text-lg mx-auto w-fit py-2">
                  {index.header}
                </div>
                <div className="w-fit mx-auto pb-4 font-medium">
                  {index.agenda}
                </div>
                <div className="w-11/12 mx-auto h-[1px] bg-black"></div>
                <div className="flex w-10/12 mx-auto justify-between py-3">
                  <div className="lg:text-sm text-xs font-medium">
                    {index.tanggal}
                  </div>
                  <div className="lg:text-sm text-xs font-medium">
                    {index.jam}
                  </div>
                </div>
                <div className="w-fit mx-auto font-bold">{index.kota}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Acara;