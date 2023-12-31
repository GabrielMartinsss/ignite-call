export function convertTimeStringToMuinutes(timeString: string) {
  const [hours, minutes] = timeString.split(':').map((time) => Number(time))

  return hours * 60 + minutes
}
