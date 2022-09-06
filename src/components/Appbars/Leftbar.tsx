import { BsFillPersonFill } from "react-icons/bs";

const Leftbar = () => (
  <div className="fixed">
    <div className="pl-5 pt-3">
      <div className="flex items-center gap-x-2 pb-2">
        <div className="p-3 dark:bg-gray-600 rounded-full text-xl">
          <BsFillPersonFill />
        </div>
        <div className="tracking-wider font-semibold">Kaushik Dey</div>
      </div>
      {data.map((v, i) => (
        <div
          key={v.id}
          className="flex items-center gap-x-5 pb-5 pl-3 cursor-pointer hover:scale-105 transition"
        >
          <img
            src={`/images/left-bar-icons/${v.name}.png`}
            alt="facebook.com"
            width={25}
            height={25}
          />
          <p className="tracking-wider text-sm font-semibold">{v.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Leftbar;

const data = [
  { id: 1, name: "Friends" },
  { id: 2, name: "Groups" },
  { id: 3, name: "Saved" },
  { id: 4, name: "Messenger" },
  { id: 5, name: "Ad Center" },
  { id: 6, name: "Ads Manager" },
  { id: 7, name: "Blood Donations" },
  { id: 8, name: "Climate Science center" },
  { id: 9, name: "Events" },
  { id: 10, name: "Friends" },
];
