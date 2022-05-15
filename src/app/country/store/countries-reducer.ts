import { ICountries } from "src/app/interfaces/countries.interface";
import { CountryActions, CountryActionTypes } from "./action";

export interface ICountryState {
  countries: Array<ICountries>;
  searchedCountries?: Array<ICountries>;
  visitedCountries: string[];
  singleCountry: any;
  isLoading: boolean;
  message: string;
}

const initialState: ICountryState = {
  countries: [],
  searchedCountries: [],
  visitedCountries: [],
  singleCountry: {},
  isLoading: false,
  message: ''
};

export function countryReducer(state = initialState, action: CountryActions): ICountryState {
 
  switch (action.type) {
      case CountryActionTypes.GetCountryLoad: {
          return {
              ...state,
              isLoading: true
          }
      }

      case CountryActionTypes.GetCountrySuccess: {
          return {
              ...state,
              countries: action.payload,
              isLoading: false,
              message: 'Data fetched Successfully!'
          }
      }

      case CountryActionTypes.SearchAction:
        let keywordContent: ICountries[] = [];
        if (state.countries) {
          keywordContent = state.countries.filter(content => content.name.official.toLowerCase().includes(action.payload.toLowerCase()) 
          || content.region.toLowerCase() === action.payload.toLowerCase())
        }
        return {
          ...state,
          searchedCountries : keywordContent,
          isLoading: false,
          message: 'Search successful'
      };

      case CountryActionTypes.GetSingleCountry:
        if (state.countries) {
          const searchResult = state.countries.find(content => content.name.common.toLowerCase() === action.payload.toLowerCase())
          return {
            ...state,
            singleCountry: searchResult,
            isLoading: false,
            message: 'Country data fetched'
          }
        } else  {
          return {
            ...state,
            isLoading: false,
            message: 'Something went wrong'
          }
        };

      case CountryActionTypes.routeAction: {
        if (state.visitedCountries.includes(action.payload)) {
          return {
            ...state,
          }
        } else {
          return {
            ...state,
            visitedCountries: [...state.visitedCountries, action.payload]
          }
        }
      }

      case CountryActionTypes.GetCountryFail: {
          return {
              ...state,
              isLoading: false,
              message: 'Something went wrong!'
          }
      }
      
      default:
          return state;
  }
}