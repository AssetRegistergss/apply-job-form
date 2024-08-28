import RowFlexUi from '@/ui/RowFlex'
import TextUi from '@/ui/Text'
import React from 'react'

export default function QWrapper({q, title, children}) {
  return (
    <div className="padding-20 round-edge border margin-bottom-20">
      <div className="margin-botto-40">
       <RowFlexUi gap={1}>
        <TextUi text={q} size='big' color='dark500' />
        <div>
          <TextUi text={title} bold />
        </div>
       </RowFlexUi>
      </div>
      {children}
    </div>

  )
}
