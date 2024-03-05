# My TypeScript Journey: Earned Badges 🏆

## Badges Overview

Here is a collection of badges I earned from completing Microsoft Learn's TypeScript modules:

1. **Getting Started with TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/49007846/DGQSFMPJ?sharingId=17838E8AE258FC0E)
2. **Declare Variable Types in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/49007846/3XLR2DZH?sharingId=17838E8AE258FC0E)
3. **Implement Interfaces in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/49007846/24YRZP9V?sharingId=17838E8AE258FC0E)
4. **Develop Typed Functions in TypeScript**: [Badge](https://learn.microsoft.com/en-us/users/49007846/achievements/ptv9cqv4)
5. **Declare and Instantiate Classes in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/49007846/DG434CSJ?sharingId=17838E8AE258FC0E)
6. **Generics in TypeScript**: [Badge](badge-link) — not complete yet!
7. **Work with External Libraries in TypeScript**: [Badge](badge-link) — not complete yet!
8. **Organize Code with Namespaces in TypeScript**: [Badge](badge-link) — not complete yet!

## Reflections

1. **_In the first module_**, I understood what Typescript is for in general. Typescript is needed in order to avoid potential errors at the code development stage. How? - strict typing, relative to Javascript.
***
2. **_In the second module_**, I learned exactly how variables can be typed. This is done by adding types to, for example, variables, separated by colons.
***
3. **_In the third module_** I learned about interfaces. As far as I understand, they are needed to complete the variables. That is, for example, when creating a function, we create certain variables for this specific function. Interfaces help define the types of variables in a given function and provide a clearer view of the code.
***
4. **_In the fourth module_**, I learned the basics of declaring functions. The difference with Javascript is again in typing, as well as in strictness. When adding a type to parameters, the type of the function becomes required. I also learned how to associate interfaces with functions. This is done to declare the data structure: what parameters will be used, what types they will be used with - this way the functions become more readable. Something like documentation, so to speak :)
You can also use type instead of interfaces, but to be honest, I didn’t see any significant difference between them. The interface looks nicer ^-^
***
5. **_In the fifth module_**, I learned about object oriented programming (OOP). I got acquainted with the creation of classes, with the constructor inside, with the private, public, protected modifiers. Speaking of the classes themselves, they are a structured database in which you can register properties, methods, access to properties, and most importantly, use already created functions in other places through extension. For example, the class Car, it has properties: production, color; left/right turn functions... And here we may need to create another class - an electric car. All the properties described above are in the already created Car class, so you can do it like this: class ElecticCar extends Car. Thus, all previously described properties from the Car class are encapsulated in the ElecticCar class. And we can prescribe additional properties required specifically for electric cars separately.In the constructor of the child class, we must use the super modifier, adding parameters from the parent class there. This modifier launches the parent’s constructor so that they can be used.

So, let's go through all the modifiers that I learned about:
- public — public modifier, enabled by default. Allows you to use methods, parameters, and so on outside the class;
- private - private modifier. It says that you can use methods or parameters only within the class itself and nowhere else. Often this is only required so that the user does not see “what is under the hood”, making it easier for him to use the functions;
- protected - protected modifier. Used when you want to apply properties to other child classes, but leave them hidden to the user.
- super - used when extending a class. In the constructor of a child class allows you to run the constructor of the parent class.

By the way, interfaces can also be connected to classes. This way you can also structure the properties connected in classes and be sure that the necessary data types are used inside them. This is done through implements. Example:
```
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Car implements Vehicle {
    // Properties
    // Constructor
    // Accessors
    // Methods
}
```
***

I will definitely take the rest of the courses during this week. The reason for lack of preparation is preparation for defending a thesis. At a minimum, my defense received a "Good" rating. 🙃
