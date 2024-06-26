import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useUsuarioStore } from "../stores/usuarios.js";

export const useMantenimientoStore = defineStore("mantenimiento", () => {
    let token = ref(useUsuarioStore().token);
    let mantenimiento = ref(null);
    let getMantenimientos = async () => {
        try {
            let res = await axios.get("/mantenimiento",
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            mantenimiento.value = res.data;
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let getMantenimiento = async (id) => {
        try {
            let res = await axios.get(`/mantenimiento/${id}`,
            {
                headers: {
                    "x-token": token.value
                }
            }
            );
            mantenimiento.value = res.data;
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let postMantenimiento = async (data) => {
        try {
            let res = await axios.post("/mantenimiento", data,
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

    let putMantenimiento = async (id, data) => {
        try {
            let res = await axios.put(`/mantenimiento/${id}`, data,
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
        getMantenimientos, getMantenimiento, postMantenimiento, putMantenimiento, mantenimiento
    };
});