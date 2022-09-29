import { X } from "react-bootstrap-icons";
import Div100vh from "react-div-100vh";
import { useSelector } from "react-redux";
import "../Styles/_globals.css";

const MobileRecap = ({ openMobileRecap, toggleMobileRecap }) => {
  const items = useSelector((state) => state?.cart.items);
  const cloudinaryCdnPrefix = "https://my-cloud-cdn.mo.cloudinary.net/colorwave";
  const commercejsCdn = "https://cdn.chec.io";

  return (
    <Div100vh
      style={{
        transform: openMobileRecap ? "translateY(0)" : "translateY(100%)",
        zIndex: 2500,
      }}
      className="mobile-recap pt-20 md:hidden fixed inset-0 font-cabin flex flex-col items-center justify-center space-y-6 rounded-sm overflow-x-hidden overflow-y-auto transition-transform duration-300 text-white bg-black pt-12 pb-3 px-2"
    >
      <div
        style={{ animation: openMobileRecap && items.length !== 0 && "750ms fadeIn 100ms forwards" }}
        className="opacity-0 w-max h-min relative"
      >
        <h1 className="text-xl md:text-3xl px-4 text-center">Your Order</h1>
        <span className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-white"></span>
      </div>

      <div className="h-4/5 overflow-hidden w-11/12">
        <div className="h-full w-full overflow-x-hidden overflow-y-auto scrollbar-description text-gray-900 ">
          <div className="h-auto w-full flex flex-col items-center justify-start space-y-3 py-6 px-4 text-gray-900 text-gray-900">
            {items.map((item, i) => (
              <div
                key={item.product.id}
                style={{
                  animation: openMobileRecap && items.length !== 0 && `750ms fadeIn ${200 + i * 100}ms forwards`,
                }}
                className="opacity-0 h-28 w-full flex flex items-center justify-left border border-gray-700 only:border-b-0 last:border-b-0 bg-white pr-3"
              >
                <div
                  className="h-full w-2/5 border-r border-gray-100"
                  style={{
                    background: `${
                      item.product.categories.find((x) => x.name === "limited") ? "black" : "white"
                    } url("${item.product.media.source.replace(
                      commercejsCdn,
                      cloudinaryCdnPrefix
                    )}") no-repeat center/contain`,
                  }}
                ></div>
                <div className="w-2/5 text-left text-sm pl-2 md:pl-5 whitespace-nowrap truncate">
                  {item.product.name}
                </div>
                <div className="w-1/5 text-right text-sm">{item.product.price.formatted}&nbsp;€</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-max w-full flex items-center justify-center">
        <button onClick={toggleMobileRecap} className="h-max w-max">
          <div className="h-max w-max flex items-center justify-center space-x-1">
            <X size={24} className="text-white" /> <span className="uppercase text-sm">close</span>
          </div>
        </button>
      </div>
    </Div100vh>
  );
};

export default MobileRecap;
