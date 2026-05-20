import axios from "axios";

class ProjectApi {

  // Create a new project
  async createProject(data) {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/userapp/project/create`,
      data,
      {
        method: "post",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (response.data.status === "SUCCESS") {
      return response.data;
    } else {
      return false;
    }
  }

  // Get a list of projects with pagination and filters
  async getProjects(page, limit, filters) {
    let obj = {
      query: filters,
      options: {
        collation: "",
        sort: { createdAt: -1 },
        populate: "teamMembers.projectId", // Adjust as per your data
        projection: "",
        lean: false,
        leanWithId: true,
        page: page,
        limit: limit,
        pagination: true,
        useEstimatedCount: false,
        useCustomCountFn: false,
        forceCountFn: false,
        read: {},
        options: {},
      },
      isCountOnly: false,
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/userapp/project/list`,
      obj,
      {
        method: "post",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (response.data.status === "SUCCESS") {
      return response.data;
    } else {
      return response.data;
    }
  }

  // Get a single project by ID
  async getSingleProject(id) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/userapp/project/get/${id}`,
      {
        method: "get",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (response.data.status === "SUCCESS") {
      return response.data;
    } else {
      return false;
    }
  }

  // Update an existing project
  async updateProject(data, id) {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_HOST}/userapp/project/update/${id}`,
      data,
      {
        method: "put",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (response.data.status === "SUCCESS") {
      return response.data;
    } else {
      return false;
    }
  }

  // Delete a project
  async deleteProject(id) {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_HOST}/userapp/project/delete/${id}`,
      {
        method: "delete",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (response.data.status === "SUCCESS") {
      return response.data;
    } else {
      return false;
    }
  }
}

export const projectApi = new ProjectApi();
