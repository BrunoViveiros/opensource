import GithubApiService from '@/services/githubApiService'
import ProjectsRepository from '@/repositories/projectsRepository'
import OtherProjectsRepository from '@/repositories/otherProjectsRepository'
import ActivitiesRepository from '@/repositories/activitiesRepository'

const githubApiService = GithubApiService()
const projectsRepository = ProjectsRepository({ githubApiService })
const otherProjectsRepository = OtherProjectsRepository()
const activitiesRepository = ActivitiesRepository()

const container = {
  githubApiService,
  projectsRepository,
  otherProjectsRepository,
  activitiesRepository,
}

export default container
