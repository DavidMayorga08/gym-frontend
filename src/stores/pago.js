import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const usePagoStore = defineStore("pago", () => {
    let token = ref(useUsuarioStore().token);
    let pago = ref(null);
    let getPagos = async () => {
        try {
            let res = await axios.get("/pago",
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            pago.value = res.data;
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getPago = async (id) => {
        try {
            let res = await axios.get(`/pago/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let activos = async () => {
        try {
            let res = await axios.get("/pago/listar/activos",
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let inactivos = async () => {
        try {
            let res = await axios.get("/pago/listar/inactivos",
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getPagosPlan = async (id) => {
        try {
            let res = await axios.get(`/pago//total-pagos-plan/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getPagosCliente = async (id) => {
        try {
            let res = await axios.get(`/pago//total-pagos-cliente/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let postPago = async (data) => {
        try {
            let res = await axios.post("/pago", data,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let putPago = async (id, data) => {
        try {
            let res = await axios.put(`/pago/${id}`, data,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let activar = async (id) => {
        try {
            let res = await axios.put(`/pago/activar/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let inactivar = async (id) => {
        try {
            let res = await axios.put(`/pago/inactivar/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        getPagos, getPago, activos, inactivos, getPagosPlan, getPagosCliente, postPago, putPago, activar, inactivar, pago
    };
});