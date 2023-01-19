import React from "react"

import FadeInWhenVisible from "../../components/FadeInWhenVisible";
import Box from "../../components/Box";

const IndexPage = () => {
  return (
    <div className="flex items-center justify-center bg-cyan-500 min-h-layout">
      <div>
        {[...Array(10)].map(item => (
          <FadeInWhenVisible>
            <Box />
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
