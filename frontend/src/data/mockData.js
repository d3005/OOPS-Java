// Mock data for OOP presentation website

export const heroData = {
  title: "Object-Oriented Programming Basics",
  subtitle: "Ever wonder how Iron Man, Thor, and Hulk work together? The secret lies in something called Object-Oriented Programming—and it's way cooler than you think.",
  tagline: "Programming meets Superheroes"
};

export const oopDefinition = {
  title: "The Official Definition",
  definition: "Object-Oriented Programming (OOP): A programming paradigm based on the concept of \"objects\" that contain data (attributes) and code (methods).",
  aspects: [
    {
      title: "The Blueprint",
      description: "Classes define the structure—like a superhero template."
    },
    {
      title: "The Objects",
      description: "Instances created from classes—each unique, yet following the same rules."
    },
    {
      title: "The Power",
      description: "Objects interact, communicate, and work together to build amazing things."
    }
  ],
  summary: "Think of OOP as your superpower for organizing code. Instead of scattered instructions, you create self-contained heroes that know what they can do and how to do it. Welcome to the programming Avengers Initiative!"
};

export const avengersAssembly = {
  title: "The Avengers Assembly: OOP in Action",
  intro: "When Nick Fury assembles the Avengers... Something magical happens that perfectly mirrors how programmers build software.",
  concepts: [
    {
      title: "Each hero is an OBJECT",
      description: "Iron Man, Thor, and Hulk are individual entities with their own identity—just like objects in code.",
      icon: "User"
    },
    {
      title: "Each has PROPERTIES",
      description: "Powers, weapons, and suits define who they are—these are their attributes or data fields.",
      icon: "Settings"
    },
    {
      title: "Each has ACTIONS",
      description: "Fly, smash, thunder—these are the methods or functions each hero can perform.",
      icon: "Zap"
    },
    {
      title: "They follow a BLUEPRINT",
      description: "Every hero follows the \"Superhero\" template—this is what we call a class in programming.",
      icon: "FileText"
    }
  ],
  conclusion: "This interconnected system of heroes working together? That's Object-Oriented Programming at its finest."
};

export const fourPillars = [
  {
    id: "abstraction",
    title: "Abstraction",
    tagline: "Hiding Complexity, Revealing Essentials",
    color: "#00D9FF",
    gradient: "from-cyan-400 to-teal-500",
    icon: "Eye",
    analogy: "Quirk Activation (My Hero Academia)",
    keyword: "abstract",
    shortDesc: "Hide complexity, show essentials",
    heroExample: {
      hero: "Izuku Midoriya (Deku)",
      explanation: "When he presses the 'quirk button', the power activates instantly. He doesn't need to understand the intricate biological processes—how muscles expand, energy transfers, or complex biological details.",
      lesson: "He interacts with a simple interface without needing to grasp the underlying complexity."
    },
    codeExample: {
      language: "java",
      title: "Abstraction in Programming",
      code: `class Car {
    // Complex engine logic hidden internally
    private void igniteEngine() { /* ... */ }
    private void checkFuel() { /* ... */ }
    
    public void start() {
        checkFuel();
        igniteEngine();
        System.out.println("Car started!");
    }
}

// Simple call, complex details abstracted
Car myCar = new Car();
myCar.start();`
    },
    examDefinition: "Abstraction is the process of hiding complex implementation details and showing only essential features or functionality to the user."
  },
  {
    id: "polymorphism",
    title: "Polymorphism",
    tagline: "One Hero, Many Forms",
    color: "#FF6B35",
    gradient: "from-orange-400 to-red-500",
    icon: "Shuffle",
    analogy: "Mystique's Shapeshifting (X-Men)",
    keyword: "Override/Overload",
    shortDesc: "One interface, multiple forms",
    heroExample: {
      hero: "Mystique, All Might, Hulk",
      explanation: "Mystique can manifest as countless different individuals while maintaining her core identity. All Might switches between Muscle Form and True Form. Bruce Banner transforms into the Hulk.",
      lesson: "The same object can behave differently depending on its current form or state."
    },
    codeExample: {
      language: "java",
      title: "Polymorphism in Practice",
      code: `class Animal {
    public void makeSound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

Animal myAnimal = new Dog();
myAnimal.makeSound(); // Output: Dog barks`
    },
    examDefinition: "Polymorphism: The ability of objects to take on many forms. It allows objects of different classes to be treated as objects of a common type."
  },
  {
    id: "inheritance",
    title: "Inheritance",
    tagline: "The Legacy of Spider-Powers",
    color: "#9B5DE5",
    gradient: "from-purple-400 to-indigo-500",
    icon: "GitBranch",
    analogy: "Spider-Verse Powers",
    keyword: "extends",
    shortDesc: "Code reuse, hierarchical relationships",
    heroExample: {
      hero: "Miles Morales & Spider-People",
      explanation: "All Spider-People share fundamental 'spider-powers': web-slinging, spider-sense, wall-crawling. Miles inherits these core abilities and adds his unique powers like venom blast and camouflage.",
      lesson: "A new class can acquire properties from an existing class without redefining the basics."
    },
    codeExample: {
      language: "java",
      title: "Inheritance Example",
      code: `class SpiderPerson {
    void webSling() { /* ... */ }
    void spiderSense() { /* ... */ }
    void wallCrawl() { /* ... */ }
}

class MilesMorales extends SpiderPerson {
    void venomBlast() { /* Miles's unique */ }
    void camouflage() { /* Another unique */ }
}

// Miles has ALL SpiderPerson abilities + his own`
    },
    examDefinition: "Inheritance: A mechanism where a new class (subclass) acquires properties and behaviors from an existing class (superclass), promoting code reuse."
  },
  {
    id: "encapsulation",
    title: "Encapsulation",
    tagline: "Iron Man's Suit: Private Armor, Public Interface",
    color: "#06D6A0",
    gradient: "from-emerald-400 to-green-500",
    icon: "Shield",
    analogy: "Iron Man's Suit",
    keyword: "private/public",
    shortDesc: "Data protection, controlled access",
    heroExample: {
      hero: "Tony Stark / Iron Man",
      explanation: "The Arc Reactor and internal systems are completely hidden and protected. The suit provides a public interface through helmet display, gauntlet controls, and voice commands.",
      lesson: "Critical components are private; controlled interaction points are public."
    },
    codeExample: {
      language: "java",
      title: "Encapsulation Example",
      code: `class IronManSuit {
    private int arcReactorPower; // Hidden
    private String suitStatus;   // Hidden
    
    public void activateFlight() { // Public
        if (arcReactorPower > 10) {
            arcReactorPower -= 10;
            suitStatus = "Flying";
        }
    }
    
    public String getSuitStatus() { // Getter
        return suitStatus;
    }
}`
    },
    examDefinition: "Encapsulation: The mechanism of wrapping data and code together as a single unit, restricting direct access to some components."
  }
];

export const javaStructure = {
  title: "PROGRAM STRUCTURE IN JAVA",
  subtitle: "The Matrix: Enter the System",
  intro: "Just as Neo first entered the green digital rain of the Matrix, a Java program begins by establishing its environment.",
  steps: [
    {
      step: "01",
      title: "Import Packages",
      code: "import java.util.Scanner;",
      analogy: "Like loading specific simulation modules Neo might need within the Matrix training program."
    },
    {
      step: "02",
      title: "Class Declaration",
      code: "public class Neo { ... }",
      analogy: "Defines the primary environment or blueprint, like setting the stage for Neo's training simulation."
    },
    {
      step: "03",
      title: "Main Method",
      code: "public static void main(String[] args) { ... }",
      analogy: "The program's starting point, equivalent to 'hitting the play button' to initiate Neo's first program experience."
    },
    {
      step: "04",
      title: "Statements",
      code: 'System.out.println("Wake up, Neo...");',
      analogy: "Individual actions executed sequentially, like Neo's specific movements within the simulated world."
    }
  ]
};

export const javaTokens = {
  title: "Elements/Tokens in Java",
  subtitle: "Infinity Stones: The Building Blocks of Reality",
  intro: "Just like the Infinity Stones that form the very fabric of reality, there are fundamental elements that constitute every piece of code.",
  tokens: [
    {
      name: "Keywords",
      description: "Reserved Power Words - Special words with predefined meanings",
      examples: "class, public, static, void, if, for, while, int, return",
      icon: "Key"
    },
    {
      name: "Identifiers",
      description: "Custom Names - Names you give to variables, methods, classes",
      examples: 'int thorPower = 100; String spiderManName = "Peter";',
      icon: "Tag"
    },
    {
      name: "Literals",
      description: "Actual Values - Fixed values assigned to variables",
      examples: '6 (int), 3.14 (double), \'A\' (char), "Thanos" (String), true (boolean)',
      icon: "Hash"
    },
    {
      name: "Operators",
      description: "Action Symbols - Perform operations on values",
      examples: "+ - * / % (Arithmetic), == != > < (Relational), && || ! (Logical)",
      icon: "Plus"
    },
    {
      name: "Separators",
      description: "Punctuation - Define structure and flow",
      examples: "{ } ( ) [ ] ; , .",
      icon: "Braces"
    }
  ]
};

export const dataTypes = {
  title: "DATA TYPES & VARIABLES",
  subtitle: "Pokémon Types: Different Kinds of Power",
  intro: "Just like Pokémon have distinct types—Fire, Water, Electric—each with unique strengths, Java has data types defining what kind of value a variable can hold.",
  primitives: [
    { type: "byte", size: "1 byte", range: "-128 to 127", example: "byte age = 25;", analogy: "Baby Pokémon" },
    { type: "short", size: "2 bytes", range: "-32,768 to 32,767", example: "short year = 2024;", analogy: "Teenage hero" },
    { type: "int", size: "4 bytes", range: "-2B to 2B", example: "int pop = 1000000;", analogy: "Adult hero (common)" },
    { type: "long", size: "8 bytes", range: "Very large", example: "long dist = 9999999999L;", analogy: "Ancient dragon" },
    { type: "float", size: "4 bytes", range: "Decimals", example: "float price = 99.99f;", analogy: "Speed stat" },
    { type: "double", size: "8 bytes", range: "Big decimals", example: "double pi = 3.14159;", analogy: "Legendary stats" },
    { type: "char", size: "2 bytes", range: "Single character", example: "char grade = 'A';", analogy: "Nickname initial" },
    { type: "boolean", size: "1 bit", range: "true/false", example: "boolean evolved = true;", analogy: "Status flag" }
  ]
};

export const constants = {
  title: "CONSTANTS (Final Variables)",
  subtitle: "Infinity Stones: Unchanging Power",
  intro: "Just like the Infinity Stones are artifacts of immense, unchanging power, constants in Java are variables whose values cannot be altered after assignment.",
  examples: [
    { code: "final int INFINITY_STONES = 6;", description: "Integer constant" },
    { code: "final double PI = 3.14159;", description: "Decimal constant" },
    { code: 'final String HERO_NAME = "Iron Man";', description: "String constant" },
    { code: "final int MAX_HEALTH = 100;", description: "Game constant" }
  ],
  convention: "Java constants use ALL_CAPS_WITH_UNDERSCORES naming convention"
};
