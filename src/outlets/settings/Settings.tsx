import { useEffect, useState } from "react";
import * as imgList from "../../../public/clients_list.json";
import { generateData } from "../../hooks/useGeneratedMockData";
type Props = {};

const plugin = [
  {
    value: true,
    img: "https://www.pngkey.com/png/full/984-9844126_slack-new-slack-logo-png.png",
    name: "Slack",
    desc: "This plugin will help in integrating various slack functionality.",
    subcription: "Basic",
  },
  {
    value: false,
    img: "https://kernel.sr/wp-content/uploads/2020/06/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art.png",
    name: "Facebook",
    desc: "This plugin will help in integrating meta ads functionality.",
    subcription: "Pro",
  },
  {
    value: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png",
    name: "Instagram",
    desc: "This plugin will help in integrating image upload functionality.",
    subcription: "Premium",
  },
  {
    value: true,
    img: "https://icon-library.com/images/stripe-icon/stripe-icon-23.jpg",
    name: "Stripe",
    desc: "This plugin will help in integrating stipe payment functionality.",
    subcription: "Pro",
  },
  {
    value: true,
    img: "https://icon2.cleanpng.com/20171220/dxq/google-png-5a3aafee6ff5c8.9595681415137955664586.jpg",
    name: "Google",
    desc: "This plugin will help in integrating google auth functionality.",
    subcription: "Pro",
  },
];
const options = [
  {
    label: "Enable Notifications",
    value: true,
  },
  {
    label: "Dark Mode",
    value: false,
  },
  {
    label: "Show Previews",
    value: true,
  },
  {
    label: "Location Services",
    value: true,
  },
  {
    label: "Automatic Updates",
    value: true,
  },
];
const Settings = ({}: Props) => {
  const [contacts, setContact] = useState<any[]>([]);
  useEffect(() => {
    const temp: any = [];
    const { name, profilePic, createdAt } = imgList;
    "*"
      .repeat(4)
      .split("")
      .forEach(() => {
        temp.push(
          generateData(
            {
              name,
              profilePic,
              createdAt,
              role: ["Developer", "Designer", "Tester"],
            },
            []
          )
        );
      });
    setContact(temp);
  }, []);

  return (
    <div className="flex gap-4 p-4 flex-wrap">
      <div className="w-full">
        <div className=" flex flex-col  justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="text-2xl self-start  pl-4 ">Plugins</div>
          <ul className="flex flex-col divide-y divide">
            {plugin.map((item) => (
              <li className="flex flex-row">
                <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                  <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src={item.img}
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                  </div>
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                      {item.desc}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center mr-4">
                    <div className="font-medium dark:text-white">Plan</div>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-4 py-1  text-purple-700">
                      {item.subcription}
                    </span>
                  </div>
                  <div>
                    <label
                      htmlFor={item.name}
                      className=" h-8 w-40 cursor-pointer"
                    >
                      <input
                        defaultChecked={item.value}
                        type="checkbox"
                        id={item.name}
                        className="peer sr-only [&:checked_+_span_div[data-checked-icon]]:block [&:checked_+_span_div[data-unchecked-icon]]:hidden"
                      />

                      <span className="w-40 flex ">
                        <div data-unchecked-icon className="flex-1">
                          <div className="w-full inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 text-center">
                            Active
                          </div>
                        </div>
                        <div data-checked-icon className="hidden">
                          <div className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                            Deactivate
                          </div>
                        </div>
                      </span>

                      {/* <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span> */}
                    </label>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-fit">
        <div className=" flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="text-2xl self-start  pl-4 ">Contacts</div>
          <ul className="flex flex-col divide-y divide">
            {contacts.map((item) => (
              <li className="flex flex-row">
                <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                  <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src={item.profilePic}
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                  </div>
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                      {item.role}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-200">
                    {item.createdAt}
                  </div>
                  <div className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ml-4">
                    Disconnect
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-fit">
        <div className=" flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="text-2xl self-start  pl-4 ">Settings</div>
          <ul className="flex flex-col divide-y divide">
            {options.map((item) => (
              <li className="flex flex-row">
                <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium dark:text-white">
                      {item.label}
                    </div>
                  </div>

                  <label
                    htmlFor={item.label}
                    className="relative h-8 w-14 cursor-pointer"
                  >
                    <input
                      defaultChecked={item.value}
                      type="checkbox"
                      id={item.label}
                      className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                    />

                    <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
                      <svg
                        data-unchecked-icon
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg
                        data-checked-icon
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>

                    <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
