import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Todo App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;