// "use client"
// import React, { useEffect, useState } from 'react'
// import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
// import Div from 'funuicss/ui/div/Div'
// import Text from 'funuicss/ui/text/Text'
// import Input from 'funuicss/ui/input/Input'
// import Section from "funuicss/ui/specials/Section"
// import Button from "funuicss/ui/button/Button"
// import Alert from "funuicss/ui/alert/Alert"
// import {FunGet} from "funuicss/js/Fun"
// export default function Home() {
//   const [message, setmessage] = useState("")

//   useEffect(() => {
//     setTimeout(() => {
//       setmessage("")
//     }, 5000);
  
//     return () => {
//       clearTimeout()
//     }
//   }, [message])
  

//   const HandleSignIn = () => {
//     let email , password 
//     email = FunGet.val("#email")
//     password = FunGet.val("#password")


   
//     if(email && password){
//       setmessage({"type" : "success" , "message" : "Successfully login"})
//     }else{
//       setmessage({"type" : "warning" , "message" : "Enter email and password"})
//     }
//   }
//   return (
//     <FullCenteredPage>
//     {
//       message && 
//       <Alert 
//       type={message.type}
//       message={message.message}
//       fixed="top-right"
//       />
//     }
//       <Div maxWidth="350px" funcss="fit">
//         <Div>
//           <Text 
//           text="Welcome"
//           heading="h1"
//           block
//           />
//           <Text 
//           text="Enter your email and password to continue!"
//           bold
//           />
//         </Div>
//         <Section gap={3} />
//         <Div>
//           <Div>
//             <Text text="Email*" bold color="primary" block funcss="margin-bottom-10"/>
//             <Input id="email" type="email" fullWidth bordered/>
//           </Div>
//           <Section gap={1.5} />
//           <Div>
//             <Text text="Password*" bold color="primary" block funcss="margin-bottom-10"/>
//             <Input id="password" type="password" fullWidth bordered/>
//           </Div>
//           <Section gap={1.5} />
//           <Div>
//          <Button 
//          text="Sign In"
//          bold 
//          bg="primary"
//          raised
//          fullWidth 
//          onClick={HandleSignIn}
//          />
//           </Div>
//         </Div>
//       </Div>
//     </FullCenteredPage>
//   )
// }

import React from 'react'
import Form from './form/page'

export default function Home() {
  return (
    <div><Form /></div>
  )
}
