<template>
  <div class="app">
    <div class="container"></div>
    <div class="login-box" v-if="login">
      <div class="form">
        <form>
          <div class="user-box">
            <input type="text" name="" required="" v-model="nombre" />
            <label>Nombre Completo</label>
          </div>
          <div class="user-box">
            <input type="Date" name="" required="" v-model="fechaNacimiento" />
            <label>Fecha de nacimiento</label>
          </div>
          <div class="user-box">
            <input type="Number" name="" required="" v-model="edad" />
            <label>Edad</label>
          </div>
          <div class="user-box">
            <input type="Date" name="" required="" v-model="fechaIngreso" />
            <label>Fecha de ingreso</label>
          </div>
          <div class="user-box">
            <input type="Number" name="" required="" v-model="documento" />
            <label>Documento</label>
          </div>
        </form>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" v-model="direccion" />
            <label>Dirección</label>
          </div>
          <div class="user-box">
            <input type="Number" name="" required="" v-model="Telefono" />
            <label>Telefono</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required="" v-model="limitaciones" />
            <label>Limitaciones</label>
          </div>
          <div class="user-box">
            <select required v-model="selectedOptionP">
              <option value="" disabled selected hidden></option>
              <option
                v-for="(plan, index) in planes"
                :key="plan.id"
                :value="index + 1"
              >
                {{ plan.descripcion }}
              </option>
            </select>
            <label>Plan</label>
          </div>
          <div class="cont_btn_Seguimiento">
            <button class="btn_seguimiento" @click="añadirSeguimiento()">
              añadir seguimiento
            </button>
          </div>
        </form>
      </div>
      <center>
        <q-btn @click.prevent="cliente()" :loading="loading">
          registrar
          <template v-slot:loading>
            <q-spinner color="primary" size="1em" />
          </template>
        </q-btn>
      </center>
    </div>
    <div class="login-box cont_seguimiento" v-if="seguimiento">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="img_x"
        @click="ocultarX()"
      >
        <path
          d="M8 8l8 8M8 16l8 -8"
          stroke="white"
          stroke-width="2"
          fill="none"
        />
      </svg>
      <div class="form">
        <div class="titulo_seguimiento">
          <p class="text_seguimiento">Seguimiento</p>
        </div>
        <form>
          <div class="user-box">
            <input type="Date" name="" required="" v-model="fecha" />
            <label>Fecha</label>
          </div>
          <div class="user-box">
            <input type="Number" name="" required="" v-model="peso" />
            <label>Peso</label>
          </div>
          <div class="user-box">
            <input type="Number" name="" required="" v-model="Altura" />
            <label>Altura</label>
          </div>
          <div class="user-box">
            <input type="Number" name="" required="" v-model="medidaBrazo" />
            <label>Medida del brazo</label>
          </div>
          <div class="user-box">
            <input type="Number" name="" required="" v-model="medidaPierna" />
            <label>Medida de la pierna</label>
          </div>
          <div class="user-box">
            <input type="Number" name="" required="" v-model="medidaCintura" />
            <label>Medida de la cintura</label>
          </div>
        </form>
      </div>
    </div>
    <div class="cont_btn">
      <router-link to="/cliente">
        <button class="btn">Volver</button>
      </router-link>
    </div>
    <div :class="registroExitoso ? 'success1' : 'success'">
      <div class="success__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          height="24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            fill="#393a37"
            d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="success__title">Registro Exitoso</div>
      <div class="success__close" @click="cerrar()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          viewBox="0 0 20 20"
          height="20"
        >
          <path
            fill="#393a37"
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
          ></path>
        </svg>
      </div>
    </div>
    <div :class="registroFallido ? 'error1' : 'error'">
      <div class="error__icon">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
            fill="#393a37"
          ></path>
        </svg>
      </div>
      <div class="error__title">{{ text }}</div>
      <div class="error__close" @click="cerrar()">
        <svg
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            fill="#393a37"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let loading = ref(false);
import { useClienteStore } from "../stores/cliente.js";
import { usePlanStore } from "../stores/plan.js";

let useClientes = useClienteStore();
let usePlanes = usePlanStore();

let planes = ref(usePlanes.plan);

let nombre = ref("");
let fechaNacimiento = ref("");
let edad = ref("");
let fechaIngreso = ref("");
let documento = ref("");
let direccion = ref("");
let Telefono = ref("");
let limitaciones = ref("");
let estado = ref("1");
let selectedOptionP = ref("");
let fecha = ref("");
let peso = ref("");
let Altura = ref("");
let imc = ref("");
let medidaBrazo = ref("");
let medidaPierna = ref("");
let medidaCintura = ref("");

let registroExitoso = ref(false);
let registroFallido = ref(false);
let text = ref("");

let r = null;

let login = ref(true);
let seguimiento = ref(false);

const añadirSeguimiento = () => {
  login.value = false;
  seguimiento.value = true;
};

const ocultarX = () => {
  seguimiento.value = false;
  login.value = true;
};

const ocultar = () => {
  setTimeout(() => {
    registroExitoso.value = false;
    registroFallido.value = false;
  }, 3000);
};

const cerrar = () => {
  registroExitoso.value = false;
  registroFallido.value = false;
};

let calcularIMC = () => {
  let Peso = parseFloat(peso.value);
  let altura = parseFloat(Altura.value);
  altura = altura / 100;
  imc = Peso / (altura * altura);
  return imc;
};

async function cliente() {
  try {
    let clientes = await useClientes.getClientes();

    if (clientes.some(cliente => Number(cliente.documento) === Number(documento.value))) {
      text.value = "El documento ya se encuentra registrado";
      registroFallido.value = true;
      ocultar();
      return;
    }
    else{
      console.log("no se encuentra");
      console.log(documento.value);
      console.log(clientes.some(cliente => cliente.documento === documento.value));
    }

    let plan = () => {
      let selectedPlan = planes.value[selectedOptionP.value - 1];
      return selectedPlan._id;
    };

    let plan_id = plan();

    let cliente = {
      nombre: nombre.value,
      fechaNacimiento: fechaNacimiento.value,
      edad: edad.value,
      fechaIngreso: fechaIngreso.value,
      documento: documento.value,
      direccion: direccion.value,
      telefono: Telefono.value,
      limitaciones: limitaciones.value,
      estado: estado.value,
      plan: plan_id,
      seguimiento: [
        {
          fecha: fecha.value,
          peso: peso.value,
          altura: Altura.value,
          imc: calcularIMC(),
          medidaBrazo: medidaBrazo.value,
          medidaPierna: medidaPierna.value,
          medidaCintura: medidaCintura.value,
        },
      ],
    };

    if (cliente.nombre === "" || cliente.nombre.trim() === "") {
      text.value = "El campo nombre es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (cliente.fechaNacimiento === "" || cliente.fechaNacimiento.trim() === "") {
      text.value = "El campo fecha de nacimiento es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (cliente.edad === "" || cliente.edad.trim() === "") {
      text.value = "El campo edad es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (cliente.fechaIngreso === "" || cliente.fechaIngreso.trim() === "") {
      text.value = "El campo fecha de ingreso es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (cliente.documento === "" || cliente.documento.trim() === "") {
      text.value = "El campo documento es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (cliente.direccion === "" || cliente.direccion.trim() === "") {
      text.value = "El campo dirección es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (cliente.telefono === "" || cliente.telefono.trim() === "") {
      text.value = "El campo telefono es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (cliente.limitaciones === "" || cliente.limitaciones.trim() === "") {
      text.value = "El campo limitaciones es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (cliente.estado === "" || cliente.estado.trim() === "") {
      text.value = "El campo estado es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (cliente.plan === "" || cliente.plan.trim() === "") {
      text.value = "El campo plan es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (fecha.value === "" || fecha.value.trim() === "") {
      text.value = "El campo fecha del seguimiento es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (peso.value === "" || String(peso.value).trim() === "") {
      text.value = "El campo peso del seguimiento es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (Altura.value === "" || String(Altura.value).trim() === "") {
      text.value = "El campo altura del seguimiento es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (imc.value === "" || String(imc.value).trim() === "") {
      text.value = "El campo imc del seguimiento es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (medidaBrazo.value === "" || String(medidaBrazo.value).trim() === "") {
      text.value = "El campo medida del brazo del seguimiento es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (medidaPierna.value === "" || String(medidaPierna.value).trim() === "") {
      text.value = "El campo medida de la pierna del seguimiento es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }

    if (medidaCintura.value === "" || String(medidaCintura.value).trim() === "") {
      text.value = "El campo medida de la cintura del seguimiento es obligatorio";
      registroFallido.value = true;
      ocultar();
      return;
    }
    loading.value = true;
    r = await useClientes.postCliente(cliente);
    nombre.value = "";
    fechaNacimiento.value = "";
    edad.value = "";
    fechaIngreso.value = "";
    documento.value = "";
    direccion.value = "";
    Telefono.value = "";
    limitaciones.value = "";
    estado.value = "";
    selectedOptionP.value = "";
    fecha.value = "";
    peso.value = "";
    Altura.value = "";
    medidaBrazo.value = "";
    medidaPierna.value = "";
    medidaCintura.value = "";
    registroExitoso.value = true;
    loading.value = false;
    ocultar();
  } catch (error) {
    text.value = "Error al registrar el cliente";
    registroFallido.value = true;
    ocultar();
    console.log(error);
  }
}
</script>
<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
}

.container {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  background-image: linear-gradient(
      90deg,
      transparent 50px,
      #ffb4b8 50px,
      #ffb4b8 52px,
      transparent 52px
    ),
    linear-gradient(#e1e1e1 0.1em, transparent 0.1em);
  background-size: 100% 30px;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1200px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(24, 20, 20, 0.987);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box .user-box {
  position: relative;
}

.form {
  display: flex;
  align-items: center;
}

.login-box form {
  width: 100%;
  margin: 10px;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box input[type="text"],
.login-box .user-box input[type="number"] {
  color: #ffffff;
}

.empty {
  color: #181414fc;
}

.login-box .user-box input[type="date"]:focus {
  color: #ffffff;
}

.login-box .user-box input[type="date"]:valid {
  color: #ffffff;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #bdb8b8;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #e2e4e8;
  color: #000000;
  border-radius: 5px;
  box-shadow: 0 0 5px #e2e4e8, 0 0 15px #e2e4e8, 0 0 35px #e2e4e8,
    0 0 5px #e2e4e8;
}

.login-box a span {
  position: absolute;
  display: block;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(1) {
  bottom: 2px;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #e2e4e8);
  animation: btn-anim1 2s linear infinite;
}

button {
  font-size: 18px;
  color: #e1e1e1;
  font-family: inherit;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
  margin-top: 10px;
}

button:focus,
button:hover {
  color: #fff;
}

button:focus:after,
button:hover:after {
  width: 100%;
  left: 0%;
}

button:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}

.user-box select {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  color: #ffffff;
  appearance: none; /* Ocultar la flecha predeterminada en algunos navegadores */
  cursor: pointer;
  margin-bottom: 25px;
}

.user-box select option {
  background-color: #181414fc;
  color: white;
}

.user-box select:focus ~ label,
.user-box select:valid ~ label {
  top: -20px;
  left: 0;
  color: #bdb8b8;
  font-size: 12px;
}

.cont_btn {
  position: absolute;
  bottom: 10px;
  right: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.btn {
  padding: 15px 20px;
  border: 2px solid #2c2c2c;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.4s ease;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: bold;
}

.btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  transform: scale(0);
  transition: transform 0.5s ease;
}

.btn:hover::after {
  transform: scale(4);
}

.btn:hover {
  border-color: #666666;
  background: #292929;
}

.success {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #84d65a;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.success1 {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #84d65a;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.success__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.success__icon path {
  fill: #393a37;
}

.success__title {
  font-weight: 500;
  font-size: 14px;
  color: #393a37;
}

.success__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.success__close path {
  fill: #393a37;
}

.error {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #fce8db;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.error1 {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #fce8db;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.error__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.error__icon path {
  fill: #ef665b;
}

.error__title {
  font-weight: 500;
  font-size: 14px;
  color: #71192f;
}

.error__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.error__close path {
  fill: #71192f;
}

.cont_btn_Seguimiento {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn_seguimiento {
  padding: 15px 20px;
  border: 2px solid #2c2c2c;
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.4s ease;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: bold;
}

.btn_seguimiento::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  transform: scale(0);
  transition: transform 0.5s ease;
}

.btn_seguimiento:hover::after {
  transform: scale(4);
}

.btn_seguimiento:hover {
  border-color: #666666;
  background: #292929;
}

.cont_seguimiento {
  box-shadow: 0 0px 25px rgba(255, 255, 255, 0.6);
  width: 25%;
  padding: 0px 2%;
  padding-top: 45px;
}

.titulo_seguimiento {
  color: #ffffff;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
}

.img_x {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  cursor: pointer;
  color: #000000;
}
</style>
