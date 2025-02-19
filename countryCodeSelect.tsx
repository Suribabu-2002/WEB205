import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import countries  from '@/constants/countriesData'
import { useState } from 'react';

interface CountryCodeSelectProps {
  setSelectedCountryCode: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  size?: '2xl' | 'xl' | 'lg' | 'sm' | 'xs' | '2xs';
}

export default function CountryCodeSelect({
  setSelectedCountryCode,
  className,
  size,
}: CountryCodeSelectProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen,setIsOpen] = useState(false)

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="grid place-content-center">
        <button className={`rounded-full ${className}`}>
          <FontAwesomeIcon icon={faGlobe} size={size} className="text-[#888]" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        side="right"
        className="absolute left-10 p-0 border max-h-[520px] overflow-auto rounded-lg shadow-custom-blue scrollbar-hide">
        <input
          type="text"
          placeholder="Search country name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border-b outline-none"
        />
        {filteredCountries.map((country, index) => (
          <button
            key={country.name}
            className={`p-2 w-full text-left h-[40px] cursor-pointer ${
              index % 2 === 0 ? 'bg-white' : 'bg-[#f5f8fd]'
            } hover:bg-gray-200`}
            onClick={() => {
              setSelectedCountryCode(country.code);
              setIsOpen(!isOpen);
            }}>
            {country.name} ({country.code})
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
