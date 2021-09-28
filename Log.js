AFRAME.registerComponent('move',{
    schema:{
        moveY: {type:"number", default:0}
    },
    tick: function(){
        window.addEventListener("click", (e) => {
            this.data.moveY = this.data.moveY - 0.0001;
        })
        var pos = this.el.getAttribute("position");
        pos.x = pos.x + this.data.moveY;
        this.el.setAttribute("position", {x: pos.x});

    }
})