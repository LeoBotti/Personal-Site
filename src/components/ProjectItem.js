import React from "react";
import { Carousel } from 'react-bootstrap';

export class ProjectItem extends React.Component{
  renderImages = (imagesArray) => {
    if(imagesArray.length === 0){
      return;
    }

    let renderedImages = imagesArray.map((imageArray, index) => {
      return (
        <Carousel.Item key={index}>
          <img className='d-block carousel-images__item-container' src={imageArray} alt=""/>
        </Carousel.Item>
      )
    })

    return (<Carousel className="carousel-images__container">{renderedImages}</Carousel>)

  }

  renderInfo = (projectInfo1, projectInfo2) => {
    return projectInfo2 ?
      <>
        {projectInfo1} <br/> <br/>
        {projectInfo2}
      </>
    : <>{projectInfo1}</>
  }

  renderGithubLink = (githubLink) => {
    return githubLink ? 
      <>
        View {" "}
          <a href={githubLink} target='_blank' rel="noopener noreferrer">
            Github Repo
          </a><br/>
      </> 
      : ""
  }

  rednerAppLink = (appLink) => {
    return appLink ?
    <>
      View {" "}
          <a href={appLink} target='_blank' rel="noopener noreferrer">
          App on Heroku
          </a> <br/>
    </> 
    : ""
  }


  render(){
    const {object} = this.props
    const { images, header, githubLink, appLink, projectInfo1, projectInfo2 } = object

    return(
      <>
        {this.renderImages(images)}
        <div className="project-text-content">
          {this.renderGithubLink(githubLink)}
          {this.rednerAppLink(appLink)} <br/>
          {this.renderInfo(projectInfo1, projectInfo2)}
        </div>
      </>
      )
  }
}
