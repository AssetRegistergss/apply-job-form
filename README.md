import React from "react"
import AppBar from "funuicss/ui/appbar/AppBar"
import Text from "funuicss/ui/text/Text"
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Link from "next/link"
import Button from 'funuicss/ui/button/Button'
import BreadCrumb from 'funuicss/ui/breadcrumb/BreadCrumb'
import { PiArrowRight, PiList } from 'react-icons/pi';
import FullCenteredPage from "funuicss/ui/specials/FullCenteredPage"
import Section from "funuicss/ui/specials/Section"
export default function Home() {
  return (
    <div>
    
    <AppBar 
    fixedTop
    left={<Text text="UI Designs" heading="h4" bold color="primary"/>}
    center={
      <RowFlex gap={1}>
        <Link href={"/"}>
          Product
        </Link>
        <Link href={"/"}>
          Market place
        </Link>
        <Link href={"/"}>
          About
        </Link>
        <Link href={"/"}>
          Team
        </Link>
      </RowFlex>
    }
    right={
      <RowFlex gap={1}>
        <Button  bg="primary" text="Sign Up" raised/>
        <BreadCrumb type="straight"/>
        <Button  color="primary" text="Sign In" />
      </RowFlex>
    }

    sidebarTrigger={<PiList />}
    />
<FullCenteredPage>

 <div className="text-center width-700">
  <Button
  startIcon={<Text text="Anim aute id magna aliqua" color="dark"/>}
  text="Read More"
  endIcon={<PiArrowRight />}
  bg="dark"
  outlined
  color="primary"
  rounded
  />

<Section gap={1} />
  <Text
  text="Data to enrich your online business"
  block
  size="jumbo"
/>

<Section gap={1} />
  <Text
  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur accusantium ad sint dolore, eligendi, ipsam, sapiente necessitatibus maiores maxime officiis! Odit debitis eum facilis eos architecto labore, ab accusamus."
  block
  article
  color="dark300"
/>

<Section gap={1.5} />


<RowFlex justify="center" gap={1}>
  <Button text="Getting Started" bg="primary" raised />
  <Button text="Learn More" color="primary"  endIcon={<PiArrowRight />}/>
</RowFlex>

 </div>
  
</FullCenteredPage>


    </div>
  )
}



<!-- form -->



<!-- card -->
import Container from "funuicss/ui/container/Container"
import Card from 'funuicss/ui/card/Card'
import Text from 'funuicss/ui/text/Text'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Circle from 'funuicss/ui/specials/Circle'
import { PiInstagramLogo, PiLinkedinLogo,  PiTwitterLogo } from 'react-icons/pi'
export default function Home() {


  return (
    <div>
      <Container funcss="margin-top-50">
  <RowFlex gap={5}>
  <Card 
      image={<img className="responsive" src="https://images.pexels.com/photos/4458419/pexels-photo-4458419.jpeg?auto=compress&cs=tinysrgb&w=600" />}
funcss={" width-300 center"} 
header={<div className="container">
  <Text heading='h4' block>Alicia Jane</Text>
  <Text block bold>Web developer</Text>
</div>}
body={
  <div className="container">
    <Text article>
Everyone around benefits as you become less demanding, more giving and more forgiving
</Text>
  </div>
}
footer={<div className="container padding-bottom-20">
<RowFlex gap={1.5}>
<Circle size={2} bg="dark700">
<PiInstagramLogo className="text-dark" />
</Circle>
<Circle size={2} bg="dark700">
<PiLinkedinLogo className="text-dark" />
</Circle>
<Circle size={2} bg="dark700">
<PiTwitterLogo className="text-dark" />
</Circle>
</RowFlex>

</div>}
/> 
<Card 
horizontal
      image={<img className="responsive" src="https://images.pexels.com/photos/4458419/pexels-photo-4458419.jpeg?auto=compress&cs=tinysrgb&w=600" />}
funcss={" width-600 center"} 
header={<div className="container">
  <Text heading='h4' block>Alicia Jane</Text>
  <Text block bold>Web developer</Text>
</div>}
body={
  <div className="container">
    <Text article>
Everyone around benefits as you become less demanding, more giving and more forgiving
</Text>
  </div>
}
footer={<div className="container padding-bottom-20">
<RowFlex gap={1.5}>
<Circle size={2} bg="dark700">
<PiInstagramLogo className="text-dark" />
</Circle>
<Circle size={2} bg="dark700">
<PiLinkedinLogo className="text-dark" />
</Circle>
<Circle size={2} bg="dark700">
<PiTwitterLogo className="text-dark" />
</Circle>
</RowFlex>

</div>}
/> 
  </RowFlex>

      </Container>
    </div>
  )
}


<!-- ?team Section -->
import React from "react";
import Container from "funuicss/ui/container/Container"
import Grid from "funuicss/ui/grid/Grid"
import Col from "funuicss/ui/grid/Col"
import Text from "funuicss/ui/text/Text"
import Section from "funuicss/ui/specials/Section"
import RowFlex from 'funuicss/ui/specials/RowFlex'
import { PiLinkedinLogo,  PiTwitterLogo} from 'react-icons/pi'

export default function Home() {

  const team = [
    {
        name:"John Deo" ,
        position:"Co-Founder / CEO" ,
        profile:"https://funui.netlify.app/components_images/team/square/john.jpg",
        about:"Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus"
    },
    {
        name:"Mary Bell" ,
        position:"Frontend Developer" ,
        profile:"https://funui.netlify.app/components_images/team/square/mary.jpg",
        about:"Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. "
    },
    {
        name:"Alicia Jane" ,
        position:"Business Relations" ,
        profile:"https://funui.netlify.app/components_images/team/square/jane.jpg",
        about:"Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus"
    },
    {
        name:"Vincert Peter" ,
        position:"Principal Designer" ,
        profile:"https://funui.netlify.app/components_images/team/square/peter.jpg",
        about:"Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus"
    }
]


  return (
    <div>
    <Container funcss="padding-top-50">
      <Grid>
        <Col sm={12} md={12} lg={6} funcss="padding">
          <Text
          text="Our Team"
          block
          heading="h2"
          bold
          />
          <Text
          text="We are a dynamic group of individuals who are passionate about what we do and dedicate to delivering the best result."
          article
          />
        </Col>
        <Col sm={12} md={12} lg={6} funcss="padding">
          <Grid>
           {
            team.map( doc => (
              <Col sm={12} md={6} lg={6} key={doc.name} funcss="padding">
              <img src={doc.profile} className="responsive round-edge" />
              <Section gap={1} />
              <Text text={doc.name} bold block heading="h3"/>
              <Section gap={0.5} />
              <Text text={doc.position} bold />
              <Section gap={0.5} />
              <Text text={doc.about} article/>
              <Section gap={0.5} />
              <RowFlex gap={1}>
                <PiTwitterLogo className="text-primary"/>
                <PiLinkedinLogo className="text-primary"/>
              </RowFlex>
              </Col>
            ) )
           }
          </Grid>
        </Col>
      </Grid>
    </Container>
    </div>
  )
}
