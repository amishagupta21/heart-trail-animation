const bodyNode=document.querySelector("body")
bodyNode.addEventListener("mousemove",(event)=>{
    const xPos=event.offsetX;
    const yPos=event.offsetY;
    const spanNode=document.createElement("span")
    spanNode.style.left=xPos+"px"
    spanNode.style.top=yPos+"px"
    const size=Math.random()*100;
    spanNode.style.width=size+"px"
    spanNode.style.height=size+"px"
    bodyNode.append(spanNode)
    setTimeout(()=>{
        spanNode.remove()
    },3000)
})