<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div
    class="container"
    style="
      margin-top: 50px;
      background-color: white;
      position: relative;
      z-index: 22;
    "
  >
    <CForm class="row needs-validation" v-if="paso != null">
      <CRow>
        <CCol xs="6">
          <h4 style="color: var(--roofsie-gray); font-size: 22px !important">
            Tramite Nro.: {{ tramite.anio }}0000{{ tramite.id }} <br />
            <small style="font-size: 0.7em">{{ tramite.nombre_oficina }}</small
            ><br />
            <small style="font-size: 0.6em">{{ tramite.nombre_tramite }}</small>
          </h4>
        </CCol>
        <CCol xs="6">
          <div>
            <img
              style="
                border-radius: 50%;
                height: 120px;
                width: 120px;
                padding: 15px;
                display: inline;
              "
              :src="tramite.avatar"
            />

            <div
              style="
                display: inline-block;
                vertical-align: middle;
                border-left: solid 1px lightgray;
                padding-left: 10px;
              "
            >
              <h4
                style="color: var(--roofsie-gray); font-size: 22px !important"
              >
                Iniciado por <br />
                <small style="font-size: 0.7em">{{
                  tramite.nombre_contribuyente
                }}</small
                ><br />
                <small style="font-size: 0.6em">CUIT: {{ tramite.cuit }}</small
                ><br />
                <small
                  style="font-size: 0.6em; margin-bottom: 0; padding-bottom: 0"
                  >En representacion de: Si mismo</small
                >
              </h4>
            </div>
          </div>
        </CCol>
      </CRow>

      <CRow
        v-for="(itemRow, i) in paso.lstIngresos"
        :key="i"
        style="padding-top: 0"
      >
        <CCol
          style="margin-bottom: 5px"
          xs="12"
          :lg="itemCol.col"
          :xl="itemCol.col"
          v-for="(itemCol, ic) in itemRow.lstContenido"
          :key="ic"
        >
          <template v-if="itemCol.id_ddjj != 0">
            <CCardTitle
              style="
                margin-bottom: 10px;
                margin-top: 0px;
                font-size: 18px;
                font-weight: 500;
                color: var(--roofsie-gray);
              "
              >Solicitud</CCardTitle
            >
            <hr
              style="
                margin: 1rem 0;
                color: inherit;
                background-color: #ffc107;
                border: 0;
                opacity: 0.75;
              "
            />
            <div
              class="justify"
              v-html="itemCol.objDDJJ.texto"
              style="margin-bottom: 35px"
            ></div>
            <CFormCheck
              label="He leído y acepto"
              v-model="chkDJJ"
              required
              feedbackInvalid="Debe aceptar haber leído la declaracion jurada antes de continuar"
            />
          </template>
          <template v-if="itemCol.id_formulario != 0">
            <CCardTitle
              style="
                margin-bottom: 10px;
                margin-top: 0px;
                font-size: 18px;
                font-weight: 500;
                color: var(--roofsie-gray);
              "
              >{{ itemCol.objFormulario.nombre }}</CCardTitle
            >
            <hr style="margin-bottom: 0px" />
            <CCardText v-if="paso != null && paso != 'undefined'">
              <CRow
                v-for="(campo, c) in itemCol.objFormulario.lstCampos"
                :key="c"
              >
                <CCol
                  xs="12"
                  :lg="itemColF.col"
                  :xl="itemColF.col"
                  v-for="(itemColF, ico) in itemCol.objFormulario.lstCampos"
                  :key="ico"
                >
                  <div v-if="itemColF.id_tipo_campo == 1">
                    <label style="margin-top: 10px">{{
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    }}</label>
                    <CFormInput
                      :id="itemColF.nombre"
                      feedbackValid="Looks good!"
                      v-model="itemColF.ingreso_usuario"
                      feedbackInvalid="Please enter a message in the textarea."
                      :placeholder="
                        itemColF.etiqueta[0].toUpperCase() +
                        itemColF.etiqueta.substring(1).toLowerCase()
                      "
                      required
                    ></CFormInput>
                  </div>
                  <div v-if="itemColF.id_tipo_campo == 2">
                    <CFormTextarea
                      :id="itemColF.nombre"
                      style="height: 150px"
                      clear-icon="mdi-close-circle"
                      :placeholder="
                        itemColF.etiqueta[0].toUpperCase() +
                        itemColF.etiqueta.substring(1).toLowerCase()
                      "
                      v-model="itemColF.ingreso_usuario"
                      required
                    ></CFormTextarea>
                  </div>
                  <div v-if="itemColF.id_tipo_campo == 3">
                    <label style="margin-top: 10px">{{
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    }}</label>
                    <CFormInput
                      :id="itemColF.nombre"
                      v-model="itemColF.ingreso_usuario"
                      :placeholder="
                        itemColF.etiqueta[0].toUpperCase() +
                        itemColF.etiqueta.substring(1).toLowerCase()
                      "
                      type="number"
                      required
                    ></CFormInput>
                  </div>
                  <div v-if="itemColF.id_tipo_campo == 4">
                    <label style="margin-top: 10px">{{
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    }}</label>
                    <CFormInput
                      :id="itemColF.nombre"
                      v-model="itemColF.ingreso_usuario"
                      :placeholder="
                        itemColF.etiqueta[0].toUpperCase() +
                        itemColF.etiqueta.substring(1).toLowerCase()
                      "
                      type="email"
                      required
                    ></CFormInput>
                  </div>
                  <div v-if="itemColF.id_tipo_campo == 5">
                    <label style="margin-top: 10px">{{
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    }}</label>
                    <CFormInput
                      :id="itemColF.nombre"
                      v-model="itemColF.ingreso_usuario"
                      :placeholder="
                        itemColF.etiqueta[0].toUpperCase() +
                        itemColF.etiqueta.substring(1).toLowerCase()
                      "
                      type="url"
                      required
                    ></CFormInput>
                  </div>
                  <div v-if="itemColF.id_tipo_campo == 6">
                    <label style="margin-top: 10px">{{
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    }}</label>
                    <CFormInput
                      :id="itemColF.nombre"
                      v-model="itemColF.ingreso_usuario"
                      :placeholder="
                        itemColF.etiqueta[0].toUpperCase() +
                        itemColF.etiqueta.substring(1).toLowerCase()
                      "
                      type="text"
                      onfocus="(this.type='date')"
                      required
                    ></CFormInput>
                  </div>
                  <div v-if="itemColF.id_tipo_campo == 7">
                    <label style="margin-top: 10px">{{
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    }}</label>
                    <CFormInput
                      :id="itemColF.nombre"
                      v-model="itemColF.ingreso_usuario"
                      :placeholder="
                        itemColF.etiqueta[0].toUpperCase() +
                        itemColF.etiqueta.substring(1).toLowerCase()
                      "
                      type="time"
                      required
                    ></CFormInput>
                  </div>
                  <div v-if="itemColF.id_tipo_campo == 8">
                    <label style="margin-top: 10px">{{
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    }}</label>
                    <select
                      v-model="itemColF.ingreso_usuario"
                      class="form-control"
                      @change="
                        CambiaValor(
                          $event,
                          JSON.parse(
                            itemCol.objFormulario.lstCampos[ico + 1]
                              .contenido_campo,
                          ),
                        )
                      "
                    >
                      <option
                        v-for="opciones in JSON.parse(itemColF.contenido_campo)"
                        :key="opciones.value"
                        :value="opciones.value + ',' + opciones.text"
                      >
                        {{ opciones.text }}
                      </option>
                    </select>
                  </div>
                  <div
                    style="margin-top: 10px"
                    v-if="itemColF.id_tipo_campo == 9"
                  >
                    <label>{{
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    }}</label>
                    <VueMultiselect
                      label="text"
                      track-by="value"
                      :multiple="true"
                      :close-on-select="true"
                      v-model="itemColF.ingreso_usuario"
                      :id="itemColF.nombre"
                      :options="JSON.parse(itemColF.contenido_campo)"
                      class="form-comtrol"
                    >
                    </VueMultiselect>
                  </div>
                  <div v-if="itemColF.id_tipo_campo == 14">
                    <label style="margin-top: 10px">{{
                      itemColF.etiqueta[0].toUpperCase() +
                      itemColF.etiqueta.substring(1).toLowerCase()
                    }}</label>
                    <select
                      v-model="itemColF.ingreso_usuario"
                      class="form-control"
                    >
                      <option
                        v-for="opciones in contenido_h"
                        :key="opciones.value"
                        :value="opciones.value + ',' + opciones.text"
                      >
                        {{ opciones.text }}
                      </option>
                    </select>
                  </div>
                </CCol>
              </CRow>
            </CCardText>
          </template>
          <template v-if="itemCol.id_adjunto != 0">
            <CCardTitle
              style="
                margin-bottom: 10px;
                margin-top: 0px;
                font-size: 18px;
                font-weight: 500;
                color: var(--roofsie-gray);
              "
              >{{ itemCol.objAdjunto.etiqueta }}</CCardTitle
            >
            <hr style="margin-bottom: 30px" />
            <template v-if="itemCol.objAdjunto.multiple == false">
              <template
                v-if="
                  base64String != '' || itemCol.objAdjunto.ingreso_usuario != ''
                "
              >
                <CAlert
                  v-if="
                    itemCol.objAdjunto.extenciones_aceptadas ==
                    'application/pdf'
                  "
                  color="primary"
                  class="d-flex align-items-center"
                  @close="alert"
                  style="
                    word-wrap: break-word;
                    background-color: #fff;
                    background-clip: border-box;
                    border: 1px solid rgba(0, 0, 0, 0.125);
                    border-radius: 0.25rem;
                  "
                >
                  <CIcon
                    :icon="icon.cibAdobeAcrobatReader"
                    size="xl"
                    style="
                      height: 60px;
                      width: 60px;
                      background-color: #d53149;
                      margin-right: 15px;
                      color: white;
                      padding: 10px;
                    "
                  />
                  <div style="color: gray">
                    {{ itemCol.objAdjunto.descripcion }}
                  </div>
                  <CButton
                    @click="clearPdf()"
                    style="right: 0; position: absolute; box-shadow: none"
                  >
                    <CIcon :icon="icon.cilX" size="xl" style="color: red" />
                  </CButton>
                </CAlert>
              </template>
              <template v-else>
                <CFormInput
                  type="file"
                  :accept="itemCol.objAdjunto.extenciones_aceptadas"
                  :id="itemCol.objAdjunto.nombre"
                  @change="handleImage($event)"
                />
              </template>
            </template>
            <template v-else>
              <CFormInput
                type="file"
                multiple
                :accept="itemCol.objAdjunto.extenciones_aceptadas"
                :id="itemCol.objAdjunto.nombre"
                @change="handleImageMultipla($event)"
              />
              <CAlert
                v-for="(image, index) in images"
                :key="index"
                style="display: inline-flex; margin-right: 5px"
              >
                <CButton
                  @click="iniciaEliminar(index)"
                  style="right: 0; position: absolute; box-shadow: none"
                >
                  <CIcon
                    :icon="icon.cilX"
                    size="xl"
                    style="
                      border: solid;
                      border-radius: 50%;
                      padding: 2px;
                      background: red;
                      color: white;
                    "
                  />
                </CButton>
                <img
                  :src="image"
                  style="
                    height: 100px;
                    width: auto;
                    margin-top: 20px;
                    border: solid gray;
                    border-radius: 15px;
                  "
                />
              </CAlert>
            </template>
          </template>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" style="text-align: right; margin-top: 25px">
          <CButton
            color="gray"
            variant="outline"
            style="border: solid 1px dimgray"
            @click="doSomething()"
          >
            <CIcon :icon="icon.cilArrowThickFromRight" size="xl" />
            &nbsp;Cancelar </CButton
          >&nbsp;
          <CButton color="danger" variant="outline">
            <CIcon :icon="icon.cilThumbDown" size="xl" />
            &nbsp;Rechazar </CButton
          >&nbsp;
          <CButton color="success" variant="outline">
            <CIcon :icon="icon.cilThumbUp" size="xl" />&nbsp;Aceptar
          </CButton>
        </CCol>
      </CRow>
      <CModal
        style="margin-top: 150px !important"
        :visible="visibleLiveDemo"
        @close="
          () => {
            visibleLiveDemo = false
          }
        "
      >
        <CModalBody style="text-align: center">
          <i class="pi pi-times btn-delete"></i>
          <h3>¿Esta seguro de volver atras?</h3>
          <p style="padding-left: 25%; padding-right: 25%">
            Si elige continuar se descartaran los cambios realizados en el paso
            actual
          </p>
          <CButton
            style="background: white; color: #6c757d !important"
            color="secondary"
            @click="
              () => {
                visibleLiveDemo = false
              }
            "
          >
            Cancelar </CButton
          >&nbsp;
          <CButton
            @click="btnAnterior_clickHijo()"
            color="primary"
            style="
              color: #fff !important;
              background-color: rgb(173 16 41) !important;
              border-color: rgb(173 16 41) !important;
            "
            >Aceptar</CButton
          >
        </CModalBody>
      </CModal>
      <CModal
        style="margin-top: 150px !important"
        :visible="modalQuitarImage"
        @close="
          () => {
            modalQuitarImage = false
          }
        "
      >
        <CModalBody style="text-align: center">
          <i class="pi pi-times btn-delete"></i>
          <h3>¿Esta seguro de quitar la imagen?</h3>
          <p style="padding-left: 25%; padding-right: 25%"></p>
          <CButton
            style="
              background: white;
              color: #6c757d !important;
              margin-top: 25px;
            "
            color="secondary"
            @click="
              () => {
                modalQuitarImage = false
              }
            "
          >
            Cancelar </CButton
          >&nbsp;
          <CButton
            @click="clearPdfMultiple()"
            color="primary"
            style="
              color: #fff !important;
              background-color: rgb(173 16 41) !important;
              border-color: rgb(173 16 41) !important;
            "
            >Aceptar</CButton
          >
        </CModalBody>
      </CModal>
    </CForm>
  </div>
</template>
<style>
.form-wizard-vue .fw-overflow-scroll .fw-card {
  overflow-x: hidden !important;
}
.multiselect__tag {
  background: #4a97c8 !important;
}
.multiselect__option--highlight {
  background: #4a97c8 !important;
  outline: none !important;
  color: white !important;
}
.v-select.v-select--chips:not(
    .v-text-field--single-line
  ).v-text-field--box.v-input--dense
  .v-select__selections,
.v-select.v-select--chips:not(
    .v-text-field--single-line
  ).v-text-field--enclosed.v-input--dense
  .v-select__selections {
  min-height: 40px;
}

.v-alert__content {
  padding-left: 10px;
}
.modal-dialog {
  margin-top: 150px !important;
}
body {
  overflow-y: scroll !important;
}
</style>

<script>
import VueMultiselect from 'vue-multiselect'
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
import axios from 'axios'
import { useRoute } from 'vue-router'
import Header from '../../components/Headers/AdminMunicipal.vue'
import Cookies from 'js-cookie'

export default {
  components: { VueMultiselect, CIcon, Header },
  data: () => ({
    modalQuitarImage: false,
    images: [],
    visibleLiveDemo: false,
    icon,
    maxValue: 0,
    text: '',
    value: '',
    chkDJJ: false,
    chipErrorDDJJ: false,
    nroPaso: 2,
    error: false,
    contador: 0,
    textoError: '',
    habilita: false,
    errors: [],
    multisel: null,
    datosCompletos: null,
    files: [],
    base64String: '',
    cuit: '',
    descripcion: '',
    pdestino: 0,
    pdireccion: 0,
    contenido_h: [],
    base64StringsM: [],
    paso: 0,
    tramite: [],
    filasUnicas: [],
    estado: 0,
  }),
  async mounted() {
    const route = useRoute()
    const id = route.params.id
    this.paso = (await axios.get('/Paso/getByPk?ID=' + id)).data
    axios
      .get(
        'https://localhost:7065/Tramites/getByPk?id=' +
          Cookies.get('id_tramite'),
      )
      .then(
        (response) => (this.tramite = response.data),
        (this.estado = this.tramite.estado),
      )
    //const store = useStore()
    // alert(store.cuit)
  },
  props: {
    formulario: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    doSomething() {
      this.$router.push('/VerificaTramite')
    },
    handleImage(evt) {
      const file = evt.target.files[0]
      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = () => {
        this.base64String = reader.result
          .replace('data:', '')
          .replace(/^.+,/, '')
        this.datosCompletos[0].objAdjunto.descripcion = file.name
        this.error = false
        this.textoError = ''
      }
    },
    handleImageMultipla(evt) {
      const files = evt.target.files
      const readers = []

      for (let i = 0; i < files.length; i++) {
        readers[i] = new FileReader()
        readers[i].readAsDataURL(files[i])

        readers[i].onload = () => {
          this.base64StringsM.push(
            readers[i].result.replace('data:', '').replace(/^.+,/, ''),
          )
          this.images.push(readers[i].result)
        }
      }
      this.datosCompletos[0].objAdjunto.descripcion = 'Images Multiples'
      this.error = false
      this.textoError = ''
    },
    clearPdf() {
      this.datosCompletos[0].objAdjunto.descripcion = ''
      this.datosCompletos[0].objAdjunto.ingreso_usuario = ''
      this.base64String = ''
    },
    clearPdfMultiple() {
      alert(this.indice_imagen)
      this.images.splice(this.indice_imagen, 1)
      this.base64StringsM.splice(this.indice_imagen, 1)
      this.modalQuitarImage = false
    },
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
