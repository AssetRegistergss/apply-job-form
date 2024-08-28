import React from 'react'
import Text from 'funuicss/ui/text/Text'

export default function TextUi({children , color,  ...rest}) {
  return (
    <Text color={color || 'dark200'} {...rest}>{ children || '' }</Text>
  )
}
