import { SIG_IMG } from '../actions/project-action'
import { SIG_PROJECT } from '../actions/project-action' //SET_SHOW_TITLE_PROjECT
import { SET_SHOW_TITLE_PROJECT } from '../actions/project-action'
import { SET_SHOW_VIEW_PROJECT } from '../actions/project-action'
import { SET_SHOW_INFO_PROJECT } from '../actions/project-action'
import { GET_SKILLS } from '../actions/project-action'
import { GET_PROJECT } from '../actions/project-action'
import { TOGGLE_LOADING } from '../actions/project-action'

const initialState = {
  numberImg: 'primeroImg',
  numberPro: 'primeroPro',
  showTitleProject: false,
  showViewProject: false,
  showInfoProject: false,
  loading: false,
  skills: [],
  project: {},
}
export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIG_IMG:
      return { ...state, numberImg: action.payload }

    case SIG_PROJECT:
      return { ...state, numberPro: action.payload }

    case SET_SHOW_TITLE_PROJECT:
      return { ...state, showTitleProject: action.payload }

    case SET_SHOW_VIEW_PROJECT:
      return { ...state, showViewProject: action.payload }

    case SET_SHOW_INFO_PROJECT:
      return { ...state, showInfoProject: action.payload }
    case GET_PROJECT:
      return { ...state, project: action.payload }

    case GET_SKILLS:
      return { ...state, skills: action.payload }
    case TOGGLE_LOADING:
      console.log(action.payload)
      return { ...state, loading: action.payload }

    default:
      return state
  }
}
