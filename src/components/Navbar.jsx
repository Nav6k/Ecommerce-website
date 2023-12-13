import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => store.basket.amount);
  return (
    <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium">
      <p>Home</p>
      <p>Basket</p>
      <span className="text-xs align-top bg-red-500 text-white rounded-full px-3 py-1 mx-1">
        {amount}
      </span>
    </div>
  );
};

export default Navbar;