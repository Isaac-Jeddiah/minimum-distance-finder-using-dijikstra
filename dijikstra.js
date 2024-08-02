const cities = {
    "Ariyalur": { "Perambalur": 35, "Thanjavur": 45, "Cuddalore": 100, "Tiruchirappalli": 60, "Villupuram": 110 },
    "Chengalpattu": { "Chennai": 55, "Kanchipuram": 40, "Villupuram": 95, "Tiruvannamalai": 120, "Vellore": 100 },
    "Chennai": { "Chengalpattu": 55, "Kanchipuram": 75, "Tiruvallur": 45, "Vellore": 140, "Villupuram": 165 },
    "Coimbatore": { "Erode": 100, "Tiruppur": 55, "Salem": 160, "The Nilgiris": 90, "Karur": 130 },
    "Cuddalore": { "Villupuram": 40, "Nagapattinam": 145, "Ariyalur": 100, "Thanjavur": 110, "Tiruvannamalai": 120 },
    "Dharmapuri": { "Krishnagiri": 45, "Salem": 70, "Tiruvannamalai": 110, "Vellore": 130, "Erode": 120 },
    "Dindigul": { "Madurai": 65, "Theni": 75, "Karur": 95, "Tiruchirappalli": 105, "Virudhunagar": 90 },
    "Erode": { "Coimbatore": 100, "Salem": 65, "Karur": 60, "Namakkal": 85, "Tiruppur": 50 },
    "Kallakurichi": { "Villupuram": 60, "Salem": 110, "Tiruvannamalai": 85, "Cuddalore": 100, "Perambalur": 120 },
    "Kancheepuram": { "Chennai": 75, "Chengalpattu": 40, "Vellore": 95, "Tiruvallur": 60, "Villupuram": 90 },
    "Karur": { "Tiruchirappalli": 80, "Erode": 60, "Dindigul": 95, "Namakkal": 35, "Salem": 70 },
    "Krishnagiri": { "Dharmapuri": 45, "Vellore": 130, "Tirupathur": 60, "Salem": 90, "Tiruvannamalai": 120 },
    "Madurai": { "Dindigul": 65, "Sivagangai": 50, "Theni": 75, "Virudhunagar": 45, "Tiruchirappalli": 135 },
    "Mayiladuthurai": { "Nagapattinam": 50, "Thanjavur": 70, "Tiruvarur": 40, "Cuddalore": 95, "Kumbakonam": 30 },
    "Nagapattinam": { "Mayiladuthurai": 50, "Thanjavur": 85, "Tiruvarur": 30, "Cuddalore": 145, "Karaikal": 20 },
    "Kanniyakumari": { "Tirunelveli": 85, "Thoothukudi": 120, "Madurai": 245, "Nagercoil": 20, "Thiruvananthapuram": 90 },
    "Namakkal": { "Salem": 55, "Karur": 35, "Erode": 85, "Tiruchirappalli": 85, "Dindigul": 105 },
    "Perambalur": { "Ariyalur": 35, "Tiruchirappalli": 60, "Villupuram": 110, "Salem": 120, "Kallakurichi": 120 },
    "Pudukottai": { "Tiruchirappalli": 70, "Sivagangai": 55, "Thanjavur": 90, "Madurai": 115, "Ramanathapuram": 130 },
    "Ramanathapuram": { "Thoothukudi": 110, "Sivagangai": 85, "Madurai": 120, "Pudukottai": 130, "Tirunelveli": 140 },
    "Ranipet": { "Vellore": 25, "Tiruvannamalai": 85, "Kanchipuram": 60, "Chennai": 110, "Chittoor": 70 },
    "Salem": { "Erode": 65, "Dharmapuri": 70, "Namakkal": 55, "Karur": 70, "Coimbatore": 160 },
    "Sivagangai": { "Madurai": 50, "Ramanathapuram": 85, "Pudukottai": 55, "Virudhunagar": 75, "Tiruchirappalli": 105 },
    "Tenkasi": { "Tirunelveli": 55, "Thoothukudi": 95, "Madurai": 160, "Virudhunagar": 130, "Sivakasi": 100 },
    "Thanjavur": { "Tiruvarur": 55, "Nagapattinam": 85, "Pudukottai": 90, "Ariyalur": 45, "Mayiladuthurai": 70 },
    "Theni": { "Madurai": 75, "Dindigul": 75, "Virudhunagar": 95, "Bodinayakkanur": 16, "Cumbum": 30 },
    "Thiruvallur": { "Chennai": 45, "Kanchipuram": 60, "Vellore": 110, "Chittoor": 90, "Arakkonam": 20 },
    "Thiruvarur": { "Thanjavur": 55, "Nagapattinam": 30, "Mayiladuthurai": 40, "Kumbakonam": 40, "Cuddalore": 110 },
    "Thoothukudi": { "Tirunelveli": 50, "Ramanathapuram": 110, "Virudhunagar": 95, "Kanniyakumari": 120, "Madurai": 150 },
    "Tiruchirappalli": { "Karur": 80, "Thanjavur": 55, "Pudukottai": 70, "Dindigul": 105, "Namakkal": 85 },
    "Tirunelveli": { "Thoothukudi": 50, "Kanniyakumari": 85, "Tenkasi": 55, "Madurai": 160, "Virudhunagar": 130 },
    "Tirupathur": { "Krishnagiri": 60, "Vellore": 85, "Dharmapuri": 95, "Salem": 120, "Tiruvannamalai": 110 },
    "Tiruppur": { "Coimbatore": 55, "Erode": 50, "Salem": 140, "Karur": 100, "The Nilgiris": 120 },
    "Tiruvannamalai": { "Vellore": 85, "Villupuram": 65, "Krishnagiri": 120, "Chengalpattu": 120, "Ranipet": 85 },
    "The Nilgiris": { "Coimbatore": 90, "Erode": 150, "Tiruppur": 120, "Mysore": 125, "Gudalur": 50 },
    "Vellore": { "Ranipet": 25, "Tiruvannamalai": 85, "Krishnagiri": 130, "Chennai": 140, "Chittoor": 40 },
    "Viluppuram": { "Tiruvannamalai": 65, "Cuddalore": 40, "Kallakurichi": 60, "Chengalpattu": 95, "Chennai": 165 },
    "Virudhunagar": { "Thoothukudi": 95, "Madurai": 45, "Sivagangai": 75, "Tenkasi": 130, "Tirunelveli": 130 }
};



class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function dijkstra(source, cities) {
    const distances = {};
    const prev = {};
    const pq = new PriorityQueue();

    for (let city in cities) {
        distances[city] = Infinity;
        prev[city] = null;
    }
    distances[source] = 0;
    pq.enqueue(source, 0);

    while (!pq.isEmpty()) {
        const { element: currentCity } = pq.dequeue();

        for (let neighbor in cities[currentCity]) {
            const newDist = distances[currentCity] + cities[currentCity][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                prev[neighbor] = currentCity;
                pq.enqueue(neighbor, newDist);
            }
        }
    }

    return { distances, prev };
}

function findAllPaths(source, destination, cities) {
    const paths = [];
    const visited = new Set();

    function dfs(currentCity, path, cost) {
        if (currentCity === destination) {
            paths.push({ path: [...path], cost });
            return;
        }

        visited.add(currentCity);

        for (let neighbor in cities[currentCity]) {
            if (!visited.has(neighbor)) {
                path.push([currentCity, neighbor]);
                dfs(neighbor, path, cost + cities[currentCity][neighbor]);
                path.pop();
            }
        }

        visited.delete(currentCity);
    }

    dfs(source, [], 0);
    return paths;
}

function findMinimumCostPath(source, destination, cities) {
    const { distances, prev } = dijkstra(source, cities);
    const allPaths = findAllPaths(source, destination, cities);
    if (allPaths.length === 0) return { minCost: Infinity, minPath: [] };

    let minCost = Infinity;
    let minPath = [];

    for (let { path, cost } of allPaths) {
        if (cost < minCost) {
            minCost = cost;
            minPath = path;
        }
    }

    return {  minPath };
}

//const result=findMinimumCostPath('Chennai','Madurai',cities)
console.log(result)
const result="hi"
localStorage.setItem('result',result)