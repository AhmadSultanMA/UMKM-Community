import HandleHeader from "../Components/HandleHeader";
import search from "../Assets/search.svg";

const dataCheckBox = [
  "Otomotif",
  "Kuliner",
  "Fashion",
  "Agribisnis",
  "Produk & Kreatif",
  "Event Organizer",
  "Tour & Travel",
  "Lain-Lain",
];

const Komunitas = () => {
  return (
    <>
      <HandleHeader />
      <div className="cust-container grid grid-cols-12 gap-2 bg-white py-10">
        <div className="col-span-2 flex flex-col items-center">
          <div className="bg-cust-secondary100 w-full z-20 flex justify-center py-2 border-2 border-cust-primary900 rounded-full">
            <p className="font-bold text-cust-primary900">Kategori UMKM</p>
          </div>
          <div className="w-11/12 bg-cust-secondary50 border-2 px-4 pb-4 pt-6 -translate-y-4 border-cust-primary900">
            <h3 className="font-bold text-cust-primary900 py-2">UMKM</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                {dataCheckBox.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="kategori"
                        id="kategori"
                        className="w-4 h-4"
                      />
                      <label htmlFor="kategori">{item}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10 flex flex-col gap-3">
          <div className="w-full relative rounded-full border-2 border-cust-primary900 overflow-hidden">
            <img
              src={search}
              className="h-8 w-8 absolute left-4 top-1/2 -translate-y-1/2"
              alt="icon"
            />
            <input
              type="text"
              placeholder="Cari Komunitas yang Anda Inginkan"
              className=" bg-[#E6E6E6] text-cust-primary700 w-full h-full py-2 ps-14 pe-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="border-2 bg-[#DBF2F2] border-cust-primary900 flex justify-center">
              <div className="w-10/12 relative grid grid-cols-12 gap-5 py-5">
                <button className="absolute bottom-5 right-0 hover:bg-cust-primary800/90 bg-cust-primary800 py-2 px-5 font-bold rounded-full transition-all duration-200">
                  Bergabung
                </button>
                <div className="col-span-2 flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700756567/Group_202_cpw2dc.png"
                    className="aspect-square"
                    alt="gambar"
                  />
                </div>
                <div className="col-span-10 flex flex-col gap-3 items-center justify-center">
                  <h3 className="font-bold text-xl md:text-2xl text-cust-primary900">
                    KOMUNITAS UMKM KULINER MALANG
                  </h3>
                  <div className="w-full py-2 px-3 bg-white border border-cust-primary900">
                    <p className="text-cust-primary900">
                      Selamat datang di Grup Komunitas UMKM Kuliner! 🌮🍰 Kami
                      sangat senang Anda bergabung dalam komunitas ini yang
                      penuh semangat dan inspiratif. Mari menjalin hubungan yang
                      positif dan produktif dalam perjalanan kuliner kita
                      bersama! 🍽️🎉 #UMKMF&B #SelamatDatang
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <p className="text-center text-cust-primary900">Bergabung sebanyak 135.1K</p>
                    <img src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700757086/Group_850_l8iblv.png" className="object-fit object-center h-10" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Komunitas;
