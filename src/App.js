import React from 'react'

import { ThemeProvider, Heading, Paragraph} from '@naveteam/saturn'

function App() {
  return (
    <ThemeProvider>
      <Heading>Nave OpenJS</Heading>
      <Paragraph marginBottom='4'>Esse repositório terá como principal finalidade o desenvolvimento de qualquer desenvolvedor que queira se desenvolver no mundo JavaScript, consumindo o conteúdo provido pelo time de desenvolvedores da Nave.rs </Paragraph>
      <Paragraph>Para isso, criaremos um repositório de conteúdos (em vídeo e em artigo) sobre as áreas de frontend, backend, devops e mobile, que podem ser consumidos para melhorar suas skills nesses assuntos.</Paragraph>
      <Paragraph>Segue abaixo um link que baseará parte da stack que criaremos: <a href='https://github.com/kamranahmedse/developer-roadmap' target='_blank'>https://github.com/kamranahmedse/developer-roadmap</a></Paragraph>
    </ThemeProvider>
  )
}

export default App
