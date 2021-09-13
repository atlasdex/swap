import HttpClient from "gateways/HttpClient";
import { getRoutes } from "gateways/WalletApis";
import { useEffect } from "react";

const useRoutes = () => {


    useEffect(() => {
        const result = getRoutes("", "", 1);

    })


};

export default useRoutes;