"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
 
const SearchButton = ({otherClasses}:{otherClasses:string}) => (
  <button 
  type="submit"
  className={`-mt-3 z-10 &{otherClasses}`}
  >
    <Image 
    src="/magnifying-glass.svg"
     alt="maginifying glass" 
     width={40} 
     height={40}
    className = "object-contain"
    /> 
  </button>
)

import SearchManufacturer from "./SearchManufacturer";

const SearchBar = ({ setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');
    const router = useRouter();

    const handleSearch = (e:React.
      FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(searchManufacturer ==='' && searchModel===''){
        return alert('Please fill in the search bar')
      }
      setModel(searchModel)
      setManufacturer(searchManufacturer)
    }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
            selected = {searchManufacturer}
            setSelected = {setSearchManufacturer}
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className="searchbar__item">
          <Image 
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
          />
          <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
         />
         <SearchButton otherClasses="sm:hidden"/>
        </div>
    </form>

  )
}

export default SearchBar
