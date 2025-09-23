"use client";

import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderProps = {
  slides: string[];
  slidesPerView?: number; // default = 1
};

const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export default function Slider({ slides, slidesPerView = 3 }: SliderProps) {
    const [current, setCurrent] = useState(0);

    // number of "pages" (each page = slidesPerView items)
    const totalSets = Math.ceil(slides.length / slidesPerView);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + totalSets) % totalSets);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % totalSets);
    };

    return (
        <div className="flex justify-center items-center w-full gap-10">

            {/* Prev Arrow */}
            <button
                onClick={prevSlide}
                className="text-white"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="none">
                    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>

            {/* Slider wrapper */}
            <div className="w-full overflow-hidden shadow-lg">
                <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                    width: `${100}%`, // total width for all sets
                }}
                >

                {Array.from({ length: totalSets }).map((_, setIndex) => {
                const start = setIndex * slidesPerView;
                const group = slides.slice(start, start + slidesPerView);

                return (
                    <div
                    key={setIndex}
                    className={`grid grid-cols-1 gap-8 ${
                        slidesPerView === 1
                        ? "grid-cols-1"
                        : slidesPerView === 2
                        ? "grid-cols-2"
                        : slidesPerView === 3
                        ? "grid-cols-3"
                        : "grid-cols-4"}`}
                    style={{ flex: "0 0 100%" }}
                    >
                    {group.map((src, i) => (
                        <div key={i} className="w-full bg-white text-[var(--dark)] rounded-tl-[50px] rounded-br-[50px] p-6">
                            <div className="flex justify-between items-center">
                                <div className="     items-center gap-4">
                                    {/* //image */}
                                    <div className="rounded-full bg-zinc-700 h-12 w-12">
                                    </div>
                                    {/* //name */}
                                    <div className="font-bold text-lg">
                                        Ed Lopez
                                    </div>
                                </div>
                                {/* double quote */}
                                <svg
                                    height="40px"
                                    width="40px"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <g id="right_x5F_quote">
                                        <path
                                        d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"
                                        fill="#212121"
                                        />
                                        <path
                                        d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"
                                        fill="#212121"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div className="flex my-2 text-sm">
                                {Array.from({length: 5}).map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f6b22aff" fill="currentColor">
                                    <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="#f6b22aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
                                    </svg>
                                ))}
                            </div>
                            <div>
                                Great first visit at One For All. Love the slogan as I&apos;m a huge fan of the literary classics. By far a great selection of beans for Espresso. Flavourful, Balanced, and just great Body and Finish at every sip. I had an Oat Milk Flat White that was not shy to let the great tasting intensity come through. Medium Roasts have changed my mind and One For All definitely has a great recipe on-hand. Looking forward to my next visit, since I can confidently say there&apos;s good coffee in the core. Kudos.
                            </div>
                        </div>
                    ))}
                    </div>
                    );
                    })}
                </div>
            </div>

        <button
            onClick={nextSlide}
            className="text-white"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="none">
                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </button>

        </div>
    );
}
