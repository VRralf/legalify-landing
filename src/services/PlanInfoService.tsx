
import Logger from '../utils/Logger';

export interface IPlanAmount {
  planPlataformaId: number,
  planId: number,
  ciclo: number, 
  monto: number,
  monedaId: string,
  monedaSimbolo: string,
  countryId: number,
  planNombre: string,
  planDesc: string
}

export interface ICicloPlanAmount {
  [ciclo: number]: IPlanAmount
}

export interface IPlanCicloPlanAmount {
  [planId: number]: ICicloPlanAmount
}


export function getPlanInfos(planIds: number[], ciclo: number = -1): Promise<IPlanCicloPlanAmount> {
  let promiseResult: Promise<IPlanCicloPlanAmount> = new Promise((resolveResult, rejectResult) => {
    let promise: Promise<string> = new Promise((resolve, reject) => {
      const queryParams = new URLSearchParams(window.location.search);
      const paramPais: string | null = queryParams.get("pais");
  
      if (paramPais && paramPais != "") {
        Logger.log(`Obtencion del pais por parametro en URL: ${paramPais}`);
        resolve(paramPais);
      } else {
        Logger.log(`Obtencion del pais por IP`);
        fetch(`${process.env.NEXT_PUBLIC_URL_APP_API}/multipago/util/json`)
          .then((resp) => resp.json())
          .then((resp) => {
            Logger.log(`consulta IP: ${resp.countryCode}`);
            resolve(resp.countryCode);
          })
          .catch((err) => {
            resolve("");
          });
      }
    });
  
    promise.then((countryCode) => {
      Logger.log(`Pais seleccionado: ${countryCode}`);
      getPlanAmountsCountry2Digits(countryCode, ciclo).then((resp: IPlanAmount[]) => {
        let data: IPlanCicloPlanAmount = {};
        let ciclo: ICicloPlanAmount;
  
        Logger.log("Respuesta precios:", resp);
        resp.forEach(row => {
          row.monedaSimbolo = decodeHtml(`&#${row.monedaSimbolo};`)

          if (!data[row.planId])
            data[row.planId] = {};
          
          ciclo = data[row.planId];
          ciclo[row.ciclo] = row;
        });
        Logger.log("Info MAP: ", data);
        resolveResult(data);
      });
    }).catch(reason => {
      rejectResult(reason);
    });

  });
  return promiseResult;

  
}

function getPlanAmountsCountry2Digits(
  country2Code: string | null,
  ciclo: number = -1,
  planIds: number[] = [2, 3, 4, 5, 6]
): Promise<IPlanAmount[]> {
  const COUNTRY_AR = "AR";
  const promise: Promise<any> = new Promise((resolve, reject) => {
    if (!country2Code) country2Code = COUNTRY_AR;

    let url: string = `${process.env.NEXT_PUBLIC_URL_APP_API}/jurisdiccion/country2Code/${country2Code}`;
    fetch(url)
      .then((response) => {
        Logger.log(response);
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          const { id_jurisdiccion } = data[data.length - 1];
          let defaultPlans = getPlanDefaultAmounts(
            ciclo,
            id_jurisdiccion,
            planIds
          );
          defaultPlans.then((resp) => {
            Logger.log(resp);

            resolve(resp);
          });
        } else if (country2Code != COUNTRY_AR) {
          getPlanAmountsCountry2Digits(COUNTRY_AR, ciclo, planIds).then((rows) => {
            resolve(rows);
          });
        }
        Logger.log(data);
      })
      .catch((err) => {
        Logger.log(err.message);
        resolve([]);
      });
  });

  return promise;
}

export async function getPlanDefaultAmounts(
  ciclo: number,
  jurisdiccionId: number,
  planIds: number[]
) {
  let params: string = "";
  let data: any = null;

  if (ciclo || ciclo === 0) {
    params = appendIfNotEmpty(params);
    params = `${params}ciclo=${ciclo}`;
  }
  if (jurisdiccionId) {
    params = appendIfNotEmpty(params);
    params = `${params}jurisdiccionId=${jurisdiccionId}`;
  }
  if (planIds) {
    planIds.forEach((planId) => {
      params = appendIfNotEmpty(params);
      params = `${params}planIds=${planId}`;
    });
  }

  let url: string = `${process.env.NEXT_PUBLIC_URL_APP_API}/multipago/cliente/plan/defaultamounts?${params}`;
  let response = await fetch(url);
  if (response.status < 400) {
    data = await response.json();
  }
  return data;
}

export function appendIfNotEmpty(value: string): string {
  if (value) value = value + "&";
  return value;
}

function decodeHtml(text: string): string {
  let result;
  let txt = new DOMParser().parseFromString(text, "text/html");
  result = txt.documentElement.textContent;
  if (!result) result = "";
  return result;
}

export function getPCPASafe(planId: number, ciclo: number, field: string, defVal: string, data: IPlanCicloPlanAmount) {
  let result: string = defVal;
  let planInfo: any;

  if (data && data[planId] && data[planId][ciclo]) {
    planInfo = data[planId][ciclo] ?? null;
    if (planInfo)
      result = planInfo[field];
  }

  return result;
}

export function getPCPASafeMX(planId: number, ciclo: number, field: string, defVal: string, data: IPlanCicloPlanAmount) {
  let result: string = defVal;
  let planInfo: any;

  if (data && data[planId] && data[planId][ciclo]) {
    planInfo = data[planId][ciclo] ?? null;
    if (planInfo && planInfo.countryId == 52)
      result = planInfo[field];
  }

  return result;
}
