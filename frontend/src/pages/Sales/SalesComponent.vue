 <template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title-pages">
        <p>Vendas</p>
      </header>
      <body>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </body>
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";
export default {
  name: "SalesComponent",
  props: {},
  components: {
    DashboardComponent,
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss" src="./style.scss" scoped />
