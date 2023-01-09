import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  personalData: [],
  skill: [],
  contact: [],
  education: [],
  language: [],
  experience: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPersonalData(state, action) {
      state.personalData = action.payload;
    },
    setSkill(state, action) {
      state.skill = action.payload;
    },
    setContact(state, action) {
      state.contact = action.payload;
    },
    setEducation(state, action) {
      state.education = action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setExperience(state, action) {
      state.experience = action.payload;
    },
  },
});
export const {
  setPersonalData,
  setSkill,
  setContact,
  setEducation,
  setLanguage,
  setExperience,
} = userSlice.actions;
export default userSlice.reducer;

export const getUserData = () => {
  const getData = async (dispatch, getState) => {
    try {
      const res = await fetch("data.json");
      const data = await res.json();
      //   console.log(data);
      dispatch(setPersonalData(data.personalData));
      dispatch(setSkill(data.skill));
      dispatch(setContact(data.contact));
      dispatch(setEducation(data.education));
      dispatch(setLanguage(data.language));
      dispatch(setExperience(data.experience));
    } catch (error) {
      console.log(error);
    }
  };
  return getData;
};
