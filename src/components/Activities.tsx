import { Container, Heading, Section } from '@/components'
import { Activity } from '@/domain/Activity'
import styled from 'styled-components'
import { StackedList, ListHeader, ListItem } from './StackedList'

type ActivitiesProps = {
  activities: Activity[]
}

const Link = styled.a`
  color: ${(props) => props.theme.colors.blue};
  &:hover {
    opacity: 0.8;
  }
`

const Activities = ({ activities }: ActivitiesProps) => {
  return (
    <Section bg='gray.100' pb={['5', '6', '7']}>
      <Container>
        <Heading color='blue' fontSize={['5', '6', '7']} mb={['4', '4', '5']}>
          Recent Activities
        </Heading>

        {activities.map((activity) => (
          <StackedList key={activity.project.name}>
            <ListHeader>{activity.project.name.toUpperCase()}</ListHeader>

            {activity.pullRequests.map((pullRequest) => (
              <ListItem key={pullRequest.url}>
                <Link href={pullRequest.url} target='_blank'>
                  {pullRequest.url}
                </Link>
              </ListItem>
            ))}
          </StackedList>
        ))}
      </Container>
    </Section>
  )
}

export default Activities
