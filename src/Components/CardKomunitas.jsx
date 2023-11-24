import { Link } from "react-router-dom";

const CardKomunitas = ({ data }) => {

    const { title, description, subscribers, img, link } = data;

  return (
    <div className="flex flex-col gap-2">
      <div className="border-2 bg-[#DBF2F2] border-cust-primary900 flex justify-center">
        <div className="w-10/12 relative grid grid-cols-12 gap-5 py-5">
          <Link to={link} className="absolute bottom-5 right-0 hover:bg-cust-primary800/90 bg-cust-primary800 py-2 px-5 font-bold rounded-full transition-all duration-200">
            Bergabung
          </Link>
          <div className="col-span-2 flex justify-center items-center">
            <img
              src={img}
              className="aspect-square"
              alt="gambar"
            />
          </div>
          <div className="col-span-10 flex flex-col gap-3 items-center justify-center">
            <h3 className="font-bold text-xl md:text-2xl text-cust-primary900">
              {title}
            </h3>
            <div className="w-full py-2 px-3 bg-white border border-cust-primary900">
              <p className="text-cust-primary900">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <p className="text-center text-cust-primary900">
                {subscribers}
              </p>
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700757086/Group_850_l8iblv.png"
                className="object-fit object-center h-10"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKomunitas;
