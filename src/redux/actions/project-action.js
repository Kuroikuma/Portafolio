export const SIG_IMG = 'SIG_IMG'
export const TOGGLE_LOADING = 'TOGGLE_LOADING'
export const SIG_PROJECT = 'SIG_PROJECT'
export const SET_SHOW_TITLE_PROJECT = 'SET_SHOW_TITLE_PROJECT'
export const SET_SHOW_VIEW_PROJECT = 'SET_SHOW_VIEW_PROJECT'
export const SET_SHOW_INFO_PROJECT = 'SET_SHOW_INFO_PROJECT'
export const GET_PROJECT = 'GET_PROJECT'
export const GET_SKILLS = 'GET_SKILLS'

export const sigImg = (numberImg) => {
  return {
    type: SIG_IMG,
    payload: numberImg,
  }
}
export const toggleLoading = (band) => {
  return {
    type: TOGGLE_LOADING,
    payload: band,
  }
}
export const setSkill = (skills) => {
  return {
    type: GET_SKILLS,
    payload: skills,
  }
}

export const getProjectR = (project) => {
  return {
    type: GET_PROJECT,
    payload: project,
  }
}

export const sigProject = (numberPro) => {
  return {
    type: SIG_PROJECT,
    payload: numberPro,
  }
}

export const setShowTitleProject = (showTitleProject) => {
  return {
    type: SET_SHOW_TITLE_PROJECT,
    payload: showTitleProject,
  }
}

export const setShowViewProject = (showViewProject) => {
  return {
    type: SET_SHOW_VIEW_PROJECT,
    payload: showViewProject,
  }
}

export const setShowInfoProject = (showInfoProject) => {
  return {
    type: SET_SHOW_INFO_PROJECT,
    payload: showInfoProject,
  }
}
