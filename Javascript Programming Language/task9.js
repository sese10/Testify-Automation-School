/*Triangles can be classified based on the length of the sides relative to one another. 
If all the sides of  triangle are equal, that triangle is called Equilateral triangle
If ONLY TWO sides of the triangle are equal, that triangle is called Isosceles triangle
If NONE of sides of  the triangle are equal, that triangle is called Scalene triangle
Write a Javascript program that prints the name of the triangle based on the length of the sides in relation to one another.
Print Equilateral triangle if all the sides are equal
Print Isosceles triangle if only two the sides are equal
Print Scalene triangle if only none of the sides are equal*/

//Equilateral triangle all sides are equal
//Isosceles triangle only two sides are equal
//Scalene triangle none of the sides are equal

const side1 = 5
const side2 = 8
const side3 = 2

if(side1===side2 && side1===side3 && side2===side3)
{
    console.log('Equilateral triangle')
} else if (side1===side2 || side1===side3 || side2===side3){
        console.log('Isosceles triangle')
} else {
    console.log ('Scalene triangle')
}