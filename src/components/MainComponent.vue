<template>
  <div class="main">
    <h2>{{msg}}</h2>
    <div class="searchform">
      <form @submit="checkForm" method="post">
        <select v-model="selectedVal">
          <option selected value>Select a product</option>
          <option
            v-for="item in items"
            v-bind:key="item.cb_id"
            :value="item.cb_id"
          >{{item.product_name}}</option>
        </select>
        <input type="submit" value="Search" />
      </form>
    </div>
    <div class="urlcontainer">
      <div v-if="productURL != ''">
        <a :href="productURL">{{productURL}}</a>
      </div>
    </div>
  </div>
</template>

<script>
// import * as axios from "axios";
import * as _ from "lodash";
export default {
  name: "MainComponent",
  data() {
    return {
      msg: "Task 3",
      selectedVal: "",
      items: [],
      productURL: ""
    };
  },
  methods: {
    checkForm: function(e) {
      if (this.selectedVal != "") {
        const obj = _.find(this.items, ["cb_id", this.selectedVal]);
        this.productURL =
          "https://store.acronis.com/" +
          obj.store +
          "/purl-consumer-standard-US?cart=" +
          obj.cb_id +
          "&currencies=" +
          obj.currency;
      } else {
        alert("Please select a product");
      }
      e.preventDefault();
    }
  },
  mounted() {
    // axios.default
    // .get(
    //   "https://www.acronis.com/en-us/api/v1/price/?machine_name=acronis_backup&locale=en-us",
    //   {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json"
    //     }
    //   }
    // )
    // .then(response => {
    //   console.log("response", response);
    // })
    // .catch(e => {
    //   console.log("error", e);
    // });
    let products = [];
    let array = [
      {
        locale: "en-us",
        machine_name: "acronis_backup",
        segment: "corporate",
        perpetual: {
          buy: {
            "ABR12-SRV-PERPETUAL": {
              abbr: "ABR12-SRV-PERPETUAL",
              cb_id: 175240,
              price: 1049,
              store: 837,
              currency: "USD",
              product_name: "Acronis Backup 12.5 Standard Server License",
              amount: 1,
              year: "perpetual",
              type: "server"
            },
            "ABR12-VH-PERPETUAL": {
              abbr: "ABR12-VH-PERPETUAL",
              cb_id: 175245,
              price: 1319,
              store: 837,
              currency: "USD",
              product_name: "Acronis Backup 12.5 Standard Virtual Host License",
              amount: 1,
              year: "perpetual",
              type: "virtual_host"
            },
            "ABR12-ESS-PERPETUAL": {
              abbr: "ABR12-ESS-PERPETUAL",
              cb_id: 175250,
              price: 499,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Windows Server Essentials License",
              amount: 1,
              year: "perpetual",
              type: "windows_server_essential"
            },
            "ABR12-WS-PERPETUAL": {
              abbr: "ABR12-WS-PERPETUAL",
              cb_id: 175255,
              price: 89,
              store: 837,
              currency: "USD",
              product_name: "Acronis Backup 12.5 Standard Workstation License",
              amount: 1,
              year: "perpetual",
              type: "workstation"
            }
          },
          upgrade: {
            "ABR12-SRV-UPG-PERPETUAL": {
              abbr: "ABR12-SRV-UPG-PERPETUAL",
              cb_id: 175407,
              price: 671.46,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Server License Upgrade",
              amount: 1,
              year: "perpetual",
              type: "server"
            },
            "ABR12-VH-UPG-PERPETUAL": {
              abbr: "ABR12-VH-UPG-PERPETUAL",
              cb_id: 175408,
              price: 805.9,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Virtual Host License Upgrade",
              amount: 1,
              year: "perpetual",
              type: "virtual_host"
            },
            "ABR12-ESS-UPG-PERPETUAL": {
              abbr: "ABR12-ESS-UPG-PERPETUAL",
              cb_id: 175409,
              price: 335.39,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Windows Server Essentials License Upgrade",
              amount: 1,
              year: "perpetual",
              type: "windows_server_essential"
            },
            "ABR12-WS-UPG-PERPETUAL": {
              abbr: "ABR12-WS-UPG-PERPETUAL",
              cb_id: 175410,
              price: 59.82,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Workstation License Upgrade",
              amount: 1,
              year: "perpetual",
              type: "workstation"
            }
          }
        },
        subscription: {
          buy: {
            "ABO-365-100MB-1Y": {
              abbr: "ABO-365-100MB-1Y",
              cb_id: 190326,
              price: 2999,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Office 365 Subscription License 100 Mailboxes",
              amount: 100,
              year: 1,
              type: "office_365"
            },
            "ABO-365-100MB-2Y": {
              abbr: "ABO-365-100MB-2Y",
              cb_id: 190332,
              price: 4799,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Office 365 Subscription License 100 Mailboxes",
              amount: 100,
              year: 2,
              type: "office_365"
            },
            "ABO-365-100MB-3Y": {
              abbr: "ABO-365-100MB-3Y",
              cb_id: 190338,
              price: 5999,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Office 365 Subscription License 100 Mailboxes",
              amount: 100,
              year: 3,
              type: "office_365"
            },
            "ABO-365-25MB-3Y": {
              abbr: "ABO-365-25MB-3Y",
              cb_id: 190337,
              price: 1749,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Office 365 Subscription License 25 Maiboxes",
              amount: 25,
              year: 3,
              type: "office_365"
            },
            "ABO-365-25MB-1Y": {
              abbr: "ABO-365-25MB-1Y",
              cb_id: 190325,
              price: 869,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Office 365 Subscription License 25 Mailboxes",
              amount: 25,
              year: 1,
              type: "office_365"
            },
            "ABO-365-25MB-2Y": {
              abbr: "ABO-365-25MB-2Y",
              cb_id: 190331,
              price: 1399,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Office 365 Subscription License 25 Mailboxes",
              amount: 25,
              year: 2,
              type: "office_365"
            },
            "ABO-365-5MB-1Y": {
              abbr: "ABO-365-5MB-1Y",
              cb_id: 190323,
              price: 199,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Office 365 Subscription License 5 Maiboxes",
              amount: 5,
              year: 1,
              type: "office_365"
            },
            "ABO-365-5MB-2Y": {
              abbr: "ABO-365-5MB-2Y",
              cb_id: 190330,
              price: 319,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Office 365 Subscription License 5 Maiboxes",
              amount: 5,
              year: 2,
              type: "office_365"
            },
            "ABO-365-5MB-3Y": {
              abbr: "ABO-365-5MB-3Y",
              cb_id: 190334,
              price: 399,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Office 365 Subscription License 5 Maiboxes",
              amount: 5,
              year: 3,
              type: "office_365"
            },
            "ABR12-VH-1YR": {
              abbr: "ABR12-VH-1YR",
              cb_id: 175246,
              price: 619,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Virtual Host Subscription License",
              amount: 1,
              year: 1,
              type: "virtual_host"
            },
            "ABR12-VH-2YR": {
              abbr: "ABR12-VH-2YR",
              cb_id: 175247,
              price: 969,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Virtual Host Subscription License",
              amount: 1,
              year: 2,
              type: "virtual_host"
            },
            "ABR12-VH-3YR": {
              abbr: "ABR12-VH-3YR",
              cb_id: 175248,
              price: 1319,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Virtual Host Subscription License",
              amount: 1,
              year: 3,
              type: "virtual_host"
            },
            "ABR12-ESS-1YR": {
              abbr: "ABR12-ESS-1YR",
              cb_id: 175251,
              price: 229,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Windows Server Essentials Subscription License",
              amount: 1,
              year: 1,
              type: "windows_server_essential"
            },
            "ABR12-ESS-2YR": {
              abbr: "ABR12-ESS-2YR",
              cb_id: 175252,
              price: 369,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Windows Server Essentials Subscription License",
              amount: 1,
              year: 2,
              type: "windows_server_essential"
            },
            "ABR12-ESS-3YR": {
              abbr: "ABR12-ESS-3YR",
              cb_id: 175253,
              price: 499,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Windows Server Essentials Subscription License",
              amount: 1,
              year: 3,
              type: "windows_server_essential"
            },
            "ABR12-WS-1YR": {
              abbr: "ABR12-WS-1YR",
              cb_id: 175256,
              price: 69,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Workstation Subscription License",
              amount: 1,
              year: 1,
              type: "workstation"
            },
            "ABR12-WS-2YR": {
              abbr: "ABR12-WS-2YR",
              cb_id: 175257,
              price: 129,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Workstation Subscription License",
              amount: 1,
              year: 2,
              type: "workstation"
            },
            "ABR12-WS-3YR": {
              abbr: "ABR12-WS-3YR",
              cb_id: 175258,
              price: 179,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Workstation Subscription License",
              amount: 1,
              year: 3,
              type: "workstation"
            },
            "ABR12-SRV-2YR": {
              abbr: "ABR12-SRV-2YR",
              cb_id: 175242,
              price: 769,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Server Subscription License",
              amount: 1,
              year: 2,
              type: "server"
            },
            "ABR12-SRV-3YR": {
              abbr: "ABR12-SRV-3YR",
              cb_id: 175243,
              price: 1049,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Server Subscription License",
              amount: 1,
              year: 3,
              type: "server"
            },
            "ABR12-SRV-1YR": {
              abbr: "ABR12-SRV-1YR",
              cb_id: 175241,
              price: 499,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Server Subscription License",
              amount: 1,
              year: 1,
              type: "server"
            },
            "ABR12.5-OFFICE-5-1Y": {
              abbr: "ABR12_5-OFFICE-5-1Y",
              cb_id: 216974,
              price: 244.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard Office 365 Pack Subscription License 5 Seats, 1 Year, includes 50 GB of Cloud Storage",
              amount: 5,
              year: 1,
              type: "office_365"
            },
            "ABR12.5-OFFICE-5-2Y": {
              abbr: "ABR12_5-OFFICE-5-2Y",
              cb_id: 219928,
              price: 389.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard Office 365 Pack Subscription License 5 Seats, 2 Years, includes 50 GB of Cloud Storage",
              amount: 5,
              year: 2,
              type: "office_365"
            },
            "ABR12.5-OFFICE-5-3Y": {
              abbr: "ABR12_5-OFFICE-5-3Y",
              cb_id: 219930,
              price: 494.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard Office 365 Pack Subscription License 5 Seats, 3 Years, includes 50 GB of Cloud Storage",
              amount: 5,
              year: 3,
              type: "office_365"
            },
            "ABR12.5-GS-PACK-1Y": {
              abbr: "ABR12_5-GS-PACK-1Y",
              cb_id: 220255,
              price: 244.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Pack Subscription License 5 Seats + 50GB Cloud Storage, 1 Year",
              amount: 5,
              year: 1,
              type: "g_suite"
            },
            "ABR12.5-GS-PACK-2Y": {
              abbr: "ABR12_5-GS-PACK-2Y",
              cb_id: 220259,
              price: 389.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Pack Subscription License 5 Seats + 50GB Cloud Storage, 2 Year",
              amount: 5,
              year: 2,
              type: "g_suite"
            },
            "ABR12.5-GS-PACK-3Y": {
              abbr: "ABR12_5-GS-PACK-3Y",
              cb_id: 220263,
              price: 494.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Pack Subscription License 5 Seats + 50GB Cloud Storage, 3 Year",
              amount: 5,
              year: 3,
              type: "g_suite"
            },
            "ABR12.5-GS-100S-1Y": {
              abbr: "ABR12_5-GS-100S-1Y",
              cb_id: 220266,
              price: 2999.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Subscription License 100 Seats, 1 Year",
              amount: 100,
              year: 1,
              type: "g_suite"
            },
            "ABR12.5-GS-25S-1Y": {
              abbr: "ABR12_5-GS-25S-1Y",
              cb_id: 220265,
              price: 869.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Subscription License 25 Seats, 1 Year",
              amount: 25,
              year: 1,
              type: "g_suite"
            },
            "ABR12.5-GS-5S-1Y": {
              abbr: "ABR12_5-GS-5S-1Y",
              cb_id: 220264,
              price: 199.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Subscription License 5 Seats, 1 Year",
              amount: 5,
              year: 1,
              type: "g_suite"
            },
            "ABR12.5-GS-100S-2Y": {
              abbr: "ABR12_5-GS-100S-2Y",
              cb_id: 220269,
              price: 4799.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Subscription License 100 Seats, 2 Year",
              amount: 100,
              year: 2,
              type: "g_suite"
            },
            "ABR12.5-GS-25S-2Y": {
              abbr: "ABR12_5-GS-25S-2Y",
              cb_id: 220268,
              price: 1399.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Subscription License 25 Seats, 2 Year",
              amount: 25,
              year: 2,
              type: "g_suite"
            },
            "ABR12.5-GS-5S-2Y": {
              abbr: "ABR12_5-GS-5S-2Y",
              cb_id: 220267,
              price: 319.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Subscription License 5 Seats, 2 Year",
              amount: 5,
              year: 2,
              type: "g_suite"
            },
            "ABR12.5-GS-100S-3Y": {
              abbr: "ABR12_5-GS-100S-3Y",
              cb_id: 220273,
              price: 5999.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Subscription License 100 Seats, 3 Year",
              amount: 100,
              year: 3,
              type: "g_suite"
            },
            "ABR12.5-GS-25S-3Y": {
              abbr: "ABR12_5-GS-25S-3Y",
              cb_id: 220272,
              price: 1799.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Subscription License 25 Seats, 3 Year",
              amount: 25,
              year: 3,
              type: "g_suite"
            },
            "ABR12.5-GS-5S-3Y": {
              abbr: "ABR12_5-GS-5S-3Y",
              cb_id: 220271,
              price: 399.99,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup Standard G Suite Subscription License 5 Seats, 3 Year",
              amount: 5,
              year: 3,
              type: "g_suite"
            }
          }
        },
        maintenance: {
          buy: {
            "ABR12-SRV-MAINTENANCE": {
              abbr: "ABR12-SRV-MAINTENANCE",
              cb_id: 175411,
              price: 180.15,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Server License \u2013 Maintenance AAP ESD",
              amount: 1,
              year: 1,
              type: "server"
            },
            "ABR12-VH-MAINTENANCE": {
              abbr: "ABR12-VH-MAINTENANCE",
              cb_id: 175412,
              price: 216.22,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Virtual Host License \u2013 Maintenance AAP ESD",
              amount: 1,
              year: 1,
              type: "virtual_host"
            },
            "ABR12-ESS-MAINTENANCE": {
              abbr: "ABR12-ESS-MAINTENANCE",
              cb_id: 175413,
              price: 89.98,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Windows Server Essentials License \u2013 Maintenance AAP ESD",
              amount: 1,
              year: 1,
              type: "windows_server_essential"
            },
            "ABR12-WS-MAINTENANCE": {
              abbr: "ABR12-WS-MAINTENANCE",
              cb_id: 175415,
              price: 16.05,
              store: 837,
              currency: "USD",
              product_name:
                "Acronis Backup 12.5 Standard Workstation License \u2013 Maintenance AAP",
              amount: 1,
              year: 1,
              type: "workstation"
            }
          }
        }
      }
    ];
    let productsJSON = Object.assign(
      array[0].perpetual.buy,
      Object.assign(
        array[0].perpetual.upgrade,
        Object.assign(array[0].subscription.buy, array[0].maintenance.buy)
      )
    );
    var keys = Object.keys(productsJSON);
    keys.forEach(key => {
      products.push(productsJSON[key]);
    });
    this.items = _.uniqBy(products, "product_name");
    console.log("productsJSON", this.items);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main {
  position: relative;
  display: block;
  width: 100%;
}

.searchform form input {
  float: left;
  clear: both;
  width: 100px;
  margin-top: 5px;
}
.searchform,
.urlcontainer {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 48%;
  height: 100%;
  margin-left: 0.5%;
  margin-right: 0.5%;
}
.searchform select {
  width: 100%;
}
.urlcontainer div {
  border: 1px solid black;
  border-radius: 3px;
  padding:1% 2%;
}
a {
  color: blue;
}
</style>
