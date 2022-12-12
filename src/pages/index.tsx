import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsResult,
} from 'next'
import Head from 'next/head'
import {
  Box,
  Careers,
  Footer,
  Header,
  Hero,
  Projects,
  OtherProjects,
  Activities,
} from '@/components'
import { Project } from '@/domain/Project'
import container from '@/container'
import { Activity } from '@/domain/Activity'

type HomeProps = {
  projects: Project[]
  otherProjects: Project[]
  activities: Activity[]
}

const Home: NextPage<HomeProps> = ({ projects, otherProjects, activities }) => {
  return (
    <>
      <Head>
        <title>Open Source - By Codeminer42</title>
        <meta
          name='description'
          content='Free and Open Source Software projects by Codeminer42'
        />
      </Head>

      <Header />

      <Box as='main'>
        <Hero />

        <Projects projects={projects} />

        <OtherProjects projects={otherProjects} />

        <Activities activities={activities} />

        <Careers />
      </Box>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<HomeProps>
> => {
  const { projectsRepository, otherProjectsRepository, activitiesRepository } =
    container
  const projects = await projectsRepository.getProjects()
  const otherProjects = await otherProjectsRepository.getOtherProjects()
  const activities = await activitiesRepository.getActivities()

  return {
    props: {
      projects,
      otherProjects,
      activities,
    },
  }
}

export default Home
