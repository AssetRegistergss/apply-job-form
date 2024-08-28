import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import React from 'react'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import SectionUI from '@/ui/section'
export default function Success() {
  return (
    <FullCenteredPage>
        <div className="width-900-max center padding-top-50">
            <RowFlexUi gap={10}>
                <img src='/confirmation.svg' className='width-200'/>
                <div>
                    <TextUi heading='h2' text="✅ Submitted Successfully"  />
                    <SectionUI gap={2} />
                    <div className="article">
                    Your form has been submitted successfully! 
                    <div>
                    Thank you for your response. We will get back to you shortly.
                    </div>
                    </div>
                </div>
            </RowFlexUi>
        </div>
    </FullCenteredPage>
  )
}
