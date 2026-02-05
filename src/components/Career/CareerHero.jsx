import React, { useState, useEffect, useRef } from "react";
import "../../appStyles/Career/CareerHero.css";
import heroImg from "../../assets/careerimage.jpg";
import { Button } from "../Button/Button";


const AnimatedH1 = ({ text, delay }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const separator = '~'; 

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    const renderedText = displayText.split(separator).map((item, index) => (
        <React.Fragment key={index}>
            {item}
            {index < displayText.split(separator).length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <>{renderedText}</>
    );
};

const CareerHero = ({ onSearch, locations = [], titles = [] }) => {

    const [location, setLocation] = useState("");

    const handleSearch = () => {
    onSearch({
      location,
      titles,
    });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Choose job role");

  const dropdownRef = useRef(null);

  const filteredOptions = titles.filter(option =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = value => {
    setSelected(value);
    setIsOpen(false);
    setSearch("");
  };

  const rawAnimatedText = "Build Your Future~with Saksam Sol"; 
  const typingDelay = 75; 

  return (
    <section className="career-hero">
      <div className="career-hero__inner">

        <div className="career-hero__panel">

          <div className="career-hero__text">
            <h1>
              <AnimatedH1 text={rawAnimatedText} delay={typingDelay} />
            </h1>

            <p className="career-hero__subtitle">
              Innovate, create, and shape the future of
              <br />
              Staffing solutions
            </p>

             </div>


          <div className="career-hero__image-wrapper">
            <img
              src={heroImg}
              alt="Team member working"
              className="career-hero__image"
            />
          </div>
        </div>

        <div className="career-hero__search">
      <div className="search-field">
        <label>Location</label>
        <input
          list="locations"
          placeholder="Select your city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input"
        />
      </div>

<div className="custom-select-career" ref={dropdownRef}>
        <p className="Title_Css-career">Title</p>
      <div className="select-box-career" onClick={() => setIsOpen(!isOpen)}>
        <span>{selected}</span>
        <span className="arrow-career">▼</span>
      </div>

      {isOpen && (
        <div className="dropdown-career">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <ul>
            {filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <li key={option} onClick={() => handleSelect(option)}>
                  {option}
                </li>
              ))
            ) : (
              <li className="no-data-career">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>

          <div onClick={handleSearch}>
         <Button
            name="Search....."
            type="button"
            paddingXL="8.6vw"
            paddingXM="24.5vw"
            widthL="10.35vw"
            widthM="3vw"
            bacgrounClr="#022447"
            bacgrounArrow="#ffff"
            colorArrow="#022447"
            colorText="#ffff"
            colorTextHover="#022447"
          />
          </div>
 
        </div>
      </div>
    </section>
  );
};

export default CareerHero;