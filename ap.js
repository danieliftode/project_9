

//alert notification

var unu = document.querySelector("strong");
var doi = document.getElementById("alert");
function patru() {
  doi.style.display = "none";
};
//line chart
var ctx = document.getElementById("line-chart").getContext("2d");
var lineChart = new Chart (ctx, {
  type: 'line',
  data: {
            labels: ["16-22", "23-29", "30-5", "6-12", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: [{
                label: 'weekly',
                data: [500, 1000, 750, 1750, 1250, 1000, 1500, 2000, 1500, 2000],
                backgroundColor: [
                    "rgba(115, 119, 191, 0.2)",
                ],
                borderColor: [
                    "rgba(115, 119, 191, 1)",
                ],
                borderWidth: 1,
                lineTension: 0,
                borderWidth: 1,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'rgb(115, 119, 191)',
                pointBackgroundColor: 'white',
            }]
          },

        options: {
          legend: {
            display: false,
          }

        }
});

// bar chart
var ctx = document.getElementById("bar-chart").getContext("2d");
var barChart = new Chart (ctx, {
  type: 'bar',
  data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [50, 75, 150, 100, 200, 175, 125],
             backgroundColor: [
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)"
            ],
          hoverBackgroundColor: [
              "rgba(115, 119, 191, 0.8)",
              "rgba(115, 119, 191, 0.8)",
              "rgba(115, 119, 191, 0.8)",
              "rgba(115, 119, 191, 0.8)",
              "rgba(115, 119, 191, 0.8)",
              "rgba(129, 201, 191, 0.8)",
              "rgba(116, 177, 191, 0.8)"
            ]
        }]
    },
    options: {
      legend: {
        display: false,
      }
    }

});
// donught chart
var ctx = document.getElementById("donught-chart").getContext("2d");
var donughtChart = new Chart (ctx, {
  type: 'doughnut',
    data: {
    labels: [
        "Phones",
        "Tablets",
        "Desktops"
    ],
    datasets: [
        {
            data: [100, 50, 300],
            backgroundColor: [
                "rgba(115, 119, 191, 1)",
                "rgba(129, 201, 143, 1)",
                "rgba(116, 177, 191, 1)"
            ],
            hoverBackgroundColor: [
                "rgba(115, 119, 191, 0.8)",
                "rgba(129, 201, 143, 0.8)",
                "rgba(116, 177, 191, 0.8)"
            ]
        }]
},
    options: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 14,
          fontSize: 14,
          fontColor: "#666",
          padding: 20,
        }
      }
  }
});
var userMsg = document.querySelector(".user");
var msg = document.querySelector(".msg");
function send() {
  if(userMsg.value === "" || msg.value === "") {
    alert("please enter user or message")
  }else {
    alert("Message successfully sent")
  }
}
