const personas = [
    { nombre: "Isa", edad: 26 },
    { nombre: "Ana", edad: 16 }
];

for (const persona of personas) {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
    console.log(persona.edad >= 18 ? "Es mayor de edad." : "Es menor de edad.");
}
