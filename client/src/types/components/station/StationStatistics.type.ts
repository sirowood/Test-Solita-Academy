type StationStatisticsProps = {
  title: string,
  journeysCount: number,
  avgDistance: number,
  topTitle: string,
  topStations: { id: number, nimi: string }[],
};

export default StationStatisticsProps;
