import { Project } from './Project'

export type Activity = {
  project: ActivityProject
  pullRequests: PullRequest[]
}

type ActivityProject = Omit<Project, 'description' | 'repository'>

type PullRequest = {
  url: string
}
