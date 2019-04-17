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

  renderGithubLink = (githubLink) => {
    return githubLink ? 
      <>
        View {" "}
          <a href={githubLink} target='_blank' rel="noopener noreferrer">
            Github Repository
          </a> <br/> <br/>
      </> 
      : ""
  }


  render(){
    const {object} = this.props
    const { images, header, githubLink } = object

    return(
      <>
        <strong>{header}</strong><br/> 
        {this.renderImages(images)}
        {this.renderGithubLink(githubLink)}
        
        {/* View {" "}
          <a href="https://github.com/NicAChan/FEEDER" target='_blank' rel="noopener noreferrer">
          Github Repository
          </a> <br/> <br/>
        */}

        
        {/*         
        View {" "}
          <a href="https://github.com/chrischu5/Team_Salmon" target='_blank' rel="noopener noreferrer">
          Github Repository
          </a> <br/>
        
        View {" "}
          <a href="https://quizzbuzzsalmon.herokuapp.com/" target='_blank' rel="noopener noreferrer">
          App deployed to Heroku
          </a> */}
      </>
      )
  }
}
