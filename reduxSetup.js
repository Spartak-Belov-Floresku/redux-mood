const INITIAL_STATE = { mood : "(^_^)v" }

const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'happy':
      return { ...state, mood: "ʘ‿ʘ" }
    case 'sad':
      return { ...state, mood: "⊙︿⊙" }
    case 'angry':
      return { ...state, mood: "눈_눈" }
    case 'confused':
      return { ...state, mood: "ఠ_ఠ" }
    default:
      return { ...state, mood: "(^_^)v" }
  }
}

const store = Redux.createStore(moodReducer);