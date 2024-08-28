import React from 'react'
import Input from 'funuicss/ui/input/Input'
import Text from 'funuicss/ui/text/Text'


export default function InputUi
({label, standard, hint, required, ...rest }) {
  return <div>
    {
      label &&  <Text 
      text={`${label} ${required ? '*' : ''}` || ''} 
      block 
      size='smaller' 
      uppercase 
      bold 
      color='violet'
      funcss='margin-bottom-10'
      />
    }
    <Input label={hint || ''} funcss='dark900 _input roundEdgeSmall' borderless {...rest} fullWidth />
</div>
}
