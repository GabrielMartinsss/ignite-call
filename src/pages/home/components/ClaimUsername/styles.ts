import { Box, Text, styled } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  '@media(max-width: 720px)': {
    gridTemplateColumns: '1fr',
  },
})

export const FormAnotation = styled('div', {
  marginTop: '$2',
})

export const Message = styled(Text, {
  color: '$gray400',
})
export const MessageError = styled(Text, {
  color: '#f75a68',
})
