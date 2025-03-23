import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";
import { statesData } from "./statesData";
import defaultImage from '../assets/images/toronto.png'
// const defaultImage = "../ass";

const StateMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [imageSrc, setImageSrc] = useState(defaultImage);

  const handleStateClick = (state) => {
    setSelectedState(state);
    setImageSrc(statesData[state] || defaultImage);
  };

  return (
    <>
        <div className="flex flex-col items-center p-6">
            <p className="text-[24px] font-[500] font-cabinet text-[#49C7AB] uppercase"> States WE</p>
            <h2 className="text-[52px] font-[500] font-cabinet text-[#1E293B]">Currently Serve</h2>
            <p className="text-[#475569] text-[20px] font-[400] font-cabinet text-center max-w-lg">
                We believe everyone should have access to treatment and care. Click on a
                state to see details.
            </p>
        </div>
        <div className="flex flex-wrap justify-center mt-6 p-[10px]">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={imageSrc}
            alt={selectedState || "Default"}
            className="rounded-lg shadow-md w-auto h-auto"
          />
          <p className="text-[#000000] text-[32px] font-cabinet font-[700] mt-2">{selectedState || "Select a state"}</p>
        </div>
        <div className="w-full md:w-1/2">
          <ComposableMap projection="geoAlbersUsa">
            <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleStateClick(geo.properties.name)}
                      className="cursor-pointer hover:fill-blue-500 stroke-white stroke-[0.5]"
                      style={{
                        default: { fill: "#74c69d" },
                        hover: { fill: "#2a9d8f" },
                        pressed: { fill: "#1d3557" },
                      }}
                    />
                    {console.log('geo ', geo)
                    }
                     {geo.centroid && (
                      <Annotation
                        subject={[geo.centroid[0], geo.centroid[1]]}
                        dx={0}
                        dy={0}
                        connectorProps={{ stroke: "none" }}
                      >
                        <text
                          x="5"
                          y="5"
                          textAnchor="middle"
                          style={{ fontSize: 6, fill: "#000", fontWeight: "bold" }}
                        >
                          {geo.properties.name}
                        </text>
                      </Annotation>
                    )}
                  </>
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
        </div>
    </>
  );
};

export default StateMap;
