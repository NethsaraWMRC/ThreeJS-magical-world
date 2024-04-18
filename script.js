// Constants
const houses = ["GRYFFYNDOR", "HUFFLEPUFF", "RAVENCLAW", "SLYTHERIN"];
const spells = [
  "Lumos",
  "Expecto Patronum",
  "Accio",
  "Expelliarmus",
  "Alohomora",
  "Avada Kedavra",
  "Wingardium Leviosa",
  "Imperio",
  "Crucio",
  "Incendio",
  "Aguamenti",
  "Protego",
  "Stupefy",
  "Obliviate",
  "Riddikulus",
];

const lesserKnownDetails = [
  "Albus Dumbledore's favorite flavor of jam is raspberry, and he often enjoyed it on toast during late-night planning sessions.",
  "Severus Snape had a hidden talent for playing the piano and would occasionally sneak into the Hogwarts music room to play melancholic tunes late at night.",
  "Minerva McGonagall once had a pet Kneazle named Dougal, who had a peculiar habit of predicting upcoming Quidditch match outcomes.",
  "Remus Lupin was an accomplished poet and would often write verses about the beauty of the night sky during his solitary walks around the Hogwarts grounds.",
  "Rubeus Hagrid had a secret collection of miniature magical creatures that he kept hidden in his cabin, including a tiny dragon and a miniature hippogriff.",
  "Harry Potter's wand, the holly wand with a phoenix feather core, was particularly well-suited for dueling due to its flexibility and resilience.",
  "Hermione Granger was fluent in several ancient languages, including Mermish and Gobbledegook, which she taught herself during her spare time in the Hogwarts library.",
  "Ron Weasley had a talent for playing Wizard's Chess and was known to have defeated the reigning champion of the Hogwarts Chess Club in a thrilling match during his fifth year.",
  "Ginny Weasley was an accomplished Quidditch player and briefly held the record for the fastest goal ever scored in a Hogwarts Quidditch match.",
  "Neville Longbottom had a knack for Herbology from a young age and once accidentally discovered a new species of magical plant while exploring the Forbidden Forest.",
  "Sirius Black had a fondness for Muggle motorcycles and often enchanted his flying motorcycle to take exhilarating flights over the Hogwarts grounds under the cover of night.",
  "Fred and George Weasley once brewed a prank potion that caused anyone who drank it to temporarily speak in rhyme, leading to chaos in the Hogwarts corridors for several days.",
  "Cedric Diggory was an excellent swimmer and would often spend his free time diving in the Black Lake, searching for hidden treasures rumored to be at the lake's bottom.",
  "Nymphadora Tonks had a talent for shape-shifting from a young age and would often entertain her classmates by transforming into various magical creatures during lunch breaks.",
  "Pomona Sprout was an expert in magical herbalism and was known to brew a special tea that could cure common ailments such as headaches and stomachaches.",
  "Hannah Abbott had a passion for Divination and was rumored to have accurately predicted the outcome of the Triwizard Tournament several months before it took place.",
  "Luna Lovegood was an avid stargazer and had a personal telescope hidden in her dormitory, which she used to observe rare celestial events from the Hogwarts Astronomy Tower.",
  "Cho Chang was skilled in wandless magic and was once able to successfully cast a non-verbal Patronus charm during a particularly intense Quidditch match.",
  "Filius Flitwick was a former dueling champion and had won the prestigious Wizarding Duels Championship three years in a row during his youth.",
  "Draco Malfoy had a secret talent for drawing and would often sketch intricate designs of magical creatures in the margins of his textbooks during boring lectures.",
  "Bellatrix Lestrange had a fascination with dark magic from a young age and would spend hours studying forbidden curses in the restricted section of the Hogwarts library.",
  "Tom Riddle had a fear of the dark as a child and would often use Lumos spells to keep his dormitory illuminated at night, much to the annoyance of his roommates.",
  "Regulus Black had a hidden talent for potions and was rumored to have created a powerful potion that granted temporary invisibility during his time at Hogwarts.",
  "The Sorting Hat was once a regular hat owned by Godric Gryffindor until he enchanted it to sort students into the four Hogwarts houses based on their traits and values.",
  "Fawkes, Dumbledore's phoenix, had a special bond with Harry Potter due to their shared experiences of loyalty and sacrifice.",
  "The Marauder's Map was enchanted by Remus Lupin, Sirius Black, James Potter, and Peter Pettigrew during their time at Hogwarts.",
  "The Room of Requirement could transform into any space a witch or wizard needed, from a cozy study room to a secret hideout.",
  "Hogwarts has a network of secret passages that allow students to navigate the castle unseen, including the infamous passage behind the statue of Gregory the Smarmy.",
  "The Hogwarts Express runs on a magical track that appears only to witches and wizards traveling to and from Hogwarts.",
  "Thestrals, skeletal winged horses, can only be seen by those who have witnessed death and accepted its significance.",
  "Polyjuice Potion requires a piece of the person the drinker wishes to transform into, such as a hair or nail clipping.",
  "The Mirror of Erised shows the deepest desires of the viewer, but it can be dangerous if one becomes too obsessed with what they see.",
  "Peeves, the mischievous poltergeist of Hogwarts, was unable to attend Nearly Headless Nick's Deathday Party due to his disruptive behavior.",
  "The Whomping Willow was planted after Remus Lupin's arrival at Hogwarts to provide a secret passage to the Shrieking Shack during his transformations into a werewolf.",
  "The Triwizard Tournament was discontinued for over a century due to the dangerous nature of the tasks and the high mortality rate of the participants.",
  "Thestrals are used to pull the Hogwarts carriages, but they are invisible to most people, leading some students to believe the carriages move on their own.",
  "The Forbidden Forest is home to many magical creatures, including centaurs, unicorns, and Acromantulas.",
  "The Hogwarts House Elves, such as Dobby and Winky, are fiercely loyal to their masters but can also be freed if presented with clothes.",
  "The Hogwarts founders were Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and Salazar Slytherin, each representing different values and virtues.",
];

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

//light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 10, 10);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Get the elements
const playButton = document.getElementById("play-button");
const magicalText = document.getElementById("magical-text");
const bookBtn = document.getElementById("book-btn");
const hatBtn = document.getElementById("hat-btn");
const wandBtn = document.getElementById("wand-btn");
const bottomNav = document.getElementById("bottom-nav");
const object = document.getElementById("object");
const text = document.getElementById("text");
const houseText = document.getElementById("house-text");
const houseSubText = document.getElementById("house-sub-text");
const spellText = document.getElementById("spells");
const characterSubText = document.getElementById("Character-sub-text");

// Create a loader for GLTF files
const loader = new THREE.GLTFLoader();

let hat;
loader.load(
  "hat/scene.gltf",
  function (gltf) {
    hat = gltf.scene;
    hat.scale.set(6.5, 6.5, 6.5);
    hat.position.y = -0.8;
    scene.add(hat);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let wand;
loader.load(
  "wand/scene.gltf",
  function (gltf) {
    wand = gltf.scene;
    wand.scale.set(12, 15, 15);
    wand.rotation.z = THREE.MathUtils.degToRad(-80);
    scene.add(wand);
    wand.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let book;
loader.load(
  "book/scene.gltf",
  function (gltf) {
    book = gltf.scene;
    book.scale.set(0.025, 0.025, 0.025);
    book.rotation.x = THREE.MathUtils.degToRad(90);
    book.rotation.y = THREE.MathUtils.degToRad(10);
    book.rotation.z = THREE.MathUtils.degToRad(30);
    scene.add(book);
    book.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Create particles
const particleCount = 100;
const particles = new THREE.Group();
const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

for (let i = 0; i < particleCount; i++) {
  const particle = new THREE.Mesh(particleGeometry, particleMaterial);
  particle.position.set(
    Math.random() * 10 - 5,
    Math.random() * 10,
    Math.random() * 10 - 5
  );
  particles.add(particle);
}

scene.add(particles);

// Create a renderer for rendering the wand in the object div
const objectRenderer = new THREE.WebGLRenderer({ alpha: true });
objectRenderer.setClearColor(0x000000, 0);
objectRenderer.setSize(window.innerWidth, window.innerHeight);

object.appendChild(objectRenderer.domElement);

//variables
let elapsedTime = 0;
let playClick = false;

let hatSpeed = 0.01;
let bookSpeed = 0.01;
let wandSpeed = 0.01;

let temporyTime = 0;
let tempTimeCheck = false;
let objectClick = false;
let hatOneTimeClick = true;
let bookOneTimeClick = true;

let hatClick = true;
let bookClick = false;
let wandClick = false;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update particles' positions to make them fall down
  particles.children.forEach((particle) => {
    particle.position.y -= 0.01; //falling speed
    particle.rotation.x += 0.01;
    particle.rotation.y += 0.01;

    // Reset particle position if it falls below a certain threshold
    if (particle.position.y < -5) {
      particle.position.y = Math.random() * 10;
      particle.position.x = Math.random() * 10 - 5;
      particle.position.z = Math.random() * 10 - 5;
    }
  });

  if (playClick && elapsedTime >= 10) {
    object.style.display = "block";
    bottomNav.style.display = "flex";
  }

  if (playClick) {
    elapsedTime += 0.03;
  }

  // Fluctuate the button position vertically
  playButton.style.transform = `translateY(${
    Math.sin(Date.now() * 0.002) * 10
  }px)`;

  bookBtn.style.transform = `translateY(${
    Math.sin(Date.now() * 0.0023) * 10
  }px)`;

  hatBtn.style.transform = `translateY(${Math.sin(Date.now() * 0.002) * 10}px)`;

  wandBtn.style.transform = `translateY(${
    Math.sin(Date.now() * 0.0026) * 10
  }px)`;

  book.position.y = Math.sin(Date.now() * 0.0026) * 0.1;

  if (tempTimeCheck) {
    temporyTime += 0.03;

    if (hatClick && hatOneTimeClick) {
      hatSpeed += 0.002;
    } else if (bookClick) {
      bookSpeed += 0.002;
      book.rotation.z += bookSpeed;
    } else if (wandClick) {
      wandSpeed += 0.002;
    }
  }

  if (temporyTime >= 5) {
    tempTimeCheck = false;
    temporyTime = 0;
  }

  if (
    (hatSpeed > 0.01 || bookSpeed > 0.01 || wandSpeed > 0.01) &&
    temporyTime == 0
  ) {
    if (hatClick) {
      hatSpeed -= 0.002;
      hatOneTimeClick = false;
    } else if (bookClick) {
      bookSpeed -= 0.002;
      book.rotation.z += bookSpeed;
    } else if (wandClick) {
      wandSpeed -= 0.002;
    }
  } else if (hatSpeed <= 0.01 && objectClick && hatClick && !hatOneTimeClick) {
    houseVisibility("block");
  } else if (wandSpeed <= 0.01 && objectClick && wandClick) {
    spellVisibility("block");
  } else if (bookSpeed <= 0.01 && objectClick && bookClick) {
    characterVisibility("block");
    book.rotation.x = THREE.MathUtils.degToRad(90);
    book.rotation.y = THREE.MathUtils.degToRad(10);
    book.rotation.z = THREE.MathUtils.degToRad(30);
  }

  hat.rotation.y += hatSpeed;

  wand.rotation.y += wandSpeed;

  // Render the scene
  renderer.render(scene, camera);
  objectRenderer.render(scene, camera); // Render the scene with the hat in the object div
}

//btn functions

playButton.addEventListener("click", function () {
  playButton.style.display = "none";
  magicalText.style.display = "block";

  playClick = true;
});

bookBtn.addEventListener("click", function () {
  transitionObjects(book);
});

hatBtn.addEventListener("click", function () {
  transitionObjects(hat);
});

wandBtn.addEventListener("click", function () {
  transitionObjects(wand);
});

object.addEventListener("click", function () {
  tempTimeCheck = true;
  objectClick = true;
  if (hatOneTimeClick && hatClick) {
    houseText.textContent = randomHouse();
  } else if (wandClick) {
    spellVisibility("none");
    spellText.textContent = randomSpells();
  } else if (bookClick) {
    characterVisibility("none");
    characterSubText.textContent = randomCharacter();
  }
});

function transitionObjects(selectedObject) {
  book.visible = false;
  hat.visible = false;
  wand.visible = false;

  hatClick = false;
  bookClick = false;
  wandClick = false;

  if (selectedObject == book) {
    bookClick = true;
  } else if (selectedObject == hat) {
    hatClick = true;
  } else {
    wandClick = true;
  }

  //resets
  tempTimeCheck = false;
  hatSpeed = 0.01;
  bookSpeed = 0.01;
  wandSpeed = 0.01;
  temporyTime = 0;
  houseVisibility("none");
  spellVisibility("none");
  characterVisibility("none");

  selectedObject.visible = true;

  if (selectedObject == hat && !hatOneTimeClick) {
    houseVisibility("block");
  }
}

function houseVisibility(state) {
  text.style.display = state;
  houseSubText.style.display = state;
  houseText.style.display = state;
}

function spellVisibility(state) {
  text.style.display = state;
  spellText.style.display = state;
}

function characterVisibility(state) {
  text.style.display = state;
  characterSubText.style.display = state;
}

function randomHouse() {
  var index = Math.floor(Math.random() * 4);
  return houses[index];
}

function randomSpells() {
  var index = Math.floor(Math.random() * 15);
  return spells[index];
}

function randomCharacter() {
  var index = Math.floor(Math.random() * 39);
  return lesserKnownDetails[index];
}
animate();
