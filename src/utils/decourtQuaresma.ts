import { formSoilType, formSPTType, SoilType } from '../templates/Home';

export type sptLateral = {
  [key: number]: string[];
};

export function DecourtQuaresma(
  soil: formSoilType,
  stake: number,
  area: string,
  shape: number,
  comp: string,
  spt: formSPTType,
) {
  let C: number;
  let alfa: number;
  const beta: number[] = [];
  const sptLat = <sptLateral>{};
  let lastSoil = <SoilType>{};
  let lastSoilIndex: number;
  let sum = 0;
  let Rl = 0;
  let peri: number;

  const stakeArea = shape === 1 ? (Math.PI * +area * +area) / 4 : +area * +area;
  const soilVal = Object.values(soil);
  const sptVal = Object.values(spt);

  soilVal.map((soil, index) => {
    sum = sum + +soil.depthSoil;

    if (sum > +comp) {
      lastSoil = soil.soil;
      lastSoilIndex = index;
      return;
    }
  });

  //Cálculo do C
  if (lastSoil.type === 'Areia') {
    C = 400;
  } else if (lastSoil.type === 'Silte') {
    if (lastSoil.subtype === '1') {
      C = 180;
    } else if (lastSoil.subtype === '2' || lastSoil.subtype === '3') {
      C = 250;
    } else if (lastSoil.subtype === '4' || lastSoil.subtype === '5') {
      C = 200;
    }
  } else if (lastSoil.type === 'Argila') {
    C = 120;
  }

  //Cálculo do alfa
  switch (stake) {
    case 1:
      if (lastSoil.type === 'Argila') {
        alfa = 0.85;
      } else if (lastSoil.type === 'Silte') {
        alfa = 0.6;
      } else if (lastSoil.type === 'Areia') {
        alfa = 0.5;
      }
      break;
    case 2:
      if (lastSoil.type === 'Argila') {
        alfa = 0.85;
      } else if (lastSoil.type === 'Silte') {
        alfa = 0.6;
      } else if (lastSoil.type === 'Areia') {
        alfa = 0.5;
      }
      break;
    case 3:
      alfa = 0.3;
      break;
    case 4:
      if (lastSoil.type === 'Argila') {
        alfa = 0.85;
      } else if (lastSoil.type === 'Silte') {
        alfa = 0.6;
      } else if (lastSoil.type === 'Areia') {
        alfa = 0.5;
      }
      break;
    case 5:
    case 6:
    case 7:
    case 8:
      alfa = 1;
      break;
  }

  //Cálculo do beta
  soilVal.map((soil, index) => {
    switch (stake) {
      case 1:
        if (soil.soil.type === 'Argila') {
          beta.push(0.8);
        } else if (soil.soil.type === 'Silte') {
          beta.push(0.65);
        } else if (soil.soil.type === 'Areia') {
          beta.push(0.5);
        }
        break;
      case 2:
        if (soil.soil.type === 'Argila') {
          beta.push(0.9);
        } else if (soil.soil.type === 'Silte') {
          beta.push(0.75);
        } else if (soil.soil.type === 'Areia') {
          beta.push(0.6);
        }
        break;
      case 3:
      case 6:
      case 7:
      case 8:
        beta.push(1);
        break;
      case 4:
        beta.push(1.5);
        break;
      case 5:
        beta.push(3);
        break;
    }
    if (index === lastSoilIndex) {
      return;
    }
  });

  const Np1 = sptVal.pop();
  const Np2 = sptVal.pop();
  const Np3 = sptVal.pop();
  const Np = (+Np1 + +Np2 + +Np3) / 3;

  if (shape === 1) {
    peri = Math.PI * +area;
  } else if (shape === 2) {
    peri = 4 * +area;
  }

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
      if (index === Object.values(sptLat).length - 1) {
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

      Rl = Rl + (sptSum / (val.length * 3) + 1) * beta[index] * 10 * length;
    }
  });

  Rl = Rl * peri;

  const Rp = alfa * C * Np * stakeArea;

  const RTotal = Rp + Rl;

  const Radm1 = RTotal / 2;
  const Radm2 = Rl / 1.3 + Rp / 4;
  const Radm3 = stake === 0 || stake === 1 ? 1.25 * Rl : Radm2;

  const Radm = Math.min(Radm1, Radm2, Radm3);

  return {
    Rlat: Rl.toFixed(2),
    Rponta: Rp.toFixed(2),
    Rtotal: RTotal.toFixed(2),
    Radm: Radm.toFixed(2),
  };
}
