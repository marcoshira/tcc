import { formSoilType, formSPTType, SoilType } from '../templates/Home';
import { sptLateral } from './decourtQuaresma';

export function AokiVelloso(
  soil: formSoilType,
  stake: number,
  area: string,
  shape: number,
  comp: string,
  spt: formSPTType,
) {
  let f1: number;
  const alfa: number[] = [];
  const k: number[] = [];
  let lastK: number;
  let Rl = 0;

  const sptLat = <sptLateral>{};

  let lastSoil = <SoilType>{};
  let lastSoilIndex: number;
  let sum = 0;

  const sptVal = Object.values(spt);
  const soilVal = Object.values(soil);

  //Descarta-se o valor abaixo da ponta da estaca (útil para Décourt-Quaresma)
  sptVal.pop();

  soilVal.map((soil, index) => {
    sum = sum + +soil.depthSoil;

    if (sum > +comp) {
      lastSoil = soil.soil;
      lastSoilIndex = index;
      return;
    }
  });

  //Cálculo do perímetro e área
  const peri = shape === 1 ? Math.PI * +area : 4 * +area;

  const stakeArea = shape === 1 ? (Math.PI * +area * +area) / 4 : +area * +area;

  //Cálculo do k da ponta
  if (lastSoil.type === 'Areia') {
    switch (lastSoil.subtype) {
      case '1':
        lastK = 1;
        break;
      case '2':
        lastK = 0.8;
        break;
      case '3':
        lastK = 0.7;
        break;
      case '4':
        lastK = 0.6;
        break;
      case '5':
        lastK = 0.5;
        break;
    }
  } else if (lastSoil.type === 'Silte') {
    switch (lastSoil.subtype) {
      case '1':
        lastK = 0.4;
        break;
      case '2':
        lastK = 0.55;
        break;
      case '3':
        lastK = 0.45;
        break;
      case '4':
        lastK = 0.23;
        break;
      case '5':
        lastK = 0.25;
        break;
    }
  } else if (lastSoil.type === 'Argila') {
    switch (lastSoil.subtype) {
      case '1':
        lastK = 0.2;
        break;
      case '2':
        lastK = 0.35;
        break;
      case '3':
        lastK = 0.3;
        break;
      case '4':
        lastK = 0.22;
        break;
      case '5':
        lastK = 0.33;
        break;
    }
  }

  //Cálculo do alfa e K
  soilVal.map((soil, index) => {
    switch (soil.soil.subtype) {
      case '1':
        if (soil.soil.type === 'Areia') {
          alfa.push(1.4);
          k.push(1);
        } else if (soil.soil.type === 'Silte') {
          alfa.push(3);
          k.push(0.4);
        } else if (soil.soil.type === 'Argila') {
          alfa.push(6);
          k.push(0.2);
        }
        break;
      case '2':
        if (soil.soil.type === 'Areia') {
          alfa.push(2);
          k.push(0.8);
        } else if (soil.soil.type === 'Silte') {
          alfa.push(2.2);
          k.push(0.55);
        } else if (soil.soil.type === 'Argila') {
          alfa.push(2.4);
          k.push(0.35);
        }
        break;
      case '3':
        if (soil.soil.type === 'Areia') {
          alfa.push(2.4);
          k.push(0.7);
        } else if (soil.soil.type === 'Silte') {
          alfa.push(2.8);
          k.push(0.45);
        } else if (soil.soil.type === 'Argila') {
          alfa.push(2.8);
          k.push(0.3);
        }
        break;
      case '4':
        if (soil.soil.type === 'Areia') {
          alfa.push(3);
          k.push(0.6);
        } else if (soil.soil.type === 'Silte') {
          alfa.push(3.4);
          k.push(0.23);
        } else if (soil.soil.type === 'Argila') {
          alfa.push(4);
          k.push(0.22);
        }
        break;
      case '5':
        if (soil.soil.type === 'Areia') {
          alfa.push(2.8);
          k.push(0.5);
        } else if (soil.soil.type === 'Silte') {
          alfa.push(3);
          k.push(0.25);
        } else if (soil.soil.type === 'Argila') {
          alfa.push(3);
          k.push(0.33);
        }
        break;
    }
    if (index === lastSoilIndex) {
      return;
    }
  });

  //Cálculo do F1
  switch (stake) {
    case 1:
    case 2:
      f1 = 3;
      break;
    case 3:
    case 4:
      f1 = 2;
      break;
    case 5:
      f1 = 2;
      break;
    case 6:
      f1 = 2.5;
      break;
    case 7:
      f1 = 1.75;
      break;
    case 8:
      f1 = +area / 0.8 + 1;
      break;
  }

  const Np = sptVal.pop();

  //Cálculo do Rl
  sptVal.reverse();
  soilVal.map((value, index) => {
    sptLat[index] = [];
    for (let i = 1; i <= +value.depthSoil && sptVal.length > 0; i++) {
      sptLat[index].push(sptVal.pop());
    }
  });

  Object.values(sptLat).map((val, index) => {
    if (val.length > 0) {
      let sptSum = 0;
      let length = val.length;
      if (index === 0) {
        length++;
      }
      val.map((nspt) => {
        if (stake === 1) {
          if (+nspt < 3) {
            sptSum += 3;
          } else if (+nspt > 15) {
            sptSum += 15;
          } else {
            sptSum += +nspt;
          }
        } else if (stake === 2) {
          if (+nspt < 3) {
            sptSum += 3;
          } else if (+nspt > 50) {
            sptSum += 50;
          } else {
            sptSum += +nspt;
          }
        } else {
          sptSum += +nspt;
        }
      });

      Rl = Rl + (sptSum / val.length) * alfa[index] * k[index] * length;
    }
  });

  Rl = (Rl * peri * 10) / (2 * f1);

  const Rp = (1000 * stakeArea * lastK * +Np) / f1;

  const RTotal = Rp + Rl;

  const Radm1 = RTotal / 2;
  const Radm2 = stake === 0 || stake === 1 ? 1.25 * Rl : Radm1;

  const Radm = Math.min(Radm1, Radm2);

  return {
    Rlat: Rl.toFixed(2),
    Rponta: Rp.toFixed(2),
    Rtotal: RTotal.toFixed(2),
    Radm: Radm.toFixed(2),
  };
}
