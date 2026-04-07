import { prisma } from "../lib/prisma.js";
async function seed() {
    await prisma.question.createMany({
        data: [
            {
                question: "Where is the oldest continuously inhabited city in the world?",
                answer: "Damascus",
                lat: 33.5138,
                lng: 36.2765,
            },
            {
                question: "Where is the highest waterfall in the world?",
                answer: "Angel Falls",
                lat: 5.967,
                lng: -62.536,
            },
            {
                question: "In which city is the headquarters of Volkswagen located?",
                answer: "Wolfsburg",
                lat: 52.4226,
                lng: 10.7865,
            },
            {
                question: "Where is the deepest ocean trench in the world?",
                answer: "Mariana Trench",
                lat: 11.35,
                lng: 142.2,
            },
            {
                question: "Where is the tallest building in the world?",
                answer: "Burj Khalifa",
                lat: 25.1972,
                lng: 55.2744,
            },
            {
                question: "What is the highest point on Earth?",
                answer: "Mount Everest",
                lat: 27.9881,
                lng: 86.925,
            },
            {
                question: "In which city is the headquarters of BMW located?",
                answer: "Munich",
                lat: 48.1351,
                lng: 11.582,
            },
            {
                question: "In which city is the global headquarters of Samsung located?",
                answer: "Seoul",
                lat: 37.5665,
                lng: 126.978,
            },
            {
                question: "In which city is the global headquarters of Coca-Cola located?",
                answer: "Atlanta",
                lat: 33.749,
                lng: -84.388,
            },
            {
                question: "What is the tallest pyramid in the world?",
                answer: "Pyramid of Giza",
                lat: 29.9792,
                lng: 31.1342,
            },
            {
                question: "Where did the assassination that triggered World War I take place?",
                answer: "Sarajevo",
                lat: 43.8563,
                lng: 18.4131,
            },
            {
                question: "Where is the site of the first modern Olympic Games held in 1896?",
                answer: "Athens",
                lat: 37.9838,
                lng: 23.7275,
            },
            {
                question: "Where is the location of the first atomic bomb drop in history?",
                answer: "Hiroshima",
                lat: 34.3853,
                lng: 132.4553,
            },
            {
                question: "Where was the final of the 2022 FIFA World Cup held?",
                answer: "Lusail",
                lat: 25.416,
                lng: 51.4886,
            },
            {
                question: "Where were the 2020 Summer Olympics held?",
                answer: "Tokyo",
                lat: 35.6762,
                lng: 139.6503,
            },
            {
                question: "Where was Jesus believed to have been born?",
                answer: "Bethlehem",
                lat: 31.7054,
                lng: 35.2024,
            },
            {
                question: "In which city are the famous 'Rocky Steps' featured in the movie Rocky located?",
                answer: "Philadelphia",
                lat: 39.9656,
                lng: -75.1809,
            },
            {
                question: "Which island prison once held infamous criminals such as Al Capone?",
                answer: "Alcatraz Island",
                lat: 37.8267,
                lng: -122.423,
            },
            {
                question: "Where was the Prophet Muhammad born?",
                answer: "Mecca",
                lat: 21.3891,
                lng: 39.8579,
            },
            {
                question: "Where is the Mona Lisa displayed?",
                answer: "Louvre, Paris",
                lat: 48.8606,
                lng: 2.3376,
            },
            {
                question: "In which city is Shakespeare's tragedy about Romeo and Juliet set?",
                answer: "Verona",
                lat: 45.4384,
                lng: 10.9916,
            },
            {
                question: "Where is the headquarters of the Red Cross located?",
                answer: "Geneva",
                lat: 46.2262,
                lng: 6.1432,
            },
            {
                question: "Where was the ancient city of Troy located?",
                answer: "Hisarlik",
                lat: 39.9578,
                lng: 26.2389,
            },
            {
                question: "Where were the 2022 Winter Olympics held?",
                answer: "Beijing",
                lat: 39.9042,
                lng: 116.4074,
            },
            {
                question: "Where did the D-Day landings of World War II take place?",
                answer: "Normandy",
                lat: 49.4144,
                lng: -0.8322,
            },
            {
                question: "Where did the world's worst nuclear disaster occur in 1986?",
                answer: "Chernobyl",
                lat: 51.389,
                lng: 30.0994,
            },
            {
                question: "Where did the asteroid strike that led to the dinosaurs' extinction?",
                answer: "Chicxulub, Yucatan",
                lat: 21.4,
                lng: -89.5,
            },
            {
                question: "Where is the only Grand Slam tennis tournament played on grass?",
                answer: "Wimbledon",
                lat: 51.4343,
                lng: -0.214,
            },
            {
                question: "Where did Muhammad Ali fight George Foreman in the 1974 'Rumble in the Jungle'?",
                answer: "Kinshasa",
                lat: -4.4419,
                lng: 15.2663,
            },
            {
                question: "At which mountain pass did 300 Spartans fight the Persian army in 480 BC?",
                answer: "Thermopylae",
                lat: 38.7969,
                lng: 22.5361,
            },
            {
                question: "After which battle did Germany begin retreating on the Eastern Front during World War II?",
                answer: "Stalingrad",
                lat: 48.708,
                lng: 44.5133,
            },
            {
                question: "Where did the largest tank battle in history occur during World War II?",
                answer: "Kursk",
                lat: 51.73,
                lng: 36.192,
            },
            {
                question: "Which city was buried under ash after Mount Vesuvius erupted in 79 AD?",
                answer: "Pompeii",
                lat: 40.7497,
                lng: 14.4869,
            },
            {
                question: "Which capital city is the highest in the world by altitude?",
                answer: "La Paz",
                lat: -16.5,
                lng: -68.15,
            },
            {
                question: "Where does the Pope officially reside?",
                answer: "Vatican City",
                lat: 41.9029,
                lng: 12.4534,
            },
            {
                question: "Which islands did Charles Darwin study that were key to his theory of evolution?",
                answer: "Galápagos Islands",
                lat: -0.9538,
                lng: -90.9656,
            },
            {
                question: "In which city is the Formula 1 race held entirely on public streets?",
                answer: "Monaco",
                lat: 43.7336,
                lng: 7.4206,
            },
            {
                question: "Which city was a British colony until 1997 and is now a Special Administrative Region?",
                answer: "Hong Kong",
                lat: 22.3193,
                lng: 114.1694,
            },
            {
                question: "At which archaeological site was the Minotaur said to live in a labyrinth?",
                answer: "Knossos, Crete",
                lat: 35.2989,
                lng: 25.1638,
            },
            {
                question: "Near which modern-day city was the ancient city of Carthage located?",
                answer: "Tunis",
                lat: 36.8529,
                lng: 10.3239,
            },
            {
                question: "Which city did Alexander the Great found and name after himself?",
                answer: "Alexandria",
                lat: 31.2001,
                lng: 29.9187,
            },
            {
                question: "In which city is the headquarters of Spotify located?",
                answer: "Stockholm",
                lat: 59.3293,
                lng: 18.0686,
            },
            {
                question: "In which city is the headquarters of the United Nations located?",
                answer: "New York City",
                lat: 40.748,
                lng: -73.968,
            },
            {
                question: "In which city was U.S. President John F. Kennedy assassinated in 1963?",
                answer: "Dallas",
                lat: 32.7767,
                lng: -96.797,
            },
            {
                question: "Near which city is the Terracotta Army located?",
                answer: "Xi'an",
                lat: 34.3847,
                lng: 109.2785,
            },
            {
                question: "Where was the treaty officially ending World War I signed in 1919?",
                answer: "Versailles",
                lat: 48.8049,
                lng: 2.1204,
            },
            {
                question: "Where did Japan attack in 1941, prompting the United States to join World War II?",
                answer: "Pearl Harbor",
                lat: 21.3649,
                lng: -157.95,
            },
            {
                question: "In which city are the annual Academy Awards, also known as the Oscars, presented?",
                answer: "Los Angeles",
                lat: 34.102,
                lng: -118.34,
            },
            {
                question: "In which city were the members of The Beatles born?",
                answer: "Liverpool",
                lat: 53.4084,
                lng: -2.9916,
            },
            {
                question: "In which city was composer Wolfgang Amadeus Mozart born?",
                answer: "Salzburg",
                lat: 47.8095,
                lng: 13.055,
            },
        ],
    });
}
seed()
    .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map