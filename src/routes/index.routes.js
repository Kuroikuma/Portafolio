import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from '../app/page/homePage'
import { App } from '../app/page/App/App'
import { SkillPage } from '../app/page/skillPage'
import { ProjectPage } from '../app/page/project'
import { ContactPage } from '../app/page/contact'
import { ProjectDetails } from '../app/page/project-details/project-detail'
import { PostSkill } from '../app/Components/postSkill/postSkill'
import { PostCert } from '../app/Components/postCert/postCert'
import { CertPage } from '../app/page/certPage'

export const IndexRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/post_skill" element={<PostSkill />} />
        <Route path="/post_cert" element={<PostCert />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/certificates" element={<CertPage />} />
        <Route path="/contact" element={<ContactPage />} />
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
