const planets = [
    {
        id: 1,
        name: "Mercury",
        size: 4_879,
        distanceFromSun: 57_900_000
    },
    {
        id: 2,
        name: "Venus",
        size: 12_104,
        distanceFromSun: 108_200_000
    },
    {
        id: 3,
        name: "Earth",
        size: 12_756,
        distanceFromSun: 149_600_000
    },
    {
        id: 4,
        name: "Mars",
        size: 6_792,
        distanceFromSun: 227_900_000
    },
    {
        id: 5,
        name: "Jupiter",
        size: 142_984,
        distanceFromSun: 778_600_000
    },
    {
        id: 6,
        name: "Saturn",
        size: 120_536,
        distanceFromSun: 1_433_500_000
    },
    {
        id: 7,
        name: "Uranus",
        size: 51_118,
        distanceFromSun: 2_872_500_000
    },
    {
        id: 8,
        name: "Neptune",
        size: 49_528,
        distanceFromSun: 4_495_100_000
    },
    {
        id: 9,
        name: "Pluto",
        size: 0.0146,
        distanceFromSun: 5_906_400
    }
]

const allPlanets = async (req, res, next) => {
    if (planets) {
        return res.status(200).json(planets)
    }
    else {
        return res.status(500).json("Server is not running properly")
    }
};

const addPlanet = async (req, res, next) => {
    const body = req.body
    const newPlanet = {
        id: planets.length + 1,
        name: body.name,
        size: body.size,
        distanceFromSun: body.distanceFromSun
    }
    if (planets.find(element => element.name == newPlanet.name)) {
        return res.status(409).json("Planet already exist.")
    }
    else if (newPlanet.id === "" || newPlanet.name === "" || newPlanet.size === "" || newPlanet.distanceFromSun === "") {
        return res.status(400).json("invalid input, object invalid.")
    }
    else {
        planets.push(newPlanet)
        return res.status(200).json("Planet created Master.")
    }
};

const getPlanetById = async (req, res, next) => {
    const id = +req.params.id
    const planet = planets.find((planet) => planet.id == id)
    if (planet) {
        return res.status(200).json(planet)
    }
    else {
        return res.status(400).json("Not Found. Index out of bound")
    }
};


const updatePlane = async (req, res, next) => {
    const body = req.body
    const result = planets.find(planet => planet.id === planets[id])
    if (result) {
        planets.id = body.id
        planets.name = body.name
        planets.size = body.size
        planets.distanceFromSun = body.distanceFromSun
    }
    else if (body.id === "") {
        return res.status(400).json("Missing information. Bad Request.")
    }
    else {
        return res.status(500).json("Server is not working properly")
    }
};


const destroyPlane = async (req, res, next) => {
    const body = req.body
    const result = planets.find(planet => planets[id] === body.id)
    if (result) {
        // confirm("are you sure master ?!")
        delete planets[body.id]
        res.status(200).json("Planet is destroyed. Ok!")
    }
    else if (body.id === "") {
        res.status(400).json("Missing palent's ID")
    }
    else {
        res.status(500).json("Server is not working properly")
    }
};

module.exports = { allPlanets, addPlanet, getPlanetById, updatePlane, destroyPlane }