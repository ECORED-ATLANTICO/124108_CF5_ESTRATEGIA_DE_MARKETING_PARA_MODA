<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-sm-8.col-lg-4
        figure
          img(src="@/assets/curso/1.png", alt="")
      .col-lg-8
        p El componente formativo Interacción con clientes para el proceso de venta ofrece al aprendiz una comprensión sobre el proceso de ventas y la interacción con clientes en contextos empresariales y digitales. A través del estudio del concepto de venta, los tipos de venta y el proceso comercial, se analizan etapas como prospección, preparación, argumentación, cierre y posventa. Asimismo, se presentan los canales de venta y el #[em social selling], destacando la importancia de las estrategias de comunicación y relación con clientes en el entorno digital.
        .p-4.bg-azul-claro.rounded-4
          p.mb-0 El componente también desarrolla temas relacionados con la comunicación asertiva con clientes y la redacción para medios digitales, así como las bases para la planificación de medios digitales orientados al posicionamiento de marca. Además, aborda la implementación de sistemas CRM y su relación con personas, procesos y tecnología. Finalmente, se estudian estrategias de fidelización de clientes mediante el uso de bases de datos, trazabilidad del servicio y mantenimiento de relaciones comerciales en redes sociales.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
