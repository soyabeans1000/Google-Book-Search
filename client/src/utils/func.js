

export const trimString = stringtoTrim => {
  
  return stringtoTrim.replace("&nbsp;", " ").replace("&quot;", "\" ").replace("&#39;", "\'")
}

export default trimString
