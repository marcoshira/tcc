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
import { Footer } from '../../components/Footer';

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

  const [yellowSPT65, setYellowSPT65] = useState(false);
  const [yellowSPT0, setYellowSPT0] = useState(false);

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

    //Deletar dados de nspt após mudar o comprimento
    Object.keys(formSPT).forEach((val) => {
      if (+val > +comp + 1) {
        delete formSPT[val];
      }
    });

    //Erro ao mudar o comprimento para algo maior que a quantidade de nspt
    setDisabledSPT(
      Object.values(formSPT).length <= +comp ||
        Object.values(formSPT).includes(''),
    );
  };

  const handleShape = (shape) => {
    setFormShape(shape);
  };

  const handleSpt = (nspt, index) => {
    formSPT[index + 1] = nspt;

    //Alerta ao colocar valor de nspt maior que 65 ou igual a 0
    setYellowSPT65(false);
    setYellowSPT0(false);

    //Erro ao nao preencher todos os valores de nspt
    setDisabledSPT(
      Object.values(formSPT).length <= +formComp ||
        Object.values(formSPT).includes(''),
    );

    Object.values(formSPT).map((val) => {
      //Erro ao colocar valor negativo
      if (+val < 0) {
        setDisabledSPT(true);
      }
      //Alerta ao colocar valor > 65
      if (+val > 65) {
        setYellowSPT65(true);
      }
      //Alerta a colocar 0
      if (+val == 0) {
        setYellowSPT0(true);
      }
    });
  };

  const handleLayerSoil = (soil, index) => {
    soilLayer[index] = soil;
    formSoil[index] = {
      soil: soil,
      depthSoil: depthSoilLayer[index],
    };
    setDisabledSoil(Object.values(soilLayer).length != formLayer);
    Object.values(formSoil).map((val) => {
      if (!val.soil.subtype) {
        setDisabledSoil(true);
      }
    });
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
    setDepthSum(
      Object.values(depthSoilLayer).reduce(
        (partialSum, a) => +partialSum - +a,
        0,
      ) as number,
    );
    delete formSoil[formLayer - 1];
    delete depthSoilLayer[formLayer - 1];
    delete soilLayer[formLayer - 1];
    setFormLayer(formLayer - 1);
    setDisabledSoil(Object.values(soilLayer).length != formLayer);
  };

  const handleClick = () => {
    console.log(depthSum);
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
    <Styled.HomeWrapper id="Home">
      <Heading caption="Marcos Hirazawa">Estaca Web</Heading>
      <Wrapper>
        <InputContainer
          title="Tipo de Estaca"
          frameSize="mediumSmall"
          red={!formStake}
          errorMessage={'Dados incompletos'}
          instruction="Informe qual tipo de estaca está utilizando."
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
          instruction="Informe o comprimento do fuste e o diâmetro ou lado da estaca em metros e seu formato (circular ou quadrado)."
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
          instruction="Desconsiderando apenas o primeiro metro da primeira camada de solo, informe qual tipo de solo de cada camada, além de sua profundidade."
        >
          <InputSoilLayer
            onAddLayer={handleLayer}
            onRemoveLayer={handleCloseLayer}
            onFormChangeSoilLayer={handleLayerSoil}
            onFormChangeDepthSoilLayer={handleLayerDepthSoil}
            layer={formLayer}
          />
        </InputContainer>
        <InputContainer
          title="Dados de SPT"
          frameSize="spt"
          depth={+formComp}
          red={disabledSPT}
          yellow={yellowSPT65 || yellowSPT0}
          alert={
            yellowSPT65
              ? 'Algum valor se encontra acima do admitido pela norma, favor conferir novamente.'
              : 'Algum valor se encontra nulo, favor conferir novamente.'
          }
          errorMessage={'Dados incompletos'}
          instruction="Após informar o comprimento do fuste, informe os valores de Nspt de cada metro até aquele imediatamente abaixo da ponta da estaca."
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
      <Footer />

      {modalVisible && (
        <ModalOrder
          isOpen={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          data={finalData}
        />
      )}
    </Styled.HomeWrapper>
  );
}
