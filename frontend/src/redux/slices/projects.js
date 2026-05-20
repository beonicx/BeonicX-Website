import { projectApi } from "@/mocks/project";  // Assuming projectApi is for making API calls
import { createSlice } from "@reduxjs/toolkit";

// Initial state setup for projects and paginator
const initialState = {
  projects: [],
  projectsPaginator: {
    itemCount: 0,
    currentPage: 1,
    totalPages: 0,
  },
};

const slice = createSlice({
  name: "project",
  initialState,
  reducers: {
    createProject(state, action) {
      const newProject = action.payload;
      state.projects = [newProject, ...state.projects];
      state.projectsPaginator.itemCount += 1;
    },

    readProject(state, action) {
      const { data, paginator } = action.payload;
      state.projects = [...data];
      state.projectsPaginator = { ...paginator };
    },

    updateProject(state, action) {
      const updatedProject = action.payload;
      state.projects = state.projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      );
    },

    deleteProject(state, action) {
      const id = action.payload;
      state.projects = state.projects.filter((project) => project.id !== id);
      state.projectsPaginator.itemCount -= 1;
    },

    deleteMany(state) {
      state.projects = [];
      state.projectsPaginator.itemCount = 0;
    },

    setPaginator(state, action) {
      state.projectsPaginator = { ...action.payload };
    },
  },
});

// Async actions for interacting with APIs

export const createProjectAsync = (data) => async (dispatch) => {
  const result = await projectApi.createProject(data);
  if (result.status === "SUCCESS") {
    await dispatch(slice.actions.createProject(result.data));
    return true;
  }
  return false;
};

export const readProjectAsync = (page = 1, limit = 10, filters = {}) => async (dispatch) => {
  const result = await projectApi.readProject(page, limit, filters);
  if (result.status === "SUCCESS") {
    await dispatch(slice.actions.readProject(result.data));
    await dispatch(slice.actions.setPaginator(result.paginator));  // Set paginator state
    return true;
  }
  return false;
};

export const updateProjectAsync = (data) => async (dispatch) => {
  const result = await projectApi.updateProject(data);
  if (result.status === "SUCCESS") {
    await dispatch(slice.actions.updateProject(result.data));
    return true;
  }
  return false;
};

export const deleteProjectAsync = (id) => async (dispatch) => {
  const result = await projectApi.deleteProject(id);
  if (result.status === "SUCCESS") {
    await dispatch(slice.actions.deleteProject(id));
    return true;
  }
  return false;
};

export const deleteManyAsync = (ids) => async (dispatch) => {
  const result = await projectApi.deleteMany(ids);
  if (result.status === "SUCCESS") {
    await dispatch(slice.actions.deleteMany());
    return true;
  }
  return false;
};

// Exporting actions and reducer
export const { reducer } = slice;
export default slice;
