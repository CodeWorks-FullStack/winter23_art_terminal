import { AppState } from "../AppState.js"
import { Project } from "../models/Project.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProjectsService {
  async getProjects() {
    const res = await api.get('api/projects')
    // REVIEW Step 2: look at your data
    logger.log('getting projects', res.data)

    // REVIEW Step 4: store your data
    AppState.projects = res.data.map(p => new Project(p))
    logger.log(AppState.projects)
  }

  async getProjectsByQuery(query) {
    // const res = await api.get(`api/projects?creatorId=${profileId}`)
    // const res = await api.get('api/projects', { params: {creatorId : profileID} })
    const res = await api.get('api/projects', { params: query })
    logger.log('getting projects by profile', res.data)
    AppState.projects = res.data.map(p => new Project(p))
  }

  clearProjects() {
    AppState.projects = []
  }

  setActiveProject(project) {
    AppState.project = project
  }
}

export const projectsService = new ProjectsService()