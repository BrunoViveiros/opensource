import { Activity } from '@/domain/Activity'

const activitiesMock: Activity[] = [
  {
    project: {
      name: 'cm42-central',
    },
    pullRequests: [
      { url: 'https://github.com/Codeminer42/cm42-central/pull/809' },
    ],
  },
  {
    project: {
      name: 'material-ui',
    },
    pullRequests: [
      { url: 'https://github.com/mui/material-ui/pull/34508' },
      { url: 'https://github.com/mui/material-ui/pull/35005' },
      { url: 'https://github.com/mui/material-ui/pull/35088' },
    ],
  },
  {
    project: {
      name: 'Jest',
    },
    pullRequests: [
      { url: ' https://github.com/facebook/jest/pull/13362' },
      { url: ' https://github.com/facebook/jest/pull/13375' },
      { url: ' https://github.com/facebook/jest/pull/13444' },
    ],
  },
  {
    project: {
      name: 'Grommet',
    },
    pullRequests: [{ url: 'https://github.com/grommet/grommet/pull/6398' }],
  },
]

const ActivitiesRepository = () => {
  const getActivities = async (): Promise<Activity[]> => {
    return Promise.resolve(activitiesMock)
  }

  return {
    getActivities,
  }
}

export default ActivitiesRepository
