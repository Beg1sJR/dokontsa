import "./style.css"

import gitHubIcon from "./gitHub-black.svg"


const BtnGitHub = ({link}) => {
    return ( 
         <a href={link} targt="_blank" rel="noreferrer" rclassName="btn-outline">
    <img src={gitHubIcon} alt="" />
    GitHub repo
</a> );
}
 
export default BtnGitHub;