import './style.scss'

const Information=({title, description}) =>{
    return <div className={`P-box}`}>
        <h3>{title} </h3>
        {description ? <p>{description}</p> : null}
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, odit.</span> 
        </div>
}
export default Information