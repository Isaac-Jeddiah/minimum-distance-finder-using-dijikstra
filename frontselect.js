const cities = {
    "Ariyalur": { "Perambalur": 35, "Thanjavur": 45, "Cuddalore": 100 },
    "Chengalpattu": { "Chennai": 55, "Kanchipuram": 40, "Villupuram": 95 },
    "Chennai": { "Chengalpattu": 55, "Kanchipuram": 75, "Tiruvallur": 45 },
    "Coimbatore": { "Erode": 100, "Tiruppur": 55, "Salem": 160 },
    "Cuddalore": { "Villupuram": 40, "Nagapattinam": 145, "Ariyalur": 100 },
    "Dharmapuri": { "Krishnagiri": 45, "Salem": 70, "Tiruvannamalai": 110 },
    "Dindigul": { "Madurai": 65, "Theni": 75, "Karur": 95 },
    "Erode": { "Coimbatore": 100, "Salem": 65, "Karur": 60 },
    "Kallakurichi": { "Villupuram": 60, "Salem": 110, "Tiruvannamalai": 85 },
    "Kancheepuram": { "Chennai": 75, "Chengalpattu": 40, "Vellore": 95 },
    "Karur": { "Tiruchirappalli": 80, "Erode": 60, "Dindigul": 95 },
    "Krishnagiri": { "Dharmapuri": 45, "Vellore": 130, "Tirupathur": 60 },
    "Madurai": { "Dindigul": 65, "Sivagangai": 50, "Theni": 75 },
    "Mayiladuthurai": { "Nagapattinam": 50, "Thanjavur": 70, "Tiruvarur": 40 },
    "Nagapattinam": { "Mayiladuthurai": 50, "Thanjavur": 85, "Tiruvarur": 30 },
    "Kanniyakumari": { "Tirunelveli": 85, "Thoothukudi": 120, "Madurai": 245 },
    "Namakkal": { "Salem": 55, "Karur": 35, "Erode": 85 },
    "Perambalur": { "Ariyalur": 35, "Tiruchirappalli": 60, "Villupuram": 110 },
    "Pudukottai": { "Tiruchirappalli": 70, "Sivagangai": 55, "Thanjavur": 90 },
    "Ramanathapuram": { "Thoothukudi": 110, "Sivagangai": 85, "Madurai": 120 },
    "Ranipet": { "Vellore": 25, "Tiruvannamalai": 85, "Kanchipuram": 60 },
    "Salem": { "Erode": 65, "Dharmapuri": 70, "Namakkal": 55 },
    "Sivagangai": { "Madurai": 50, "Ramanathapuram": 85, "Pudukottai": 55 },
    "Tenkasi": { "Tirunelveli": 55, "Thoothukudi": 95, "Madurai": 160 },
    "Thanjavur": { "Tiruvarur": 55, "Nagapattinam": 85, "Pudukottai": 90 },
    "Theni": { "Madurai": 75, "Dindigul": 75, "Virudhunagar": 95 },
    "Thiruvallur": { "Chennai": 45, "Kanchipuram": 60, "Vellore": 110 },
    "Thiruvarur": { "Thanjavur": 55, "Nagapattinam": 30, "Mayiladuthurai": 40 },
    "Thoothukudi": { "Tirunelveli": 50, "Ramanathapuram": 110, "Virudhunagar": 95 },
    "Tiruchirappalli": { "Karur": 80, "Thanjavur": 55, "Pudukottai": 70 },
    "Tirunelveli": { "Thoothukudi": 50, "Kanniyakumari": 85, "Tenkasi": 55 },
    "Tirupathur": { "Krishnagiri": 60, "Vellore": 85, "Dharmapuri": 95 },
    "Tiruppur": { "Coimbatore": 55, "Erode": 50, "Salem": 140 },
    "Tiruvannamalai": { "Vellore": 85, "Villupuram": 65, "Krishnagiri": 120 },
    "The Nilgiris": { "Coimbatore": 90, "Erode": 150, "Tiruppur": 120 },
    "Vellore": { "Ranipet": 25, "Tiruvannamalai": 85, "Krishnagiri": 130 },
    "Viluppuram": { "Tiruvannamalai": 65, "Cuddalore": 40, "Kallakurichi": 60 },
    "Virudhunagar": { "Thoothukudi": 95, "Madurai": 45, "Sivagangai": 75 }
};

        document.addEventListener('DOMContentLoaded', () => {
            const sourceSelect = document.getElementById('source');
            const destinationSelect = document.getElementById('destination');

            for (const city in cities) {
                const option1 = document.createElement('option');
                option1.value = city;
                option1.textContent = city;
                sourceSelect.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = city;
                option2.textContent = city;
                destinationSelect.appendChild(option2);
            }
        });

        // Handle button click
        document.getElementById('submit-btn').addEventListener('click', () => {
            const source = document.getElementById('source').value;
            const destination = document.getElementById('destination').value;

            // if (source === destination) {
            //     alert("Source and destination cannot be the same.");
            //     return;
            // }
            
            // Redirect to the graph view with parameters
            const url = `index.html`;
            //window.location.href = url;
        });
        