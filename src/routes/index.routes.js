import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { App } from '../app/page/App/App'
import { Project } from '../app/page/project/project'
import { ProjectDetails } from '../app/page/project-details/project-details'
import { PostSkill } from '../app/Components/postSkill/postSkill'
import { PostCert } from '../app/Components/postCert/postCert'
import { Skill } from '../app/page/skill/skills'
import { Home } from '../app/page/home/home'
import { Cert } from '../app/page/cert/cert'
import { Contact } from '../app/page/Contact/contact'

export const IndexRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/post_skill" element={<PostSkill />} />
        <Route path="/post_cert" element={<PostCert />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificates" element={<Cert />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="project_details/:id" element={<ProjectDetails />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
