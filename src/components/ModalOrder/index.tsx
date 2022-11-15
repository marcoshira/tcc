import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import Modal from 'react-modal';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { theme } from '../../styles/theme';

export type FinalData = {
  DecRL: number;
  DecRP: number;
  DecRTotal: number;
  DecRAdm: number;
  AokiRL: number;
  AokiRP: number;
  AokiRTotal: number;
  AokiRAdm: number;
};

export type ModalOrderProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  data: FinalData;
};
export const ModalOrder = ({
  isOpen,
  onRequestClose,
  data,
}: ModalOrderProps) => {
  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: theme.colors.navy,
      color: theme.colors.white,
      padding: '0',
    },
  };

  return (
    <Modal
      id="Modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <Styled.Wrapper>
        <Styled.Button onClick={onRequestClose} className="react-modal-close">
          <CloseIcon aria-label="Close Menu" />
        </Styled.Button>
        <Styled.ContentWrapper>
          <Heading size="small">Décourt-Quaresma:</Heading>
          <p>{`Resistência lateral: ${data.DecRL} kN (${(
            (data.DecRL / data.DecRTotal) *
            100
          ).toFixed(2)}%)`}</p>
          <p>{`Resistência de ponta: ${data.DecRP} kN (${(
            (data.DecRP / data.DecRTotal) *
            100
          ).toFixed(2)}%)`}</p>
          <p>{`Capacidade de carga: ${data.DecRTotal} kN`}</p>
          <p>{`Carga admissível: ${data.DecRAdm} kN`}</p>
        </Styled.ContentWrapper>

        <Styled.ContentWrapper>
          <Heading size="small">Aoki-Velloso:</Heading>
          <p>{`Resistência lateral: ${data.AokiRL} kN (${(
            (data.AokiRL / data.AokiRTotal) *
            100
          ).toFixed(2)}%)`}</p>
          <p>{`Resistência de ponta: ${data.AokiRP} kN (${(
            (data.AokiRP / data.AokiRTotal) *
            100
          ).toFixed(2)}%)`}</p>
          <p>{`Capacidade de carga: ${data.AokiRTotal} kN`}</p>
          <p>{`Carga admissível: ${data.AokiRAdm} kN`}</p>
        </Styled.ContentWrapper>
        <Styled.Disclaimer>
          *Os resultados para carga admissível são os menores dentre aqueles
          obtidos através do próprio método, da Norma ABNT NBR 6122 e da
          limitação de estacas escavadas.
        </Styled.Disclaimer>
      </Styled.Wrapper>
    </Modal>
  );
};
