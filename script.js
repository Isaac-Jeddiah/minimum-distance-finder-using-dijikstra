//road distances

const roadDistances = {
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

































const cities = {
    "Ariyalur": { "Perambalur": 35, "Thanjavur": 45, "Cuddalore": 100, "Tiruchirappalli": 60, "Villupuram": 110 },
    "Chengalpattu": { "Chennai": 55, "Kanchipuram": 40, "Villupuram": 95, "Tiruvannamalai": 120, "Vellore": 100 },
    "Chennai": { "Chengalpattu": 55, "Kanchipuram": 75, "Tiruvallur": 45, "Vellore": 140, "Villupuram": 165,"Cuddalore":174 ,"Ranipet":115},
    "Coimbatore": { "Erode": 100, "Tiruppur": 55, "Salem": 160, "The Nilgiris": 90, "Karur": 130 },
    "Cuddalore": { "Villupuram": 40,"Mayiladuthurai":83, "Nagapattinam": 145, "Ariyalur": 100, "Thanjavur": 110, "Tiruvannamalai": 120,"Chennai":174 },
    "Dharmapuri": { "Krishnagiri": 45, "Salem": 70, "Tiruvannamalai": 110, "Vellore": 130, "Erode": 120 },
    "Dindigul": { "Madurai": 65, "Theni": 75, "Karur": 95, "Tiruchirappalli": 105, "Virudhunagar": 90 },
    "Erode": { "Coimbatore": 100, "Salem": 65, "Karur": 60, "Namakkal": 85, "Tiruppur": 50 },
    "Kallakurichi": { "Villupuram": 60, "Salem": 110, "Tiruvannamalai": 85, "Cuddalore": 100,"Namakkal":147, "Perambalur": 120 },
    "Kancheepuram": { "Chennai": 75, "Chengalpattu": 40, "Vellore": 95, "Tiruvallur": 60, "Villupuram": 90 },
    "Karur": { "Tiruchirappalli": 80, "Erode": 60, "Dindigul": 95, "Namakkal": 35, "Salem": 70 },
    "Krishnagiri": { "Dharmapuri": 45, "Vellore": 130, "Tirupathur": 60, "Salem": 90, "Tiruvannamalai": 120 },
    "Madurai": { "Dindigul": 65, "Sivagangai": 50, "Theni": 75, "Virudhunagar": 45, "Tiruchirappalli": 135 },
    "Mayiladuthurai": { "Nagapattinam": 50, "Thanjavur": 70,"Cuddalore":83, "Tiruvarur": 40, "Cuddalore": 95, "Kumbakonam": 30 },
    "Nagapattinam": { "Mayiladuthurai": 50, "Thanjavur": 85, "Tiruvarur": 30, "Cuddalore": 145, "Karaikal": 20 },
    "Kanniyakumari": { "Tirunelveli": 85, "Thoothukudi": 120, "Madurai": 245, "Nagercoil": 20, "Thiruvananthapuram": 90 },
    "Namakkal": { "Salem": 55, "Karur": 35, "Erode": 85, "Tiruchirappalli": 85,"Kallakurichi":147, "Dindigul": 105 },
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


function dijkstra(source, destination, cities) {
    const distances = {};
    const predecessors = {};
    const priorityQueue = new MinHeap();

    // Initialize distances and priority queue
    for (let city in cities) {
        distances[city] = Infinity;
        predecessors[city] = null;
        priorityQueue.insert(city, Infinity);
    }
    distances[source] = 0;
    priorityQueue.update(source, 0);

    while (!priorityQueue.isEmpty()) {
        const { node: currentCity } = priorityQueue.extractMin();

        if (currentCity === destination) {
            break; // We found the shortest path to the destination
        }

        for (let neighbor in cities[currentCity]) {
            const newDist = distances[currentCity] + cities[currentCity][neighbor];

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                predecessors[neighbor] = currentCity;
                priorityQueue.update(neighbor, newDist);
            }
        }
    }

    // Reconstruct the shortest path
    const path = [];
    let step = destination;
    while (step !== null) {
        path.unshift(step);
        step = predecessors[step];
    }

    return { minCost: distances[destination], minPath: path };
}

// MinHeap class for priority queue operations
class MinHeap {
    constructor() {
        this.heap = [];
        this.nodeIndices = new Map();
    }

    insert(node, priority) {
        this.heap.push({ node, priority });
        this.nodeIndices.set(node, this.heap.length - 1);
        this.bubbleUp(this.heap.length - 1);
    }

    update(node, priority) {
        const index = this.nodeIndices.get(node);
        if (index !== undefined) {
            this.heap[index].priority = priority;
            this.bubbleUp(index);
        }
    }

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.nodeIndices.set(end.node, 0);
            this.bubbleDown(0);
        }
        this.nodeIndices.delete(min.node);
        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (element.priority >= parent.priority) break;
            this.heap[index] = parent;
            this.nodeIndices.set(parent.node, index);
            index = parentIndex;
        }
        this.heap[index] = element;
        this.nodeIndices.set(element.node, index);
    }

    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swap = null;
            if (leftChildIndex < length) {
                const leftChild = this.heap[leftChildIndex];
                if (leftChild.priority < element.priority) swap = leftChildIndex;
            }
            if (rightChildIndex < length) {
                const rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < this.heap[swap].priority)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.nodeIndices.set(this.heap[index].node, index);
            index = swap;
        }
        this.heap[index] = element;
        this.nodeIndices.set(element.node, index);
    }
}
const s=localStorage.getItem('source')
const d=localStorage.getItem('destination')
//console.log(s)
const result=dijkstra(s,d,cities)
console.log(result)
const minpath=result.minPath

const minicost=result.minCost;
localStorage.setItem('minicost',minicost);











function generatePathData(cities, path) {
    const pathData = [];
    for (let i = 0; i < path.length - 1; i++) {
        const currentCity = path[i];
        const nextCity = path[i + 1];
        const distance = cities[currentCity][nextCity];
        pathData.push({ city: currentCity, distance: distance });
    }
    // Add the last city with distance 0
    pathData.push({ city: path[path.length - 1], distance: 0 });
    return pathData;
}

const path1=result.minPath;
const formattedPathData = generatePathData(cities, path1);
console.log(formattedPathData);
localStorage.setItem('formattedPathData',JSON.stringify(formattedPathData));




















// Set dimensions and projection


const width = 960;
const height = 600;

const projection = d3.geoMercator()
    .center([78.6569, 11.1271]) // Center the map on Tamil Nadu
    .scale(5000)
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

// Create SVG element
const svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

// Load and display the Tamil Nadu map with districts
d3.json("https://raw.githubusercontent.com/deva-max/d3.js-tamilnadu-data-visualization-with-PHP/main/TamilNadu.geojson").then(function(data) {
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "#69b3a2")
        .attr("stroke", "#fff");

    // Add nodes for district capitals
    const districtCapitals = [
        { name: "Ariyalur", coordinates: [79.0756, 11.1385] },
        { name: "Chengalpattu", coordinates: [79.9795, 12.6926] },
        { name: "Chennai", coordinates: [80.2707, 13.0827] },
        { name: "Coimbatore", coordinates: [76.9558, 11.0168] },
        { name: "Cuddalore", coordinates: [79.7667, 11.7480] },
        { name: "Dharmapuri", coordinates: [78.1570, 12.1277] },
        { name: "Dindigul", coordinates: [77.9803, 10.3673] },
        { name: "Erode", coordinates: [77.7274, 11.3410] },
        { name: "Kallakurichi", coordinates: [78.9630, 11.7380] },
        { name: "Kancheepuram", coordinates: [79.7036, 12.8342] },
        { name: "Karur", coordinates: [78.0817, 10.9601] },
        { name: "Krishnagiri", coordinates: [78.2144, 12.5194] },
        { name: "Madurai", coordinates: [78.1198, 9.9252] },
        { name: "Mayiladuthurai", coordinates: [79.6524, 11.1035] },
        { name: "Nagapattinam", coordinates: [79.8431, 10.7654] },
        { name: "Kanniyakumari", coordinates: [77.5385, 8.0883] },
        { name: "Namakkal", coordinates: [78.1652, 11.2182] },
        { name: "Perambalur", coordinates: [78.8765, 11.2333] },
        { name: "Pudukottai", coordinates: [78.8130, 10.3797] },
        { name: "Ramanathapuram", coordinates: [78.8372, 9.3719] },
        { name: "Ranipet", coordinates: [79.3333, 12.9333] },
        { name: "Salem", coordinates: [78.1460, 11.6643] },
        { name: "Sivagangai", coordinates: [78.4800, 9.8470] },
        { name: "Tenkasi", coordinates: [77.3152, 8.9591] },
        { name: "Thanjavur", coordinates: [79.1378, 10.7867] },
        { name: "Theni", coordinates: [77.4760, 10.0104] },
        { name: "Thiruvallur", coordinates: [79.9082, 13.1430] },
        { name: "Thiruvarur", coordinates: [79.6344, 10.7724] },
        { name: "Thoothukudi", coordinates: [78.1348, 8.7642] },
        { name: "Tiruchirappalli", coordinates: [78.7047, 10.7905] },
        { name: "Tirunelveli", coordinates: [77.7567, 8.7139] },
        { name: "Tirupathur", coordinates: [78.5653, 12.4966] },
        { name: "Tiruppur", coordinates: [77.3411, 11.1085] },
        { name: "Tiruvannamalai", coordinates: [79.0732, 12.2253] },
        { name: "The Nilgiris", coordinates: [76.7337, 11.4102] },
        { name: "Vellore", coordinates: [79.1333, 12.9165] },
        { name: "Viluppuram", coordinates: [79.4924, 11.9398] },
        { name: "Virudhunagar", coordinates: [77.9579, 9.5680] }
    ];
    

    svg.selectAll("circle")
        .data(districtCapitals)
        .enter().append("circle")
        .attr("cx", d => projection(d.coordinates)[0])
        .attr("cy", d => projection(d.coordinates)[1])
        .attr("r", 5)
        .attr("fill", "red");

    svg.selectAll("text")
        .data(districtCapitals)
        .enter().append("text")
        .attr("x", d => projection(d.coordinates)[0] + 5)
        .attr("y", d => projection(d.coordinates)[1] + 5)
        .text(d => d.name)
        .attr("font-size", "10px")
        .attr("fill", "black")
        .each(function(d, i, nodes) {
            let text = d3.select(this);
            let bbox = text.node().getBBox();
            let overlap = false;
            do {
                overlap = false;
                for (let j = 0; j < i; j++) {
                    let other = d3.select(nodes[j]);
                    let otherBBox = other.node().getBBox();
                    if (bbox.x < otherBBox.x + otherBBox.width &&
                        bbox.x + bbox.width > otherBBox.x && bbox.y < otherBBox.y + otherBBox.height  &&
                        bbox.y + bbox.height > otherBBox.y) {
                        overlap = true;
                        bbox.y -=2;
                        bbox.x -=10;
                         // Adjust the y position to avoid overlap
                        text.attr("y", bbox.y);
                        //text.attr("x",bbox.x);
                    }
                }
            } while (overlap);
        });
    


        // for (const [source, destinations] of Object.entries(roadDistances)) {
        //     const sourceCapital = districtCapitals.find(d => d.name === source);
        //     if (sourceCapital) {
        //         for (const [destination, distance] of Object.entries(destinations)) {
        //             const destinationCapital = districtCapitals.find(d => d.name === destination);
        //             if (destinationCapital) {
        //                 svg.append("line")
        //                     .attr("x1", projection(sourceCapital.coordinates)[0])
        //                     .attr("y1", projection(sourceCapital.coordinates)[1])
        //                     .attr("x2", projection(destinationCapital.coordinates)[0])
        //                     .attr("y2", projection(destinationCapital.coordinates)[1])
        //                     .attr("stroke", "blue")
        //                     .attr("stroke-width", 2);
        //             }
        //         }
        //     }
        // }
    //this is inside the map svg   
    
    

    //the result
// Assuming result is the output from findMinimumCostPath function

const minPath=minpath

// for (const [source, destinations] of Object.entries(roadDistances)) {
//     const sourceCapital = districtCapitals.find(d => d.name === source);
//     if (sourceCapital) {
//         for (const [destination, distance] of Object.entries(destinations)) {
//             const destinationCapital = districtCapitals.find(d => d.name === destination);
//             if (destinationCapital) {
//                 // Check if the current pair is in the minPath
//                 const isInMinPath = minPath.some(([src, dest]) => 
//                     (src === source && dest === destination) || 
//                     (src === destination && dest === source)
//                 );

//                 if (isInMinPath) {
//                     svg.append("line")
//                         .attr("x1", projection(sourceCapital.coordinates)[0])
//                         .attr("y1", projection(sourceCapital.coordinates)[1])
//                         .attr("x2", projection(destinationCapital.coordinates)[0])
//                         .attr("y2", projection(destinationCapital.coordinates)[1])
//                         .attr("stroke", "blue") // or "red" based on your preference
//                         .attr("stroke-width", 2);
//                 }
//             }
//         }
//     }
// }

// Iterate through the minPath to draw lines for each of cities
for (let i = 0; i < minPath.length - 1; i++) {
    const source = minPath[i];
    const destination = minPath[i + 1];

    const sourceCapital = districtCapitals.find(d => d.name === source);
    const destinationCapital = districtCapitals.find(d => d.name === destination);

    if (sourceCapital && destinationCapital) {
        svg.append("line")
            .attr("x1", projection(sourceCapital.coordinates)[0])
            .attr("y1", projection(sourceCapital.coordinates)[1])
            .attr("x2", projection(destinationCapital.coordinates)[0])
            .attr("y2", projection(destinationCapital.coordinates)[1])
            .attr("stroke", "blue") // or "red" based on your preference
            .attr("stroke-width", 2);
    }
}
    });

    







    //souce and destination here and path is got also
document.addEventListener('DOMContentLoaded', () => {
    const source = localStorage.getItem('source');
    const destination = localStorage.getItem('destination');
    
    if (source && destination) {
        //const routeInfo = document.getElementById('route-info');
        //routeInfo.textContent = `Route from ${source} to ${destination}`;

       // const shortestPath = findMinimumCostPath(source,destination,cities).minPath
        //console.log(`Shortest path: ${shortestPath.join(' -> ')}`);

        // Add your SVG drawing logic here using the shortestPath
    } else {
        console.error('Source or destination not found in localStorage');
    }
});

