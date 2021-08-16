import React from "react";
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"Js"} description = {'To find out more about the cookies we use, see our Privacy Policy.'}/>
                    <Skill title={"React"} description = {'To find out more about the cookies we use, see our Privacy Policy.'}/>
                    <Skill title={"Css"} description = {'To find out more about the cookies we use, see our Privacy Policy.'}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;