import React from 'react'

import Helmet from 'react-helmet'

import Layout from '../component/Layout'
// import Navbar from '../component/NavBar'


 
export default function About() {
    return (<Layout>
              
             <div className="content-box">
              <div className="row">
                  <div className="col-sm-6">
                
                    <div className="element-wrapper">
                      <div className="element-box">
                        <h5 className="form-header">
                            About <small className="text-muted text-primary">cureCovid19.in</small> 
                            
                        </h5>
                        <div className="form-desc" style={{color: "#555"}}>
                           <p className="lead"> We are facing a global crisis. The decisions our leaders will make over the coming weeks will shape our future. From a public health perspective, to combat an epidemic, officials must take a number of actions, such as: build awareness, set guidelines for health professionals, target infection clusters, limit population movements, and allocate scarce resources.
                        
                           Our small contribution to people, at this hour, is to provide you with the most up-to-date information and data analysis about Covid-19. If information is missing please be patient - the data is likely updating and will be available shortly. </p>
                        </div>
                        <h5 className="form-header">
                          Sources
                        </h5>
                          
                        <div className="element-box-content">
                            
                                 <div className="">
                                <ul>
                                <li id="ref-1"><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/">Novel Coronavirus (2019-nCoV) situation reports</a> -
                                <a href="https://www.who.int/">World Health Organization</a> (WHO) </li>
                                <li id="ref-1"><a href="https://systems.jhu.edu/research/public-health/ncov/">Novel Coronavirus (COVID-19) Cases, provided by JHU CSSE</a> - Johns Hopkins University </li>
                                <li id="ref-1"><a href="https://www.mohfw.gov.in/">Ministry of Health and Family Welfare | GOI RSS</a> - Government of India </li>
                                <li id="ref-1"><a href="https://www.covid19india.org/">Covid19India.Org</a> - Updated Crowdsourced Information on Covid-19 in India</li>     
                                </ul>
                        </div>
                          
                                </div>
                            
                                <p> Given the popularity and impact of the dashboard to date, we plan to continue hosting and managing the tool throughout the entirety of the COVID-19 outbreak and to build out its capabilities to establish a standing tool to monitor and report on future outbreaks. We believe our efforts are crucial to help inform modelling efforts and control measures during the earliest stages of the outbreak.
                        
                                We are grateful for the data support from the covid19india.org team and the CSSE Johns Hopkins University.   </p>
                
                      </div>
                      
                    </div>

                </div>
                
                <div className="col-sm-6">
                    
                    <div className="element-wrapper">
                    
                      
                      <div className="element-box">
                        <h5 className="form-header">
                          FAQ's
                        </h5>
                        <div className="form-desc" style={{color: "#555"}}>
                            
                            <p className="lead font-weight-bold">Q. Are you Official</p>
                            <p>A. No. </p>
                            
                            <p className="lead font-weight-bold">Q. Is your Data Reliable</p>
                            <p>A. Yes. All the data is being collected from highly revered and valid sources like WHO, JHU and MofHWGOI who update the data regularly for public awareness.</p>
                            
                            <p className="lead font-weight-bold">Q. What is coronavirus?</p>
                            <p>A. Coronavirus is a family of viruses that causes infection in humans and animals. In humans, the coronavirus mainly causes respiratory infections. The recently discovered coronavirus causes a disease called Covid 19. </p>
                            
                            <p className="lead font-weight-bold">Q. What is Covid-19?</p>

                            <p>A. Covid-19 is an infectious disease caused by the recently discovered coronavirus in China.</p>

                            <p className="lead font-weight-bold">Q. What are the symptoms of Covid-19? </p>

                            <p>A. The major symptoms are dry cough, fever, difficulty in breathing and tiredness. Some people become infected without showing any symptoms. Most people (80%) recover from the diseases without any special treatment. It is the older people with a history of diabetes, blood pressure and other underlying medical problems who are at a risk of serious illness. </p>

                            <p className="lead font-weight-bold">Q. How does coronavirus spread? </p>

                            <p>A. People can get this virus from other people who are infected. The disease can spread through droplets from the nose or the mouth of the infected person. The droplets can land on the surface of an object. Touching these surfaces and then touching your face can also lead to getting infected.</p> 

                            <p className="lead font-weight-bold">Q. Has any vaccine been developed to cure Covid-19?</p>

                            <p>A. Till now, no vaccine, or antiviral or antibacterial medicine has been developed to cure Covid-19. However, supportive care should be provided to the infected people to relieve the symptoms. </p>

                            <p className="lead font-weight-bold">Q. What should I do to stay protected from the virus? </p>

                            <p>A. There are a few simple things you need to take care of: </p>
                                
                            <ol>  

                                <li>Practice frequent hand washing. Wash hands with soap and water or use alcohol based hand rub. Wash hands even if they are visibly clean</li>

                                <li>Cover your nose and mouth with handkerchief/tissue while sneezing and coughing</li>

                                <li>See a doctor if you feel unwell (fever, difficult breathing and cough). While visiting doctor wear a mask/cloth to cover your mouth and nose</li>

                                <li>If you have these signs/symptoms please call State helpline number or Ministry of Health & Family Welfare’s 24X7 helpline at 011-23978046</li>   
                            
                            <li>Avoid participating in large gatherings. Stay at home!</li> </ol> 

                            <p className="lead font-weight-bold">Q. Can coronavirus  spread through mosquitoes, cats or dogs? </p>

                            <p>A. Till date, there is no evidence that coronavirus can spread through these animals. </p>

                            <p className="lead font-weight-bold">Q. Can coronavirus spread in hot and humid areas?</p> 

                            <p>A. Yes. The virus can very much spread in hot and humid climate.</p> 
                            
                        </div>
                       
                      </div>
                    
                    </div>
                    
                </div>    
                
              </div>
              </div>
    </Layout>)
}
