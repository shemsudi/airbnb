import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from "../icons/correctIcon";
import XIcon from "../icons/xIcon";

const AirbnbProtectionComparison = () => {
  return (
    <div className="xl:px-80 lg:px-40 md:px-20 px-5 w-full flex flex-col justify-center items-center mb-24">
      <img
        className="w-40 self-start lg:self-center "
        src="https://a0.muscache.com/im/pictures/cecbf134-6674-410f-9345-603716048771.jpg?im_w=480&im_q=highq"
        alt=""
      />
      <h1 className="font-medium text-2xl md:text-3xl  mb-6 self-start lg:self-center">
        Airbnb it with top‑to‑bottom protection
      </h1>
      <table className="w-full">
        <thead className="mt-4">
          <tr className="border-b-2">
            <th className="clas2"> </th>
            <th className="pb-3">Airbnb</th>
            <th className="pb-3"> Competitors</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <th className="clas1"> Guest Identity Identification</th>
            <td className="clas ">
              <CheckIcon />
            </td>
            <td className="clas">
              <CheckIcon />
              {/* <XIcon /> */}
            </td>
          </tr>
          <tr className="border-b-2 border-spacing-4">
            <td className=" clas2 col-span-3 lg:col-span-1  ">
              Our comprehensive verification system checks details such as name,
              address, government ID and more to confirm the identity of guests
              who book on Airbnb.
            </td>
            <td className="clas2 hidden lg:table-cell lg:col-span-2 "> </td>
          </tr>

          <tr>
            <th className="clas1"> Reservation screening</th>
            <td className="clas">
              <CheckIcon />
            </td>
            <td className="clas">
              <XIcon />
            </td>
          </tr>
          <tr className="border-b-2">
            <td className=" clas2 ">
              Our proprietary technology analyzes hundreds of factors in each
              reservation and blocks certain bookings that show a high risk for
              disruptive parties and property damage.
            </td>
            <td colSpan={2} className="clas2">
              {" "}
            </td>
          </tr>
          <tr>
            <th className="clas1"> $3M damage protection</th>
            <td className="clas">
              <CheckIcon />
            </td>
            <td className="clas">
              <XIcon />
            </td>
          </tr>
          <tr className="border-b-2">
            <td className=" clas2 ">
              Airbnb reimburses you for damage caused by guests to your home and
              belongings and includes these specialized protections:
            </td>
            <td colSpan={2} className="clas2">
              {" "}
            </td>
          </tr>
          <tr className="border-b-2">
            <th className="clas1 font-light"> Art & valuables</th>
            <td className="clas">
              <CheckIcon />
            </td>
            <td className="clas">
              <XIcon />
            </td>
          </tr>

          <tr className="border-b-2">
            <th className="clas1 font-light"> Auto & boat </th>
            <td className="clas">
              <CheckIcon />
            </td>
            <td className="clas">
              <XIcon />
            </td>
          </tr>
          <tr className="border-b-2">
            <th className="clas1 font-light"> Pet damage</th>
            <td className="clas">
              <CheckIcon />
            </td>
            <td className="clas">
              <XIcon />
            </td>
          </tr>
          <tr className="border-b-2">
            <th className="clas1 font-light"> Income loss</th>
            <td className="clas">
              <CheckIcon />
            </td>
            <td className="clas">
              <XIcon />
            </td>
          </tr>
          <tr className="border-b-2">
            <th className="clas1 font-light"> Deep cleaning</th>
            <td className="clas">
              <CheckIcon />
            </td>
            <td className="clas">
              <XIcon />
            </td>
          </tr>

          <tr>
            <th className="clas1"> $1M liability insurance</th>
            <td className="clas">
              <CheckIcon />
            </td>
            <td className="clas">
              <XIcon />
            </td>
          </tr>
          <tr className="border-b-2">
            <td className=" clas2 ">
              Airbnb reimburses you for damage caused by guests to your home and
              belongings and includes these specialized protections:
            </td>
            <td colSpan={2} className="clas2">
              {" "}
            </td>
          </tr>
          <tr>
            <th className="clas1"> 24-hour safety line</th>
            <td className="clas">
              <CheckIcon />
            </td>
            <td className="clas">
              <XIcon />
            </td>
          </tr>
          <tr className="border-b-2">
            <td className=" clas2 ">
              If you ever feel unsafe, our app provides one-tap access to
              specially-trained safety agents, day or night.
            </td>
            <td colSpan={2} className="clas2">
              {" "}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pt-3">
        <p className="text-gray-600 text-meduim text-xxy">
          Comparison is based on public information and free offerings by top
          competitors as of 10/22.{" "}
          <span
            to={"/ff"}
            className="text-black underline hover:cursor-pointer"
          >
            Find details and exclusions here.
          </span>
        </p>
      </div>
      <div className="border rounded-lg mt-4 py-1 px-3 border-black">
        <Link className="w-full  " to={"/aircover-for-hosts"}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default AirbnbProtectionComparison;
