import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="275" rx="10" ry="10" width="280" height="25" /> 
    <circle cx="136" cy="142" r="111" /> 
    <rect x="0" y="316" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="424" rx="10" ry="10" width="95" height="30" /> 
    <rect x="126" y="414" rx="24" ry="24" width="150" height="45" />
  </ContentLoader>
)

export default Sceleton;