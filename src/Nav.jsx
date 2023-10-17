import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <nav className="bg-white dark:bg-[#2B3743] flex h-20 py-7 xl:px-32 md:px-10 sm:px-6 shadow-sm cursor-pointer ">
      <div
        className="dark:text-white font-bold text-2xl"
        onClick={() => handleNavigate()}>
        Around the World
      </div>
    </nav>
  );
};

export default Nav;
