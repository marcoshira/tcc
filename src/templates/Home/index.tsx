import { useState, useEffect } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { InputContainer } from '../../components/InputContainer';
import { InputDim } from '../../components/InputDim';
import { InputSoilLayer } from '../../components/InputSoilLayer';
import { InputStake } from '../../components/InputStake';
import { FinalData, ModalOrder } from '../../components/ModalOrder';
import { NsptInput } from '../../components/NsptInput';
import { Wrapper } from '../../components/Wrapper';
import { AokiVelloso } from '../../utils/aokiVelloso';
import { DecourtQuaresma } from '../../utils/decourtQuaresma';
import Modal from 'react-modal';
import * as Styled from './styles';

export type SoilType = {
  type: string;
  subtype: string;
};

export type formSoilType = {
  [key: number]: {
    soil: SoilType;
    depthSoil: string;
  };
};

export type formSPTType = {
  [key: number]: string;
};

export type HomeProps = {
  modalElement?: string;
};

export function Home({ modalElement = null }: HomeProps) {
  const [disabled, setDisabled] = useState(true);
  const [disabledSPT, setDisabledSPT] = useState(true);
  const [disabledSoil, setDisabledSoil] = useState(true);

  const [formLayer, setFormLayer] = useState(1);
  const [soilLayer, setSoilLayer] = useState({});
  const [depthSoilLayer, setDepthSoilLayer] = useState({});
  const [formStake, setFormStake] = useState();
  const [formShape, setFormShape] = useState(1);
  const [formArea, setFormArea] = useState('');
  const [formComp, setFormComp] = useState('');

  const [formSoil, setFormSoil] = useState<formSoilType>({});
  const [formSPT, setFormSPT] = useState<formSPTType>({});

  const [depthSum, setDepthSum] = useState(0);

  const [finalData, setFinalData] = useState<FinalData>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleStake = (stake) => {
    setFormStake(stake);
  };

  const handleArea = (area) => {
    setFormArea(area);
  };

  const handleComp = (comp) => {
    setFormComp(comp);
  };

  const handleShape = (shape) => {
    setFormShape(shape);
  };

  const handleSpt = (nspt, index) => {
    formSPT[index + 1] = nspt;

    setDisabledSPT(
      Object.values(formSPT).length <= +formComp ||
        Object.values(formSPT).includes('0') ||
        Object.values(formSPT).includes(''),
    );
  };

  const handleLayerSoil = (soil, index) => {
    soilLayer[index] = soil;
    formSoil[index] = {
      soil: soil,
      depthSoil: depthSoilLayer[index],
    };
    setDisabledSoil(Object.values(soilLayer).length != formLayer);
  };

  const handleLayerDepthSoil = (depthSoil, index) => {
    depthSoilLayer[index] = depthSoil;
    formSoil[index] = {
      soil: soilLayer[index],
      depthSoil: depthSoil,
    };

    setDepthSum(
      Object.values(depthSoilLayer).reduce(
        (partialSum, a) => +partialSum + +a,
        0,
      ) as number,
    );
  };

  const handleLayer = () => {
    setFormLayer(formLayer + 1);
    setDisabledSoil(Object.values(soilLayer).length != formLayer);
  };

  const handleCloseLayer = () => {
    delete formSoil[formLayer - 1];
    delete depthSoilLayer[formLayer - 1];
    delete soilLayer[formLayer - 1];
    setFormLayer(formLayer - 1);
    setDisabledSoil(Object.values(soilLayer).length != formLayer);
  };

  const handleClick = () => {
    const DecData = DecourtQuaresma(
      formSoil,
      formStake,
      formArea,
      formShape,
      formComp,
      formSPT,
    );

    const AokiData = AokiVelloso(
      formSoil,
      formStake,
      formArea,
      formShape,
      formComp,
      formSPT,
    );
    const data = {
      AokiRAdm: +AokiData.Radm,
      AokiRL: +AokiData.Rlat,
      AokiRP: +AokiData.Rponta,
      AokiRTotal: +AokiData.Rtotal,
      DecRAdm: +DecData.Radm,
      DecRL: +DecData.Rlat,
      DecRP: +DecData.Rponta,
      DecRTotal: +DecData.Rtotal,
    };
    setFinalData(data);
    setModalVisible(true);
  };

  /*istanbul ignore else*/
  if (modalElement) {
    Modal.setAppElement(modalElement);
  }

  useEffect(() => {
    setDisabled(+formComp >= depthSum);
  }, [formComp, depthSum]);

  useEffect(() => {
    setDisabledSoil(Object.values(soilLayer).length != formLayer);
  }, [formLayer, soilLayer]);

  return (
    <Styled.Wrapper id="Home">
      <Heading>Estaca Web</Heading>
      <Wrapper>
        <InputContainer
          title="Tipo de Estaca"
          frameSize="mediumSmall"
          red={!formStake}
          errorMessage={'Dados incompletos'}
        >
          <InputStake onFormChangeStake={handleStake} />
        </InputContainer>
        <InputContainer
          title="Dimensões da Estaca"
          frameSize="small"
          red={!formArea || !formComp || !formShape || disabled}
          errorMessage={
            'Dados incompletos ou Comprimento do Fuste maior ou igual a soma das Profundidades das Camadas'
          }
        >
          <InputDim
            onFormChangeArea={handleArea}
            onFormChangeComp={handleComp}
            onFormChangeShape={handleShape}
          />
        </InputContainer>
        <InputContainer
          title="Tipos de Solo"
          frameSize="layer"
          layer={formLayer}
          red={!formSoil || disabled || disabledSoil}
          errorMessage={
            'Dados incompletos ou Comprimento do Fuste maior ou igual a soma das Profundidades das Camadas'
          }
        >
          <InputSoilLayer
            onAddLayer={handleLayer}
            onRemoveLayer={handleCloseLayer}
            onFormChangeSoilLayer={handleLayerSoil}
            onFormChangeDepthSoilLayer={handleLayerDepthSoil}
            layer={formLayer}
            depth={+formComp}
          />
        </InputContainer>
        <InputContainer
          title="Dados de SPT"
          frameSize="spt"
          depth={+formComp}
          red={disabledSPT}
          errorMessage={'Dados incompletos'}
        >
          <NsptInput depth={+formComp} onSPTFormChange={handleSpt} />
        </InputContainer>
        <Button
          disabled={
            formSoil &&
            formStake &&
            +formArea > 0 &&
            +formComp > 0 &&
            !disabled &&
            !disabledSPT &&
            !disabledSoil
              ? false
              : true
            // false
          }
          onClick={handleClick}
        >
          Calcular
        </Button>
      </Wrapper>
      {modalVisible && (
        <ModalOrder
          isOpen={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          data={finalData}
        />
      )}
    </Styled.Wrapper>
  );
}
