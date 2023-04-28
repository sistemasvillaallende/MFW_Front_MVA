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
    v-if="tramite != 'undefined' && tramite != null"
  >
    <CRow>
      <CCol xs="4">
        <h4 style="color: var(--roofsie-gray); font-size: 22px !important">
          Tramite Nro.: {{ tramite.anio }}0000{{ tramite.id }} <br />
          <small style="font-size: 0.7em">{{ tramite.nombre_oficina }}</small
          ><br />
          <small style="font-size: 0.6em">{{ tramite.nombre_tramite }}</small>
        </h4>
      </CCol>
      <CCol xs="5">
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
            <h4 style="color: var(--roofsie-gray); font-size: 22px !important">
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
      <CCol xs="3" style="text-align: right">
        <div v-if="estado != 1">
          <CButton
            color="gray"
            variant="outline"
            style="border: solid 1px dimgray"
            @click="doSomething()"
          >
            <CIcon :icon="icon.cilArrowThickFromRight" size="xl" />
            &nbsp;Cancelar </CButton
          >&nbsp;
          <CButton color="success" variant="outline" @click="iniciaRecibir">
            <CIcon :icon="icon.cilThumbUp" size="xl" />&nbsp;Recibir
          </CButton>
        </div>
      </CCol>
    </CRow>
    <CRow>
      <CCol xs="12">
        <CCard class="mb-5" style="max=width: 540px">
          <template v-if="tramite.lstPasos != null">
            <CRow
              style="padding-top: 0; padding-bottom: 0"
              class="g-0"
              v-for="(itemRow, c) in tramite.lstPasos.filter(
                (filas, index, self) =>
                  index === self.findIndex((f) => f.row === filas.row),
              )"
              :key="c"
            >
              <CCol
                xs="12"
                :lg="itemCol.col"
                :xl="itemCol.col"
                v-for="(itemCol, ic) in tramite.lstPasos.filter(
                  (persona) => persona.row === itemRow.row,
                )"
                :key="ic"
              >
                <CCardBody>
                  <CCardText>
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
                      <hr />

                      <div v-html="itemCol.objDDJJs.ddjj"></div>
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
                      >
                        {{
                          itemCol.objFormulario.nombre[0].toUpperCase() +
                          itemCol.objFormulario.nombre
                            .substring(1)
                            .toLowerCase()
                        }}
                      </CCardTitle>
                      <hr />
                      <CCardText
                        v-if="
                          itemCol.objFormulario != null &&
                          itemCol.objFormulario != 'undefined'
                        "
                      >
                        <CRow
                          v-for="(item, c) in itemCol.objFormulario
                            .lstRespuesta"
                          :key="c"
                          style="padding: 0; padding-bottom: 5px"
                        >
                          <CCol xs="12">
                            <div v-if="item.id_tipo_campo == 1">
                              <p>
                                {{
                                  item.etiqueta_campo[0].toUpperCase() +
                                  item.etiqueta_campo
                                    .substring(1)
                                    .toLowerCase()
                                }}: <br /><strong>{{
                                  item.respuesta_usuario
                                }}</strong>
                              </p>
                            </div>
                            <div v-if="item.id_tipo_campo == 2">
                              <p>
                                {{
                                  item.etiqueta_campo[0].toUpperCase() +
                                  item.etiqueta_campo
                                    .substring(1)
                                    .toLowerCase()
                                }}: <br /><strong>{{
                                  item.respuesta_usuario
                                }}</strong>
                              </p>
                            </div>
                            <div v-if="item.id_tipo_campo == 3">
                              <p>
                                {{
                                  item.etiqueta_campo[0].toUpperCase() +
                                  item.etiqueta_campo
                                    .substring(1)
                                    .toLowerCase()
                                }}: <br /><strong>{{
                                  item.respuesta_usuario
                                }}</strong>
                              </p>
                            </div>
                            <div v-if="item.id_tipo_campo == 4">
                              <p>
                                {{
                                  item.etiqueta_campo[0].toUpperCase() +
                                  item.etiqueta_campo
                                    .substring(1)
                                    .toLowerCase()
                                }}: <br /><strong>{{
                                  item.respuesta_usuario
                                }}</strong>
                              </p>
                            </div>
                            <div v-if="item.id_tipo_campo == 5">
                              <p>
                                {{
                                  item.etiqueta_campo[0].toUpperCase() +
                                  item.etiqueta_campo
                                    .substring(1)
                                    .toLowerCase()
                                }}: <br /><strong>{{
                                  item.respuesta_usuario
                                }}</strong>
                              </p>
                            </div>
                            <div v-if="item.id_tipo_campo == 6">
                              <p>
                                {{
                                  item.etiqueta_campo[0].toUpperCase() +
                                  item.etiqueta_campo
                                    .substring(1)
                                    .toLowerCase()
                                }}: <br /><strong>{{
                                  item.respuesta_usuario
                                }}</strong>
                              </p>
                            </div>
                            <div v-if="item.id_tipo_campo == 7">
                              <p>
                                {{
                                  item.etiqueta_campo[0].toUpperCase() +
                                  item.etiqueta_campo
                                    .substring(1)
                                    .toLowerCase()
                                }}: <br /><strong>{{
                                  item.respuesta_usuario
                                }}</strong>
                              </p>
                            </div>
                            <div v-if="item.id_tipo_campo == 8">
                              <p>
                                {{
                                  item.etiqueta_campo[0].toUpperCase() +
                                  item.etiqueta_campo
                                    .substring(1)
                                    .toLowerCase()
                                }}: <br />
                                <strong>
                                  {{
                                    item.respuesta_usuario.split(',')[1]
                                  }}</strong
                                >
                              </p>
                            </div>
                            <div v-if="item.id_tipo_campo == 9">
                              <p
                                v-for="seleccionado in JSON.parse(
                                  item.respuesta_usuario,
                                )"
                                :key="seleccionado.value"
                              >
                                <CIcon icon="cil-task" />&nbsp;
                                <strong>{{ seleccionado.text }}</strong>
                              </p>
                            </div>
                            <div v-if="item.id_tipo_campo == 14">
                              <p>
                                {{
                                  item.etiqueta_campo[0].toUpperCase() +
                                  item.etiqueta_campo
                                    .substring(1)
                                    .toLowerCase()
                                }}: <br />
                                <strong>
                                  {{
                                    item.respuesta_usuario.split(',')[1]
                                  }}</strong
                                >
                              </p>
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
                      >
                        {{
                          itemCol.objAdjuntos.nombre[0].toUpperCase() +
                          itemCol.objAdjuntos.nombre.substring(1).toLowerCase()
                        }}</CCardTitle
                      >
                      <hr />
                      <template v-if="itemCol.objAdjuntos.archivo[0] != '['">
                        <CButton
                          style="box-shadow: none"
                          @click="descargaPDF(itemCol.objAdjuntos.archivo)"
                        >
                          <CWidgetStatsF
                            color="danger"
                            :value="itemCol.objAdjuntos.nombre"
                          >
                            <template #icon>
                              <CIcon
                                :icon="icon.cibAdobeAcrobatReader"
                                size="xl"
                              />
                            </template>
                          </CWidgetStatsF>
                        </CButton>
                      </template>
                      <template v-else>
                        <CAlert
                          v-for="(image, index) in JSON.parse(
                            itemCol.objAdjuntos.archivo,
                          )"
                          :key="index"
                          style="
                            display: inline-flex;
                            margin: 0px;
                            padding: 5px;
                          "
                        >
                          <img
                            @click="abrirModal('data:image/*;base64,' + image)"
                            :src="'data:image/*;base64,' + image"
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
                  </CCardText>
                </CCardBody>
              </CCol>
            </CRow>
          </template>
        </CCard>
      </CCol>
    </CRow>
  </div>
  <CModal
    :visible="modalAceptarTramite"
    @close="
      () => {
        modalAceptarTramite = false
      }
    "
  >
    <CModalBody style="text-align: center">
      <span
        class="fa fa-info-circle"
        style="
          font-size: 60px;
          color: cadetblue;
          margin-top: 35px;
          margin-bottom: 35px;
        "
      ></span>
      <p style="font-size: 20px; font-weight: 600">
        ¿Esta seguro de recibir el tramite?
      </p>
      <div style="margin-top: 35px">
        <CButton
          color="danger"
          variant="outline"
          @click="
            () => {
              modalAceptarTramite = false
            }
          "
        >
          <CIcon :icon="icon.cilThumbDown" size="xl" />
          &nbsp;Cancelar </CButton
        >&nbsp;
        <CButton color="success" variant="outline" @click="Recibir">
          <CIcon :icon="icon.cilThumbUp" size="xl" />&nbsp;Recibir
        </CButton>
      </div>
    </CModalBody>
  </CModal>
</template>
<style>
.row {
  padding: 15px;
}
hr:not([size]) {
  height: 2px;
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: #ffc107;
  border: 0;
  opacity: 0.75;
}

@import 'datatables.net-dt';
</style>
<script>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
import Header from '../../components/Headers/AdminMunicipal.vue'
import { CButton, CCardBody } from '@coreui/vue-pro'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  data: () => ({
    modalAceptarTramite: false,
    tabPaneActiveKey: 1,
    icon,
    tramite: null,
    filasUnicas: [],
    modalQuitarImage: false,
    preview: '',
    estado: 0,
  }),
  components: {
    Header,
    CCardBody,
    CIcon,
    CButton,
  },
  async mounted() {
    try {
      if (
        Cookies.get('cod_usuario') == 'undefined' &&
        Cookies.get('cod_oficina') == 'undefined'
      ) {
        this.$router.push('/')
      }
      axios
        .get(
          'https://localhost:7065/Tramites/getByPk?id=' +
            Cookies.get('id_tramite'),
        )
        .then(
          (response) => (this.tramite = response.data),
          alert(this.tramite),
          (this.estado = this.tramite.estado),
        )

      this.pantalla = window.innerWidth
    } catch (error) {
      alert(error)
    }
  },
  methods: {
    iniciaRecibir() {
      this.modalAceptarTramite = true
    },
    Recibir() {
      var id = 0
      this.modalAceptarTramite = false
      axios
        .get(
          'https://localhost:7065/Tramites/recibir?id_tramite=' +
            this.tramite.id_tramite +
            '&paso_actual=' +
            this.tramite.paso_actual +
            '&id_tramites=' +
            this.tramite.id,
        )
        .then(
          (response) => (id = response.data),
          this.$router.push('/PasosTramite/' + id),
        )
    },
    doSomething() {
      this.$router.push('/AdminETramite')
    },
    abrirModal(imagen) {
      this.preview = imagen
      this.modalQuitarImage = true
    },
    descargaPDF(descarga) {
      let binaryString = window.atob(descarga)
      binaryString = 'data:application/pdf;base64,' + binaryString
      const len = binaryString.length
      alert(len)
      const bytes = new Uint8Array(len)
      for (let i = 0; i < len; ++i) {
        bytes[i] = binaryString.charCodeAt(i)
      }

      const blob = new Blob([bytes], { type: 'application/pdf' })
      const blobURL = URL.createObjectURL(blob)
      const link = document.createElement('a')
      //link.setAttribute('target', '_blank');
      link.setAttribute('download', `mi.pdf`)
      link.href = blobURL
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  },
}
</script>
