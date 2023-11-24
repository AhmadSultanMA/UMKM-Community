import HandleHeader from "../Components/HandleHeader";
import search from "../Assets/search.svg";
import dataKomunitas from "../data/dataKomunitas";
import CardKomunitas from "../Components/CardKomunitas";

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
          {
            dataKomunitas.map((item, index) => {
              return (
                <CardKomunitas key={index} data={item} />
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Komunitas;
