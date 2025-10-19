export const initialState = {
  candidates: [],
  loading: false,
  error: null,
  searchQuery: ""
};

export function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SET_CANDIDATES":
      return { ...state, loading: false, candidates: action.payload };
    case "SET_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "ADD_CANDIDATE":
      return { ...state, candidates: [action.payload, ...state.candidates] };
    case "UPDATE_STATUS":
      return {
        ...state,
        candidates: state.candidates.map((c) =>
          c._id === action.payload._id ? action.payload : c
        ),
      };
    case "DELETE_CANDIDATE":
      return {
        ...state,
        candidates: state.candidates.filter((c) => c._id !== action.payload),
      };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
