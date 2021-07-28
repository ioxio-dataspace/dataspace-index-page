import styled from 'styled-components'
import { LinkSection as LinkSectionBase } from '../components/LinkSection'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { COMPONENT_NAME, NEXUS_URL, DEV_PORTAL_URL } from '../conf'

import iconBusiness from '../img/business.svg'
// import iconNexus from '../img/circles.svg'
import iconNexus from '../img/nexus.svg'
import iconDevPortal from '../img/computer.svg'
import theme from '../theme'
import { flexRowCenter, onMobile } from '../mixins'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.5rem;
  //max-width: 150rem;
  margin: 0 auto;
`

const Sections = styled.div`
  ${flexRowCenter()}
  flex-wrap: wrap;
  margin-top: 1rem;

  ${onMobile(`
    flex-direction: column;
  `)}
`

const LinkSection = styled(LinkSectionBase)`
  margin: 0.5rem;
  width: 25rem;

  ${onMobile(`
    margin-bottom: 2rem;
  `)}
`

export function MainScreen () {
  return (
    <Layout>
      <Content>
        <Hero/>
        <Sections>
          <LinkSection
            title="Digital Living International" icon={iconBusiness}
            href="https://digitalliving.fi"
          >
            A leading expert on data productization, data sharing and
            connected
            data
            economy technologies. Read more about our vision to make life
            easier
            for
            companies and individuals by moving data fast and safely
          </LinkSection>
          <LinkSection title="Nexus Technology" icon={iconNexus} href={NEXUS_URL}>
            Data sharing nexuses are at the core of making existing data
            more
            flexible, usable, safer and inevitably more profitable. Read
            more
            about
            Nexus and ways it could help your business
          </LinkSection>
          <LinkSection
            title="Developer portal" icon={iconDevPortal}
            href={DEV_PORTAL_URL}
          >
            Are you already a member on your way to manage and discover data
            sources, and got lost? At the developer portal you can manage
            your
            sources and other configurations
          </LinkSection>
        </Sections>
      </Content>
      <Footer/>
    </Layout>
  )
}