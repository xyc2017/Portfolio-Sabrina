import {Col} from "react-bootstrap"

export const ProjectCard= ({title, description, imgUrl})=>{
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="project-img" src={imgUrl} />
                <div className="proj-txts">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}