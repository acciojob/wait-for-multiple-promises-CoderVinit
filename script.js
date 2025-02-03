
    const tableBody = document.getElementById("output");

    // Initially, add a row that says "Loading..."
    const loadingRow = document.createElement("tr");
    loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
    tableBody.appendChild(loadingRow);

    function createRandomPromise(index) {
        const time = Math.random() * (3 - 1) + 1; // Random time between 1 and 3 seconds
        return new Promise((resolve) => {
            setTimeout(() => resolve({ index, time: time.toFixed(0) }), time * 1000);
        });
    }


    const startTime = performance.now();

    Promise.all([createRandomPromise(1),createRandomPromise(2),createRandomPromise(3)]).then((results) => {
        // Remove loading row
        tableBody.innerHTML = "";

        results.forEach(({ index, time }) => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>Promise ${index}</td><td>${time}</td>`;
            tableBody.appendChild(row);
        });

        // Calculate total time taken
        const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
        tableBody.appendChild(totalRow);
    });
