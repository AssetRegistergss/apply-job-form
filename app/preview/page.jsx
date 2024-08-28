'use client'
import QWrapper from '@/components/QWrapper'
import UiButton from '@/ui/button'
import CircleUi from '@/ui/Circle'
import InputUi from '@/ui/input'
import RowFlexUi from '@/ui/RowFlex'
import SectionUI from '@/ui/section'
import TextUi from '@/ui/Text'
import React, { useState, useEffect} from 'react'
import { PiArrowRight } from 'react-icons/pi'


export default function Preview({data}) {
if(data){
    return (
        <div className="container">
          
            <div className='width-600-max fit center padding-top-50'>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="First Name" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.first_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Middle Name" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.middle_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Last Name" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.surname }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="first Degree" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.first_degree }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Masters Degree" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.masters_degree }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               </div>

               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Competency One" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.competency_1 }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Competency Two" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.competency_2 }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Competency Three" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.competency_3 }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Competency Four" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.competency_4 }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               </div>

               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Which year did you complete your national service" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.year_of_national_service }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="How many years of work experiecne do you have?" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.years_of_work_experience }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>

               </div>

               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="First Institution" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.institution_1_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Year" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.institution_1_years }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Second Institution" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.institution_2_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Year" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.institution_2_years }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Third Institution" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.institution_3_name }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Year" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.institution_3_years }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>
               </div>
    
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Email Address" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.email }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Personal Contact" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.phone_contact }
                        bold 
                        uppercase 
                        block
                        />
                    </div>
                </RowFlexUi>

               </div>
    
               <div className='border padding-20 margin-bottom-40 round-edge'>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Application Letter" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.application_letter ? "Uploaded" : 'Not Uploaded' }
                        bold 
                        uppercase 
                        color={data.application_letter ? 'success' : 'error'}
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Academic Certificate" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.academic_certificate ? "Uploaded" : 'Not Uploaded' }
                        bold 
                        uppercase 
                        color={data.academic_certificate ? 'success' : 'error'}
                        block
                        />
                    </div>
                   
                </RowFlexUi>
               <RowFlexUi gap={1} funcss='section'>
                    <div className="col">
                     <TextUi text="Curriculum vitae" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.curriculum_vitae ? "Uploaded" : 'Not Uploaded' }
                        bold 
                        uppercase 
                        color={data.curriculum_vitae ? 'success' : 'error'}
                        block
                        />
                    </div>
                    <div className="col">
                     <TextUi text="Nss Certificate" size='smaller' uppercase color='primary' bold/>
                        <TextUi 
                        text={ data.national_service_certificate ? "Uploaded" : 'Not Uploaded' }
                        bold 
                        uppercase 
                        color={data.national_service_certificate ? 'success' : 'error'}
                        block
                        />
                    </div>
                   
                </RowFlexUi>

               </div>

    
                    <div>
     
                    
    
                    </div>
    
        </div>
        </div>
      )
}else{
    return <></>
}
}
