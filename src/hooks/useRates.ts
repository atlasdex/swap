import { getRates } from "gateways/TokenApis";
import { IRate } from "interfaces/IRate";
import { useEffect } from "react";
import { useSetRatesState } from "state/hooks";


const useRates = () => {
    const { setRateState } = useSetRatesState()
    useEffect(() => {
        async function getRateFromApi() {
            const result = await getRates();
            const arrayOfObj = Object.entries(result).map((e) => {
                const item: IRate = {
                    address: e[0],
                    price: e[1].toString()
                }
                return item;
            }); 
            console.log("arrayOfObj=",arrayOfObj);
            
            setRateState({ rates: arrayOfObj }) 
        }
        getRateFromApi();

    },[])

}

export default useRates;