function changeImage() {

    if (document.getElementById("afbeelding").src == "http://www.userinterfaceicons.com/80x80/minimize.png") 
    {
        document.getElementById("afbeelding").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
    }
    else 
    {
        document.getElementById("afbeelding").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
    }
}