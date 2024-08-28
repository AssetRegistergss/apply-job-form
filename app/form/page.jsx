'use client'
import QWrapper from '@/components/QWrapper'
import UiButton from '@/ui/button'
import CircleUi from '@/ui/Circle'
import InputUi from '@/ui/input'
import RowFlexUi from '@/ui/RowFlex'
import SectionUI from '@/ui/section'
import TextUi from '@/ui/Text'
import Aos from 'aos'
import React, { useState, useEffect} from 'react'
import { PiArrowRight, PiPaperPlane, PiX } from 'react-icons/pi'
import {FunGet} from 'funuicss/js/Fun'
import Axios from 'axios'
import Alert from 'funuicss/ui/alert/Alert'
import Loader from '@/ui/Loader'
import Modal from 'funuicss/ui/modal/Modal'
import Preview from '../preview/page'

export default function Form() {
    const [page, setpage] = useState(1)
    const [total_pages, settotal_pages] = useState(2)
    const [data_rate, setdata_rate] = useState(null)
    const [loading, setloading] = useState(false)
    const [status, setstatus] = useState('')
    const [message, setmessage] = useState('')
    const [modal, setmodal] = useState(false)
    const [data, setdata] = useState('')
    const [app_letter_url, setapp_letter_url] = useState('')
    const [academic_certificate_url, setacademic_certificate_url] = useState('')
    const [nss_cert_url, setnss_cert_url] = useState('')
    const [curriculum_vitae_url, setcurriculum_vitae_url] = useState('')

    useEffect(() => {
      setTimeout(() => {
        setstatus(false)
      }, 4000);
    
      return () => {
        clearTimeout()
      }
    }, [status])
    

    const confirmation = () => {
        setloading(true)
        Axios.post('https://id-card-pvj6.onrender.com/jobApplication' , data)
        .then(() => {
          setloading(false)
          setstatus('success')
          setmessage('Form submitted successfully!')
          setTimeout(() => {
            window.location.assign('/success')
          }, 4000);
        })
        .catch(err => {
          setloading(false)
          setstatus('warning')
          setmessage(JSON.stringify(err.message))
                })  
    }
    const Submit = () => {
        if(page < total_pages){
            setpage(page + 1)
        }else{

            let firstName,
            lastName,
            middleName,
            firstDegree,
            mastersDegree,
            institution1,
            institution1Year,
            institution2,
            institution2Year,
            institution3,
            institution3Year,
            jobApplied,
            competence1,
            competence2,
            competence3,
            competence4,
            serviceYear,
            workExperience,
            email,
            contact,
            applicationLetter,
            academicCertificate,
            curriculumVitae,
            NssCertificate

           

            firstName = FunGet.val('#firstName')
            lastName = FunGet.val('#lastName')
            middleName = FunGet.val('#middleName')
            firstDegree = FunGet.val('#firstDegree')
            mastersDegree = FunGet.val('#mastersDegree')
            jobApplied = FunGet.val('#jobApplied')
            competence1 = FunGet.val('#competence1')
            competence2 = FunGet.val('#competence2')
            competence3 = FunGet.val('#competence3')
            competence4 = FunGet.val('#competence4')
            serviceYear = FunGet.val('#serviceYear')
            workExperience = FunGet.val('#workExperience')
            institution1 = FunGet.val('#institution1')
            institution1Year = FunGet.val('#institution1Year')
            institution2 = FunGet.val('#institution2')
            institution2Year = FunGet.val('#institution2Year')
            institution3 = FunGet.val('#institution3')
            institution3Year = FunGet.val('#institution3Year')
            email = FunGet.val('#email')
            contact = FunGet.val('#contact')
            applicationLetter = FunGet.val('#applicationLetter')
            academicCertificate = FunGet.val('#academicCertificate')
            curriculumVitae = FunGet.val('#curriculumVitae')
            NssCertificate = FunGet.val('#NssCertificate')


          
            // send data to server
            
        let doc = {
            first_name: firstName ,
            surname: lastName ,
            middle_name: middleName ,
            masters_degree: mastersDegree ,
            first_degree: firstDegree ,
            job_applied_for: jobApplied ,
            competency_1: competence1 ,
            competency_2: competence2 ,	
            competency_3: competence3 ,
            competency_4: competence4 ,
            year_of_national_service: serviceYear ,
            years_of_work_experience: workExperience ,
            institution_1_name: institution1 ,
            institution_1_years: institution1Year ,
            institution_2_name: institution2 ,
            institution_2_years: institution2Year ,
            institution_3_name: institution3 ,
            institution_3_years: institution3Year ,
            email: email ,
            phone_contact: contact ,
            application_letter: applicationLetter ,
            academic_certificate: academicCertificate ,
            curriculum_vitae: curriculumVitae ,
            national_service_certificate: NssCertificate ,
            
        }

        console.log(doc)
        if( 

            firstName  &&
            lastName  &&
            jobApplied  &&
            email  &&
            contact  
        ){
          setdata(doc) 
          setmodal(true)

        }else{
            setstatus('warning')
            setmessage('Please fill in all required fields!')
        }
                
                
                }
    }

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     const size = file.size;
    //     console.log(size)
  
    //         // Create a preview URL for the selected file
    //         const fileUrl = URL.createObjectURL(file);
    //         setPreviewUrl(fileUrl);
    
    //         const img = new Image();
    //         img.src = fileUrl;
    //         img.onload = () => {
    //           setImageDimensions({ width: img.width, height: img.height });
    //         };
    
    //         console.log(img.width)
    //         setSelectedFile(file);
    
    
    //   };
  return (
    <div className="container">
        <Modal
        open={modal}
        maxWidth={'800px'}
        title={<TextUi heading='h4' text='Review' />}
        funcss='card'
        footer={<RowFlexUi gap={2} justify="flex-end">
              <UiButton bold text="No, Don't Submit" color='s'  onClick={() => setmodal(false)} endIcon={<PiX />}/>
              <UiButton bold text="Yes Submit" bg='p' raised onClick={confirmation} endIcon={<PiPaperPlane />}/>
        </RowFlexUi>}
        body={<>
        <div className="height-400-max fit">
        <Preview data={data} />
        </div>
        </>}
        />


        {
            loading && <Loader />
        }
        {
            status && <Alert type={status} message={message} fixed='top-middle' animation='SlideDown' standard/>
        }
        <div className='width-600-max fit center padding-top-50'>
       <RowFlexUi gap={2} justify='space-between'>
        <div>
        <RowFlexUi gap={1} >
            <CircleUi bg='dark900' size={4}>
                <img src='/gss.png' className='width-50'/>
            </CircleUi>
        </RowFlexUi>
        </div>
       </RowFlexUi>
        <SectionUI gap={2} >
        <RowFlexUi gap={3} justify='space-between'>
       <div className="width-500-max fit">
       <TextUi heading='h4'  text='Personal data of persons applying for job.' color='dark200'/>
       </div>
        <TextUi 
        heading={'h6'}
        color='p'
        bold
        text={<span>
            {page} / {total_pages}
        </span>}
        />
        </RowFlexUi>
        </SectionUI>
        {
            page == 1 &&
        <QWrapper>
            <TextUi 
        block
        article 
        text={<>
        <div className="h1 text-bold">👋Hi! </div>
        Would you mind taking <span className="active">10 minutes</span> to complete this form. 
        </>} 
        color='dark200'/>
        </QWrapper>
        }
        {
                page == 2 && 
                <div>
                <QWrapper q="1" title='Name of applicant'>
               <SectionUI gap={1}>
               <RowFlexUi gap={1}>
                <InputUi label={'First Name'} id='firstName'/>
                <InputUi label={'Middle Name'} id='middleName'/>
                <InputUi label={'Last Name'} id='lastName'/>
               </RowFlexUi>
               </SectionUI>
                </QWrapper>
                <QWrapper q="2" title='State your academic qualifications'>
               <SectionUI gap={1}>
              <RowFlexUi gap={2}>	
              <InputUi 
                label={'first Degree'} 
                id='firstDegree'  
                select 
                options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Yes' , 'value':true} ,
                    {'text':'No' , 'value':false} ,
                ]}/>
              <InputUi 
                label={'Masters Degree'} 
                id='mastersDegree'  
                select 
                options={[
                    {'text':'Select' , 'value':''} ,
                    {'text':'Yes' , 'value':true} ,
                    {'text':'No' , 'value':false} ,
                ]}/>

                </RowFlexUi>
               </SectionUI>
                </QWrapper>
                <QWrapper q="3" title='Indicate the job you have applied for'>
               <SectionUI gap={1}>
                <InputUi label={''} id='jobApplied'/>
               </SectionUI>
                </QWrapper>
                <QWrapper q="4" title='State four competencies and skills you have aquired that will enable you perform the job you have applied for.'>
               <SectionUI gap={1}>
               <RowFlexUi gap={1}>
                <div className="col fit">
                <InputUi label={'a'} id='competence1' />
                </div>
                <div className="col fit">
                <InputUi label={'b'} id='competence2'/>
                </div>
               </RowFlexUi>
               </SectionUI>
               <SectionUI gap={1}>
               <RowFlexUi gap={1}>
               <div className="col fit">
                <InputUi label={'c'} id='competence3'/>
                </div>
                <div className="col fit">
                <InputUi label={'d'} id='competence4'/>
                </div>
               </RowFlexUi>
               </SectionUI>
                </QWrapper>
                <QWrapper q="5" title='Which year did you complete your national service'>
               <SectionUI gap={1}>
                <InputUi label={'Year'} id='serviceYear' type="number" placeholder="YYYY" min="1949" max="7050"/>
               </SectionUI>
                </QWrapper>
                <QWrapper q="6" title='How many years of work experiecne do you have?'>
               <SectionUI gap={1}>
                <InputUi label={'Year'} id='workExperience' type="number" placeholder="YYYY" min="1949" max="7050"/>
               </SectionUI>
                </QWrapper>
                <QWrapper q="7" title='Name institutions you have worked with & number of years you have worked with each institution'>
               <SectionUI gap={1}>
               <RowFlexUi gap={1}>
               <div className="col fit">
                <InputUi label={'First Institution'} id='institution1'/>
                </div>
                <div className="col">
                <InputUi label={'Year'} id='institution1Year' type="number" placeholder="YYYY" min="1949" max="7050"/>
                </div>
               </RowFlexUi>
               </SectionUI>
               <SectionUI gap={1}>
               <RowFlexUi gap={1}>
               <div className="col fit">
                <InputUi label={'Second Institution'} id='institution2'/>
                </div>
                <div className="col">
                <InputUi label={'Year'} id='institution2Year' type="number" placeholder="YYYY" min="1949" max="7050"/>
                </div>
               </RowFlexUi>
               </SectionUI>
               <SectionUI gap={1}>
               <RowFlexUi gap={1}>
               <div className="col fit">
                <InputUi label={'Third Institution'} id='institution3'/>
                </div>
                <div className="col">
                <InputUi label={'Year'} id='institution3Year' type="number" placeholder="YYYY" min="1949" max="7050"/>
                </div>
               </RowFlexUi>
               </SectionUI>
                </QWrapper>
                <QWrapper q="8" title='Email Address'>
               <SectionUI gap={1}>
                <InputUi label={'Email'} id='email'/>
               </SectionUI>
                </QWrapper>
                <QWrapper q="9" title='Personal phone contact'>
               <SectionUI gap={1}>
                <InputUi label={'Contact'} id='contact'/>
               </SectionUI>
                </QWrapper>
                <QWrapper q="10" title='Attachment'>
                <SectionUI gap={1}>
                <RowFlexUi gap={1}>
                <div className="col fit">
                <InputUi onChange={(e) => {
                        const file = e.target.files[0];
                        setapp_letter_url(file)
                }} funcss='primary fullWidth' fullWidth file label={'Application Letter'} id='applicationLetter' />
               {
                app_letter_url &&
                <div>
                <TextUi text={app_letter_url.name} size='small' bold color='s'/>
            </div>
               }
                </div>
                <div className="col fit">
                <InputUi funcss='primary fullWidth' fullWidth file label={'Academic Certificate'} id='academicCertificate'
                onChange={(e) => {
                    const file = e.target.files[0];
                    setacademic_certificate_url(file)
            }}
                />
                    {
                academic_certificate_url &&
                <div>
                <TextUi text={academic_certificate_url.name} size='small' bold color='s'/>
            </div>
               }
                </div>
               </RowFlexUi>
               </SectionUI>
                <SectionUI gap={1}>
                <RowFlexUi gap={1}>
                <div className="col fit">
                <InputUi funcss='primary fullWidth' fullWidth file label={'Curriculum Vitae'} id='curriculumVitae'
                 onChange={(e) => {
                    const file = e.target.files[0];
                    setcurriculum_vitae_url(file)
            }} />
                {
                curriculum_vitae_url &&
                <div>
                <TextUi text={curriculum_vitae_url.name} size='small' bold color='s'/>
            </div>
               }
                </div>
                <div className="col fit">
                <InputUi funcss='primary fullWidth' fullWidth file label={'Naional service certificate if Any'} id='NssCertificate'  onChange={(e) => {
                    const file = e.target.files[0];
                    setnss_cert_url(file)
            }}/>
                {
                nss_cert_url &&
                <div>
                <TextUi text={nss_cert_url.name} size='small' bold color='s'/>
            </div>
               }
                </div>
               </RowFlexUi>
               </SectionUI>
                </QWrapper>
          
                </div>
        }

        <SectionUI gap={2} >
            <UiButton bold text={page == total_pages ? "Submit" : 'Next'} bg='s' raised onClick={Submit} endIcon={<PiArrowRight />}/>
        </SectionUI>
    </div>
    </div>
  )
}
