import { useState } from 'react';
import './index.css';

function Projects() {
    const [currentTab,setCurrentTab] = useState("All");
  return (
    <div id="projects" className="filter bg-gray">
		<div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Projects that we're proud of</h2>
                </div> 
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="button-group filters-button-group">
                        <button className={`button ${currentTab==="All"?"is-checked":null}`} onClick={()=>setCurrentTab("All")}>ALL</button>
                        <button className={`button ${currentTab==="Design"?"is-checked":null}`} onClick={()=>setCurrentTab("Design")}>DESIGN</button>
                        <button className={`button ${currentTab==="Development"?"is-checked":null}`} onClick={()=>setCurrentTab("Development")}>DEVELOPMENT</button>
                        <button className={`button ${currentTab==="Marketing"?"is-checked":null}`}  onClick={()=>setCurrentTab("Marketing")}>MARKETING</button>
                    </div> 
                    <h3>This Page is under maintenance</h3>
                    {/* <div className="grid">
                        <div className="element-item development">
                            <a href="article.html">
                                <img className="img-fluid" src="images/project-1.jpg" alt="alternative"/>
                                <p><strong>Online banking</strong> - pellentesque tincidunt leo eu laoreedt integer quis vanos compren</p>
                            </a>
                        </div>
                        <div className="element-item development">
                            <a href="article.html">
                                <img className="img-fluid" src="images/project-2.jpg" alt="alternative"/>
                                <p><strong>Loans company</strong> - odio semper, interdum orci molestie, mattis lectus pellentesq aliqu</p>
                            </a>
                        </div>
                        <div className="element-item development">
                            <a href="article.html">
                                <img className="img-fluid" src="images/project-3.jpg" alt="alternative"/>
                                <p><strong>Refinance firm</strong> - arcu a neque congue finibus doneci malesuada et purus melan bris</p>
                            </a>
                        </div>
                        <div className="element-item design development">
                            <a href="article.html">
                                <img className="img-fluid" src="images/project-4.jpg" alt="alternative"/>
                                <p><strong>Financial products</strong> - id aliquam ut malesuada eros utr varius blandit aliquam tinci bist</p>
                            </a>
                        </div>
                        <div className="element-item design development">
                            <a href="article.html">
                                <img className="img-fluid" src="images/project-5.jpg" alt="alternative"/>
                                <p><strong>Credit cards</strong> - magna a feugiat cras a semper tellus in rhoncus vehicula tellus rugo</p>
                            </a>
                        </div>
                        <div className="element-item design marketing">
                            <a href="article.html">
                                <img className="img-fluid" src="images/project-6.jpg" alt="alternative"/>
                                <p><strong>Software robots</strong> - vel sodales dolor donec a est sapien integer pharetr bilom conva</p>
                            </a>
                        </div>
                        <div className="element-item design marketing">
                            <a href="article.html">
                                <img className="img-fluid" src="images/project-7.jpg" alt="alternative"/>
                                <p><strong>Company control</strong> - ut quam aliquam elemo de vestibulum fringilla porttitor vanic tres</p>
                            </a>
                        </div>
                        <div className="element-item design marketing">
                            <a href="article.html">
                                <img className="img-fluid" src="images/project-8.jpg" alt="alternative"/>
                                <p><strong>Audit reports</strong> - sed tempor, metus vel pharetra finibus, est ante hendrerit augue</p>
                            </a>
                        </div>
                        <div className="element-item design marketing">
                            <a href="article.html">
                                <img className="img-fluid" src="images/project-9.jpg" alt="alternative"/>
                                <p><strong>Big business</strong> - aliquam semper molestie nisi, at porttitor lacus suscipit in mole richter</p>
                            </a>
                        </div>
                    </div>  */}
                    
                    
                </div>
            </div> 
		</div>
    </div> 
  );
}

export default Projects;
