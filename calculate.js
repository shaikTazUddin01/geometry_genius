// calculate Triangle

const calculateTriangle=()=>{
    // get base
    const baseField=document.getElementById('triangleBase')
    const baseValue=parseFloat(baseField.value)

    // get height
    const heightField= document.getElementById('triangleheight')
    const heightValue=parseFloat(heightField.value)
  
    const area= .5*baseValue*heightValue;

    console.log(area)
    // show area
    const areaspan=document.getElementById('addedArea')

    areaspan.innerHTML= "<li>the Triangle area is : "+ area +"<span>cm <sup>2</sup> </li>";

}

const calculateRectangle=()=>{
    const rectangleWidthField=document.getElementById('rectangleWidth')
    const widthvalue=parseFloat(rectangleWidthField.value)
    const rectangleLengthField =document.getElementById('rectangleLength')
    const lengthValue=parseFloat(rectangleLengthField.value)

    const area= widthvalue * lengthValue 
    console.log(rectangleWidthField)

    // show area
    const areaspan=document.getElementById('addedArea')

    areaspan.innerHTML= "<li>the Rectangle area is : "+ area +"<span>cm <sup>2</sup> </li>";
}