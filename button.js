AFRAME.registerComponent("createButtons", {
    init: function() {
        var button1 = document.createElement("Button")
        button1.innerHTML = "Rate Us"
        button1.setAttribute("id", "rate")
        button1.setAttribute("class", "btn btn-warning")

        var button2 = document.createElement("Button")
        button2.innerHTML = "Order"
        button2.setAttribute("id", "order")
        button2.setAttribute("class", "btn btn-warning")
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.appendChild(button1)
        buttonDiv.appendChild(button2)
    }
})