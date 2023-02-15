import Cookies from 'js-cookie'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { Text, Container } from '@/components'

const Section = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2e31a6;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`
const Button = styled.button`
  padding: 5px 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e95659;
  border-radius: 30px;
  border: none;
  margin: 0 5px;

  &:hover {
    cursor: pointer;
  }
`

const cookieConsent = 'allow_cookies'

export const Banner = () => {
  const [allowCookies, setAllowCookies] = useState(true)

  useEffect(() => {
    const allowed = Cookies.get(cookieConsent) === 'true'
    setAllowCookies(allowed)
  }, [])

  const acceptCookies = () => {
    if (!allowCookies) {
      Cookies.set(cookieConsent, 'true', {
        expires: 365,
      })

      setAllowCookies(true)
    }
  }

  const declineCookies = () => {
    setAllowCookies(true)
  }

  if (allowCookies) return null

  return (
    <Section>
      <Container backgroundColor='blue' marginX='auto'>
        <Wrapper>
          <div>
            <Text color='white' fontSize={5}>
              This website uses cookies to enhance your browsing experience.
              They need your consent to be executed.
            </Text>
          </div>

          <ButtonContainer>
            <Button onClick={acceptCookies}>Accept</Button>
            <Button onClick={declineCookies}>Reject</Button>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </Section>
  )
}
