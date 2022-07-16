function isInt(n){
  return Number(n) === n && n % 1 === 0;
}
const endTime = (startTime, hours ) => {
  const startHours = parseInt(startTime[0]+startTime[1])
  const startMin = parseInt(startTime[3] + startTime[4])

  if (isInt(hours)){
    return (startHours + hours + ":00")
  } else {

    const hoursString = (hours).toString()

    const hsAndMin = hoursString.split(".")
    let hsInt = parseInt(hsAndMin[0])
    let minToConvert = parseInt(hsAndMin[1])
    if (minToConvert > 9 ) minToConvert = minToConvert / 10
    let minInt= (minToConvert * 60) / 10

    if(minInt + startMin > 60 ){
      hsInt ++
      minInt = (minInt + startMin) - 60
    } if (minInt + startMin === 60) {
      hsInt ++
      minInt = "00"
    }
    
      return (parseInt(startTime[0]+startTime[1]) + parseInt(hsInt) + `:${minInt}`)
  }
}


export default endTime