
function findPath() {
const source=localStorage.getItem('source')
const destination =localStorage.getItem('destination')
    
    const resultBox = document.getElementById('result');

   

    const path = dijkstra(source, destination);
    if (path.length === 0) {
        resultBox.innerHTML = "No path found.";
    } else {
        let result = "";
        for (let i = 0; i < path.length - 1; i++) {
            result += `${path[i]} -> ${cities[path[i]][path[i + 1]]}km -> `;
        }
        result += path[path.length - 1];
        resultBox.innerHTML = result;
    }
}