import {IProject} from '@personal/common'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

import {Button} from '.'
import {Github, Link as LinkIcon} from '../assets'
import {useAppContext} from '../context/AppContext'

export function Projects() {
  const {t, i18n} = useTranslation()
  const navigate = useNavigate()
  const [state, setState] = useState<IProject[]>()

  function handleNavigateProject(projectName: string) {
    navigate(`/project/${projectName}`)
  }

  const {setLoading} = useAppContext()

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8000/projects`)
      .then((res) => res.json())
      .then((data) => setState(data.projects as IProject[]))
  }, [])

  return (
    <section id="projects">
      <div className="title">
        <h1>{t('projects.title')}</h1>
      </div>

      <div className="cards">
        {state &&
          state.map((project) => (
            <div className="card" key={project?._id}>
              <div className="container">
                <div className="card-content">
                  <div className="card-text">
                    <div className="title">
                      <h2>{project.lang[i18n.language].name}</h2>
                      <p>{project.lang[i18n.language].summary}</p>
                    </div>
                    <div className="card-buttons">
                      {project.caseStudy && (
                        <Button
                          className="button"
                          onClick={() => handleNavigateProject(project.name)}>
                          <p>{t('projects.useCase')}</p>
                        </Button>
                      )}

                      {project.link && (
                        <Button className="button">
                          <LinkIcon />
                        </Button>
                      )}

                      {project.github && (
                        <Button className="button">
                          <Github />
                        </Button>
                      )}
                    </div>
                  </div>
                  <figure className="card-img">
                    <img
                      src={project.images.home}
                      onLoad={() => setLoading(false)}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Projects
