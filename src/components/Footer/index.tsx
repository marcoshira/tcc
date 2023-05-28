import * as Styled from './styles';
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
import { Mail } from '@styled-icons/material-outlined/Mail';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';

export const Footer = () => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>): void {
    alert('Clique em OK para abrir seu cliente de e-mail');
  }
  return (
    <Styled.Footer>
      <Styled.DevContainer>
        <p>Desenvolvimento: </p>

        <a
          href="https://drive.google.com/file/d/1AcaNRY3gMuDgoQg7JRSzv9AxbQBgVcX8/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          Marcos Hirazawa TCC
        </a>
      </Styled.DevContainer>

      <Styled.IconsContainer>
        <p>Contato:</p>
        {/* <Styled.IconsInnerContainer>
          <Whatsapp />
          <a
            href="https://contate.me/marcoshirazawa"
            target="_blank"
            rel="noreferrer"
          >
            +55 43 99672-6422
          </a>
        </Styled.IconsInnerContainer> */}

        <Styled.IconsInnerContainer>
          <Mail />
          <a
            href="https://mailto:hirazawa.marcos@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            hirazawa.marcos@gmail.com
          </a>
        </Styled.IconsInnerContainer>

        <Styled.IconsInnerContainer>
          <Linkedin />
          <a
            href="https://www.linkedin.com/in/marcos-hirazawa/"
            target="_blank"
            rel="noreferrer"
          >
            marcos-hirazawa
          </a>
        </Styled.IconsInnerContainer>
      </Styled.IconsContainer>
    </Styled.Footer>
  );
};
