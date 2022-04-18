import styled from "styled-components"

import { LinkSection as LinkSectionBase } from "../components/LinkSection"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"

import { ReactComponent as IconBusiness } from "../img/business.svg"
import { ReactComponent as IconNexus } from "../img/nexus.svg"
import { ReactComponent as IconDevPortal } from "../img/computer.svg"

import theme from "../theme"
import { NEXUS_URL, DEV_PORTAL_URL } from "../conf"

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
`

const Sections = styled.div`
  ${theme.mixins.flexRowCenter}
  flex-wrap: wrap;
  margin-top: 1rem;

  ${theme.media.onMobile} {
    flex-direction: column;
  }
`

const LinkSection = styled(LinkSectionBase)`
  margin: 0.5rem;
  width: 25rem;
  max-width: 25rem;

  ${theme.media.onMobile} {
    margin-bottom: 2rem;
    width: 100%;
  }
`

export function MainScreen() {
  return (
    <Layout>
      <Content>
        <Hero />
        <Sections>
          <LinkSection title="IOXIO" icon={<IconBusiness />} href="https://ioxio.com">
            A leading expert on data productization, data sharing and connected data
            economy technologies. Read more about our vision to make life easier for
            companies and individuals by moving data fast and safely
          </LinkSection>
          <LinkSection
            title="Dataspace technology"
            icon={<IconNexus />}
            href={NEXUS_URL}
          >
            Data sharing dataspaces are at the core of making existing data more
            flexible, usable, safer and inevitably more profitable. Read more about
            Dataspace and ways it could help your business
          </LinkSection>
          <LinkSection
            title="Developer portal"
            icon={<IconDevPortal />}
            href={DEV_PORTAL_URL}
          >
            Are you already a member on your way to manage and discover data sources,
            and got lost? At the developer portal you can manage your sources and other
            configurations
          </LinkSection>
        </Sections>
      </Content>
      <Footer />
    </Layout>
  )
}
