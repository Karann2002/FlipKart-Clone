import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Search} from 'lucide-react'

const   SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="hidden md:flex flex-1 mx-4 w-200 bg-blue-100 rounded-md px-3 py-2 items-center max-w-2xl">
                  <input
                    type="text"
                     value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for Products, Brands and More..."
                    className="bg-transparent w-full outline-none text-sm"
                  />
                   <button 
                   type="submit" onClick={handleSearch}
                    className='flex items-end  gap-2'>
                      <Search size={22} />
                      
                    </button>
     
    </div>
  );
};

export default SearchBar;
