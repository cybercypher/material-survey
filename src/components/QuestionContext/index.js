// @flow

import React, { createContext } from "react"

export default createContext<{
  error?: string,
  containerStyleType?: string,
  noCheckmarks?: boolean
}>()
