export interface ICountries {
  id?: number;
  area: number;
  capital: string [];
  borders: string [];
  coatOfArms: {
    png: string,
    svg: string
  };
  continents: string [];
  currencies?: {};
  demonyms?: {};
  fifa: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  gini?: {};
  idd?: {};
  independent: boolean;
  landlocked: boolean;
  languages?: {};
  latlng?: number [];
  maps?: {};
  name: {
    common: string;
    nativeName?: {};
    official: string;
  };
  population: number;
  postalCode?: {};
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string [];
  tld: string [];
  translations?: {};
  unMember: boolean;
}

export interface ICountriesState {
  countries: ICountries[];
  selectedCountry?: ICountries
}
